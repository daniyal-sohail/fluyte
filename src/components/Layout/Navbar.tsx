"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { label: "Work", href: "#projects" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-[#F2F1F0]/90 backdrop-blur-sm  shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-[1200px] mx-auto px-6 h-[60px] flex items-center justify-between">
                {/* Logo / Name */}
                <Link
                    href="/"
                    className="font-['Aldrich',sans-serif] text-[15px] tracking-wide text-[#0f0f0f] hover:text-[#0F8CA0] transition-colors duration-200"
                >
                    Daniyal Sohail
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="font-['Space_Grotesk',sans-serif] text-[15px] font-medium text-[#6a6a6a] hover:text-[#0F8CA0] transition-colors duration-200 tracking-wide"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <a
                    href="mailto:daniyalsohaildev@gmail.com"
                    className="hidden md:inline-flex items-center gap-2 bg-[#0f0f0f] text-[#F2F1F0] font-['Space_Grotesk',sans-serif] text-[13px] font-medium px-6 py-2 rounded-lg hover:bg-[#0F8CA0] transition-colors duration-200 tracking-wide"
                >
                    Hire Me
                </a>

                {/* Mobile — location tag */}
                <div className="md:hidden flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" fill="#0F8CA0" />
                    </svg>
                    <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#6a6a6a] tracking-wide">
                        Lahore, Pakistan
                    </span>
                </div>
            </div>
        </nav>
    );
}