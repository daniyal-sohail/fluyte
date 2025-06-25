"use client";

import React, { useEffect, useState, useRef, ReactNode } from "react";
import Image from "next/image";

// Define a simple cn function if you don't want to add the dependency
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(" ");

interface Item {
    content?: ReactNode;
    src?: string;
    alt?: string;
}

interface InfiniteMovingCardsProps {
    items: Item[];
    direction?: "left" | "right";
    speed?: "slow" | "normal" | "fast";
    pauseOnHover?: boolean;
    className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);

    const [start, setStart] = useState<boolean>(false);

    function addAnimation(): void {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = (): void => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = (): void => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "60s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "50s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    // Define the animation styles directly in the component
    const animationStyles = `
        @keyframes scroll {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(calc(-50%));
            }
        }
        .animate-scroll {
            animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
    `;

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden",
                // Remove mask on mobile, add it back on larger screens
                "md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            {/* Inject the animation styles */}
            <style jsx global>{animationStyles}</style>

            <ul
                ref={scrollerRef}
                className={cn(
                    "flex w-max min-w-full shrink-0 flex-nowrap gap-3 md:gap-4 py-4",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li className="relative shrink-0" key={`item-${idx}`}>
                        {item.content || (
                            <div className="relative w-[280px] md:w-[350px] h-[160px] md:h-[200px] bg-[#0f0f0f] rounded-lg md:rounded-xl">
                                {item.src && (
                                    <Image
                                        src={item.src}
                                        alt={item.alt || `Image ${idx + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 280px, 350px"
                                        style={{ objectFit: "cover" }}
                                        className="rounded-lg md:rounded-xl"
                                    />
                                )}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InfiniteMovingCards;