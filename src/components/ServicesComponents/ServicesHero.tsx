"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Spotlight } from "../ui/spotlight-new";
import CTA from "../Common/CTA";
import { SectionButton } from "../Common/SectionButton";

export default function ServicesHero(): React.ReactElement {
    return (
        <section
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
            className="flex justify-center items-center w-full min-h-screen relative overflow-hidden"
        >
            {/* Grid background */}
            <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className={cn(
                    "absolute inset-0 w-full h-full top-0",
                    "bg-[size:60px_60px]",
                    "bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)]",
                    "opacity-30 z-0"
                )}
            />

            {/* Multiple Spotlight effects for more dynamic lighting */}
            <div
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
                className="absolute inset-0 z-[1] pointer-events-none"
            >
                <Spotlight />
            </div>


            {/* Main content with proper z-index */}
            <div
                data-aos="slide-up"
                data-aos-duration="800"
                data-aos-delay="400"
                className="w-full max-w-[1800px] px-4 sm:px-8 md:px-12 lg:px-20 2xl:px-32 py-10 sm:mt-18 relative z-[2] mt-6"
            >
                {/* Service status indicator */}
                <div
                    data-aos="fade-down"
                    data-aos-duration="600"
                    data-aos-delay="500"
                    className="flex justify-center items-center mb-1"
                >
                    <SectionButton btnText={"Professional Services Available"} href={"https://www.upwork.com/freelancers/~01341fed9cb414c4ac"} />
                </div>

                <div
                    data-aos="fade-in"
                    data-aos-duration="800"
                    data-aos-delay="600"
                    className="text-center mx-auto"
                >
                    {/* Main heading - services focused */}
                    <h1
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay="700"
                        className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight mb-6 md:mb-8 text-white"
                    >
                        Comprehensive
                        <span
                            data-aos="zoom-in"
                            data-aos-duration="800"
                            data-aos-delay="800"
                            className="bg-gradient-to-r from-[#3BBAB6]  to-cyan-400 bg-clip-text text-transparent mx-4"
                        >
                            Digital Solutions
                        </span>
                        <div
                            data-aos="slide-up"
                            data-aos-duration="700"
                            data-aos-delay="900"
                            className="text-transparent mt-2"
                            style={{
                                WebkitTextStroke: '0.5px white',
                                lineHeight: '1.1'
                            }}>
                            Tailored for Your Business Success
                        </div>
                    </h1>


                    {/* CTA Button */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="600"
                        data-aos-delay="1000"
                        className=""
                    >
                        <CTA className="items-center justify-center" />
                    </div>
                </div>
            </div>

            {/* Bottom blur shadow/fade effect */}
            {/* Left blur shadow/fade effect */}
            <div
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="1100"
                className="absolute left-0 top-0 bottom-0 w-0 sm:w-16 z-[3] pointer-events-none bg-gradient-to-r from-black via-black/80  to-transparent"
            />

            {/* Right blur shadow/fade effect */}
            <div
                data-aos="fade-in"
                data-aos-duration="800"
                data-aos-delay="1200"
                className="absolute right-0 top-0 bottom-0 w-0 sm:w-16 z-[3] pointer-events-none bg-gradient-to-l from-black via-black/80 to-transparent"
            />
        </section>
    );
}