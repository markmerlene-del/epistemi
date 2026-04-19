"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "🤖",
    title: "AI Consulting",
    desc: "Strategic guidance to integrate AI into your business workflows. We map your processes and identify where AI creates the most value.",
  },
  {
    icon: "⚙️",
    title: "AI Development",
    desc: "Custom AI solutions built from the ground up. From intelligent chatbots to complex machine learning models tailored to your needs.",
  },
  {
    icon: "🛠️",
    title: "AI Tools",
    desc: "Powerful ready-to-deploy AI tools that accelerate productivity, automate repetitive tasks, and unlock new business capabilities.",
  },
];

const stats = [
  { value: "50+", label: "AI Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "10x", label: "Average ROI" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; vx: number; vy: number; r: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139,92,246,${p.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div>
      {/* HERO */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

        <div
          style={{
            position: "absolute", top: "20%", left: "10%",
            width: 400, height: 400, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: "20%", right: "10%",
            width: 350, height: 350, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />

        <div
          style={{
            position: "relative",
            textAlign: "center",
            padding: "140px 24px 80px",
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "6px 16px", borderRadius: 100,
              background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)",
              color: "#a78bfa", fontSize: 13, fontWeight: 500, marginBottom: 32,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#a78bfa", display: "inline-block" }} />
            AI Consulting & Development
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: "#fff",
            }}
          >
            Imagine What{" "}
            <span className="gradient-text">AI Can Do</span>
            <br />
            For Your Business
          </h1>

          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 48,
              maxWidth: 640, margin: "0 auto 48px",
            }}
          >
            Epistemi delivers custom AI tools, strategic consulting, and end-to-end
            development to transform how you operate, compete, and grow.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/ideas" className="btn-primary" style={{ fontSize: 16, padding: "16px 36px" }}>
              Share Your Vision
            </Link>
            <Link href="/services" className="btn-outline" style={{ fontSize: 16, padding: "16px 36px" }}>
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "60px 24px", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div
          style={{
            maxWidth: 1000, margin: "0 auto",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24,
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: 42, fontWeight: 800,
                  background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 17, maxWidth: 500, margin: "0 auto" }}>
              End-to-end AI solutions for businesses ready to lead the future.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {services.map((s) => (
              <div key={s.title} className="glass glass-hover" style={{ borderRadius: 20, padding: 36 }}>
                <div
                  style={{
                    fontSize: 36, marginBottom: 20, width: 68, height: 68,
                    borderRadius: 16, background: "rgba(139,92,246,0.12)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  {s.icon}
                </div>
                <h3 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/services" className="btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px" }}>
        <div
          style={{
            maxWidth: 900, margin: "0 auto", borderRadius: 28, padding: "64px 48px",
            background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(37,99,235,0.2) 100%)",
            border: "1px solid rgba(139,92,246,0.25)", textAlign: "center",
            position: "relative", overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
              width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, color: "#fff", marginBottom: 16, position: "relative" }}>
            Have an Idea? Let&apos;s Build It.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, marginBottom: 36, position: "relative" }}>
            Tell us your vision and wishlist — we&apos;ll turn it into reality with AI.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", position: "relative" }}>
            <Link href="/ideas" className="btn-primary">Submit Your Idea</Link>
            <a href="tel:9723100330" className="btn-outline">Call Us: (972) 310-0330</a>
          </div>
        </div>
      </section>
    </div>
  );
}
