"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative mt-4 overflow-hidden flex flex-col">
            {/* Grain texture */}
            <div
                className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                    backgroundSize: "128px",
                }}
            />

            <div data-aos="fade-in"
                data-aos-duration="600"
                data-aos-delay="100" className="flex-1 flex flex-col justify-center relative">

                {/* Top meta row */}
                <div
                    data-aos="fade-down"
                    data-aos-duration="600"
                    className="absolute top-[88px] left-0 right-0 md:left-12 md:right-auto z-20 flex justify-center md:justify-start items-center gap-2 px-6 md:px-0"
                >
                    <span className="relative flex h-[8px] w-[8px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F8CA0] opacity-50" />
                        <span className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[#0F8CA0]" />
                    </span>
                    <span className="font-['Space_Grotesk',sans-serif] text-[12px] text-[#6a6a6a] tracking-widest uppercase">
                        Available for work
                    </span>
                </div>

                {/* Microsoft badge — desktop only */}
                <div
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay="100"
                    className="hidden md:flex absolute top-[88px] right-12 z-20 items-center gap-2 border border-black/[0.08] rounded-full px-4 py-[6px] bg-white/60 backdrop-blur-sm"
                >
                    <svg width="14" height="14" viewBox="0 0 21 21" fill="none">
                        <rect width="10" height="10" fill="#F25022" />
                        <rect x="11" width="10" height="10" fill="#7FBA00" />
                        <rect y="11" width="10" height="10" fill="#00A4EF" />
                        <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
                    </svg>
                    <span className="font-['Space_Grotesk',sans-serif] text-[11px] text-[#6a6a6a] tracking-wide">
                        Microsoft for Startups
                    </span>
                </div>

                {/* ── DESKTOP layout ── */}
                <div className="hidden md:flex relative items-center justify-center px-12 mt-16">

                    {/* LEFT */}
                    <div className="flex-1 flex flex-col items-end pr-8 gap-2">
                        <span
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-delay="100"
                            className="font-['Aldrich',sans-serif] font-normal leading-none text-[#0f0f0f] select-none"
                            style={{ fontSize: "clamp(52px, 8vw, 120px)", letterSpacing: "-0.02em" }}
                        >
                            FULL
                        </span>
                        <span
                            data-aos="fade-right"
                            data-aos-duration="700"
                            data-aos-delay="200"
                            className="font-['Aldrich',sans-serif] font-normal leading-none text-[#0f0f0f] select-none"
                            style={{ fontSize: "clamp(52px, 8vw, 120px)", letterSpacing: "-0.02em" }}
                        >
                            STACK
                        </span>
                    </div>

                    {/* CENTER — Photo */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="700"
                        data-aos-delay="150"
                        className="relative flex-shrink-0 w-[280px] lg:w-[340px]"
                    >
                        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                            <Image
                                src="/img/daniyal5.png"
                                alt="Daniyal Sohail"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0f0f0f] text-[#F2F1F0] font-['Space_Grotesk',sans-serif] text-[11px] tracking-widest uppercase px-4 py-2 rounded-lg">
                            Daniyal Sohail
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex-1 flex flex-col items-start pl-8 gap-2">
                        <span
                            data-aos="fade-left"
                            data-aos-duration="700"
                            data-aos-delay="100"
                            className="font-['Aldrich',sans-serif] font-normal leading-none text-[#0f0f0f] select-none"
                            style={{ fontSize: "clamp(52px, 8vw, 120px)", letterSpacing: "-0.02em" }}
                        >
                            DEVEL
                        </span>
                        <span
                            data-aos="fade-left"
                            data-aos-duration="700"
                            data-aos-delay="200"
                            className="font-['Aldrich',sans-serif] font-normal leading-none text-[#0f0f0f] select-none"
                            style={{ fontSize: "clamp(52px, 8vw, 120px)", letterSpacing: "-0.02em" }}
                        >
                            OPER
                        </span>
                    </div>
                </div>

                {/* ── MOBILE layout ── */}
                <div className="flex md:hidden flex-col items-center px-6 pt-28 pb-4 gap-6">

                    {/* Photo */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="relative w-[180px]"
                    >
                        <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                            <Image
                                src="/img/daniyal5.png"
                                alt="Daniyal Sohail"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#0f0f0f] text-[#F2F1F0] font-['Space_Grotesk',sans-serif] text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-lg">
                            Daniyal Sohail
                        </div>
                    </div>

                    {/* Big title */}
                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                        className="mt-6 text-center"
                    >
                        <p className="font-['Aldrich',sans-serif] font-normal leading-none text-[#0f0f0f] select-none text-[13vw] tracking-tight">
                            FULL STACK
                        </p>
                        <p className="font-['Aldrich',sans-serif] font-normal leading-none text-[#0f0f0f] select-none text-[13vw] tracking-tight">
                            DEVELOPER
                        </p>
                    </div>
                </div>

                {/* Bottom row — desktop */}
                <div className="hidden md:flex flex-row items-end justify-between px-12 mt-[-10px] pb-10 gap-6">
                    <div

                        className="max-w-[360px]"
                    >
                        <p className="font-['Space_Grotesk',sans-serif] text-[14px] text-[#434343] leading-relaxed">
                            I help founders turn ideas into AI powered products
                            from zero to production ready SaaS, fast and scalable.
                        </p>
                    </div>
                    <div

                        className="flex items-center gap-3"
                    >
                        <Link
                            href="https://calendly.com/daniyalsohaildev"
                            target="_blank"
                            className="font-['Space_Grotesk',sans-serif] text-[13px] font-medium bg-[#0f0f0f] text-[#F2F1F0] px-6 py-2 rounded-lg hover:bg-[#0F8CA0] transition-colors duration-200 tracking-wide"
                        >
                            Schedule Meeting
                        </Link>
                    </div>
                </div>

                {/* Bottom row — mobile */}
                <div className="flex md:hidden flex-col px-6 pb-10 gap-5 mt-2">
                    <p
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                        className="font-['Space_Grotesk',sans-serif] text-[13px] text-[#434343] leading-relaxed"
                    >
                        I help founders turn ideas into AI powered products
                        from zero to production ready SaaS, fast and scalable.
                    </p>
                    <Link
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="300"
                        href="https://calendly.com/daniyalsohaildev"
                        target="_blank"
                        className="font-['Space_Grotesk',sans-serif] text-[13px] font-medium bg-[#0f0f0f] text-[#F2F1F0] px-6 py-3 rounded-lg hover:bg-[#0F8CA0] transition-colors duration-200 tracking-wide text-center"
                    >
                        Schedule Meeting
                    </Link>
                </div>

            </div>
        </section>
    );
}