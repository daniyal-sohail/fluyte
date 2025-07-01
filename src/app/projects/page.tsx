import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import { Project } from '@/components/ProjectsComponents/Project'
import ProjectHero from '@/components/ProjectsComponents/ProjectHero'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects by Daniyal Sohail - MERN Stack, NextJS, Content Creation",
    description: "Explore real-world projects by Daniyal Sohail, MERN Stack Developer, Content Creator, and UI/UX Designer in Lahore, Pakistan. Projects built with NextJS, NestJS, Node.js, TypeScript, ReactJS, and more. See portfolio impact and technologies used.",
    keywords: [
        "Daniyal Sohail Projects",
        "MERN Stack Projects",
        "Content Creation",
        "UI/UX Design",
        "NextJS Projects",
        "NestJS Projects",
        "Full Stack Developer",
        "Lahore Pakistan",
        "Web Development Projects",
        "Portfolio Projects",
        "React Projects",
        "Node.js Projects",
        "JavaScript Projects",
        "TypeScript Projects"
    ],
    openGraph: {
        title: "Projects by Daniyal Sohail - MERN Stack, NextJS, Content Creation",
        description: "Explore real-world projects by Daniyal Sohail, MERN Stack Developer, Content Creator, and UI/UX Designer in Lahore, Pakistan. Projects built with NextJS, NestJS, Node.js, TypeScript, ReactJS, and more.",
        url: "https://daniyalsohail.me/projects",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "Projects by Daniyal Sohail - MERN Stack, NextJS, Content Creation",
            },
        ],
    },
    twitter: {
        title: "Projects by Daniyal Sohail - MERN Stack, NextJS, Content Creation",
        description: "Explore real-world projects by Daniyal Sohail, MERN Stack Developer, Content Creator, and UI/UX Designer in Lahore, Pakistan.",
    },
    alternates: {
        canonical: "https://daniyalsohail.me/projects",
    },
};

function page() {
    return (
        <div >
            <Navbar />
            <ProjectHero />
            <Project />
            {/* <OpenSourceSlider /> */}
            <Footer />
        </div>
    )
}

export default page