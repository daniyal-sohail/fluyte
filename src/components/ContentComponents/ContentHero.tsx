"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ContentHero() {
    return (
        <div className="flex flex-col overflow-hidden bg-grid-white/[0.08] mt-32 sm:mt-20 md:mt-48 lg:mt-8">
            <div
                className={cn(
                    "absolute inset-0 w-full h-full top-0",
                    "bg-[size:80px_80px]",
                    "bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]",
                    "opacity-25 z-0"
                )}
            />

            <ContainerScroll
                titleComponent={
                    <>
                        <div className="px-4 py-8  md:py-10 relative mt-32 sm:mt-20 md:mt-48 lg:mt-8">
                            <div className="blur1"></div>
                            <h1 className="z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">

                                {"Turning Tech Struggles into Simple Solutions — Fast, Clear, and Real"
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: index * 0.1,
                                                ease: "easeInOut",
                                            }}
                                            className="mr-2 inline-block"
                                        >
                                            {word}
                                        </motion.span>
                                    ))}
                            </h1>
                            <motion.p
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: 0.8,
                                }}
                                className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
                            >
                                I make tech videos that solve real problems I've faced myself. No fluff — just clear, simple guides to help you fix issues and learn quicker.
                            </motion.p>
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 0.3,
                                    delay: 1,
                                }}
                                className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
                            >
                                <button className="w-48 transform rounded-lg bg-[#3BBAB6] px-4 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3BBAB6] hover:cursor-pointer">
                                    Watch My Content
                                </button>

                                <button className="w-48 transform rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 cursor-pointer">
                                    Lets Collaborate
                                </button>
                            </motion.div>
                        </div>
                    </>
                }
            />
        </div>
    );
}