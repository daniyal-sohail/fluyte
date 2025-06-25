"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from 'next/link';

const clientsImg = [
    {
        name: "Fiverr",
        url: "https://www.fiverr.com/daniyal169",
        imgPath: "/img/fiverr.png"
    },
    {
        name: "Upwork",
        url: "https://www.upwork.com/freelancers/~01341fed9cb414c4ac",
        imgPath: "/img/upwork.png"
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniyalsohail169",
        imgPath: "/img/linkedin.png"
    },
    {
        name: "Freelancer",
        url: "https://www.upwork.com/freelancers/~01341fed9cb414c4ac",
        imgPath: "/img/freelancer.png"
    }
];

export default function RollingStats() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children) as HTMLLIElement[];

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true) as HTMLLIElement;
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            // Set animation properties
            containerRef.current.style.setProperty("--animation-direction", "forwards");
            containerRef.current.style.setProperty("--animation-duration", "25s");
            setStart(true);
        }
    }

    return (
        <div className="w-full overflow-hidden bg-black rounded-xl ">
            <div
                ref={containerRef}
                className={cn(
                    "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                )}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        "flex min-w-full shrink-0 gap-16 md:gap-20 lg:gap-24  w-max flex-nowrap",
                        start && "animate-scroll",
                        "hover:[animation-play-state:paused]"
                    )}
                >
                    {clientsImg.map((item, idx) => (
                        <li
                            key={item.name + '-' + idx}
                            className="relative shrink-0"
                        >
                            <Link
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block transition-opacity duration-300 hover:opacity-80"
                            >
                                <div className="relative w-[180px] h-[60px] md:w-[200px] lg:w-[220px]  flex items-center justify-center">
                                    <Image
                                        src={item.imgPath}
                                        alt={item.name}
                                        fill
                                        className="object-contain"
                                        style={{
                                            mixBlendMode: 'screen',
                                        }}
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-scroll {
                    animation: scroll var(--animation-duration, 25s) linear infinite var(--animation-direction, forwards);
                }
            `}</style>
        </div>
    );
}