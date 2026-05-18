"use client";

import Link from "next/link";

const COLS: { heading: string; links: { label: string; href: string }[] }[] = [
    {
        heading: "Product",
        links: [
            { label: "Features", href: "#features" },
            { label: "Use Cases", href: "#use-cases" },
            { label: "Dashboard Demo", href: "#demo" },
            { label: "How it Works", href: "#how-it-works" },
        ],
    },
    {
        heading: "Account",
        links: [
            { label: "Sign in", href: "/sign-in" },
            { label: "Get started", href: "/sign-up" },
        ],
    },
    {
        heading: "Legal",
        links: [
            { label: "Terms of Use", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="home-xenor-typography w-full" style={{ borderTop: "1px solid var(--border)", background: "var(--bg)" }}>

            {/* Main grid */}
            <div
                className="footer-grid max-w-[1100px] mx-auto px-5"
                style={{ padding: "48px 20px 40px", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px" }}
            >
                {/* Brand col */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "10px", textDecoration: "none", width: "fit-content" }}>
                        <div
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "var(--radius-sm)",
                                background: "var(--brand)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                                <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
                                <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.55" />
                                <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.55" />
                                <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.3" />
                            </svg>
                        </div>
                        <span className="section-heading-title" style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)", letterSpacing: "-0.01em" }}>
                            Fluyte
                        </span>
                    </Link>

                    <p className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.65, maxWidth: "200px" }}>
                        Smart inventory management powered by AI. Built for teams of all sizes.
                    </p>

                    {/* socials */}
                    <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
                        {[
                            {
                                label: "GitHub",
                                href: "https://github.com",
                                icon: (
                                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                                    </svg>
                                ),
                            },
                            {
                                label: "X",
                                href: "https://x.com",
                                icon: (
                                    <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                                    </svg>
                                ),
                            },
                        ].map(s => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "var(--radius-sm)",
                                    border: "1px solid var(--border-strong)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-muted)",
                                    textDecoration: "none",
                                    transition: "color 0.2s, border-color 0.2s",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--brand)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--brand)";
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)";
                                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border-strong)";
                                }}
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Nav columns */}
                {COLS.map(col => (
                    <div key={col.heading} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                        <p
                            className="section-heading-badge-text"
                            style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600 }}
                        >
                            {col.heading}
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                            {col.links.map(link => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="section-heading-subtitle"
                                        style={{ fontSize: "13px", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                                        onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--brand)")}
                                        onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-muted)")}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Disclaimer */}
            <div className="max-w-[1100px] mx-auto px-5" style={{ paddingBottom: "20px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "12px",
                        padding: "14px 16px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border)",
                        background: "var(--surface)",
                    }}
                >
                    <div style={{ width: "2px", borderRadius: "2px", background: "var(--brand)", opacity: 0.4, alignSelf: "stretch", flexShrink: 0 }} />
                    <p className="section-heading-subtitle" style={{ fontSize: "11px", color: "var(--text-dim)", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--text-muted)", fontWeight: 500 }}>Note:</span>{" "}
                        Fluyte is an independent personal project — not a registered company. Offered in good faith with no service guarantees, SLAs, or formal support contracts.
                    </p>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: "1px solid var(--border)" }}>
                <div
                    className="footer-bottom max-w-[1100px] mx-auto px-5"
                    style={{ padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "8px" }}
                >
                    <p className="section-heading-subtitle" style={{ fontSize: "12px", color: "var(--text-dim)" }}>
                        © 2026 Fluyte. Built with care as a personal project.
                    </p>
                    <p className="section-heading-subtitle" style={{ fontSize: "12px", color: "var(--text-dim)" }}>
                        Developed by{" "}
                        <a
                            href="https://daniyalsohail.me"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="section-heading-subtitle"
                            style={{ fontSize: "12px", color: "var(--brand)", textDecoration: "none", transition: "opacity 0.2s" }}
                            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.75")}
                            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                        >
                            Daniyal Sohail
                        </a>
                    </p>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr !important;
                        gap: 32px !important;
                    }
                    .footer-grid > div:first-child {
                        grid-column: 1 / -1;
                    }
                    .footer-bottom {
                        flex-direction: column !important;
                        align-items: flex-start !important;
                        gap: 6px !important;
                    }
                }
            `}</style>
        </footer>
    );
}