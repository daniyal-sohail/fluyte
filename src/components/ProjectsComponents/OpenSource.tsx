"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const products = [
    {
        name: "C++ Full Course",
        imgPath: "/img/port.png",
        url: "https://github.com/Daniyal169/Full-Cpp-Daniyal",
    },
    {
        name: "JavaScript Full Course",
        imgPath: "/img/port.png",
        url: "https://github.com/Daniyal169/Full_JavaScript",
    },
    {
        name: "JS Small Projects",
        imgPath: "/img/port.png",
        url: "https://github.com/Daniyal169/JavaScript-Small-Projects",
    },
    {
        name: "Attendance Dashboard",
        imgPath: "/img/port.png",
        url: "https://github.com/Daniyal169/AttendanceDashboard",
    },
    {
        name: "Ecommerce Frontend",
        imgPath: "/img/port.png",
        url: "https://github.com/Daniyal169/Frontend-Ecommerce",
    },
];


export default function OpenSourceSlider() {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        if (containerRef.current && scrollerRef.current) {
            const children = Array.from(scrollerRef.current.children) as HTMLLIElement[];
            children.forEach((child) => {
                scrollerRef.current!.appendChild(child.cloneNode(true));
            });

            containerRef.current.style.setProperty("--animation-direction", "forwards");
            containerRef.current.style.setProperty("--animation-duration", "30s");
            setStart(true);
        }
    }, []);

    return (
        <div className="w-full overflow-hidden bg-black rounded-xl my-10">
            <div
                ref={containerRef}
                className={cn(
                    "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                )}
            >
                <ul
                    ref={scrollerRef}
                    className={cn(
                        "flex min-w-full shrink-0 gap-8 md:gap-12 lg:gap-16 w-max flex-nowrap",
                        start && "animate-scroll",
                        "hover:[animation-play-state:paused]"
                    )}
                >
                    {products.map((item, idx) => (
                        <li
                            key={item.name + "-" + idx}
                            className="relative shrink-0 w-[250px] h-[160px] md:h-[200px] md:w-[300px] rounded-md overflow-hidden"
                        >
                            <Link href={item.url} target="_blank" rel="noopener noreferrer">
                                <div className="relative h-full w-full">
                                    <Image
                                        src={item.imgPath}
                                        alt={item.name}
                                        fill
                                        className="object-cover rounded-md"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 right-4 z-10">
                                        <span className="text-white text-sm md:text-base font-semibold">
                                            Get Code →
                                        </span>
                                    </div>
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
          animation: scroll var(--animation-duration, 30s) linear infinite var(--animation-direction, forwards);
        }
      `}</style>
        </div>
    );
}
