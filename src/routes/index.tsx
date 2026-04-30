import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Download,
  Code2,
  Database,
  Cpu,
  Gauge,
  Layers,
  Sparkles,
  Briefcase,
  GraduationCap,
  Trophy,
  Send,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pravalika Oruganti — Software Developer" },
      {
        name: "description",
        content:
          "Full-Stack Software Developer with 2+ years building scalable web apps in React, Node.js, TypeScript and .NET.",
      },
      { property: "og:title", content: "Pravalika Oruganti — Software Developer" },
      {
        property: "og:description",
        content:
          "Full-Stack Software Developer with 2+ years building scalable web apps in React, Node.js, TypeScript and .NET.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "2+", label: "Years Experience", Icon: Briefcase },
  { value: "10+", label: "Projects Shipped", Icon: Layers },
  { value: "15+", label: "Technologies", Icon: Cpu },
  { value: "100%", label: "Clean Code", Icon: Sparkles },
];

const SERVICES = [
  {
    Icon: Code2,
    title: "Web & App Development",
    text: "Building responsive, accessible interfaces with React, TypeScript, and modern JS frameworks.",
  },
  {
    Icon: Database,
    title: "Database Management",
    text: "Designing schemas and queries across SQL, MySQL and MongoDB for reliable data flow.",
  },
  {
    Icon: Layers,
    title: "API Development",
    text: "Crafting RESTful APIs with Node.js and .NET — clean contracts, validation, and error handling.",
  },
  {
    Icon: Gauge,
    title: "Performance Optimization",
    text: "Refactoring rendering logic and backend interactions to reduce latency and improve UX.",
  },
  {
    Icon: Cpu,
    title: "Full-Stack Solutions",
    text: "End-to-end features — UI to API to database — built for scale, maintainability, and Agile teams.",
  },
  {
    Icon: Sparkles,
    title: "Code Reviews & QA",
    text: "Collaborating in code reviews, debugging, and CI/CD release processes for stable shipping.",
  },
];

const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "DXC Technology",
    period: "Nov 2021 — Nov 2023",
    bullets: [
      "Designed and enhanced web application features focused on performance and maintainability.",
      "Built and integrated RESTful APIs to support dynamic data flow across systems.",
      "Collaborated with frontend and backend teams to deliver production-ready features.",
      "Participated in Agile sprints, code reviews, and CI/CD release processes.",
      "Refactored legacy code to improve stability, readability, and efficiency.",
    ],
    stack: ["JavaScript", "React", "Node.js", ".NET", "REST APIs"],
  },
  {
    role: "Software Developer Intern",
    company: "Hyderabad, India",
    period: "May 2021 — Oct 2021",
    bullets: [
      "Assisted in developing and enhancing application modules following coding standards.",
      "Integrated REST APIs for dynamic data handling and validation.",
      "Supported testing, debugging, and structured deployment processes.",
      "Collaborated with senior developers to understand backend workflows and best practices.",
    ],
    stack: ["JavaScript", "Git", "REST APIs", "CI/CD"],
  },
];

const EDUCATION = [
  {
    period: "Jan 2024 — May 2025",
    school: "Conestoga College",
    degree: "Post Graduate Diploma in Web Development",
    location: "Ontario, Canada",
  },
  {
    period: "Jul 2017 — Aug 2021",
    school: "JNTUH",
    degree: "B.Tech in Computer Science Engineering",
    location: "Hyderabad, India",
  },
];

