"use client";
import { useEffect } from 'react';

export function PerformanceMonitor() {
    useEffect(() => {
        // Monitor Core Web Vitals
        if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
            // Monitor Largest Contentful Paint (LCP)
            const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.startTime);

                // Send to analytics if needed
                if (lastEntry.startTime > 2500) {
                    console.warn('LCP is slow:', lastEntry.startTime);
                }
            });

            try {
                lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
            } catch () {
                // Fallback for older browsers
            }

            // Monitor First Input Delay (FID)
            const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                    const fidEntry = entry as PerformanceEventTiming;
                    console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
                });
            });

            try {
                fidObserver.observe({ entryTypes: ['first-input'] });
            } catch () {
                // Fallback for older browsers
            }

            // Monitor Cumulative Layout Shift (CLS)
            let clsValue = 0;
            const clsObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry: any) => {
                    if (!entry.hadRecentInput) {
                        clsValue += entry.value;
                    }
                });
                console.log('CLS:', clsValue);
            });

            try {
                clsObserver.observe({ entryTypes: ['layout-shift'] });
            } catch () {
                // Fallback for older browsers
            }

            return () => {
                lcpObserver.disconnect();
                fidObserver.disconnect();
                clsObserver.disconnect();
            };
        }
    }, []);

    return null; // This component doesn't render anything
} 