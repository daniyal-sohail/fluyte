"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Tab = {
    id: string;
    label: string;
    content: {
        category: string;
        heading: string;
        description: string;
        steps: string[];
        tags: string[];
        mockup: React.ReactNode;
    };
};

function OfficeUI() {
    return (
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="section-heading-subtitle" style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>IT Assets · 4 items</span>
                <span className="section-heading-badge-text" style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "4px", background: "var(--brand-muted)", color: "var(--brand)" }}>Corporate</span>
            </div>
            {[
                { name: "MacBook Pro 14\"", assigned: "Alex" },
                { name: "Dell Monitor 27\"", assigned: "Sarah" },
                { name: "MX Keys Keyboard", assigned: "Jordan" },
                { name: "iPad Pro 12.9\"", assigned: null },
            ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: i < 3 ? "1px solid var(--border)" : "none" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--brand)", opacity: 0.5, flexShrink: 0 }} />
                        <span className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text)" }}>{item.name}</span>
                    </div>
                    {item.assigned
                        ? <span className="section-heading-subtitle" style={{ fontSize: "12px", color: "var(--brand)" }}>{item.assigned}</span>
                        : <span className="section-heading-subtitle" style={{ fontSize: "12px", color: "var(--text-dim)", fontStyle: "italic" }}>Unassigned</span>
                    }
                </div>
            ))}
        </div>
    );
}

function CafeUI() {
    return (
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="section-heading-subtitle" style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Metro Supplies — Receipt</span>
                <span className="section-heading-badge-text" style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "4px", background: "var(--brand-muted)", color: "var(--brand)" }}>AI scanning</span>
            </div>
            {[
                { name: "Whole Bean Coffee 1kg", qty: "×5 bags" },
                { name: "Oat Milk 1L", qty: "×12 cartons" },
                { name: "Organic Lemons", qty: "×2 bags" },
                { name: "Vanilla Syrup 1L", qty: "×3 bottles" },
            ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: i < 3 ? "1px solid var(--border)" : "none" }}>
                    <span className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text)" }}>{item.name}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span className="section-heading-subtitle" style={{ fontSize: "11px", color: "var(--text-muted)" }}>{item.qty}</span>
                        <span className="section-heading-subtitle" style={{ fontSize: "10px", color: "var(--brand)" }}>Added</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function HomeUI() {
    return (
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            {[
                { section: "Fridge", items: [{ name: "Oat Milk 1L", status: "Low", ok: false }, { name: "Free Range Eggs", status: "OK", ok: true }] },
                { section: "Pantry", items: [{ name: "Spaghetti 500g", status: "OK", ok: true }, { name: "Chopped Tomatoes", status: "Low", ok: false }] },
                { section: "Freezer", items: [{ name: "Chicken Breast", status: "Out", ok: false }] },
            ].map((group) => (
                <div key={group.section}>
                    <div style={{ padding: "6px 16px", background: "var(--surface-2)", borderBottom: "1px solid var(--border)" }}>
                        <span className="section-heading-badge-text" style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text-muted)" }}>{group.section}</span>
                    </div>
                    {group.items.map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>
                            <span className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text)" }}>{item.name}</span>
                            <span className="section-heading-subtitle" style={{ fontSize: "10px", fontWeight: 500, padding: "2px 8px", borderRadius: "4px", color: item.ok ? "var(--brand)" : "var(--text-muted)", background: item.ok ? "var(--brand-muted)" : "var(--surface-2)" }}>{item.status}</span>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

function SmallBizUI() {
    return (
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--border)" }}>
                <span className="section-heading-subtitle" style={{ fontSize: "12px", color: "var(--text)" }}>Fresh Lemon — Vendor comparison</span>
            </div>
            {[
                { vendor: "City Produce Co.", price: "$0.45/ea", best: false },
                { vendor: "Metro Suppliers", price: "$0.52/ea", best: false },
                { vendor: "FreshDirect Ltd.", price: "$0.39/ea", best: true },
            ].map((v, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 16px", borderBottom: "1px solid var(--border)", background: v.best ? "var(--brand-muted)" : "transparent" }}>
                    <span className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text)" }}>{v.vendor}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span className="section-heading-subtitle" style={{ fontSize: "12px", color: v.best ? "var(--brand)" : "var(--text-muted)" }}>{v.price}</span>
                        {v.best && <span className="section-heading-badge-text" style={{ fontSize: "9px", padding: "2px 6px", borderRadius: "3px", background: "var(--brand)", color: "#fff" }}>Best</span>}
                    </div>
                </div>
            ))}
            <div style={{ padding: "10px 16px", display: "flex", alignItems: "center", gap: "6px" }}>
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round"><path d="M2 6l2.5 2.5 5.5-5" /></svg>
                <span className="section-heading-subtitle" style={{ fontSize: "12px", color: "var(--brand)" }}>Auto-create PO with FreshDirect — saves $0.13/unit</span>
            </div>
        </div>
    );
}

function RetailUI() {
    return (
        <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span className="section-heading-subtitle" style={{ fontSize: "11px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>All Locations</span>
                <span className="section-heading-badge-text" style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "4px", background: "var(--brand-muted)", color: "var(--brand)" }}>Live sync</span>
            </div>
            {[
                { name: "Downtown Store", skus: "142 SKUs", alerts: "4 low stock" },
                { name: "Airport Branch", skus: "89 SKUs", alerts: "2 low stock" },
                { name: "Mall Kiosk", skus: "56 SKUs", alerts: "7 low stock" },
            ].map((loc, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                    <div>
                        <p className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text)", fontWeight: 500 }}>{loc.name}</p>
                        <p className="section-heading-subtitle" style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "2px" }}>{loc.alerts}</p>
                    </div>
                    <span className="section-heading-subtitle" style={{ fontSize: "11px", color: "var(--text-muted)" }}>{loc.skus}</span>
                </div>
            ))}
        </div>
    );
}

