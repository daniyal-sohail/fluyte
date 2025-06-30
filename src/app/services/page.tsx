import { WeCollaborate } from '@/components/Common/WeCollaborate'
import Footer from '@/components/Layout/Footer'
import { Navbar } from '@/components/Layout/Navbar'
import { AllServices } from '@/components/ServicesComponents/AllServices'
import { MyWorkFlow } from '@/components/ServicesComponents/MyWorkFlow'
import ServicesHero from '@/components/ServicesComponents/ServicesHero'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services by Daniyal Sohail - Full Stack Development",
    description: "Professional web development services by Daniyal Sohail. Full Stack Development, React Development, Node.js Development, and custom web solutions for businesses.",
    keywords: [
        "Daniyal Sohail Services",
        "Full Stack Development Services",
        "React Development Services",
        "Node.js Development Services",
        "Web Development Services",
        "Custom Web Applications",
        "Frontend Development",
        "Backend Development",
        "JavaScript Development",
        "TypeScript Development"
    ],
    openGraph: {
        title: "Services by Daniyal Sohail - Full Stack Development",
        description: "Professional web development services by Daniyal Sohail. Full Stack Development, React Development, Node.js Development, and custom web solutions.",
        url: "https://daniyalsohail.me/services",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "Services by Daniyal Sohail - Full Stack Development",
            },
        ],
    },
    twitter: {
        title: "Services by Daniyal Sohail - Full Stack Development",
        description: "Professional web development services by Daniyal Sohail. Full Stack Development, React Development, Node.js Development, and custom web solutions.",
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