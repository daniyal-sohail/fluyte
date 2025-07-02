"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Spotlight } from "../ui/spotlight-new";
import CTA from "../Common/CTA";
import { SectionButton } from "../Common/SectionButton";

export default function HeroSection(): React.ReactElement {
    return (
        <section className="flex justify-center items-center w-full min-h-screen relative overflow-hidden">
            {/* Grid background */}

            {/* Spotlight positioned absolutely */}
            <div className="absolute inset-0 z-[1] pointer-events-none">
                <Spotlight />
            </div>

            <div
                className={cn(
                    "absolute inset-0 w-full h-full top-0",
                    "bg-[size:80px_80px]",
                    "bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]",
                    "opacity-30 z-0"
                )}
            />
            {/* Main content with proper z-index */}
            <div className="w-full max-w-[1800px] px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-32 py-10 sm:mt-18 relative z-[2] mt-6">
                {/* "Available for work" button */}
                <div className="flex justify-center items-center">
                    <SectionButton btnText={"Available for work"} href={"https://www.upwork.com/freelancers/~01341fed9cb414c4ac"} />
                </div>

                <div className="text-center mx-auto">
                    {/* Main heading - larger on big screens */}
                    <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className="text-4xl sm:text-3xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold leading-snug sm:leading-snug md:leading-tight xl:leading-tight mb-6 md:mb-8 text-white">
                        I&apos;m Daniyal Sohail, a passionate & dedicated
                        <div
                            data-aos="fade-up" data-aos-duration="700" data-aos-delay="200"
                            className="text-transparent leading-normal sm:leading-normal md:leading-tight"
                            style={{
                                WebkitTextStroke: '0.5px white',
                            }}
                        >
                            MERN Stack Developer and UI/UX Designer.
                        </div>
                    </h1>

                    {/* CTA Button */}

                    <CTA className="items-center justify-center" />
                </div>
            </div>

            {/* Bottom blur shadow/fade effect */}
            {/* Left blur shadow/fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-0 sm:w-16 z-[3] pointer-events-none bg-gradient-to-r from-black via-black/80  to-transparent" />

            {/* Right blur shadow/fade effect */}
            <div className="absolute right-0 top-0 bottom-0 w-0 sm:w-16 z-[3] pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent" />
        </section>
    );
}