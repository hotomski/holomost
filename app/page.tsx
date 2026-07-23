"use client";
import { useRef, useState, useEffect } from "react";
import styles from "./page.module.css";

function cx(...args: Array<string | false | undefined>) {
  return args.filter(Boolean).join(" ");
}

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

const PILLARS = [
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
];

const PRODUCT_STEPS = [
  { icon: "/images/icon-journal.svg", label: "Build", desc: "Journal your knowledge, memories, and reasoning. Ten minutes a week is enough." },
  { icon: "/images/icon-talk.svg", label: "Verify", desc: "Talk to your hologram. Correct what's wrong until it sounds like you." },
  { icon: "/images/icon-ask.svg", label: "Share", desc: "Go live in the network. Anyone you choose can have a real conversation with you." },
];

export default function HoloMostPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // React's `muted` JSX prop doesn't reliably set the underlying DOM
    // property on hydration, and browsers require that actual property
    // (not just the attribute) to be true for autoplay to be allowed.
    v.muted = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.muted = true;
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

  function toggleMute() {
    const v = videoRef.current;
    if (!v) return;
    const nextMuted = !v.muted;
    if (!nextMuted) v.currentTime = 0;
    v.muted = nextMuted;
    setMuted(nextMuted);
  }

  return (
    <div className={styles.root}>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
        rel="stylesheet"
      />

      <header className={styles.navWrap}>
        <div className={cx(styles.container, styles.nav)}>
          <a href="/" className={styles.brand}>
            <img src="/images/holomost-mark.svg" alt="HoloMost" className={styles.brandLogo} />
            <span className={styles.brandName}>HoloMost</span>
          </a>

          <nav id="navLinks" className={cx(styles.navLinks, navOpen && styles.isOpen)}>
            <a href="#demo" onClick={() => setNavOpen(false)}>Demo</a>
            <a href="#mission" onClick={() => setNavOpen(false)}>Mission</a>
            <a href="#what-you-get" onClick={() => setNavOpen(false)}>What you get</a>
            <a href="#product" onClick={() => setNavOpen(false)}>Product</a>
            <a href="#team" onClick={() => setNavOpen(false)}>Team</a>
            <a href="https://holopal.app" className={cx(styles.btn, styles.btnDark)} onClick={() => setNavOpen(false)}>Try HoloPal →</a>
          </nav>

          <button
            className={styles.navToggle}
            aria-label="Toggle menu"
            aria-expanded={navOpen}
            aria-controls="navLinks"
            onClick={() => setNavOpen((o) => !o)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <main>
        {/* ===== Hero ===== */}
        <section className={styles.container}>
          <div className={cx(styles.card, styles.heroCard, styles.noise)}>
            <span className={styles.eyebrowPill}>Building bridges between people and their preserved wisdom</span>
            <h1>Human knowledge<br />shouldn&apos;t be scarce.</h1>
            <p className={styles.heroLede}>
              HoloMost is building the first social network of digital selves — where the wisdom, knowledge, and presence of remarkable people is available to the world in their own voice, from their own face. Not posts you scroll past. Real conversations.
            </p>
          </div>
        </section>

        {/* ===== Demo ===== */}
        <section className={styles.container} id="demo">
          <span className={styles.eyebrow}>See it in action</span>
          <h2 className={styles.sectionTitle}>Watch the HoloPal demo.</h2>
          <div className={cx(styles.videoCard, styles.noise)}>
            <video
              src="/videos/demo-final.mp4"
              className={styles.videoCardVideo}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </section>

        {/* ===== Video ===== */}
        <section className={styles.container}>
          <div className={cx(styles.videoCard, styles.noise)}>
            <video
              ref={videoRef}
              src="/videos/HoloVideos.mp4"
              className={styles.videoCardVideo}
              muted
              loop
              playsInline
            />
            <button
              onClick={toggleMute}
              className={styles.videoMuteBtn}
              aria-label={muted ? "Unmute video" : "Mute video"}
            >
              {muted ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
                  <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="white" />
                </svg>
              )}
              {muted ? "Unmute" : "Mute"}
            </button>
          </div>
        </section>

        {/* ===== Mission ===== */}
        <section className={styles.container} id="mission">
          <div className={cx(styles.missionCard, styles.noise)}>
            <span className={styles.eyebrow}>Our mission</span>
            <h2 className={styles.sectionTitle}>Why we&apos;re building<br />HoloMost.</h2>
            <div className={styles.missionColumns}>
              <div>
                <p className={styles.bodyLg}>
                  &ldquo;Most&rdquo; means bridge in Serbian. We are three sisters who believe that the most valuable thing a person can leave behind isn&apos;t money or possessions — it&apos;s how they think.
                </p>
                <p className={cx(styles.bodyLg, styles.bodyMuted)}>
                  For all of human history, knowledge has traveled through proximity. You had to be in the right room, at the right time, to learn from the right person. Most of it was lost.
                </p>
              </div>
              <div>
                <p className={cx(styles.bodyLg, styles.bodyMuted)}>
                  We are the first generation with the tools to change that — AI that learns how a person thinks, voice technology that captures how they sound, animation that puts them in front of you.
                </p>
                <p className={cx(styles.bodyLg, styles.bodyMuted)}>
                  HoloMost exists to close that gap. Not by replacing people — people are irreplaceable — but by making what can be shared available at scale, and present even when you can&apos;t be in the room.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Three pillars ===== */}
        <section className={styles.container} id="what-you-get">
          <span className={styles.eyebrow}>What you get</span>
          <h2 className={styles.sectionTitle}>Three things you used to need<br />someone in the room for.</h2>
          <div className={styles.stepsGrid}>
            {PILLARS.map(({ word, body }) => (
              <div key={word} className={cx(styles.card, styles.stepCard, styles.gcard, styles.noise)}>
                <span className={styles.pill}>{word}</span>
                <div className={styles.stepBody}>
                  <h3>{word}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Product ===== */}
        <section className={styles.container} id="product">
          <span className={styles.eyebrow}>Our product</span>
          <h2 className={styles.sectionTitle}>HoloPal — the first social network<br />of digital selves.</h2>
          <div className={styles.productCard}>
            <div className={styles.productCopy}>
              <p>
                Every person on HoloPal builds a digital self — an AI trained on their own knowledge, speaking in their own cloned voice, animated with their own face.
              </p>
              <p>
                You don&apos;t scroll their posts. You have a real conversation with them. Add your GP&apos;s digital self, your professor&apos;s, your family&apos;s — and hear the answer in the voice you know, from the face you trust.
              </p>
              <a href="https://holopal.app" className={cx(styles.btn, styles.btnDark, styles.btnSm)}>Try HoloPal →</a>
            </div>
            <div className={styles.productSteps}>
              {PRODUCT_STEPS.map(({ icon, label, desc }) => (
                <div key={label} className={styles.productStep}>
                  <img src={icon} alt="" className={styles.productStepIcon} />
                  <div>
                    <h4>{label}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Team ===== */}
        <section className={styles.container} id="team">
          <span className={styles.eyebrow}>The team</span>
          <h2 className={styles.sectionTitle}>Three sisters. One bridge.</h2>
          <p className={styles.sectionSub}>
            We built HoloMost because we wanted to preserve the voice of someone we love. We suspect we&apos;re not the only ones.
          </p>
          <div className={styles.teamGrid}>
            {TEAM.map(({ name, role, bio, photo, email }) => (
              <div key={name} className={cx(styles.card, styles.teamCard, styles.noise)}>
                <img src={photo} alt={name} className={styles.teamAvatar} />
                <div className={styles.teamName}>{name}</div>
                <div className={styles.teamRole}>{role}</div>
                <div className={styles.teamBio}>{bio}</div>
                <a href={`mailto:${email}`} className={styles.teamEmail}>{email}</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer className={styles.aboutFooterBand}>
        <div className={styles.watermark} aria-hidden="true">HoloMost</div>
        <div className={cx(styles.container, styles.footerInner)}>
          <div className={styles.footer}>
            <span className={styles.footerTag}>© 2026 HoloMost. All rights reserved.</span>
            <a href="https://holopal.app">holopal.app →</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
