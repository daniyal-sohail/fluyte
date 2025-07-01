import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Daniyal Sohail - MERN Stack Developer, Content Creator & UI/UX Designer",
    description: "Discover the journey of Daniyal Sohail, a MERN Stack Developer, Content Creator, and UI/UX Designer based in Lahore, Pakistan. 2.5+ years experience in NextJS, NestJS, Node.js, TypeScript, ReactJS. Learn about skills, experience, and unique approach to web development and content creation.",
    keywords: [
        "About Daniyal Sohail",
        "MERN Stack Developer",
        "Content Creator",
        "UI/UX Designer",
        "NextJS Developer",
        "NestJS Developer",
        "Full Stack Developer",
        "Lahore Pakistan",
        "Web Developer Skills",
        "React Developer Portfolio",
        "Node.js Developer",
        "JavaScript Developer",
        "TypeScript Developer"
    ],
    openGraph: {
        title: "About Daniyal Sohail - MERN Stack Developer, Content Creator & UI/UX Designer",
        description: "Discover the journey of Daniyal Sohail, a MERN Stack Developer, Content Creator, and UI/UX Designer based in Lahore, Pakistan. 2.5+ years experience in NextJS, NestJS, Node.js, TypeScript, ReactJS.",
        url: "https://daniyalsohail.me/about-me",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "About Daniyal Sohail - MERN Stack Developer, Content Creator & UI/UX Designer",
            },
        ],
    },
    twitter: {
        title: "About Daniyal Sohail - MERN Stack Developer, Content Creator & UI/UX Designer",
        description: "Discover the journey of Daniyal Sohail, a MERN Stack Developer, Content Creator, and UI/UX Designer based in Lahore, Pakistan.",
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