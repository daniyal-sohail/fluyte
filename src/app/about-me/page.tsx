import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Daniyal Sohail - Full Stack Developer",
    description: "Learn more about Daniyal Sohail, a professional Full Stack Developer with expertise in React, Node.js, and modern web technologies. View experience, skills, and background.",
    keywords: [
        "About Daniyal Sohail",
        "Daniyal Sohail Background",
        "Full Stack Developer Experience",
        "Web Developer Skills",
        "React Developer Portfolio",
        "Node.js Developer",
        "JavaScript Developer",
        "TypeScript Developer"
    ],
    openGraph: {
        title: "About Daniyal Sohail - Full Stack Developer",
        description: "Learn more about Daniyal Sohail, a professional Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
        url: "https://daniyalsohail.me/about-me",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "About Daniyal Sohail - Full Stack Developer",
            },
        ],
    },
    twitter: {
        title: "About Daniyal Sohail - Full Stack Developer",
        description: "Learn more about Daniyal Sohail, a professional Full Stack Developer with expertise in React, Node.js, and modern web technologies.",
    },
    alternates: {
        canonical: "https://daniyalsohail.me/about-me",
    },
};

import AboutExperience from '@/components/AboutComponents/AboutExperience'
import AboutHero from '@/components/AboutComponents/AboutHero'
import Certificates from '@/components/AboutComponents/Certificates'
import { TeachStack } from '@/components/AboutComponents/TeachStack'
import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import React from 'react'

function page() {
    return (
        <div >
            <Navbar />
            <AboutHero />
            <AboutExperience />
            <TeachStack />
            <Certificates />
            <Footer />
        </div>
    )
}

export default page