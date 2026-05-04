// Edge function: stores contact submission in DB and appends a row to a Google Sheet
// via the Lovable connector gateway.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const SHEET_ID = "1VPYLfl6Teg8LY_p_KzYt7rmeQVI4kduq9eLj5qc4YJI";
const SHEET_RANGE = "Sheet1!A:E";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

interface Payload {
  name?: string;
  email?: string;
  subject?: string | null;
  message?: string;
}

function sanitize(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const raw = (await req.json()) as Payload;
    const name = sanitize(raw.name, 100);
    const email = sanitize(raw.email, 255);
    const subject = sanitize(raw.subject ?? "", 200);
    const message = sanitize(raw.message, 5000);

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get(
      "SUPABASE_SERVICE_ROLE_KEY",
    );
    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Supabase env not configured");
    }

    // 1. Insert into database
    const dbRes = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({ name, email, subject: subject || null, message }),
    });
    if (!dbRes.ok) {
      const text = await dbRes.text();
      console.error("DB insert failed:", dbRes.status, text);
      return new Response(JSON.stringify({ error: "Failed to save" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2. Append to Google Sheet (best-effort, don't fail the whole request)
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (LOVABLE_API_KEY && GOOGLE_SHEETS_API_KEY) {
      try {
        const timestamp = new Date().toISOString();
        const url = `${GATEWAY_URL}/spreadsheets/${SHEET_ID}/values/${SHEET_RANGE}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`;
        const sheetRes = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            values: [[timestamp, name, email, subject, message]],
          }),
        });
        if (!sheetRes.ok) {
          const text = await sheetRes.text();
          console.error("Sheet append failed:", sheetRes.status, text);
        }
      } catch (e) {
        console.error("Sheet append exception:", e);
      }
    } else {
      console.warn("Google Sheets credentials missing — skipping sheet append");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("contact-submit error:", e);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
