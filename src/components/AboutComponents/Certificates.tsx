"use client"
import React, { useState, useEffect } from 'react'
import { SectionButton } from '../Common/SectionButton';
import { cn } from "@/lib/utils";
import Image from 'next/image';
import Link from 'next/link';

const clientsImg = [
    {
        imgPath: "/img/certificates/one.jpeg",
        name: "certificate"
    },
    {
        imgPath: "/img/certificates/three.jpg",
        name: "certificate"
    },
    {
        imgPath: "/img/certificates/two.jpg",
        name: "certificate"
    },
    {
        imgPath: "/img/certificates/four.jpeg",
        name: "certificate"
    },
    {
        imgPath: "/img/certificates/five.jpeg",
        name: "certificate"
    },
    {
        imgPath: "/img/certificates/six.jpg",
        name: "certificate"
    }
];

function Certificates() {
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
        <div className="shadow-lg mb-8 mt-0">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
                {/* Heading */}

                <div className="w-full py-2 overflow-hidden bg-black rounded-xl mt-2 mb-8">
                    <div
                        ref={containerRef}
                        className={cn(
                            "scroller relative z-20 w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                        )}
                    >
                        <ul
                            ref={scrollerRef}
                            className={cn(
                                "flex min-w-full shrink-0 gap-6 md:gap-6 lg:gap-8 py-4 w-max flex-nowrap",
                                start && "animate-scroll",
                                "hover:[animation-play-state:paused]"
                            )}
                        >
                            {clientsImg.map((item, idx) => (
                                <li
                                    className="relative shrink-0"
                                    key={idx}
                                >
                                    <div
                                        className="block transition-opacity duration-300 hover:opacity-80"
                                    >
                                        <div className="relative w-[300px] h-[210px] md:w-[300px] md:h-[200px] lg:w-[550px] lg:h-[450px] flex items-center justify-center">
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
                                    </div>
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
            </div>
        </div>
    )
}

export default Certificates