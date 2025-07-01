import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Content Creation by Daniyal Sohail - MERN Stack, Tutorials & Tech Education",
    description: "Content creation and tutorials by Daniyal Sohail, MERN Stack Developer, Full Stack Developer, and Content Creator from Lahore, Pakistan. Learn web development, NextJS, NestJS, ReactJS, Node.js, TypeScript, and UI/UX design from real-world experience.",
    keywords: [
        "Daniyal Sohail Content Creation",
        "MERN Stack Tutorials",
        "Full Stack Developer",
        "Content Creator",
        "UI/UX Designer",
        "NextJS Tutorials",
        "NestJS Tutorials",
        "Lahore Pakistan",
        "Web Development Tutorials",
        "React Tutorials",
        "Node.js Tutorials",
        "JavaScript Tutorials",
        "Programming Tutorials",
        "Tech Content",
        "Educational Content"
    ],
    openGraph: {
        title: "Content Creation by Daniyal Sohail - MERN Stack, Tutorials & Tech Education",
        description: "Content creation and tutorials by Daniyal Sohail, MERN Stack Developer, Full Stack Developer, and Content Creator from Lahore, Pakistan. Learn web development, NextJS, NestJS, ReactJS, Node.js, TypeScript, and UI/UX design from real-world experience.",
        url: "https://daniyalsohail.me/content-creation",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "Content Creation by Daniyal Sohail - MERN Stack, Tutorials & Tech Education",
            },
        ],
    },
    twitter: {
        title: "Content Creation by Daniyal Sohail - MERN Stack, Tutorials & Tech Education",
        description: "Content creation and tutorials by Daniyal Sohail, MERN Stack Developer, Full Stack Developer, and Content Creator from Lahore, Pakistan.",
    },
    alternates: {
        canonical: "https://daniyalsohail.me/content-creation",
    },
};

import { ContentHero } from '@/components/ContentComponents/ContentHero'
import { TechFundamentals } from '@/components/ContentComponents/TechFundamentals'
import { ReactComponent } from '@/components/ContentComponents/ReactComponent'
import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import React from 'react'

function page() {
    return (
        <div >
            <Navbar />
            <ContentHero />
            <TechFundamentals />
            <ReactComponent />
            <Footer />
        </div>
    )
}

export default page