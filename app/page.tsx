"use client";
import { useRef, useState, useEffect } from "react";

const grad = "linear-gradient(90deg, #7c3aed, #0ea5e9)";
const gradStyle: React.CSSProperties = { background: grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" };

const TEAM = [
  {
    name: "Sofija Hotomski",
    role: "Founder & CEO",
    bio: "Started her career as a software engineer before pivoting to product management and requirements engineering — the discipline of turning human needs into technology. PhD in Computer Science from the University of Zurich, where she also taught software and requirements engineering. 15 years across Schneider Electric, Siemens, and academia.",
    photo: "/images/sofija.JPG",
    email: "sofija.hotomski@holomost.com",
  },
  {
    name: "Mirjana Hotomski",
    role: "Trusted advisor",
    bio: "Ph.D. from Tufts studying the multimodality of human thinking — how understanding lives not just in words, but in voice, gesture, and expression. Trusted advisor to HoloMost, pairing that research with 20+ years of building mission-critical enterprise systems at Verizon. That's the exact question HoloPal is built on: what makes a digital self actually feel like the person behind it.",
    photo: "/images/mirjana.png",
    email: "mirjana.hotomski@holomost.com",
  },
  {
    name: "Olga Hotomski",
    role: "Trusted advisor",
    bio: "MSc in Information Technology. Trusted advisor to HoloMost, bringing nearly 15 years of experience delivering enterprise software across engineering, project management, technical sales, and customer success at Schneider Electric. Expert at turning complex technology into scalable, customer-focused products.",
    photo: "/images/olga.jpg",
    email: "olga.hotomski@holomost.com",
  },
];

export default function HoloMostPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(v);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#fafafa", color: "#18181b", minHeight: "100vh", fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 32px",
        background: "rgba(250,250,250,0.9)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e4e4e7",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/images/logoChatGPT.png" alt="HoloMost" style={{ width: 36, height: 36, objectFit: "contain" }} />
          <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", ...gradStyle }}>HoloMost</span>
        </div>
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
          background: "#f3f0ff", borderRadius: 20, padding: "4px 14px", marginBottom: 28,
        }}>
          Building bridges between people and their preserved wisdom
        </div>

        <h1 style={{ fontSize: "clamp(36px, 5.5vw, 64px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 28, color: "#18181b" }}>
          Human knowledge<br />
          <span style={gradStyle}>shouldn&apos;t be scarce.</span>
        </h1>

        <p style={{ fontSize: 18, color: "#71717a", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
          HoloMost is building the first social network of digital selves — where the wisdom, knowledge, and presence of remarkable people is available to the world in their own voice, from their own face. Not posts you scroll past. Real conversations.
        </p>
      </section>

      {/* Video */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px" }}>
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", border: "1px solid #e4e4e7", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <video
            ref={videoRef}
            src="/videos/HoloVideos.mp4"
            muted loop playsInline
            style={{ width: "100%", display: "block" }}
          />
          <button
            onClick={() => {
              const v = videoRef.current;
              if (!v) return;
              const nextMuted = !v.muted;
              if (!nextMuted) v.currentTime = 0;
              v.muted = nextMuted;
              setMuted(nextMuted);
            }}
            style={{
              position: "absolute", bottom: 10, right: 10,
              background: "rgba(0,0,0,0.55)", backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8, padding: "4px 9px",
              color: "#fff", fontSize: 11, fontWeight: 600, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 4,
            }}
          >
            {muted ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white"/>
              </svg>
            ) : (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white"/>
                <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* Mission */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{
          background: "#fff", border: "1px solid #e4e4e7", borderRadius: 24, padding: "48px 40px",
          borderLeft: "4px solid #7c3aed",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Our mission</p>
          <p style={{ fontSize: 19, color: "#18181b", lineHeight: 1.75, fontWeight: 400 }}>
            &ldquo;Most&rdquo; means bridge in Serbian. We are three sisters who believe that the most valuable thing a person can leave behind isn&apos;t money or possessions — it&apos;s how they think.
          </p>
          <p style={{ fontSize: 19, color: "#71717a", lineHeight: 1.75, fontWeight: 400, marginTop: 20 }}>
            For all of human history, knowledge has traveled through proximity. You had to be in the right room, at the right time, to learn from the right person. Most of it was lost. We are the first generation with the tools to change that — AI that learns how a person thinks, voice technology that captures how they sound, animation that puts them in front of you.
          </p>
          <p style={{ fontSize: 19, color: "#71717a", lineHeight: 1.75, fontWeight: 400, marginTop: 20 }}>
            HoloMost exists to close that gap. Not by replacing people — people are irreplaceable — but by making what can be shared, available at scale.
          </p>
        </div>
      </section>

      {/* Three pillars */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 80px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>What you get</p>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#18181b", marginBottom: 32, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
          Three things you used to need<br />someone in the room for.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
          {[
            {
              word: "Wisdom",
              body: "How they think. The instincts built from a lifetime of experience. The intuition that tells them which detail matters — the hardest thing to put into words, and the most useful thing to have on demand.",
            },
            {
              word: "Knowledge",
              body: "What they know. Forty years of patients. Every student they've helped. A lifetime of learning, available to anyone who asks — any hour, not just when there's time.",
            },
            {
              word: "Presence",
              body: "Their voice. Their face. The feeling of being in a real conversation with someone who knows. Presence is what makes knowledge feel safe to trust — now available whenever you need it.",
            },
          ].map(({ word, body }, i) => (
            <div key={word} style={{
              background: "#fff", border: "1px solid #e4e4e7", borderRadius: 18, padding: "28px 24px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: 10,
                background: i === 0 ? "#7c3aed" : i === 1 ? grad : "#0ea5e9",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              }}>
                {`0${i + 1}`}
              </div>
              <div style={{ fontSize: 20, fontWeight: 800, color: "#18181b", marginBottom: 12, letterSpacing: "-0.02em" }}>{word}</div>
              <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.75 }}>{body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Our product</p>
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#18181b", marginBottom: 32, letterSpacing: "-0.02em", lineHeight: 1.2 }}>HoloPal — the first social network<br />of digital selves.</h2>

        <div style={{
          background: "#fff", border: "1px solid #e4e4e7", borderRadius: 24, padding: "40px",
          display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}>
          <div>
            <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.8, marginBottom: 20 }}>
              Every person on HoloPal builds a digital self — an AI trained on their own knowledge, speaking in their own cloned voice, animated with their own face.
            </p>
            <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.8, marginBottom: 24 }}>
              You don&apos;t scroll their posts. You have a real conversation with them. Add your GP&apos;s digital self, your professor&apos;s, your family&apos;s — and hear the answer in the voice you know, from the face you trust.
            </p>
            <a
              href="https://holopal.app"
              style={{
                display: "inline-block",
                background: "#7c3aed", color: "#fff",
                padding: "10px 22px", borderRadius: 10,
                fontWeight: 600, fontSize: 13, textDecoration: "none",
              }}
            >
              Try HoloPal →
            </a>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { icon: "📓", label: "Build", desc: "Journal your knowledge, memories, and reasoning. Ten minutes a week is enough." },
              { icon: "🪞", label: "Verify", desc: "Talk to your hologram. Correct what's wrong until it sounds like you." },
              { icon: "🔮", label: "Share", desc: "Go live in the network. Anyone you choose can have a real conversation with you." },
            ].map(({ icon, label, desc }) => (
              <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#18181b", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 12, color: "#71717a", lineHeight: 1.65 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px 100px" }}>
        <p style={{ fontSize: 11, fontWeight: 600, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>The team</p>
        <h2 style={{ fontSize: 32, fontWeight: 700, color: "#18181b", marginBottom: 12, letterSpacing: "-0.02em" }}>Three sisters. One bridge.</h2>
        <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.7, marginBottom: 40 }}>
          We built HoloMost because we wanted to preserve the voice of someone we love. We suspect we&apos;re not the only ones.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
          {TEAM.map(({ name, role, bio, photo, email }) => (
            <div key={name} style={{
              background: "#fff", border: "1px solid #e4e4e7", borderRadius: 18, padding: "28px 24px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}>
              <img src={photo} alt={name} style={{
                width: 72, height: 72, borderRadius: "50%", marginBottom: 16,
                objectFit: "cover", border: "3px solid #f3f0ff", display: "block",
              }} />
              <div style={{ fontSize: 15, fontWeight: 700, color: "#18181b", marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>{role}</div>
              <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65, marginBottom: 14 }}>{bio}</div>
              <a href={`mailto:${email}`} style={{ fontSize: 12, color: "#7c3aed", textDecoration: "none" }}>{email}</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #e4e4e7", padding: "24px 32px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        maxWidth: 800, margin: "0 auto", flexWrap: "wrap", gap: 12,
      }}>
        <span style={{ fontSize: 12, color: "#a1a1aa" }}>© 2026 HoloMost. All rights reserved.</span>
        <a href="https://holopal.app" style={{ fontSize: 12, color: "#a1a1aa", textDecoration: "none" }}>holopal.app →</a>
      </footer>

    </div>
  );
}
