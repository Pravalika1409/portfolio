// Edge function: stores contact submission in DB and appends a row
// to a Google Sheet via a Google Apps Script web app.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

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

    // 2. Append to Google Sheet via Apps Script web app (best-effort)
    const GOOGLE_SCRIPT_URL = Deno.env.get("GOOGLE_SCRIPT_URL");
    if (GOOGLE_SCRIPT_URL) {
      try {
        const timestamp = new Date().toISOString();
        const sheetRes = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ timestamp, name, email, subject, message }),
        });
        if (!sheetRes.ok) {
          const text = await sheetRes.text();
          console.error("Sheet append failed:", sheetRes.status, text);
        }
      } catch (e) {
        console.error("Sheet append exception:", e);
      }
    } else {
      console.warn("GOOGLE_SCRIPT_URL not set — skipping sheet append");
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
