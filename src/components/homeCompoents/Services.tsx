"use client";

const services = [
    {
        number: "01",
        title: "SaaS Product Development",
        description:
            "End to end SaaS platforms built for scale. Architecture, backend, frontend, deployment  I own the full product, not just features.",
        icon: (
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="22" width="32" height="20" rx="2" stroke="#0F8CA0" strokeWidth="1.2" />
                <path d="M18 22V16a8 8 0 0116 0v6" stroke="#0F8CA0" strokeWidth="1.2" strokeLinecap="round" />
                <rect x="22" y="30" width="8" height="5" rx="1" stroke="#0F8CA0" strokeWidth="1.2" />
                <path d="M10 28h32" stroke="#0F8CA0" strokeWidth="1.2" strokeOpacity="0.4" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "AI Integration & Automation",
        description:
            "RAG pipelines, LLM integrations, copilots, semantic search, and workflow automation  built to ship and work in production.",
        icon: (
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="26" cy="26" r="7" stroke="#0F8CA0" strokeWidth="1.2" />
                <circle cx="26" cy="10" r="3" stroke="#0F8CA0" strokeWidth="1.2" />
                <circle cx="26" cy="42" r="3" stroke="#0F8CA0" strokeWidth="1.2" />
                <circle cx="10" cy="26" r="3" stroke="#0F8CA0" strokeWidth="1.2" />
                <circle cx="42" cy="26" r="3" stroke="#0F8CA0" strokeWidth="1.2" />
                <path d="M26 19v-6M26 39v-6M19 26h-6M39 26h-6" stroke="#0F8CA0" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Full Stack Development",
        description:
            "Fast, clean, production ready code across the entire stack. APIs, dashboards, auth systems, real time features  built right.",
        icon: (
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="12" width="36" height="28" rx="3" stroke="#0F8CA0" strokeWidth="1.2" />
                <path d="M8 19h36" stroke="#0F8CA0" strokeWidth="1.2" strokeOpacity="0.4" />
                <path d="M18 28l-4 3 4 3M34 28l4 3-4 3" stroke="#0F8CA0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M24 34l4-8" stroke="#0F8CA0" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.6" />
            </svg>
        ),
    },
];

export default function Services() {
    return (
        <section id="services" className="py-10 md:py-18 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4"
                >
                    <div>
                        <span className="font-['Aldrich',sans-serif] text-[11px] tracking-[0.25em] uppercase text-[#0F8CA0] mb-3 block">
                            Services
                        </span>
                        <h2
                            className="font-['Aldrich',sans-serif] text-[#0f0f0f] leading-tight"
                            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                        >
                            What I do.
                        </h2>
                    </div>
                    <p className="font-['Space_Grotesk',sans-serif] text-[13px] text-[#434343] md:text-right">
                        Focused on three things. No generalist fluff.
                    </p>
                </div>

                {/* 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {services.map((service, i) => (
                        <div
                            key={service.number}
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={i * 100}
                            className="group flex flex-col gap-8 p-8 border-l border-black/[0.07] hover:border-[#0F8CA0]/30 transition-all duration-300 cursor-default"
                        >
                            {/* Number */}
                            <span className="font-['Aldrich',sans-serif] text-[12px] tracking-[0.2em] text-[#0F8CA0]/50 group-hover:text-[#0F8CA0] transition-colors duration-300">
                                {service.number}
                            </span>

                            {/* Icon */}
                            <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                                {service.icon}
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-3">
                                <h3 className="font-['Aldrich',sans-serif] text-[#0f0f0f] text-[24px] leading-snug font-medium">
                                    {service.title}
                                </h3>
                                <p className="font-['Space_Grotesk',sans-serif] text-[15px] text-[#434343] leading-[1.8]">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}