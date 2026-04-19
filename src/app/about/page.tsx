import Link from "next/link";

const team = [
  {
    name: "Mark Merlene",
    role: "Co-Founder & CEO",
    desc: "Visionary leader with deep expertise in AI strategy and business transformation. Mark drives Epistemi's mission to make artificial intelligence accessible and impactful for every business.",
    initials: "MM",
    color: "linear-gradient(135deg, #7c3aed, #2563eb)",
  },
  {
    name: "David Merlene",
    role: "Co-Founder & CTO",
    desc: "Technical architect and AI innovator. David leads the development of cutting-edge AI solutions, ensuring every product is built with precision, scalability, and real-world impact.",
    initials: "DM",
    color: "linear-gradient(135deg, #2563eb, #0891b2)",
  },
  {
    name: "The Epistemi Team",
    role: "Specialists & Innovators",
    desc: "A powerhouse collective of AI engineers, data scientists, UX designers, and business strategists — all united by a shared passion for building the future with intelligence.",
    initials: "AI",
    color: "linear-gradient(135deg, #059669, #0891b2)",
  },
];

const values = [
  { icon: "💡", title: "Innovation First", desc: "We push the boundaries of what's possible with AI, constantly exploring new frontiers." },
  { icon: "🤝", title: "Client Partnership", desc: "Your success is our mission. We work alongside you as a true partner, not just a vendor." },
  { icon: "🎯", title: "Results Driven", desc: "Every solution we build is measured by the tangible impact it creates for your business." },
  { icon: "🔒", title: "Trust & Integrity", desc: "We operate with full transparency, honesty, and ethical AI practices — always." },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: "100px 24px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div
          style={{
            position: "absolute", top: "30%", left: "50%", transform: "translateX(-50%)",
            width: 500, height: 300, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 800, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 100,
              background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
              color: "#a78bfa", fontSize: 13, fontWeight: 500, marginBottom: 24,
            }}
          >
            About Epistemi
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 800, color: "#fff", marginBottom: 24, lineHeight: 1.1 }}>
            We Believe AI Should Work{" "}
            <span className="gradient-text">For Everyone</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, lineHeight: 1.8, maxWidth: 620, margin: "0 auto" }}>
            Epistemi was founded on a simple but powerful idea: artificial intelligence shouldn&apos;t be reserved for
            tech giants. Every business — regardless of size — deserves access to the transformative power of AI.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "60px 24px" }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24,
          }}
        >
          {[
            {
              icon: "🚀",
              title: "Our Mission",
              body: "To democratize AI by delivering powerful, practical, and personalized solutions that drive real business results — making the impossible, imaginable.",
            },
            {
              icon: "🌟",
              title: "Our Vision",
              body: "A world where every business harnesses the full potential of AI to solve problems, accelerate growth, and create meaningful impact.",
            },
            {
              icon: "🧠",
              title: "Our Approach",
              body: "We don't just build technology — we build understanding. We partner deeply with clients to ensure AI integrates naturally into their world.",
            },
          ].map((item) => (
            <div key={item.title} className="glass" style={{ borderRadius: 20, padding: 36 }}>
              <div style={{ fontSize: 32, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{item.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7, fontSize: 15 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17 }}>
              The minds behind Epistemi — passionate, driven, and ready to build your future.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {team.map((member) => (
              <div
                key={member.name}
                className="glass glass-hover"
                style={{ borderRadius: 24, padding: 40, textAlign: "center" }}
              >
                <div
                  style={{
                    width: 88, height: 88, borderRadius: "50%",
                    background: member.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 24px",
                    fontSize: 28, fontWeight: 800, color: "#fff",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  {member.initials}
                </div>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 6 }}>{member.name}</h3>
                <div
                  style={{
                    display: "inline-block", padding: "4px 14px", borderRadius: 100,
                    background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)",
                    color: "#a78bfa", fontSize: 12, fontWeight: 500, marginBottom: 16,
                  }}
                >
                  {member.role}
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {values.map((v) => (
              <div key={v.title} className="glass" style={{ borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 28, marginBottom: 14 }}>{v.icon}</div>
                <h4 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{v.title}</h4>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
          Ready to Work With Us?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 32 }}>
          Let&apos;s start a conversation about what AI can do for you.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contact" className="btn-primary">Contact Us</Link>
          <Link href="/ideas" className="btn-outline">Share an Idea</Link>
        </div>
      </section>
    </div>
  );
}