const TABS: Tab[] = [
    {
        id: "office",
        label: "Office & Corporate",
        content: {
            category: "IT Asset Management",
            heading: "Know exactly who has which device.",
            description: "IT teams track every laptop, monitor, and peripheral — assign each asset to an employee. Audit logs record every change so you always have a full paper trail.",
            steps: ["Add assets with serial numbers and SKUs", "Assign each device to a specific employee", "Filter inventory by person at any time", "Pull full assignment history for audits"],
            tags: ["Asset Assignment", "Audit Logs", "QR Labels", "CSV Export"],
            mockup: <OfficeUI />,
        },
    },
    {
        id: "cafe",
        label: "Restaurants & Cafés",
        content: {
            category: "Food & Beverage",
            heading: "From supplier receipt to shelf in seconds.",
            description: "Photograph any supplier receipt and Fluyte extracts every item using AI. Print QR labels and scan to decrement stock during service — zero manual entry.",
            steps: ["Photograph the supplier receipt", "AI extracts all items and quantities", "Print QR shelf labels automatically", "Track usage with real-time analytics"],
            tags: ["AI Receipt Extraction", "QR Labels", "Barcode Scan", "Analytics"],
            mockup: <CafeUI />,
        },
    },
    {
        id: "home",
        label: "Home & Personal",
        content: {
            category: "Pantry Management",
            heading: "Never run out of the essentials.",
            description: "Scan grocery barcodes as you unpack and Fluyte adds everything automatically. Get low-stock alerts before your next trip and share with the whole household.",
            steps: ["Scan barcodes as groceries arrive", "Items added instantly with location", "Low-stock alerts before shopping", "Shared across the whole household"],
            tags: ["Barcode Scanning", "Low Stock Alerts", "AI Receipt Scan", "Multi-user"],
            mockup: <HomeUI />,
        },
    },
    {
        id: "smb",
        label: "Small Business",
        content: {
            category: "Shop Inventory",
            heading: "Compare vendors. Order smarter.",
            description: "Fluyte detects low stock and auto-builds purchase orders from your vendor list. Compare supplier prices side-by-side before committing, then print the PO in one click.",
            steps: ["Add suppliers with pricing and contacts", "Fluyte flags low and out-of-stock items", "Smart Purchasing ranks vendors by price", "Finalize and print the purchase order"],
            tags: ["Smart Purchasing", "Vendor Management", "Order Builder", "AI Receipt Scan"],
            mockup: <SmallBizUI />,
        },
    },
    {
        id: "retail",
        label: "Retail",
        content: {
            category: "Multi-Location Retail",
            heading: "One dashboard. Every location.",
            description: "Run stock counts at multiple store locations and see everything in one place. Analytics surface fastest movers, stockouts, and reorder points across every branch.",
            steps: ["Set up each store as a location", "Staff scan items with their phones", "Real-time totals sync across all sites", "Analytics show movers and gaps"],
            tags: ["Multi-Location", "Real-time Analytics", "QR Scanning", "Team Access"],
            mockup: <RetailUI />,
        },
    },
];