const SKILLS = [
  { name: "React", color: "var(--neon)" },
  { name: "TypeScript", color: "var(--violet)" },
  { name: "JavaScript", color: "var(--yellow)" },
  { name: "Node.js", color: "var(--neon)" },
  { name: "Vue.js", color: "var(--neon)" },
  { name: ".NET / C#", color: "var(--violet)" },
  { name: "HTML5", color: "var(--pink)" },
  { name: "CSS3", color: "var(--pink)" },
  { name: "REST APIs", color: "var(--yellow)" },
  { name: "MongoDB", color: "var(--neon)" },
  { name: "MySQL", color: "var(--violet)" },
  { name: "SQL", color: "var(--violet)" },
  { name: "Git", color: "var(--pink)" },
  { name: "CI/CD", color: "var(--yellow)" },
  { name: "Figma", color: "var(--pink)" },
  { name: "Agile/Scrum", color: "var(--neon)" },
];

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 space-y-24">
        <Hero />
        <Stats />
        <Services />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="grid place-items-center size-9 rounded-md bg-neon text-neon-foreground">
            <Code2 className="size-5" />
          </span>
          <span className="text-foreground">
            Pravalika<span className="text-neon">.</span>dev
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/pravalikaoruganti"
            target="_blank"
            rel="noreferrer"
            className="grid place-items-center size-9 rounded-md border border-border hover:border-neon hover:text-neon transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:Pravalikaoruganti.hsm@gmail.com"
            className="grid place-items-center size-9 rounded-md border border-border hover:border-neon hover:text-neon transition"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
          <a
            href="#"
            className="grid place-items-center size-9 rounded-md border border-border hover:border-neon hover:text-neon transition"
            aria-label="GitHub"
          >
            <Github className="size-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="pt-12 lg:pt-20">
      <div
        className="rounded-2xl border border-border bg-card/50 px-6 sm:px-10 py-12 lg:py-16 relative overflow-hidden"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center order-2 lg:order-1">
            <div className="relative">
              <div className="hex-clip overflow-hidden size-72 sm:size-96 bg-gradient-to-br from-neon/30 via-violet/20 to-pink/20 p-1 float-slow">
                <img
                  src={profile}
                  alt="Pravalika Oruganti"
                  className="hex-clip size-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 grid place-items-center size-16 rounded-2xl bg-neon text-neon-foreground glow-neon">
                <Code2 className="size-8" />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="text-sm">
              <span className="text-pink">&lt;span&gt;</span>
              <span className="text-foreground"> Hey, I&apos;m Pravalika </span>
              <span className="text-pink">&lt;/span&gt;</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-foreground">Full-Stack</span>{" "}
              <span className="text-neon">{"{Software}"}</span>{" "}
              <span className="text-foreground">Developer</span>
              <span className="caret-blink" />
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-xl">
              <span className="text-pink">&lt;p&gt;</span>
              {" "}With 2+ years building scalable, API-driven web applications using{" "}
              <span className="text-neon">React</span>,{" "}
              <span className="text-neon">Node.js</span>,{" "}
              <span className="text-neon">TypeScript</span> and{" "}
              <span className="text-neon">.NET</span>… I deliver clean, reliable,
              user-focused solutions.
              <span className="text-pink"> &lt;/p&gt;</span>
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "TypeScript", ".NET", "MongoDB"].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-md bg-secondary text-sm text-foreground border border-border"
                >
                  {s}
                </span>
              ))}
              <span className="px-3 py-1.5 text-sm text-muted-foreground">
                …and more
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/Pravalika_Oruganti_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neon text-neon-foreground font-medium hover:opacity-90 transition glow-neon"
              >
                <Download className="size-4" />
                [ Download my CV ]
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border text-foreground hover:border-neon hover:text-neon transition"
              >
                <Send className="size-4" />
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {STATS.map(({ value, label, Icon }) => (
        <div
          key={label}
          className="rounded-xl border border-border bg-card p-6 hover:border-neon transition"
        >
          <Icon className="size-6 text-neon mb-4" />
          <div className="text-3xl sm:text-4xl font-bold text-foreground">{value}</div>
          <div className="text-sm text-muted-foreground mt-1">{label}</div>
        </div>
      ))}
    </section>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: React.ReactNode }) {
  return (
    <div className="space-y-3 mb-10">
      <div className="text-xs uppercase tracking-widest text-neon">// {tag}</div>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">{title}</h2>
    </div>
  );
}

