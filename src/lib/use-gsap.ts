import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = () => {
    const animationsRef = useRef<gsap.core.Timeline[]>([]);

    // Cleanup function
    const cleanup = useCallback(() => {
        animationsRef.current.forEach(timeline => {
            if (timeline) {
                timeline.kill();
            }
        });
        animationsRef.current = [];
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsap.killTweensOf('*');
    }, []);

    // Animation functions
    const animateFadeIn = useCallback((
        elements: string | Element | Element[],
        config: { duration?: number; delay?: number; ease?: string; stagger?: number } = {}
    ) => {
        const { duration = 1, delay = 0, ease = 'power2.out', stagger = 0.1 } = config;
        const timeline = gsap.timeline()
            .fromTo(elements,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration, delay, ease, stagger }
            );
        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    const animateSlideInLeft = useCallback((
        elements: string | Element | Element[],
        config: { duration?: number; delay?: number; ease?: string; stagger?: number } = {}
    ) => {
        const { duration = 1, delay = 0, ease = 'power2.out', stagger = 0.1 } = config;
        const timeline = gsap.timeline()
            .fromTo(elements,
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration, delay, ease, stagger }
            );
        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    const animateSlideInRight = useCallback((
        elements: string | Element | Element[],
        config: { duration?: number; delay?: number; ease?: string; stagger?: number } = {}
    ) => {
        const { duration = 1, delay = 0, ease = 'power2.out', stagger = 0.1 } = config;
        const timeline = gsap.timeline()
            .fromTo(elements,
                { opacity: 0, x: 100 },
                { opacity: 1, x: 0, duration, delay, ease, stagger }
            );
        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    const animateScaleIn = useCallback((
        elements: string | Element | Element[],
        config: { duration?: number; delay?: number; ease?: string; stagger?: number } = {}
    ) => {
        const { duration = 1, delay = 0, ease = 'back.out(1.7)', stagger = 0.1 } = config;
        const timeline = gsap.timeline()
            .fromTo(elements,
                { opacity: 0, scale: 0.8 },
                { opacity: 1, scale: 1, duration, delay, ease, stagger }
            );
        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    const animateTextReveal = useCallback((
        elements: string | Element | Element[],
        config: { duration?: number; delay?: number; ease?: string; stagger?: number } = {}
    ) => {
        const { duration = 1, delay = 0, ease = 'power2.out', stagger = 0.05 } = config;
        const timeline = gsap.timeline()
            .fromTo(elements,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration, delay, ease, stagger }
            );
        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    const animateScrollFadeIn = useCallback((
        elements: string | Element | Element[],
        config: {
            duration?: number;
            delay?: number;
            ease?: string;
            stagger?: number;
            trigger?: string | Element;
            start?: string;
            end?: string;
            scrub?: boolean;
            markers?: boolean;
        } = {}
    ) => {
        const {
            duration = 1,
            delay = 0,
            ease = 'power2.out',
            stagger = 0.1,
            trigger,
            start = 'top 80%',
            end = 'bottom 20%',
            scrub = false,
            markers = false
        } = config;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: trigger || elements,
                start,
                end,
                scrub,
                markers,
            }
        });

        timeline.fromTo(elements,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration, delay, ease, stagger }
        );

        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    const animateParallax = useCallback((
        elements: string | Element | Element[],
        speed: number = 0.5,
        config: {
            trigger?: string | Element;
            start?: string;
            end?: string;
            scrub?: boolean;
            markers?: boolean;
        } = {}
    ) => {
        const {
            trigger,
            start = 'top bottom',
            end = 'bottom top',
            scrub = true,
            markers = false
        } = config;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: trigger || elements,
                start,
                end,
                scrub,
                markers,
            }
        });

        timeline.to(elements, {
            y: (i, target) => -target.offsetHeight * speed,
            ease: 'none'
        });

        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    const animateStaggerChildren = useCallback((
        parent: string | Element,
        childSelector: string,
        config: { duration?: number; delay?: number; ease?: string; stagger?: number } = {}
    ) => {
        const { duration = 0.6, delay = 0, ease = 'power2.out', stagger = 0.1 } = config;
        const timeline = gsap.timeline()
            .fromTo(`${parent} ${childSelector}`,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration, delay, ease, stagger }
            );
        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    // Custom timeline
    const createTimeline = useCallback((config?: gsap.TimelineVars) => {
        const timeline = gsap.timeline(config);
        animationsRef.current.push(timeline);
        return timeline;
    }, []);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            cleanup();
        };
    }, [cleanup]);

    return {
        animateFadeIn,
        animateSlideInLeft,
        animateSlideInRight,
        animateScaleIn,
        animateTextReveal,
        animateScrollFadeIn,
        animateParallax,
        animateStaggerChildren,
        createTimeline,
        cleanup,
        gsap
    };
}; 