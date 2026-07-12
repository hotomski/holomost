const grad = "linear-gradient(90deg, #c4b5fd, #19f0ff)";
const gradStyle: React.CSSProperties = { background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" };

const TEAM = [
  {
    name: "Sofija Hotomski",
    role: "Co-founder · CPO",
    bio: "Started her career as a software engineer before pivoting to product management and requirements engineering — the discipline of turning human needs into technology. PhD in Computer Science from the University of Zurich, where she also taught software and requirements engineering. 15 years across Schneider Electric, Siemens, and academia.",
    photo: "/images/sofija.JPG",
  },
  {
    name: "Olga Hotomski",
    role: "Co-founder · CTO",
    bio: "Enterprise technology professional with 15+ years in utilities and smart grid systems at Schneider Electric. Works on cloud-native grid intelligence platforms — the infrastructure that makes modern energy networks think. Brings the engineering depth to build systems that scale.",
    photo: "/images/olga.jpg",
  },
  {
    name: "Mirjana Hotomski",
    role: "Co-founder · Head of Learning",
    bio: "PhD in Mathematics Education from Tufts University. Researcher in technology-enhanced learning, constructivism, and curriculum design. Software developer turned education scientist — uniquely placed to design AI that doesn't just answer questions but actually helps people learn.",
    photo: "/images/mirjana.png",
  },
];

export default function HoloMostPage() {
  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 32px",
        background: "rgba(0,0,0,0.85)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", ...gradStyle }}>HoloMost</span>
        <a
          href="https://holopal.app"
          style={{
            background: "#7c3aed", color: "#fff", fontSize: 13, fontWeight: 600,
            padding: "7px 16px", borderRadius: 9, textDecoration: "none",
          }}
        >
          Try HoloPal →
        </a>
      </nav>

      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 80, paddingLeft: 24, paddingRight: 24, maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <div style={{
          display: "inline-block", fontSize: 11, fontWeight: 600, color: "#7c3aed",
          textTransform: "uppercase", letterSpacing: "0.1em",
          border: "1px solid #7c3aed44", borderRadius: 20, padding: "4px 14px", marginBottom: 28,
        }}>
          Building bridges between people and their preserved wisdom
        </div>

        <h1 style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 28 }}>
          Human knowledge<br />
          <span style={gradStyle}>shouldn't be scarce.</span>
        </h1>

        <p style={{ fontSize: 18, color: "#71717a", lineHeight: 1.75, maxWidth: 520, margin: "0 auto" }}>
          HoloMost builds technology that makes the wisdom, knowledge, and presence of remarkable people available at scale — without replacing them.
        </p>
      </section>

      {/* Mission */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{
          background: "#080808", border: "1px solid #1a1a1a", borderRadius: 24, padding: "48px 40px",
          borderLeft: "3px solid #7c3aed",
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Our mission</p>
          <p style={{ fontSize: 20, color: "#e4e4e7", lineHeight: 1.75, fontWeight: 400 }}>
            &ldquo;Most&rdquo; means bridge in Serbian. We are three sisters who believe that the most valuable thing a person can leave behind isn&apos;t money or possessions — it&apos;s how they think.
          </p>
          <p style={{ fontSize: 20, color: "#71717a", lineHeight: 1.75, fontWeight: 400, marginTop: 20 }}>
            We build bridges: between a professor and her students at 3am, between a parent and grandchildren not yet born, between an expert and everyone who needs their knowledge but can&apos;t reach them.
          </p>
        </div>
      </section>

      {/* Product */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Our product</p>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: "#e4e4e7", marginBottom: 40, letterSpacing: "-0.02em" }}>Flagship: HoloPal</h2>

        <div style={{
          background: "#080808", border: "1px solid #1a1a1a", borderRadius: 24, padding: "40px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40,
        }}>
          <div>
            <div style={{ fontSize: 36, marginBottom: 16 }}>🔮</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e4e4e7", marginBottom: 12 }}>
              Preserve how you think. Scale your wisdom. Leave more than memories.
            </h3>
            <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.75 }}>
              HoloPal lets anyone journal their knowledge, verify their AI model is accurate, and share a hologram of themselves — with their voice, their face, their thinking — with anyone who needs them.
            </p>
            <a
              href="https://holopal.app"
              style={{
                display: "inline-block", marginTop: 24,
                background: "#7c3aed", color: "#fff",
                padding: "10px 22px", borderRadius: 10,
                fontWeight: 600, fontSize: 13, textDecoration: "none",
              }}
            >
              Try HoloPal →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "📓", label: "Journal", desc: "Speak or type what you know" },
              { icon: "🪞", label: "Verify", desc: "Talk to your hologram — fix what's wrong" },
              { icon: "🔮", label: "Share", desc: "Anyone can ask you anything, anywhere" },
            ].map(({ icon, label, desc }) => (
              <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#e4e4e7", marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 12, color: "#52525b" }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>The team</p>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: "#e4e4e7", marginBottom: 12, letterSpacing: "-0.02em" }}>Three sisters. One bridge.</h2>
        <p style={{ fontSize: 15, color: "#52525b", lineHeight: 1.7, marginBottom: 40 }}>
          We built HoloMost because we wanted to preserve the voice of someone we love. We suspect we&apos;re not the only ones.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {TEAM.map(({ name, role, bio, photo }) => (
            <div key={name} style={{ background: "#080808", border: "1px solid #1a1a1a", borderRadius: 18, padding: "28px 24px" }}>
              <img src={photo} alt={name} style={{
                width: 72, height: 72, borderRadius: "50%", marginBottom: 16,
                objectFit: "cover", border: "2px solid #7c3aed44", display: "block",
              }} />
              <div style={{ fontSize: 15, fontWeight: 700, color: "#e4e4e7", marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>{role}</div>
              <div style={{ fontSize: 13, color: "#52525b", lineHeight: 1.65 }}>{bio}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#e4e4e7", marginBottom: 12 }}>Get in touch</h2>
        <p style={{ fontSize: 15, color: "#52525b", marginBottom: 28 }}>
          Investors, press, partnerships — we&apos;d love to hear from you.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
          {[
            { name: "Sofija Hotomski", email: "sofija.hotomski@holomost.com" },
            { name: "Mirjana Hotomski", email: "mirjana.hotomski@holomost.com" },
            { name: "Olga Hotomski", email: "olga.hotomski@holomost.com" },
          ].map(({ name, email }) => (
            <a key={email} href={`mailto:${email}`} style={{
              display: "flex", alignItems: "center", gap: 12,
              border: "1px solid #7c3aed55", color: "#c4b5fd",
              padding: "10px 24px", borderRadius: 12,
              fontWeight: 500, fontSize: 14, textDecoration: "none",
            }}>
              <span style={{ color: "#52525b", fontSize: 13 }}>{name}</span>
              <span>{email}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #0f0f0f", padding: "24px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 800, margin: "0 auto", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontSize: 12, color: "#3f3f46" }}>© 2026 HoloMost. All rights reserved.</span>
        <a href="https://holopal.app" style={{ fontSize: 12, color: "#3f3f46", textDecoration: "none" }}>holopal.app →</a>
      </footer>

    </div>
  );
}
