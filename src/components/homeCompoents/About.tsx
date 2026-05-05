"use client";

const stack = [
    "Next.js", "React.js", "Node.js", "Express.js",
    "FastApi", "MongoDB", "PostgreSQL", "NestJs",
    "TypeScript", "RAG Pipelines", "OpenAI API",
];

export default function About() {
    return (
        <section id="about" className="py-10 md:py-20 px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto">

                {/* Label */}
                <span
                    data-aos="fade-up"
                    data-aos-duration="500"
                    className="font-['Aldrich',sans-serif] text-[11px] tracking-[0.25em] uppercase text-[#0F8CA0] mb-10 block"
                >
                    About
                </span>

                {/* Editorial split */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-12 items-start">

                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                        className="md:col-span-6"
                    >
                        <h2
                            className="font-['Aldrich',sans-serif] text-[#0f0f0f] leading-[1.1] tracking-tight"
                            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
                        >
                            I build products{" "}
                            <span className="text-[#0F8CA0]">people actually use.</span>
                        </h2>
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                        className="md:col-span-6 md:pt-1"
                    >
                        <p className="font-['Space_Grotesk',sans-serif] text-[14px] text-[#434343] leading-[1.75] mb-4">
                            I&apos;m Daniyal  a SaaS Engineer and Full Stack Developer building products at the intersection of AI and real business problems. Currently shipping{" "}
                            <a
                                href="https://xenorai.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0f0f0f] border-b border-[#0F8CA0] hover:text-[#0F8CA0] transition-colors duration-200"
                            >
                                XenorAI
                            </a>
                            {" "} approved by Microsoft for Startups and accepted into Takhleeq Incubator.
                        </p>
                        <p className="font-['Space_Grotesk',sans-serif] text-[14px] text-[#434343] leading-[1.75]">
                            I move fast without cutting corners. Every product I ship is production ready, scalable, and built to last.
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-black/[0.07] my-6 md:my-12" />

                {/* Stats + Stack */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 gap-x-12 items-end">

                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                        className="md:col-span-7 grid grid-cols-3 gap-px bg-black/[0.07] border border-black/[0.07] rounded-sm overflow-hidden"
                    >
                        {[
                            { value: "15+", label: "Platforms Built" },
                            { value: "4+", label: "Clients Served" },
                            { value: "1", label: "Live SaaS Product" },
                        ].map((stat) => (
                            <div key={stat.label} className="bg-[#ECEAE9] p-5 md:p-6 flex flex-col gap-1">
                                <span
                                    className="font-['Aldrich',sans-serif] text-[#0f0f0f]"
                                    style={{ fontSize: "clamp(24px, 3vw, 42px)" }}
                                >
                                    {stat.value}
                                </span>
                                <span className="font-['Space_Grotesk',sans-serif] text-[11px] md:text-[12px] text-[#434343] leading-snug">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="200"
                        className="md:col-span-5"
                    >
                        <span className="font-['Space_Grotesk',sans-serif] text-[11px] tracking-[0.2em] uppercase text-[#6a6a6a] mb-3 block">
                            Core Stack
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="font-['Space_Grotesk',sans-serif] text-[12px] text-[#0f0f0f] border border-black/[0.10] rounded-full px-3 py-[5px] hover:border-[#0F8CA0] cursor-pointer hover:text-[#0F8CA0] transition-colors duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}