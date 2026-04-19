"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/ideas", label: "Share Ideas" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s",
        background: scrolled
          ? "rgba(3,7,18,0.9)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <svg width="64" height="64" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#c084fc"/>
                  <stop offset="1" stopColor="#3b82f6"/>
                </linearGradient>
                <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0"/>
                </radialGradient>
              </defs>
              {/* Glow background */}
              <circle cx="26" cy="26" r="26" fill="url(#glowGrad)"/>
              {/* Dark inner circle */}
              <circle cx="26" cy="26" r="22" fill="#0d0820"/>
              {/* Outer border ring */}
              <circle cx="26" cy="26" r="21" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none"/>
              {/* Rotating arc - top 270 degrees */}
              <path d="M26 7 A19 19 0 1 1 9 34" stroke="url(#logoGrad)" strokeWidth="3" strokeLinecap="round" fill="none"/>
              {/* Arrowhead at end of arc */}
              <path d="M7 28 L9 35 L15 31.5" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              {/* Lightning bolt center */}
              <path d="M29 14 L21 27 L26 27 L23 38 L31 25 L26 25 Z" fill="url(#logoGrad)"/>
              {/* Small glowing dot at arc start */}
              <circle cx="26" cy="7" r="2.5" fill="#c084fc"/>
            </svg>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                background: "linear-gradient(135deg, #a78bfa, #60a5fa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Epistemi
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: active ? 600 : 400,
                  color: active ? "#a78bfa" : "rgba(255,255,255,0.7)",
                  background: active ? "rgba(139,92,246,0.12)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s",
                  border: active ? "1px solid rgba(139,92,246,0.25)" : "1px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary" style={{ padding: "9px 20px", fontSize: 14, marginLeft: 8 }}>
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
            display: "none",
            flexDirection: "column",
            gap: 5,
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#a78bfa",
                borderRadius: 2,
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : menuOpen && i === 1
                    ? "opacity: 0"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(3,7,18,0.97)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 16px",
                borderRadius: 8,
                fontSize: 15,
                color: pathname === link.href ? "#a78bfa" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                background:
                  pathname === link.href ? "rgba(139,92,246,0.1)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
