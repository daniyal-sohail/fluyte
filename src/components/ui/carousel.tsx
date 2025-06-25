"use client";
import { IconArrowNarrowRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useState, useRef, useId, useEffect, useCallback } from "react";
import Link from "next/link";

interface SlideData {
    title: string;
    button: string;
    src: string;
}

interface SlideProps {
    slide: SlideData;
    index: number;
    current: number;
    handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
    const slideRef = useRef<HTMLLIElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = useCallback((event: React.MouseEvent) => {
        if (current !== index) return;

        const el = slideRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const x = event.clientX - (rect.left + rect.width / 2);
        const y = event.clientY - (rect.top + rect.height / 2);

        setMousePos({ x: x / 20, y: y / 20 });
    }, [current, index]);

    const handleMouseLeave = useCallback(() => {
        setMousePos({ x: 0, y: 0 });
    }, []);

    const { src, button, title } = slide;
    const isActive = current === index;

    return (
        <li
            ref={slideRef}
            className={`
                relative flex-shrink-0 w-full h-full transition-all duration-500 ease-out cursor-pointer
                ${isActive ? 'z-20' : 'z-10'}
            `}
            onClick={() => handleSlideClick(index)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Main slide container */}
            <div
                className={`
                    relative w-full h-full rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden
                    transform transition-all duration-500 ease-out
                    ${isActive
                        ? 'scale-100 shadow-2xl'
                        : 'scale-95 sm:scale-90 shadow-lg opacity-70'
                    }
                `}
                style={{
                    transform: isActive
                        ? `scale(1) translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                        : 'scale(0.9)',
                }}
            >
                {/* Background image */}
                <div className="absolute inset-0">
                    <img
                        className={`
                            w-full h-full object-cover transition-all duration-700 ease-out
                            ${isActive ? 'scale-100' : 'scale-110'}
                        `}
                        alt={title}
                        src={src}
                        loading="lazy"
                    />
                    {/* Overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content */}
                <div className={`
                    absolute inset-0 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12
                    transition-all duration-500 ease-out
                    ${isActive
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }
                `}>
                    <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8">
                        <h2 className="
                            text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                            font-bold text-white leading-tight tracking-tight
                            drop-shadow-2xl
                        ">
                            {title}
                        </h2>

                        <div className="flex justify-center">
                            <Link
                                href="/projects"
                                className="
                                    group inline-flex items-center gap-2 sm:gap-3
                                    px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4
                                    bg-white text-gray-900 font-semibold
                                    rounded-lg sm:rounded-xl lg:rounded-2xl
                                    text-sm sm:text-base lg:text-lg
                                    transition-all duration-200 ease-out
                                    hover:bg-gray-50 hover:scale-105 hover:-translate-y-1
                                    active:scale-95 active:translate-y-0
                                    shadow-lg hover:shadow-xl
                                    focus:outline-none focus:ring-2 focus:ring-white/50
                                "
                            >
                                <span>{button}</span>
                                <IconArrowNarrowRight className="
                                    w-4 h-4 sm:w-5 sm:h-5 
                                    transition-transform duration-200 
                                    group-hover:translate-x-1
                                " />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

interface CarouselControlProps {
    direction: 'prev' | 'next';
    handleClick: () => void;
    disabled?: boolean;
}

const CarouselControl = ({ direction, handleClick, disabled }: CarouselControlProps) => {
    const Icon = direction === 'prev' ? IconChevronLeft : IconChevronRight;

    return (
        <button
            className={`
                flex items-center justify-center
                w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
                bg-white/10 backdrop-blur-md border border-white/20
                rounded-full transition-all duration-200 ease-out
                hover:bg-white/20 hover:scale-110 hover:-translate-y-1
                active:scale-95 active:translate-y-0
                focus:outline-none focus:ring-2 focus:ring-white/50
                disabled:opacity-50 disabled:cursor-not-allowed
                disabled:hover:scale-100 disabled:hover:translate-y-0
                shadow-lg hover:shadow-xl
            `}
            onClick={handleClick}
            disabled={disabled}
            aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
        >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
        </button>
    );
};

interface CarouselProps {
    slides: SlideData[];
    autoPlay?: boolean;
    autoPlayInterval?: number;
}

export function Carousel({ slides, autoPlay = false, autoPlayInterval = 5000 }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const [isUserInteracting, setIsUserInteracting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const id = useId();

    // Auto-play functionality
    useEffect(() => {
        if (!autoPlay || isUserInteracting || slides.length <= 1) return;

        const interval = setInterval(() => {
            setCurrent(prev => (prev + 1) % slides.length);
        }, autoPlayInterval);

        return () => clearInterval(interval);
    }, [autoPlay, autoPlayInterval, isUserInteracting, slides.length]);

    // Navigation functions
    const goToPrevious = useCallback(() => {
        setCurrent(prev => prev === 0 ? slides.length - 1 : prev - 1);
        setIsUserInteracting(true);
        setTimeout(() => setIsUserInteracting(false), 3000);
    }, [slides.length]);

    const goToNext = useCallback(() => {
        setCurrent(prev => (prev + 1) % slides.length);
        setIsUserInteracting(true);
        setTimeout(() => setIsUserInteracting(false), 3000);
    }, [slides.length]);

    const goToSlide = useCallback((index: number) => {
        setCurrent(index);
        setIsUserInteracting(true);
        setTimeout(() => setIsUserInteracting(false), 3000);
    }, []);

    // Touch/swipe handling
    const handleTouchStart = useCallback((e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        setIsUserInteracting(true);
    }, []);

    const handleTouchMove = useCallback((e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    }, []);

    const handleTouchEnd = useCallback(() => {
        const swipeThreshold = 50;
        const diff = touchStartX.current - touchEndX.current;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
        }

        setTimeout(() => setIsUserInteracting(false), 3000);
    }, [goToNext, goToPrevious]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                goToNext();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [goToPrevious, goToNext]);

    if (slides.length === 0) {
        return <div className="text-center text-gray-500">No slides available</div>;
    }

    return (
        <div
            className="relative w-full max-w-7xl mx-auto"
            role="region"
            aria-labelledby={`carousel-heading-${id}`}
            aria-live="polite"
        >
            {/* Main carousel container */}
            <div
                ref={containerRef}
                className="
                    relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl
                    h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[85vh]
                    max-h-[600px] sm:max-h-[700px] lg:max-h-[800px]
                "
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <ul
                    className="flex h-full transition-transform duration-500 ease-out"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {slides.map((slide, index) => (
                        <Slide
                            key={index}
                            slide={slide}
                            index={index}
                            current={current}
                            handleSlideClick={goToSlide}
                        />
                    ))}
                </ul>
            </div>

            {/* Navigation controls */}
            {slides.length > 1 && (
                <>
                    {/* Previous/Next buttons */}
                    <div className="absolute inset-y-0 left-2 sm:left-4 lg:left-6 flex items-center">
                        <CarouselControl
                            direction="prev"
                            handleClick={goToPrevious}
                        />
                    </div>

                    <div className="absolute inset-y-0 right-2 sm:right-4 lg:right-6 flex items-center">
                        <CarouselControl
                            direction="next"
                            handleClick={goToNext}
                        />
                    </div>

                    {/* Slide indicators */}

                </>
            )}

            {/* Progress bar (optional) */}
            {autoPlay && slides.length > 1 && !isUserInteracting && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
                    <div
                        className="h-full bg-white transition-all duration-100 ease-linear"
                        style={{
                            width: `${((current + 1) / slides.length) * 100}%`,
                        }}
                    />
                </div>
            )}
        </div>
    );
}