"use client";

const STEPS = [
    {
        number: "01",
        title: "Scan your items",
        description: "Point any phone camera at a barcode or QR code. No hardware, no dedicated setup — just scan and go.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--brand)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="10" height="10" rx="1.5" />
                <rect x="18" y="4" width="10" height="10" rx="1.5" />
                <rect x="4" y="18" width="10" height="10" rx="1.5" />
                <rect x="18" y="18" width="4" height="4" rx="0.5" />
                <path d="M24 18h4M18 24h4M24 24h4M24 28h4" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Sync automatically",
        description: "Stock updates reach every device on your team instantly. One live source of truth — no exports, no delays.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--brand)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="16" cy="16" r="4" />
                <circle cx="6" cy="9" r="2.5" />
                <circle cx="26" cy="9" r="2.5" />
                <circle cx="16" cy="27" r="2.5" />
                <path d="M8.2 10.5L12 13.5M23.8 10.5L20 13.5M16 20v4.5" />
                <circle cx="16" cy="16" r="9" strokeDasharray="2.5 2.5" opacity="0.3" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Manage with AI",
        description: "Smart reorder alerts, low-stock warnings, and usage forecasts — handled automatically so you don't have to think about it.",
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="var(--brand)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4l2.8 7.5H27l-6.6 4.8 2.5 7.7L16 19.5l-6.9 4.5 2.5-7.7L5 11.5h8.2z" />
                <path d="M10 26h12" opacity="0.4" />
                <path d="M13 29h6" opacity="0.25" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section
            className="home-xenor-typography w-full px-5"
            style={{ borderTop: "1px solid var(--border)", paddingTop: "72px", paddingBottom: "72px" }}
        >
            <div className="max-w-[1100px] mx-auto" style={{ display: "flex", flexDirection: "column", gap: "56px" }}>

                {/* section heading */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }} data-aos="fade-up">

                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "7px",
                            padding: "5px 14px",
                            borderRadius: "999px",
                            border: "1px solid var(--border-strong)",
                            background: "var(--surface)",
                        }}
                    >
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand)", display: "inline-block" }} />
                        <span className="section-heading-badge-text" style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                            How it works
                        </span>
                    </div>

                    <h2
                        className="section-heading-title text-[clamp(28px,4.5vw,52px)] font-black text-[var(--text)] leading-[1.05] tracking-tight max-w-2xl"
                    >
                        Up and running in minutes
                    </h2>

                    <p
                        className="section-heading-subtitle"
                        style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "420px", lineHeight: 1.65 }}
                    >
                        No training sessions, no hardware, no setup fee. Three steps and your whole team is live.
                    </p>
                </div>

                {/* steps grid */}
                <div className="hiw-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
                    {STEPS.map((step, i) => (
                        <div
                            key={step.number}
                            className="hiw-step"
                            data-aos="fade-up"
                            data-aos-delay={`${i * 100}`}
                            style={{
                                padding: "40px 36px",
                                borderLeft: i > 0 ? "1px solid var(--border)" : "none",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* number */}
                            <span
                                className="section-heading-title"
                                style={{
                                    fontSize: "11px",
                                    fontWeight: 500,
                                    color: "var(--brand)",
                                    letterSpacing: "0.08em",
                                    opacity: 0.75,
                                    marginBottom: "24px",
                                }}
                            >
                                {step.number}
                            </span>

                            {/* icon — boxed like reference */}
                            <div
                                style={{
                                    width: "56px",
                                    height: "56px",
                                    border: "1px solid var(--border-strong)",
                                    borderRadius: "var(--radius-sm)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "28px",
                                    background: "var(--surface)",
                                }}
                            >
                                {step.icon}
                            </div>

                            {/* title */}
                            <h3
                                className="section-heading-title"
                                style={{
                                    fontSize: "clamp(16px, 2vw, 20px)",
                                    fontWeight: 700,
                                    letterSpacing: "-0.02em",
                                    lineHeight: 1.2,
                                    color: "var(--text)",
                                    marginBottom: "12px",
                                }}
                            >
                                {step.title}
                            </h3>

                            {/* description */}
                            <p
                                className="section-heading-subtitle"
                                style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7 }}
                            >
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>

            <style>{`
                @media (max-width: 768px) {
                    .hiw-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .hiw-step {
                        padding: 28px 20px !important;
                        border-left: none !important;
                        border-top: 1px solid var(--border);
                    }
                    .hiw-step:first-child {
                        border-top: none;
                    }
                }
            `}</style>
        </section>
    );
}