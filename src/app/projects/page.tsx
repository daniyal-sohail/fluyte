import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import { Project } from '@/components/ProjectsComponents/Project'
import ProjectHero from '@/components/ProjectsComponents/ProjectHero'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects by Daniyal Sohail - Full Stack Developer",
    description: "Explore projects by Daniyal Sohail, a professional Full Stack Developer. View web applications, mobile apps, and software solutions built with React, Node.js, and modern technologies.",
    keywords: [
        "Daniyal Sohail Projects",
        "Full Stack Developer Projects",
        "React Projects",
        "Node.js Projects",
        "Web Development Projects",
        "Portfolio Projects",
        "JavaScript Projects",
        "TypeScript Projects",
        "Web Applications"
    ],
    openGraph: {
        title: "Projects by Daniyal Sohail - Full Stack Developer",
        description: "Explore projects by Daniyal Sohail, a professional Full Stack Developer. View web applications, mobile apps, and software solutions.",
        url: "https://daniyalsohail.me/projects",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "Projects by Daniyal Sohail - Full Stack Developer",
            },
        ],
    },
    twitter: {
        title: "Projects by Daniyal Sohail - Full Stack Developer",
        description: "Explore projects by Daniyal Sohail, a professional Full Stack Developer. View web applications, mobile apps, and software solutions.",
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