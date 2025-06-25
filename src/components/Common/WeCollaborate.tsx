"use client";
import React from "react";
import { SectionButton } from "../Common/SectionButton";
import {
    Handshake,
    Clock,
    Users,
    Rocket,
    Wrench
} from 'lucide-react';
import { GlowingEffect } from "../ui/glowing-effect";


export function WeCollaborate() {

    return (
        <div className="shadow-lg my-2 ">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"Build With Me"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-8 mt-2 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                    >
                        Here’s How  Effectively <span style={{ color: "#48D1CC" }}>We Collaborate</span> Effectively
                    </h1>

                </div>



                <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2 mt-8">
                    <GridItem
                        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                        icon={<Handshake className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Project-Based"
                        description="I handle your full project from planning to launch with complete ownership."
                    />

                    <GridItem
                        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                        icon={<Clock className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Hourly Engagement"
                        description="Work with me hourly or daily for flexible, ongoing support."
                    />

                    <GridItem
                        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                        icon={<Users className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Dedicated Team"
                        description="Collaborate with a focused team working only on your product."
                    />

                    <GridItem
                        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                        icon={<Rocket className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="MVP Development"
                        description="Let’s bring your idea to life quickly with a scalable MVP."
                    />

                    <GridItem
                        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                        icon={<Wrench className="h-4 w-4 text-black dark:text-neutral-400" />}
                        title="Maintenance & Support"
                        description="I offer post-launch fixes, updates, and long-term support for your product."
                    />
                </ul>



            </div>
        </div>
    );
}


interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div data-aos="slide-up" className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-[#4E15BF] text-[#4E15BF] p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-[#4E15BF] dark:text-white">
                                {title}
                            </h3>
                            <h2
                                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
                            >
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};