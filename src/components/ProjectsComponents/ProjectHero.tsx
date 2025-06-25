"use client"
import React from 'react'

import { HeroParallax } from '../ui/hero-parallax'
import { cn } from '@/lib/utils';

export const products = [
    { title: "Sales Dashbaord", thumbnail: "/img/projects/sales.png" },
    { title: "Seller Dashboard", thumbnail: "/img/projects/seller.png" },
    { title: "Attendance Dashboard", thumbnail: "/img/projects/attendance.png" },
    { title: "LMS", thumbnail: "/img/projects/lms.png" },
    { title: "UI Design", thumbnail: "/img/projects/ui56.png" },
    { title: "Student Portal", thumbnail: "/img/projects/portal.png" },
    { title: "POS Dashbaord", thumbnail: "/img/projects/pos.png" },
    { title: "Taakra Website", thumbnail: "/img/projects/taakra.png" },
    { title: "Crypto Website", thumbnail: "/img/projects/crypto.png" },
    { title: "DNA Website", thumbnail: "/img/projects/dna.png" },
    { title: "MRF UI", thumbnail: "/img/projects/MRF.png" },
    { title: "DevTag Website", thumbnail: "/img/projects/devtag.png" },
];

function ProjectHero() {
    return (
        <div className="h-auto min-h-screen flex flex-col justify-center items-center rounded-md overflow-hidden relative mx-auto py-10 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 bg-[#000]/[0.96] bg-grid-white/[0.08]">
            <div
                className={cn(
                    "absolute inset-0 w-full h-full top-0",
                    "bg-[size:80px_80px]",
                    "bg-[linear-gradient(to_right,rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.25)_1px,transparent_1px)]",
                    "opacity-25 z-0"
                )}
            />
            <HeroParallax products={products} />
        </div>
    );
}

export default ProjectHero;
