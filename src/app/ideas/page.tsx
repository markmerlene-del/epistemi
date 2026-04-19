"use client";
import { useState } from "react";

const categories = [
  "Business Automation",
  "Customer Experience",
  "Data & Analytics",
  "Product Development",
  "Internal Operations",
  "Sales & Marketing",
  "HR & Recruitment",
  "Healthcare",
  "Finance & Accounting",
  "Education & Training",
  "Other",
];

const budgetRanges = [
  "Just exploring / Not sure yet",
  "Under $5,000",
  "$5,000 – $25,000",
  "$25,000 – $100,000",
  "$100,000+",
];

const timelines = [
  "ASAP",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "No rush / Long-term",
];

export default function IdeasPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "",
    title: "",
    problem: "",
    currentProcess: "",
    desiredOutcome: "",
    wishlist: "",
    budget: "",
    timeline: "",
    additionalInfo: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  const totalSteps = 3;

  if (submitted) {
    return (
      <div style={{ paddingTop: 70, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", maxWidth: 560, padding: "0 24px" }}>
          <div
            style={{
              width: 100, height: 100, borderRadius: "50%",
              background: "linear-gradient(135deg, #7c3aed, #059669)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 44, margin: "0 auto 32px",
              boxShadow: "0 16px 48px rgba(124,58,237,0.3)",
            }}
          >
            🚀
          </div>
          <h1 style={{ color: "#fff", fontSize: 36, fontWeight: 800, marginBottom: 16 }}>
            Your Idea is{" "}
            <span className="gradient-text">On Its Way!</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            Thank you, <strong style={{ color: "#a78bfa" }}>{form.name}</strong>! We&apos;ve received your idea and our
            team will review it carefully. We&apos;ll be in touch with you soon to discuss how we can bring your vision to life.
          </p>
          <div className="glass" style={{ borderRadius: 16, padding: 24, marginBottom: 32, textAlign: "left" }}>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 12 }}>
              What happens next
            </div>
            {[
              "Our team reviews your submission within 24 hours",
              "We prepare a preliminary assessment of your idea",
              "We schedule a discovery call to dive deeper",
              "We propose a custom AI solution plan",
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
                <div
                  style={{
                    width: 22, height: 22, borderRadius: "50%",
                    background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 700, color: "#fff", flexShrink: 0, marginTop: 1,
                  }}
                >
                  {i + 1}
                </div>
                <span style={{ color: "rgba(255,255,255,0.65)", fontSize: 14 }}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              className="btn-primary"
              onClick={() => { setSubmitted(false); setStep(1); setForm({ name: "", email: "", company: "", phone: "", category: "", title: "", problem: "", currentProcess: "", desiredOutcome: "", wishlist: "", budget: "", timeline: "", additionalInfo: "" }); }}
            >
              Submit Another Idea
            </button>
            <a href="tel:9723100330" className="btn-outline">Call Us Now</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div className="grid-bg" style={{ position: "absolute", inset: 0, pointerEvents: "none" }} />
        <div
          style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
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
            Share Your Vision
          </div>
          <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, color: "#fff", marginBottom: 20, lineHeight: 1.1 }}>
            Tell Us Your <span className="gradient-text">Ideas & Wishlist</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 17, lineHeight: 1.7 }}>
            Describe your processes, challenges, and what you wish AI could do for you.
            No idea is too big or too small — we want to hear it all.
          </p>
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: "20px 24px 100px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          {/* Progress */}
          <div style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              {["Your Info", "Your Idea", "Details & Wishlist"].map((label, i) => (
                <div
                  key={label}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    opacity: step >= i + 1 ? 1 : 0.4,
                  }}
                >
                  <div
                    style={{
                      width: 28, height: 28, borderRadius: "50%",
                      background: step > i + 1
                        ? "linear-gradient(135deg, #7c3aed, #2563eb)"
                        : step === i + 1
                        ? "linear-gradient(135deg, #7c3aed, #2563eb)"
                        : "rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700, color: "#fff",
                    }}
                  >
                    {step > i + 1 ? "✓" : i + 1}
                  </div>
                  <span style={{ color: step >= i + 1 ? "#fff" : "rgba(255,255,255,0.4)", fontSize: 13, fontWeight: step === i + 1 ? 600 : 400 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ height: 3, background: "rgba(255,255,255,0.08)", borderRadius: 2 }}>
              <div
                style={{
                  height: "100%", borderRadius: 2,
                  background: "linear-gradient(90deg, #7c3aed, #2563eb)",
                  width: `${((step - 1) / (totalSteps - 1)) * 100}%`,
                  transition: "width 0.4s ease",
                }}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="glass" style={{ borderRadius: 24, padding: "40px" }}>

              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>About You</h2>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 32 }}>
                    Let us know who you are so we can follow up.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                          Full Name *
                        </label>
                        <input required placeholder="Jane Smith" value={form.name} onChange={(e) => update("name", e.target.value)} />
                      </div>
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                          Email Address *
                        </label>
                        <input type="email" required placeholder="jane@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                      </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                          Company / Organization
                        </label>
                        <input placeholder="Your company" value={form.company} onChange={(e) => update("company", e.target.value)} />
                      </div>
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                          Phone Number
                        </label>
                        <input type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        Category / Industry *
                      </label>
                      <select required value={form.category} onChange={(e) => update("category", e.target.value)}>
                        <option value="">Select a category...</option>
                        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Your Idea</h2>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 32 }}>
                    Tell us about the problem you&apos;re trying to solve and your current process.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        Idea Title / Name *
                      </label>
                      <input required placeholder="e.g. AI Customer Support Bot" value={form.title} onChange={(e) => update("title", e.target.value)} />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        What problem are you trying to solve? *
                      </label>
                      <textarea
                        required rows={4}
                        placeholder="Describe the challenge, pain point, or opportunity you've identified..."
                        value={form.problem}
                        onChange={(e) => update("problem", e.target.value)}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        How do you currently handle this process?
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your current workflow, tools you use, manual steps involved, etc..."
                        value={form.currentProcess}
                        onChange={(e) => update("currentProcess", e.target.value)}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        What would success look like? *
                      </label>
                      <textarea
                        required rows={3}
                        placeholder="Describe your ideal outcome — what changes, what improves, what gets solved..."
                        value={form.desiredOutcome}
                        onChange={(e) => update("desiredOutcome", e.target.value)}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h2 style={{ color: "#fff", fontSize: 22, fontWeight: 700, marginBottom: 8 }}>Your Wishlist & Details</h2>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 32 }}>
                    Dream big — what features, capabilities, or integrations would you love to have?
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        Your AI Wishlist ✨ *
                      </label>
                      <textarea
                        required rows={6}
                        placeholder={`List everything you'd love your AI solution to do:\n• Auto-reply to customer emails\n• Generate weekly reports\n• Flag unusual transactions\n• Integrate with Slack and Salesforce\n• Learn from feedback over time\n...anything you can imagine!`}
                        value={form.wishlist}
                        onChange={(e) => update("wishlist", e.target.value)}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                          Budget Range
                        </label>
                        <select value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                          <option value="">Select budget range...</option>
                          {budgetRanges.map((b) => <option key={b} value={b}>{b}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                          Timeline
                        </label>
                        <select value={form.timeline} onChange={(e) => update("timeline", e.target.value)}>
                          <option value="">Select timeline...</option>
                          {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, fontWeight: 500 }}>
                        Anything else you&apos;d like to share?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Additional context, inspiration, examples of similar solutions you've seen, constraints, etc..."
                        value={form.additionalInfo}
                        onChange={(e) => update("additionalInfo", e.target.value)}
                        style={{ resize: "vertical" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 24, gap: 12 }}>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="btn-outline"
                >
                  ← Back
                </button>
              ) : (
                <div />
              )}

              {step < totalSteps ? (
                <button
                  type="button"
                  className="btn-primary"
                  onClick={() => {
                    if (step === 1 && (!form.name || !form.email || !form.category)) {
                      alert("Please fill in all required fields.");
                      return;
                    }
                    if (step === 2 && (!form.title || !form.problem || !form.desiredOutcome)) {
                      alert("Please fill in all required fields.");
                      return;
                    }
                    setStep(step + 1);
                  }}
                >
                  Next Step →
                </button>
              ) : (
                <button type="submit" className="btn-primary" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                  {loading ? "Submitting..." : "🚀 Submit My Idea"}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
