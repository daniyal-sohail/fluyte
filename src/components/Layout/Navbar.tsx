"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const links = [
    { label: "Features", href: "#features" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Demo", href: "#demo" },
    { label: "How it works", href: "#how-it-works" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // Lock body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    const isDark = theme === "dark";

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[var(--surface)]/90 backdrop-blur-md shadow-sm "
                    : "bg-transparent"
                    }`}
            >
                <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/"
                        className="font-['Aldrich',sans-serif] text-[15px] tracking-wide text-[var(--text)] hover:text-[var(--brand)] transition-colors duration-200 z-10"
                    >
                        Fluyte
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="hidden md:flex items-center gap-8">
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="font-['Space_Grotesk',sans-serif] text-[14px] font-medium text-[var(--text-muted)] hover:text-[var(--brand)] transition-colors duration-200 tracking-wide"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Right */}
                    <div className="hidden md:flex items-center gap-3">
                        {/* Theme Toggle */}
                        {mounted && (
                            <button
                                onClick={() => setTheme(isDark ? "light" : "dark")}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-all duration-200 border border-transparent hover:border-[var(--border)]"
                                aria-label="Toggle theme"
                            >
                                {isDark ? (
                                    // Sun
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                ) : (
                                    // Moon
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                    </svg>
                                )}
                            </button>
                        )}

                        <a
                            href="#"
                            className="font-['Space_Grotesk',sans-serif] text-[13px] font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200 tracking-wide px-3 py-1.5"
                        >
                            Sign in
                        </a>

                        <a
                            href="#get-started"
                            className="inline-flex items-center gap-2 bg-[var(--brand)] text-white font-['Space_Grotesk',sans-serif] text-[13px] font-medium px-5 py-2 rounded-lg hover:bg-[var(--brand-dark)] transition-colors duration-200 tracking-wide"
                        >
                            Get Started Free
                        </a>
                    </div>

                    {/* Mobile Right — theme toggle + hamburger */}
                    < div className="md:hidden flex items-center gap-2" >
                        {mounted && (
                            <button
                                onClick={() => setTheme(isDark ? "light" : "dark")}
                                className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
                                aria-label="Toggle theme"
                            >
                                {isDark ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <circle cx="12" cy="12" r="5" />
                                        <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                    </svg>
                                )}
                            </button>
                        )
                        }

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="w-8 h-8 rounded-lg flex flex-col items-center justify-center gap-[5px] text-[var(--text)] hover:bg-[var(--surface-2)] transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block w-4 h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                                    }`}
                            />
                            <span
                                className={`block w-4 h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""
                                    }`}
                            />
                            <span
                                className={`block w-4 h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                                    }`}
                            />
                        </button>
                    </div>

                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                />

                {/* Drawer */}
                <div
                    className={`absolute top-0 right-0 h-full w-[280px] bg-[var(--surface)] border-l border-[var(--border)] transition-transform duration-300 ease-in-out flex flex-col ${menuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Drawer Header */}
                    <div className="h-[60px] flex items-center justify-between px-6 border-b border-[var(--border)]">
                        <span className="font-['Aldrich',sans-serif] text-[14px] tracking-wide text-[var(--text)]">
                            Menu
                        </span>
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-all duration-200"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Drawer Links */}
                    <ul className="flex flex-col px-4 py-6 gap-1 flex-1">
                        {links.map((link, i) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center gap-3 px-4 py-3 rounded-lg font-['Space_Grotesk',sans-serif] text-[15px] font-medium text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-all duration-200"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Drawer Footer CTAs */}
                    <div className="px-4 pb-8 flex flex-col gap-3">
                        <a
                            href="#"
                            className="flex items-center justify-center px-5 py-3 rounded-lg border border-[var(--border-strong)] font-['Space_Grotesk',sans-serif] text-[14px] font-medium text-[var(--text)] hover:bg-[var(--surface-2)] transition-all duration-200"
                        >
                            Sign in
                        </a>

                        <a
                            href="#get-started"
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center px-5 py-3 rounded-lg bg-[var(--brand)] font-['Space_Grotesk',sans-serif] text-[14px] font-medium text-white hover:bg-[var(--brand-dark)] transition-colors duration-200"
                        >
                            Get Started Free
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}