import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Content Creation by Daniyal Sohail - Tech Content & Tutorials",
    description: "Content creation services by Daniyal Sohail. Tech tutorials, web development guides, React tutorials, Node.js tutorials, and educational content for developers.",
    keywords: [
        "Daniyal Sohail Content Creation",
        "Tech Tutorials",
        "Web Development Tutorials",
        "React Tutorials",
        "Node.js Tutorials",
        "JavaScript Tutorials",
        "Programming Tutorials",
        "Developer Education",
        "Tech Content",
        "Educational Content"
    ],
    openGraph: {
        title: "Content Creation by Daniyal Sohail - Tech Content & Tutorials",
        description: "Content creation services by Daniyal Sohail. Tech tutorials, web development guides, React tutorials, Node.js tutorials, and educational content.",
        url: "https://daniyalsohail.me/content-creation",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "Content Creation by Daniyal Sohail - Tech Content & Tutorials",
            },
        ],
    },
    twitter: {
        title: "Content Creation by Daniyal Sohail - Tech Content & Tutorials",
        description: "Content creation services by Daniyal Sohail. Tech tutorials, web development guides, React tutorials, Node.js tutorials, and educational content.",
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