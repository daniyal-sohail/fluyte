"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        index: "01",
        tag: "SaaS · AI",
        badge: "Live · Early Access",
        name: "XenorAI",
        description:
            "An AI-powered sales and email automation agent that learns your business, captures leads from your website, and follows up automatically  so you never lose a potential client again.",
        image: "/img/xenorai-mockup.png",
        live: "https://xenorai.com",
        accent: true,
    },
    {
        index: "02",
        tag: "AI · Productivity",
        badge: "Developer Tool",
        name: "AI Project Planner",
        description:
            "Describe your idea and get a complete end-to-end user flow diagram, tech stack recommendations, and a fully structured plan with modules and sprints  all generated in seconds.",
        image: "/img/ai-mockup.png",
        live: "#",
        accent: false,
    },
];

export default function Portfolio() {
    return (
        <section id="projects" className="py-10 md:py-18 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto">

                {/* Header */}
                <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="flex items-end justify-between mb-12"
                >
                    <div>
                        <span className="font-['Aldrich',sans-serif] text-[11px] tracking-[0.25em] uppercase text-[#0F8CA0] mb-2 block">
                            Projects
                        </span>
                        <h2
                            className="font-['Aldrich',sans-serif] text-[#0f0f0f] leading-tight"
                            style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
                        >
                            Things I&apos;ve shipped.
                        </h2>
                    </div>
                    <p className="font-['Space_Grotesk',sans-serif] text-[12px] text-[#434343] hidden md:block">
                        Real products, built end-to-end.
                    </p>
                </div>

                {/* Cards — side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects.map((project, i) => (
                        <div
                            key={project.index}
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay={i * 100}
                            className="group flex flex-col rounded-2xl overflow-hidden border border-black/[0.07] bg-[#ECEAE9] hover:border-[#0F8CA0]/30 transition-colors duration-300"
                        >
                            {/* Mockup */}
                            <div className="relative h-[250px] overflow-hidden bg-[#E0DEDC]">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover object-top group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#ECEAE9] to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col gap-4">

                                {/* Meta */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="font-['Aldrich',sans-serif] text-[11px] tracking-widest text-[#0F8CA0]">
                                            {project.index}
                                        </span>
                                        <span className="w-px h-3 bg-black/10" />
                                        <span className="font-['Space_Grotesk',sans-serif] text-[10px] tracking-[0.15em] uppercase text-[#6a6a6a] hidden md:block">
                                            {project.tag}
                                        </span>
                                    </div>
                                    <span
                                        className={`font-['Space_Grotesk',sans-serif] text-[10px] rounded-full px-3 py-[3px] border ${project.accent
                                            ? "text-[#0F8CA0] border-[#0F8CA0]/25 bg-[#0F8CA0]/[0.06]"
                                            : "text-[#6a6a6a] border-black/[0.08]"
                                            }`}
                                    >
                                        {project.badge}
                                    </span>
                                </div>

                                {/* Name + desc */}
                                <div>
                                    <h3 className="font-['Aldrich',sans-serif] text-[#0f0f0f] text-[25px] leading-tight mb-2 font-medium">
                                        {project.name}
                                    </h3>
                                    <p className="font-['Space_Grotesk',sans-serif] text-[15px] text-[#434343] leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>

                                {/* CTA */}
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`self-start inline-flex items-center gap-2 font-['Space_Grotesk',sans-serif] text-[12px] font-medium px-5 py-2.5 rounded-full transition-all duration-200 mt-1 ${project.accent
                                        ? "bg-[#0f0f0f] text-white hover:bg-[#0F8CA0]"
                                        : "border border-black/[0.12] text-[#0f0f0f] hover:border-[#0F8CA0] hover:text-[#0F8CA0]"
                                        }`}
                                >
                                    {project.accent ? "Visit Live Site" : "Coming Soon"}
                                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                        <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}