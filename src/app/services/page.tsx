import { WeCollaborate } from '@/components/Common/WeCollaborate'
import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import { AllServices } from '@/components/ServicesComponents/AllServices'
import { MyWorkFlow } from '@/components/ServicesComponents/MyWorkFlow'
import ServicesHero from '@/components/ServicesComponents/ServicesHero'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services by Daniyal Sohail - MERN Stack, Content Creation & UI/UX Design",
    description: "Professional MERN Stack development, content creation, NextJS, NestJS, and UI/UX design services by Daniyal Sohail in Lahore, Pakistan. 2.5+ years experience delivering custom web solutions, tutorials, and digital products.",
    keywords: [
        "Daniyal Sohail Services",
        "MERN Stack Services",
        "Content Creation",
        "UI/UX Design",
        "NextJS Development",
        "NestJS Development",
        "Full Stack Development",
        "Lahore Pakistan",
        "Web Development Services",
        "Custom Web Applications",
        "React Development Services",
        "Node.js Development Services",
        "JavaScript Development",
        "TypeScript Development"
    ],
    openGraph: {
        title: "Services by Daniyal Sohail - MERN Stack, Content Creation & UI/UX Design",
        description: "Professional MERN Stack development, content creation, NextJS, NestJS, and UI/UX design services by Daniyal Sohail in Lahore, Pakistan. 2.5+ years experience delivering custom web solutions, tutorials, and digital products.",
        url: "https://daniyalsohail.me/services",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "Services by Daniyal Sohail - MERN Stack, Content Creation & UI/UX Design",
            },
        ],
    },
    twitter: {
        title: "Services by Daniyal Sohail - MERN Stack, Content Creation & UI/UX Design",
        description: "Professional MERN Stack development, content creation, NextJS, NestJS, and UI/UX design services by Daniyal Sohail in Lahore, Pakistan.",
    },
    alternates: {
        canonical: "https://daniyalsohail.me/services",
    },
};

function page() {
    return (
        <div >
            <Navbar />
            <ServicesHero />
            <AllServices />
            <MyWorkFlow />
            <WeCollaborate />
            <Footer />
        </div>
    )
}

export default page