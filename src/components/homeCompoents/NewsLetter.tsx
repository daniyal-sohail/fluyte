"use client";

import Link from "next/link";
import { useState } from "react";

export default function NewsletterCTA() {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!email) return;
        setSent(true);
    }

    return (
        <section className="home-xenor-typography relative w-full py-10 sm:py-14 px-5">
            <div
                className="max-w-[980px] mx-auto relative overflow-hidden"
                data-aos="fade-up"
                style={{
                    borderRadius: "var(--radius-lg)",
                    border: "1px solid var(--border-strong)",
                    background: "var(--surface)",
                    padding: "36px clamp(24px, 5vw, 56px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                {/* top glow */}
                <div
                    className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2"
                    style={{
                        width: "400px",
                        height: "160px",
                        background: "radial-gradient(ellipse at 50% 0%, rgba(15,140,160,0.11) 0%, transparent 70%)",
                    }}
                />

                {/* badge
                <div
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "4px 12px",
                        borderRadius: "999px",
                        border: "1px solid var(--border-strong)",
                        background: "var(--surface-2)",
                        marginBottom: "14px",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--brand)", display: "inline-block" }} />
                    <span className="section-heading-badge-text" style={{ fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                        Get Started Today
                    </span>
                </div> */}

                {/* heading */}
                <h2
                    className="section-heading-title"
                    style={{
                        fontSize: "clamp(22px, 3.5vw, 36px)",
                        fontWeight: 700,
                        letterSpacing: "-0.025em",
                        lineHeight: 1.1,
                        color: "var(--text)",
                        maxWidth: "480px",
                        marginBottom: "10px",
                        position: "relative",
                        zIndex: 1,
                        textWrap: "balance",
                    }}
                >
                    Ready to take control of your inventory?
                </h2>

                {/* subtitle */}
                <p
                    className="section-heading-subtitle"
                    style={{
                        fontSize: "13px",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        maxWidth: "360px",
                        marginBottom: "24px",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    Join Fluyte free — no credit card, no setup fee. Start scanning in under two minutes.
                </p>

                {/* form / success */}
                <div style={{ width: "100%", maxWidth: "440px", position: "relative", zIndex: 1, marginBottom: "12px" }}>
                    {sent ? (
                        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "10px 18px", borderRadius: "var(--radius)", border: "1px solid var(--border-strong)", background: "var(--surface-2)" }}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round">
                                <path d="M2 7l3 3 7-6" />
                            </svg>
                            <span className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text-muted)" }}>
                                You're on the list. We'll be in touch.
                            </span>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="section-heading-subtitle"
                                style={{
                                    flex: "1",
                                    minWidth: "180px",
                                    background: "var(--bg)",
                                    border: "1px solid var(--border-strong)",
                                    borderRadius: "var(--radius-sm)",
                                    padding: "9px 14px",
                                    fontSize: "13px",
                                    color: "var(--text)",
                                    outline: "none",
                                    transition: "border-color 0.2s",
                                }}
                                onFocus={e => (e.target.style.borderColor = "var(--brand)")}
                                onBlur={e => (e.target.style.borderColor = "var(--border-strong)")}
                            />
                            <button
                                type="submit"
                                className="section-heading-subtitle"
                                style={{
                                    background: "var(--brand)",
                                    color: "#fff",
                                    fontWeight: 500,
                                    fontSize: "13px",
                                    letterSpacing: "0.02em",
                                    padding: "9px 20px",
                                    borderRadius: "var(--radius-sm)",
                                    border: "1px solid transparent",
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    transition: "background 0.2s",
                                }}
                                onMouseEnter={e => (e.currentTarget.style.background = "var(--brand-dark)")}
                                onMouseLeave={e => (e.currentTarget.style.background = "var(--brand)")}
                            >
                                Get started free
                            </button>
                        </form>
                    )}
                </div>

                {/* sign in */}
                <Link
                    href="/sign-in"
                    className="section-heading-subtitle"
                    style={{ fontSize: "12px", color: "var(--text-dim)", textDecoration: "none", marginBottom: "20px", position: "relative", zIndex: 1, transition: "color 0.2s" }}
                    onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--brand)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--text-dim)")}
                >
                    Already have an account? <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Sign in</span>
                </Link>

                {/* trust row */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        paddingTop: "16px",
                        borderTop: "1px solid var(--border)",
                        width: "100%",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "0",
                        position: "relative",
                        zIndex: 1,
                    }}
                >
                    {["SSL encrypted", "2-minute setup", "No credit card"].map((label, i) => (
                        <>
                            {i > 0 && (
                                <div key={`d-${i}`} style={{ width: "1px", height: "12px", background: "var(--border-strong)", margin: "0 16px" }} />
                            )}
                            <span key={label} className="section-heading-subtitle" style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "var(--text-muted)" }}>
                                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round">
                                    <path d="M1.5 5.5l2.5 2.5 5-5" />
                                </svg>
                                {label}
                            </span>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}