const DURATION = 5000;
const TICK = 50;

export default function UseCases() {
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);
    const pausedRef = useRef(false);
    const elapsedRef = useRef(0);
    const activeRef = useRef(0);

    const goTo = useCallback((i: number) => {
        activeRef.current = i;
        elapsedRef.current = 0;
        setActive(i);
        setProgress(0);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            if (pausedRef.current) return;
            elapsedRef.current += TICK;
            const pct = Math.min((elapsedRef.current / DURATION) * 100, 100);
            setProgress(pct);
            if (elapsedRef.current >= DURATION) {
                elapsedRef.current = 0;
                const next = (activeRef.current + 1) % TABS.length;
                activeRef.current = next;
                setActive(next);
                setProgress(0);
            }
        }, TICK);
        return () => clearInterval(interval);
    }, []);

    const tab = TABS[active];
    const c = tab.content;

    return (
        <section className="home-xenor-typography relative w-full border-t border-[var(--border)] py-20 sm:py-28 px-5">
            <div className="max-w-[1100px] mx-auto" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

                {/* heading */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "14px" }} data-aos="fade-up">
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "5px 14px", borderRadius: "999px", border: "1px solid var(--border-strong)", background: "var(--surface)" }}>
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--brand)", display: "inline-block" }} />
                        <span className="section-heading-badge-text" style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>Use Cases</span>
                    </div>
                    <h2
                        className="section-heading-title text-[clamp(28px,4.5vw,52px)] font-black text-[var(--text)] leading-[1.05] tracking-tight max-w-2xl"
                    >
                        Works for teams of all kinds
                    </h2>
                    <p className="section-heading-subtitle" style={{ fontSize: "15px", color: "var(--text-muted)", maxWidth: "440px", lineHeight: 1.65 }}>
                        From a home pantry to a multi-location retail chain — Fluyte adapts to how you track inventory.
                    </p>
                </div>

                {/* tabs */}
                <div
                    style={{ display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", justifyContent: "center" }}
                    onMouseEnter={() => { pausedRef.current = true; }}
                    onMouseLeave={() => { pausedRef.current = false; }}
                >
                    {TABS.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => goTo(i)}
                            className="section-heading-subtitle"
                            style={{
                                position: "relative",
                                fontSize: "13px",
                                fontWeight: i === active ? 500 : 400,
                                padding: "8px 16px",
                                borderRadius: "var(--radius-sm)",
                                border: `1px solid ${i === active ? "var(--border-strong)" : "var(--border)"}`,
                                color: i === active ? "var(--text)" : "var(--text-muted)",
                                background: i === active ? "var(--surface)" : "transparent",
                                cursor: "pointer",
                                transition: "all 0.2s",
                                overflow: "hidden",
                            }}
                            onMouseEnter={e => {
                                if (i !== active) {
                                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
                                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border-strong)";
                                }
                            }}
                            onMouseLeave={e => {
                                if (i !== active) {
                                    (e.currentTarget as HTMLButtonElement).style.color = "var(--text-muted)";
                                    (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                                }
                            }}
                        >
                            {t.label}
                            {i === active && (
                                <span
                                    style={{
                                        position: "absolute",
                                        bottom: 0,
                                        left: 0,
                                        height: "2px",
                                        width: `${progress}%`,
                                        background: "var(--brand)",
                                        transition: `width ${TICK}ms linear`,
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* panel */}
                <div
                    key={tab.id}
                    className="usecase-panel"
                    data-aos="fade-up"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        borderRadius: "var(--radius-lg)",
                        border: "1px solid var(--border-strong)",
                        background: "var(--surface)",
                        overflow: "hidden",
                        animation: "usecaseFade 0.25s ease",
                    }}
                    onMouseEnter={() => { pausedRef.current = true; }}
                    onMouseLeave={() => { pausedRef.current = false; }}
                >
                    {/* left */}
                    <div className="usecase-left" style={{ padding: "36px 40px", display: "flex", flexDirection: "column", gap: "20px", borderRight: "1px solid var(--border)" }}>

                        <span
                            className="section-heading-badge-text"
                            style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: "4px", width: "fit-content", background: "var(--brand-muted)", color: "var(--brand)" }}
                        >
                            {c.category}
                        </span>

                        <h3
                            className="section-heading-title"
                            style={{ fontSize: "clamp(18px, 2.2vw, 24px)", fontWeight: 700, color: "var(--text)", lineHeight: 1.2, letterSpacing: "-0.02em" }}
                        >
                            {c.heading}
                        </h3>

                        <p className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.7 }}>
                            {c.description}
                        </p>

                        <ol style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0, margin: 0 }}>
                            {c.steps.map((step, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                                    <span
                                        className="section-heading-badge-text"
                                        style={{ width: "18px", height: "18px", borderRadius: "4px", fontSize: "9px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px", background: "var(--brand-muted)", color: "var(--brand)" }}
                                    >
                                        {i + 1}
                                    </span>
                                    <span className="section-heading-subtitle" style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.6 }}>{step}</span>
                                </li>
                            ))}
                        </ol>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "16px", borderTop: "1px solid var(--border)" }}>
                            {c.tags.map((tag) => (
                                <span key={tag} className="section-heading-subtitle" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-strong)", color: "var(--text-muted)", background: "var(--bg)" }}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* right — mockup */}
                    <div className="usecase-right" style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "center", background: "var(--surface-2)" }}>
                        {/* browser chrome */}
                        <div style={{ borderRadius: "var(--radius)", border: "1px solid var(--border-strong)", overflow: "hidden", background: "var(--surface)" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 12px", borderBottom: "1px solid var(--border)", background: "var(--surface-2)" }}>
                                <div style={{ display: "flex", gap: "5px" }}>
                                    {["#ff5f57", "#ffbd2e", "#28c840"].map((clr) => (
                                        <div key={clr} style={{ width: "8px", height: "8px", borderRadius: "50%", background: clr }} />
                                    ))}
                                </div>
                                <div style={{ flex: 1, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "4px", padding: "3px 10px", fontSize: "10px", color: "var(--text-dim)", fontFamily: "monospace" }}>
                                    app.fluyte.com/inventory
                                </div>
                            </div>
                            <div style={{ padding: "4px" }}>{c.mockup}</div>
                        </div>
                    </div>
                </div>

                {/* dots */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                    {TABS.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => goTo(i)}
                            aria-label={t.label}
                            style={{ background: "none", border: "none", padding: "4px", cursor: "pointer" }}
                        >
                            <div
                                style={{
                                    borderRadius: "999px",
                                    height: "5px",
                                    width: i === active ? "20px" : "5px",
                                    background: i === active ? "var(--brand)" : "var(--border-strong)",
                                    transition: "all 0.3s ease",
                                }}
                            />
                        </button>
                    ))}
                </div>

            </div>

            <style>{`
                @keyframes usecaseFade {
                    from { opacity: 0; transform: translateY(5px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @media (max-width: 768px) {
                    .usecase-panel {
                        grid-template-columns: 1fr !important;
                    }
                    .usecase-left {
                        padding: 24px 20px !important;
                        border-right: none !important;
                        border-bottom: 1px solid var(--border);
                    }
                    .usecase-right {
                        padding: 16px !important;
                    }
                }
            `}</style>
        </section>
    );
}