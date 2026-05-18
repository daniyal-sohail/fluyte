"use client";

import { useRef, useEffect, useState } from "react";

const FEATURES = [
    {
        number: "01",
        title: "Barcode & QR Scanning",
        description:
            "Scan any barcode or QR code with your device camera to instantly look up and update items — no special hardware required.",
        size: "large", // spans 2 cols
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="4" width="6" height="14" rx="1" fill="currentColor" opacity="0.9" />
                <rect x="12" y="4" width="3" height="14" rx="1" fill="currentColor" opacity="0.6" />
                <rect x="17" y="4" width="5" height="14" rx="1" fill="currentColor" opacity="0.8" />
                <rect x="24" y="4" width="2" height="14" rx="1" fill="currentColor" opacity="0.5" />
                <rect x="28" y="4" width="4" height="14" rx="1" fill="currentColor" opacity="0.7" />
                <rect x="34" y="4" width="2" height="14" rx="1" fill="currentColor" opacity="0.4" />
                <rect x="4" y="22" width="6" height="14" rx="1" fill="currentColor" opacity="0.7" />
                <rect x="12" y="22" width="3" height="14" rx="1" fill="currentColor" opacity="0.9" />
                <rect x="17" y="22" width="5" height="14" rx="1" fill="currentColor" opacity="0.5" />
                <rect x="24" y="22" width="2" height="14" rx="1" fill="currentColor" opacity="0.8" />
                <rect x="28" y="22" width="4" height="14" rx="1" fill="currentColor" opacity="0.6" />
                <rect x="34" y="22" width="2" height="14" rx="1" fill="currentColor" opacity="0.9" />
            </svg>
        ),
        highlights: ["Works on any device", "No extra hardware", "Instant lookup", "Batch scanning"],
    },
    {
        number: "02",
        title: "AI Receipt Extraction",
        description:
            "Photograph any receipt and watch AI parse every item, price, and quantity directly into your inventory.",
        size: "normal",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="8" y="2" width="20" height="26" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 10h12M12 14h12M12 18h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="27" cy="27" r="7" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5" />
                <path d="M24 27l2 2 4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Multi-Location Tracking",
        description:
            "Organise stock across multiple warehouses with a unified view and one-tap inter-location transfers.",
        size: "normal",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="26" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="18" cy="26" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 10h8M12.5 13.5l3.5 9M23.5 13.5l-3.5 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Real-Time Analytics",
        description:
            "Live dashboards showing stock movement, low-stock alerts, and turnover trends — updated the moment anything changes.",
        size: "large",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M4 28l8-8 6 4 8-10 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 8h28" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
                <path d="M4 16h28" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
                <path d="M4 24h28" stroke="currentColor" strokeWidth="1" opacity="0.2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: "05",
        title: "Printable QR Labels",
        description:
            "Generate professional QR labels for any item. Export print-ready PDFs and scan them back for instant lookups.",
        size: "large",
        icon: (
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect x="4" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="20" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="4" y="20" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <rect x="7" y="7" width="6" height="6" rx="1" fill="currentColor" opacity="0.4" />
                <rect x="23" y="7" width="6" height="6" rx="1" fill="currentColor" opacity="0.4" />
                <rect x="7" y="23" width="6" height="6" rx="1" fill="currentColor" opacity="0.4" />
                <path d="M20 20h4v4h-4zM28 20h4v4h-4zM20 28h4v4h-4zM28 28h4v4h-4z" fill="currentColor" opacity="0.3" />
            </svg>
        ),
    },
    {
        number: "06",
        title: "Team & Permissions",
        description:
            "Invite teammates, assign roles, and control exactly what each person can view, edit, or manage.",
        size: "normal",
        icon: (
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="26" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 34c0-5.52 4.48-10 10-10h12c5.52 0 10 4.48 10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="20" cy="28" r="5" fill="var(--bg)" stroke="currentColor" strokeWidth="1.5" />
                <path d="M18 28l1.5 1.5 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        highlights: ["Role-based access", "Invite by email", "Audit logs", "Per-location control"],
    },
];

function FeatureCard({ feature, index }: { feature: (typeof FEATURES)[0]; index: number }) {
    const isLarge = feature.size === "large";
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
            { threshold: 0.15 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`
        group relative flex flex-col justify-between
        bg-[var(--surface)] border border-[var(--border)]
        rounded-[var(--radius-lg)] p-7 sm:p-8
        hover:border-[var(--border-strong)]
        transition-all duration-500 ease-out overflow-hidden
        ${isLarge ? "sm:col-span-2" : ""}
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            {/* Subtle hover glow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--brand-muted), transparent 60%)",
                }}
            />

            {/* Top row: number + icon */}
            <div className="relative z-10 flex items-start justify-between mb-8">
                <span
                    className="section-heading-badge-text text-[11px] tracking-[0.15em] uppercase text-[var(--text-muted)]"
                >
                    {feature.number}
                </span>
                <div className="text-[var(--brand)] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.icon}
                </div>
            </div>

            {/* Text */}
            <div className="relative z-10 flex flex-col gap-3 flex-1">
                <h3 className="section-heading-title text-[18px] sm:text-[20px] font-semibold text-[var(--text)] leading-tight tracking-tight">
                    {feature.title}
                </h3>
                <p className="section-heading-subtitle text-[14px] text-[var(--text-muted)] leading-relaxed max-w-md">
                    {feature.description}
                </p>
            </div>

            {/* Highlights pills — only on large cards */}
            {isLarge && feature.highlights && (
                <div className="relative z-10 flex flex-wrap gap-2 mt-6">
                    {feature.highlights.map((h) => (
                        <span
                            key={h}
                            className="section-heading-badge-text inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] tracking-wide border border-[var(--border-strong)] text-[var(--text-muted)] bg-[var(--surface-2)]"
                        >
                            <span className="w-1 h-1 rounded-full bg-[var(--brand)] inline-block" />
                            {h}
                        </span>
                    ))}
                </div>
            )}

            {/* Bottom corner accent line */}
            <div className="absolute bottom-0 left-0 w-0 group-hover:w-1/2 h-px bg-gradient-to-r from-[var(--brand)] to-transparent transition-all duration-500 ease-out" />
        </div>
    );
}

export default function Features() {
    return (
        <section className="home-xenor-typography relative py-24 sm:py-32 px-5">

            {/* Section heading */}
            <div className="max-w-[1100px] mx-auto mb-16 sm:mb-20">
                <div className="flex flex-col items-center text-center gap-4">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--text-muted)]"
                        data-aos="fade-down"
                        data-aos-duration="500"
                        data-aos-once="true"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand)]" />
                        <span className="section-heading-badge-text text-[11px] tracking-widest uppercase">
                            Features
                        </span>
                    </div>

                    <h2
                        className="section-heading-title text-[clamp(28px,4.5vw,52px)] font-black text-[var(--text)] leading-[1.05] tracking-tight max-w-2xl"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-once="true"
                    >
                        Everything your inventory needs
                    </h2>

                    <p
                        className="section-heading-subtitle text-[15px] text-[var(--text-muted)] max-w-md leading-relaxed"
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="60"
                        data-aos-once="true"
                    >
                        From a quick scan to a full analytics report — Fluyte has you covered.
                    </p>
                </div>
            </div>

            {/* Bento Grid */}
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
                {FEATURES.map((feature, i) => (
                    <FeatureCard key={feature.number} feature={feature} index={i} />
                ))}
            </div>

        </section>
    );
}