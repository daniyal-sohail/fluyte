"use client";
import React from "react";
import { SectionButton } from "../Common/SectionButton";
import { WobbleCard } from "../ui/wobble-card";
import CTA from "../Common/CTA";

export function AboutSection() {

    return (
        <div className="shadow-lg my-6 rounded-[50px] bg-[#0f0f0f]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"About Me"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-2 mt-2 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl"
                    >
                        Get to  <span style={{ color: "#48D1CC" }}> know me</span> beyond the code
                    </h1>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-16">
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full min-h-[350px] sm:min-h-[300px] lg:min-h-[280px]"
                        className="bg-black border border-gray-800"
                    >
                        <div className="flex-1 lg:pr-8 xl:pr-12">
                            <div className="space-y-4 sm:space-y-6">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white leading-tight">
                                    From stunning{" "}
                                    <span className="bg-gradient-to-r text-[#3BBAB6] bg-clip-text ">
                                        FRONTEND
                                    </span>
                                    {" "}to powerful{" "}
                                    <span className="bg-gradient-to-r bg-clip-text text-[#3BBAB6]">
                                        BACKEND
                                    </span>
                                </h2>

                                <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl">
                                    I&apos;m Daniyal Sohail, a MERN Stack and Next.js developer. I build full websites from animated frontends with Framer Motion and GSAP, to backend development and deployment.
                                </p>

                                <p className="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl">
                                    Besides development, I&apos;m passionate about tech content creation, where I share tips, projects, and what I learn along the way.
                                </p>

                                <div className="pt-2">
                                    <CTA
                                        className="items-start justify-start"
                                        buttonText="Explore More"
                                    />
                                </div>
                            </div>
                        </div>
                    </WobbleCard>
                    <WobbleCard
                        containerClassName="col-span-1 min-h-[300px] bg-black"
                        className="bg-black z-[999]"
                        showNoise={true}
                    >
                        <h2 className="max-w-80 text-left text-balance text-3xl font-semibold tracking-[-0.015em] text-white">
                            Outside of tech, cricket has always been my emotional anchor  a game that shaped who I am and continues to inspire me beyond the screen.
                        </h2>

                    </WobbleCard>

                </div>
            </div>
        </div>
    );
}