function Services() {
  return (
    <section id="services">
      <SectionHeader
        tag="services"
        title={
          <>
            Designing <span className="text-neon">solutions</span> tailored to your
            requirements
          </>
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SERVICES.map(({ Icon, title, text }) => (
          <div
            key={title}
            className="group rounded-xl border border-border bg-card p-6 hover:border-neon hover:-translate-y-1 transition"
          >
            <div className="grid place-items-center size-11 rounded-md bg-secondary text-neon mb-4 group-hover:bg-neon group-hover:text-neon-foreground transition">
              <Icon className="size-5" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="resume">
      <SectionHeader
        tag="experience"
        title={
          <>
            <span className="text-neon">2+</span> years building production web
            applications
          </>
        }
      />
      <div className="space-y-4">
        {EXPERIENCE.map((e) => (
          <div
            key={e.role + e.company}
            className="rounded-xl border border-border bg-card p-6 sm:p-8 hover:border-neon transition"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {e.role}{" "}
                  <span className="text-neon">@ {e.company}</span>
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{e.period}</p>
              </div>
              <Briefcase className="size-5 text-neon" />
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="text-neon mt-1">▸</span>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {e.stack.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 text-xs rounded-md bg-secondary text-foreground border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section>
      <SectionHeader
        tag="education"
        title={
          <>
            <span className="text-neon">Continuous</span> learning, here&apos;s the
            paper trail
          </>
        }
      />
      <div className="grid md:grid-cols-2 gap-4">
        {EDUCATION.map((ed) => (
          <div
            key={ed.school}
            className="rounded-xl border border-border bg-card p-6 hover:border-neon transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="size-6 text-neon" />
              <span className="text-xs text-muted-foreground">{ed.period}</span>
            </div>
            <h3 className="font-semibold text-foreground">{ed.degree}</h3>
            <p className="text-sm text-neon mt-1">{ed.school}</p>
            <p className="text-sm text-muted-foreground mt-1">{ed.location}</p>
          </div>
        ))}
        <div className="rounded-xl border border-border bg-card p-6 md:col-span-2 hover:border-neon transition">
          <div className="flex items-center gap-3 mb-3">
            <Trophy className="size-6 text-neon" />
            <span className="text-xs text-muted-foreground">2018</span>
          </div>
          <h3 className="font-semibold text-foreground">
            Smart India Hackathon — Participant
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            Built a web portal connecting educational orphanages with underprivileged
            children through smart-TV–based content delivery. Focused on accessibility,
            intuitive UX, and meaningful social impact.
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills">
      <SectionHeader
        tag="skills"
        title={
          <>
            My <span className="text-neon">technical</span> stack
          </>
        }
      />
      <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          {SKILLS.map((s) => (
            <span
              key={s.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-secondary border border-border hover:border-neon transition"
            >
              <span
                className="size-1.5 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-sm text-foreground">{s.name}</span>
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pt-8 border-t border-border">
          <SkillGroup title="Front-End" items="React, Vue.js, TypeScript, HTML5, CSS3" />
          <SkillGroup title="Back-End" items="Node.js, .NET, C#, REST APIs" />
          <SkillGroup title="Databases" items="SQL, MySQL, MongoDB" />
          <SkillGroup title="Tools" items="Git, CI/CD, VS Code, Figma" />
          <SkillGroup
            title="Practices"
            items="Agile/Scrum, Code Reviews, Debugging, Performance Optimization"
          />
          <SkillGroup
            title="Design"
            items="Figma, Adobe Creative Suite, Responsive Design"
          />
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-widest text-neon mb-2">
        // {title}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{items}</p>
    </div>
  );
}

function Contact() {
  return (
    <section id="contact">
      <SectionHeader
        tag="contact"
        title={
          <>
            Let&apos;s <span className="text-neon">connect</span> and build something
            great
          </>
        }
      />
      <div className="grid lg:grid-cols-3 gap-4">
        <ContactCard
          Icon={Mail}
          label="Email"
          value="Pravalikaoruganti.hsm@gmail.com"
          href="mailto:Pravalikaoruganti.hsm@gmail.com"
        />
        <ContactCard
          Icon={Phone}
          label="Phone"
          value="+1 382-885-7999"
          href="tel:+13828857999"
        />
        <ContactCard
          Icon={Linkedin}
          label="LinkedIn"
          value="/in/pravalikaoruganti"
          href="https://www.linkedin.com/in/pravalikaoruganti"
        />
      </div>

      <div className="mt-6 rounded-xl border border-border bg-card p-6 sm:p-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <MapPin className="size-5 text-neon" />
          <div>
            <p className="font-semibold text-foreground">
              Open to opportunities — Canada & remote
            </p>
            <p className="text-sm text-muted-foreground">
              I&apos;m excited to take on new projects and collaborate with great teams.
            </p>
          </div>
        </div>
        <a
          href="mailto:Pravalikaoruganti.hsm@gmail.com"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-neon text-neon-foreground font-medium hover:opacity-90 transition glow-neon"
        >
          <Send className="size-4" />
          Send a message
        </a>
      </div>
    </section>
  );
}

function ContactCard({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group rounded-xl border border-border bg-card p-6 hover:border-neon hover:-translate-y-1 transition flex items-center gap-4"
    >
      <div className="grid place-items-center size-11 rounded-md bg-secondary text-neon group-hover:bg-neon group-hover:text-neon-foreground transition">
        <Icon className="size-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground truncate">{value}</div>
      </div>
      <ExternalLink className="size-4 text-muted-foreground group-hover:text-neon" />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-foreground">Pravalika Oruganti</span>. Built with{" "}
          <span className="text-neon">React</span> +{" "}
          <span className="text-neon">TanStack</span>.
        </p>
        <p className="font-mono">
          <span className="text-pink">const</span>{" "}
          <span className="text-neon">status</span> ={" "}
          <span className="text-yellow">&quot;available_for_hire&quot;</span>;
        </p>
      </div>
    </footer>
  );
}
