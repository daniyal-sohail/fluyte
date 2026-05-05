"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="pt-12 md:pt-18 pb-10 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto">

                {/* Big CTA */}
                <div className="mb-16 md:mb-24">
                    <span className="font-['Aldrich',sans-serif] text-[11px] tracking-[0.25em] uppercase text-[#0F8CA0] mb-6 block">
                        Get In Touch
                    </span>
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10">
                        <h2
                            className="font-['Aldrich',sans-serif] text-[#0f0f0f] leading-[1.05]"
                            style={{ fontSize: "clamp(36px, 6vw, 88px)" }}
                        >
                            Got an idea? <br />
                            <span className="text-[#0F8CA0]"> Let&apos;s ship it.</span>
                        </h2>
                        <div className="flex flex-col gap-3 md:pb-2">
                            <Link
                                href="mailto:daniyalsohaildev@gmail.com"
                                target="_blank"
                                className="font-['Space_Grotesk',sans-serif] text-[13px] font-medium bg-[#0f0f0f] text-[#F2F1F0] px-7 py-4 rounded-full hover:bg-[#0F8CA0] transition-colors duration-200 tracking-wide text-center"
                            >
                                daniyalsohaildev@gmail.com
                            </Link>
                            <Link
                                href="https://linkedin.com/in/mdaniyal-sohail"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-['Space_Grotesk',sans-serif] text-[13px] font-medium border border-black/[0.12] text-[#0f0f0f] px-7 py-4 rounded-full hover:border-[#0F8CA0] hover:text-[#0F8CA0] transition-colors duration-200 tracking-wide text-center"
                            >
                                LinkedIn
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/[0.07] mb-10 md:mb-12" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8">

                    {/* Left — name + links */}
                    <div className="flex flex-col gap-4">
                        <p className="font-['Aldrich',sans-serif] text-[#0f0f0f] text-[15px]">
                            Daniyal Sohail
                        </p>
                        {/* Desktop: single row — Mobile: 2 rows wrapped */}
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                            {[
                                { label: "GitHub", href: "https://github.com/daniyal-sohail" },
                                { label: "LinkedIn", href: "https://linkedin.com/in/mdaniyal-sohail" },
                                { label: "XenorAI", href: "https://xenorai.com" },
                                { label: "DevXcript", href: "https://devxcript.com" },
                                { label: "Content Creation", href: "https://www.instagram.com/daniyal__sohail/" },
                            ].map((l) => (
                                <Link
                                    key={l.label}
                                    href={l.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-['Space_Grotesk',sans-serif] text-[12px] text-[#434343] hover:text-[#0F8CA0] transition-colors duration-200"
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Right — copyright */}
                    <div className="flex flex-col items-start md:items-end gap-3">
                        <p className="font-['Space_Grotesk',sans-serif] text-[12px] text-[#434343]">
                            © {new Date().getFullYear()} daniyalsohail.me
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}