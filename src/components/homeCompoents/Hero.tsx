"use client";

import { useEffect, useState } from "react";

export default function HomeHero() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 50);
        return () => clearTimeout(t);
    }, []);

    const fade = (delay: number): React.CSSProperties => ({
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
    });

    return (
        <section className="home-xenor-typography relative w-full overflow-hidden">

            {/* soft top glow */}
            <div
                className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 z-0"
                style={{
                    width: "600px",
                    height: "280px",
                    background: "radial-gradient(ellipse at 50% 0%, rgba(15,140,160,0.13) 0%, transparent 70%)",
                }}
            />

            <div className="relative z-10 max-w-[860px] mx-auto px-5 pt-24 sm:pt-32 pb-0 flex flex-col items-center text-center" data-aos="fade-up">

                {/* badge */}
                <div
                    style={{
                        ...fade(0),
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 14px",
                        borderRadius: "999px",
                        border: "1px solid var(--border-strong)",
                        background: "var(--surface)",
                        marginBottom: "20px",
                    }}
                >
                    <span
                        style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            background: "var(--brand)",
                            display: "inline-block",
                        }}
                    />
                    <span
                        className="section-heading-badge-text"
                        style={{
                            fontSize: "11px",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                        }}
                    >
                        Smart AI Powered Inventory
                    </span>
                </div>

                {/* headline */}
                <h1
                    className="section-heading-title"
                    style={{
                        ...fade(70),
                        fontSize: "clamp(38px, 6vw, 68px)",
                        fontWeight: 500,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.1,
                        color: "var(--text)",
                        marginBottom: "16px",
                        textWrap: "balance",
                    }}
                >
                    Become the{" "}
                    <span style={{ color: "var(--brand)" }}>Captain</span>
                    <br />
                    of Your Inventory
                </h1>

                {/* subtitle */}
                <p
                    className="section-heading-subtitle"
                    style={{
                        ...fade(130),
                        fontSize: "15px",
                        color: "var(--text-muted)",
                        lineHeight: 1.65,
                        maxWidth: "420px",
                        marginBottom: "28px",
                    }}
                >
                    Scan once, watch cargo load automatically. Fluyte turns your physical stock into a live digital system — no hardware, no setup fee.
                </p>

                {/* CTAs */}
                <div
                    style={{
                        ...fade(190),
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginBottom: "20px",
                    }}
                >
                    <a
                        href="#get-started"
                        className="section-heading-subtitle"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "7px",
                            background: "var(--brand)",
                            color: "#fff",
                            fontWeight: 500,
                            fontSize: "13px",
                            letterSpacing: "0.02em",
                            padding: "10px 22px",
                            borderRadius: "var(--radius-sm)",
                            textDecoration: "none",
                            border: "1px solid transparent",
                            transition: "background 0.2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.background = "var(--brand-dark)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "var(--brand)")}
                    >
                        Get started free
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M2 6h8M7 3l3 3-3 3" />
                        </svg>
                    </a>

                    <a
                        href="#demo"
                        className="section-heading-subtitle"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "7px",
                            background: "transparent",
                            color: "var(--text-muted)",
                            fontWeight: 500,
                            fontSize: "13px",
                            letterSpacing: "0.02em",
                            padding: "10px 22px",
                            borderRadius: "var(--radius-sm)",
                            textDecoration: "none",
                            border: "1px solid var(--border-strong)",
                            transition: "color 0.2s, border-color 0.2s",
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.color = "var(--brand)";
                            e.currentTarget.style.borderColor = "var(--brand)";
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.color = "var(--text-muted)";
                            e.currentTarget.style.borderColor = "var(--border-strong)";
                        }}
                    >
                        See it in action
                    </a>
                </div>

                {/* trust pills */}
                <div
                    style={{
                        ...fade(240),
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        marginBottom: "48px",
                    }}
                >
                    {["No credit card", "2-minute setup", "Any industry"].map((label) => (
                        <span
                            key={label}
                            className="section-heading-subtitle"
                            style={{
                                fontSize: "12px",
                                color: "var(--text-muted)",
                                padding: "4px 12px",
                                borderRadius: "999px",
                                border: "1px solid var(--border)",
                                background: "var(--surface)",
                                letterSpacing: "0.01em",
                            }}
                        >
                            {label}
                        </span>
                    ))}
                </div>

                {/* dashboard screenshot — bottom-fade like reference */}
                <div
                    style={{
                        ...fade(300),
                        width: "100%",
                        maxWidth: "920px",
                        borderRadius: "var(--radius-lg) var(--radius-lg) 0 0",
                        border: "1px solid var(--border-strong)",
                        borderBottom: "none",
                        overflow: "hidden",
                        boxShadow: "0 -2px 40px rgba(0,0,0,0.05)",
                        background: "var(--surface)",
                        maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
                    }}
                >
                    {/* swap src for your actual dashboard screenshot */}
                    <img
                        src="/img/xenor.png"
                        alt="Fluyte dashboard preview"
                        style={{ width: "100%", height: "auto", display: "block" }}
                    />
                </div>

            </div>
        </section>
    );
}