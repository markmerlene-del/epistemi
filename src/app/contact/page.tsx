"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSent(true);
    setLoading(false);
  };

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: "100px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div
          style={{
            position: "absolute", top: "40%", left: "50%", transform: "translateX(-50%)",
            width: 500, height: 300,
            background: "radial-gradient(ellipse, rgba(124,58,237,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", maxWidth: 600, margin: "0 auto" }}>
          <div
            style={{
              display: "inline-block", padding: "6px 16px", borderRadius: 100,
              background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
              color: "#a78bfa", fontSize: 13, fontWeight: 500, marginBottom: 24,
            }}
          >
            Get In Touch
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.1 }}>
            Let&apos;s Start a{" "}
            <span className="gradient-text">Conversation</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7 }}>
            Have a question, project in mind, or just want to explore what AI can do for you?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "40px 24px 100px" }}>
        <div
          style={{
            maxWidth: 1100, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40, alignItems: "start",
          }}
        >
          {/* Contact Info */}
          <div>
            <h2 style={{ color: "#fff", fontSize: 26, fontWeight: 700, marginBottom: 32 }}>
              Contact Information
            </h2>

            {/* Phone */}
            <a
              href="tel:9723100330"
              style={{
                display: "flex", alignItems: "center", gap: 20, textDecoration: "none",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}
              >
                📞
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                  Phone
                </div>
                <div style={{ color: "#fff", fontSize: 18, fontWeight: 600 }}>(972) 310-0330</div>
              </div>
            </a>

            {/* Team */}
            <div
              style={{
                display: "flex", alignItems: "center", gap: 20, marginBottom: 40,
              }}
            >
              <div
                style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: "linear-gradient(135deg, #059669, #0891b2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22, flexShrink: 0,
                }}
              >
                👥
              </div>
              <div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>
                  Leadership
                </div>
                <div style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>Mark & David Merlene</div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13 }}>Co-Founders</div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass" style={{ borderRadius: 18, padding: 28, marginBottom: 28 }}>
              <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>Business Hours</h3>
              {[
                { day: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
                { day: "Saturday", hours: "10:00 AM – 2:00 PM" },
                { day: "Sunday", hours: "Closed" },
              ].map((h) => (
                <div
                  key={h.day}
                  style={{
                    display: "flex", justifyContent: "space-between",
                    padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                    fontSize: 14,
                  }}
                >
                  <span style={{ color: "rgba(255,255,255,0.6)" }}>{h.day}</span>
                  <span style={{ color: h.hours === "Closed" ? "rgba(255,255,255,0.3)" : "#a78bfa", fontWeight: 500 }}>{h.hours}</span>
                </div>
              ))}
            </div>

            <div className="glass" style={{ borderRadius: 18, padding: 24 }}>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
                <span style={{ color: "#a78bfa", fontWeight: 600 }}>Prefer to share your idea first?</span>
                {" "}Visit our{" "}
                <a href="/ideas" style={{ color: "#60a5fa", textDecoration: "none" }}>Ideas page</a>
                {" "}to submit your vision and wish list.
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass" style={{ borderRadius: 24, padding: 40 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 56, marginBottom: 20 }}>✅</div>
                <h3 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 15 }}>
                  Thanks for reaching out! We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", company: "", message: "" }); }}
                  className="btn-outline"
                  style={{ marginTop: 28 }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 28 }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        Name *
                      </label>
                      <input
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                      Company
                    </label>
                    <input
                      placeholder="Your company name"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us about your project or question..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <button type="submit" className="btn-primary" disabled={loading} style={{ width: "100%", opacity: loading ? 0.7 : 1 }}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
