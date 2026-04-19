"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(3,7,18,0.8)",
        padding: "48px 24px 32px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                I
              </div>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Epistemi
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
              Transforming businesses through the power of artificial intelligence. Your vision, our expertise.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Navigate</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/ideas", label: "Share Ideas" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Services</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {["AI Consulting", "AI Development", "AI Tools", "Process Automation", "Data Intelligence"].map((s) => (
                <span key={s} style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontWeight: 600, marginBottom: 16, fontSize: 14 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <a
                href="tel:9723100330"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
              >
                <span style={{ fontSize: 16 }}>📞</span>
                (972) 310-0330
              </a>
              <Link
                href="/ideas"
                style={{
                  display: "inline-block",
                  marginTop: 8,
                  padding: "10px 20px",
                  borderRadius: 8,
                  background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Share Your Idea →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            © {new Date().getFullYear()} Epistemi. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
            Built with intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
