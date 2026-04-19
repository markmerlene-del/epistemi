import Link from "next/link";

const services = [
  {
    icon: "🤖",
    title: "AI Consulting",
    tagline: "Strategy & Roadmap",
    color: "linear-gradient(135deg, #7c3aed, #2563eb)",
    desc: "We analyze your business, processes, and goals to create a clear, actionable AI roadmap. Our consultants identify the highest-impact opportunities and guide you through implementation.",
    features: [
      "AI readiness assessment",
      "Technology roadmap design",
      "ROI analysis & projection",
      "Change management support",
      "Vendor & tool selection",
    ],
  },
  {
    icon: "⚙️",
    title: "AI Development",
    tagline: "Custom Build & Integration",
    color: "linear-gradient(135deg, #2563eb, #0891b2)",
    desc: "From concept to deployment, we engineer bespoke AI solutions. Whether it's a conversational AI, predictive model, or intelligent automation — we build it to fit your exact needs.",
    features: [
      "Custom ML model development",
      "Natural language processing (NLP)",
      "Computer vision solutions",
      "API & system integration",
      "Ongoing maintenance & support",
    ],
  },
  {
    icon: "🛠️",
    title: "AI Tools & Automation",
    tagline: "Productivity & Efficiency",
    color: "linear-gradient(135deg, #059669, #0891b2)",
    desc: "Deploy powerful AI tools that eliminate manual work and unlock new productivity. From intelligent document processing to smart scheduling — we automate what slows you down.",
    features: [
      "Workflow automation",
      "Intelligent document processing",
      "AI-powered chatbots",
      "Data extraction & analysis",
      "Reporting dashboards",
    ],
  },
  {
    icon: "📊",
    title: "Data Intelligence",
    tagline: "Insights & Analytics",
    color: "linear-gradient(135deg, #d97706, #dc2626)",
    desc: "Turn your data into a competitive advantage. We build intelligent analytics pipelines that surface insights, predict trends, and help you make smarter decisions — faster.",
    features: [
      "Predictive analytics",
      "Business intelligence dashboards",
      "Data pipeline design",
      "Anomaly detection",
      "Customer behavior modeling",
    ],
  },
  {
    icon: "💬",
    title: "Conversational AI",
    tagline: "Chatbots & Virtual Assistants",
    color: "linear-gradient(135deg, #7c3aed, #ec4899)",
    desc: "Engage customers and employees 24/7 with intelligent conversational agents. We build chatbots and virtual assistants that understand context, learn over time, and deliver real value.",
    features: [
      "Customer service bots",
      "Internal knowledge assistants",
      "Voice AI integration",
      "Multi-platform deployment",
      "Training & optimization",
    ],
  },
  {
    icon: "🔮",
    title: "Process Automation",
    tagline: "Streamline & Scale",
    color: "linear-gradient(135deg, #2563eb, #7c3aed)",
    desc: "Reimagine your business processes with AI-powered automation. We identify bottlenecks, design smart workflows, and deploy systems that operate with minimal human intervention.",
    features: [
      "End-to-end process mapping",
      "RPA with AI enhancement",
      "Smart form & document handling",
      "Approval workflow automation",
      "Real-time monitoring",
    ],
  },
];

const process = [
  { num: "01", title: "Discovery", desc: "We learn your business, goals, and challenges through deep discovery sessions." },
  { num: "02", title: "Strategy", desc: "We craft a tailored AI roadmap and solution architecture for your needs." },
  { num: "03", title: "Build", desc: "Our engineers develop and rigorously test your custom AI solution." },
  { num: "04", title: "Deploy", desc: "We launch, integrate, and optimize — ensuring seamless adoption." },
];

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: "100px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div
          style={{
            position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)",
            width: 600, height: 300,
            background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 100,
              background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
              color: "#a78bfa", fontSize: 13, fontWeight: 500, marginBottom: 24,
            }}
          >
            Our Services
          </div>
          <h1 style={{ fontSize: "clamp(36px, 5vw, 60px)", fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.1 }}>
            AI Solutions Built for{" "}
            <span className="gradient-text">Real Results</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.8 }}>
            From strategy to execution, we offer a full spectrum of AI services designed to transform
            your operations and accelerate growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: "60px 24px 100px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} className="glass glass-hover" style={{ borderRadius: 24, padding: 40 }}>
                <div
                  style={{
                    width: 64, height: 64, borderRadius: 16,
                    background: s.color, display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: 28, marginBottom: 24,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                  }}
                >
                  {s.icon}
                </div>
                <div
                  style={{
                    display: "inline-block", padding: "3px 12px", borderRadius: 100,
                    background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)",
                    color: "#a78bfa", fontSize: 11, fontWeight: 600, letterSpacing: "0.05em",
                    textTransform: "uppercase", marginBottom: 12,
                  }}
                >
                  {s.tagline}
                </div>
                <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 14 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{s.desc}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>
                      <span
                        style={{
                          width: 18, height: 18, borderRadius: "50%",
                          background: "rgba(139,92,246,0.2)", display: "flex",
                          alignItems: "center", justifyContent: "center", fontSize: 10, flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "80px 24px", background: "rgba(255,255,255,0.02)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
              How We <span className="gradient-text">Work</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17 }}>
              A proven process that delivers results every time.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {process.map((p, i) => (
              <div key={p.num} style={{ position: "relative" }}>
                <div className="glass" style={{ borderRadius: 18, padding: 28, height: "100%" }}>
                  <div
                    style={{
                      fontSize: 48, fontWeight: 900, lineHeight: 1,
                      background: "linear-gradient(135deg, rgba(139,92,246,0.3), rgba(59,130,246,0.3))",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                      marginBottom: 16,
                    }}
                  >
                    {p.num}
                  </div>
                  <h4 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{p.title}</h4>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
                {i < process.length - 1 && (
                  <div
                    style={{
                      position: "absolute", top: "50%", right: -12,
                      transform: "translateY(-50%)",
                      color: "rgba(139,92,246,0.4)", fontSize: 20, zIndex: 1,
                      display: "none",
                    }}
                    className="process-arrow"
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginBottom: 36 }}>
          Share your idea or contact us to discuss your project.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/ideas" className="btn-primary">Share Your Idea</Link>
          <Link href="/contact" className="btn-outline">Talk to Us</Link>
        </div>
      </section>
    </div>
  );
}
