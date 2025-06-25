"use client";
import React from "react";
import Link from "next/link";

interface SectionButtonProps {
    btnText: string;
    href?: string;
    onClick?: () => void;
}

export function SectionButton({ btnText, href, onClick }: SectionButtonProps) {
    const buttonContent = (
        <>
            {/* Enhanced background gradient with multiple layers */}
            <span className="absolute inset-0 overflow-hidden rounded-full">
                {/* Primary radial gradient */}
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.8)_0%,rgba(56,189,248,0.3)_50%,rgba(56,189,248,0)_75%)] opacity-0 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-110"></span>

                {/* Secondary shimmer effect */}
                <span className="absolute inset-0 rounded-full bg-[image:conic-gradient(from_0deg_at_50%_50%,rgba(56,189,248,0)_0deg,rgba(56,189,248,0.4)_60deg,rgba(56,189,248,0)_120deg)] opacity-0 transition-all duration-1000 ease-out group-hover:opacity-60 group-hover:animate-spin"></span>

                {/* Tertiary glow effect */}
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(circle_at_50%_50%,rgba(59,186,182,0.4)_0%,transparent_70%)] opacity-0 transition-all duration-500 ease-out group-hover:opacity-80"></span>
            </span>

            {/* Enhanced main button content */}
            <div className="relative flex space-x-3 items-center z-10 rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-900 py-2.5 px-8 ring-1 ring-white/20 transition-all duration-300 ease-out group-hover:ring-white/30 group-hover:shadow-lg group-hover:shadow-sky-500/25 group-active:scale-95">
                {/* Text with enhanced typography */}
                <span className="text-[15px] font-medium tracking-wide transition-all duration-300 ease-out group-hover:text-sky-100">
                    {btnText}
                </span>

                {/* Enhanced arrow with animation */}
                <div className="relative overflow-hidden">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-sky-300"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                        />
                    </svg>

                    {/* Arrow trail effect */}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute inset-0 transition-all duration-300 ease-out opacity-0 -translate-x-2 group-hover:opacity-40 group-hover:translate-x-0 text-sky-400"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M10.75 8.75L14.25 12L10.75 15.25"
                        />
                    </svg>
                </div>
            </div>

            {/* Enhanced bottom gradient line with animation */}
            <span className="absolute -bottom-0 left-[1.5rem] h-px w-[calc(100%-3rem)] bg-gradient-to-r from-transparent via-[#3BBAB6] to-transparent opacity-0 transition-all duration-500 ease-out group-hover:opacity-70 group-hover:shadow-[0_0_8px_rgba(59,186,182,0.6)]"></span>

            {/* Additional subtle glow line */}
            <span className="absolute -bottom-1 left-[2rem] h-[2px] w-[calc(100%-4rem)] bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 blur-sm transition-all duration-700 ease-out group-hover:opacity-40"></span>

            {/* Enhanced outer glow */}
            <span className="absolute inset-0 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:opacity-100 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent blur-xl"></span>
        </>
    );

    const className = "no-underline group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 text-white inline-block my-8 transition-all duration-300 ease-out hover:scale-105 active:scale-95 shadow-2xl shadow-zinc-900/50 hover:shadow-3xl hover:shadow-sky-900/30";

    if (href) {
        return (
            <Link href={href} className={className}>
                {buttonContent}
            </Link>
        );
    }

    return (
        <button className={className} onClick={onClick}>
            {buttonContent}
        </button>
    );
}