"use client"
import React from "react";
import { SectionButton } from "../Common/SectionButton";
import ProjectCard from "./ProjectCard"



export function Project() {

    const projects = [
        {
            title: "Student Portal",
            content:
                "A full-featured student management portal allowing students to view profiles, check class schedules, mark/view attendance, access course materials, track results, download datesheets, and manage fee invoices — all integrated into a centralized React dashboard.",
            buttons: ["JavaScript", "React.JS", "Material UI"],
            img: "/img/projects/portal.png"
        },
        {
            title: "Attendance Dashboard",
            content:
                "An attendance system for schools/universities where admins or teachers can mark students as present/absent. Real-time UI updates via Context API, and animated views to track class-wise and daily attendance efficiently.",
            buttons: ["JavaScript", "React.JS", "Framer Motion", "Context API"],
            img: "/img/projects/attendance.png"
        },
        {
            title: "Sales Management Dashboard",
            content:
                "A dynamic analytics dashboard enabling business owners to monitor daily, weekly, and monthly sales, track key performance metrics, visualize data via live charts, and generate reports for growth analysis — optimized for retail and SaaS sales pipelines.",
            buttons: ["Next.JS", "Chart.js", "JavaScript", "Tailwind CSS"],
            img: "/img/projects/sales.png"
        },
        {
            title: "AI Crypto Reports Website",
            content:
                "A full-stack cryptocurrency platform with both user and admin dashboards. Users can track live crypto prices, analyze market trends, manage their portfolios, and read AI-generated blockchain reports. Admins manage coins, update insights, and monitor traffic.",
            buttons: ["React.JS", "OpenAI", "Chart.js", "CSS3", "Node.js", "MongoDB", "Express"],
            img: "/img/projects/crypto.png"
        },
        {
            title: "Ecommerce Application",
            content:
                "A fully functional eCommerce frontend with real-time product browsing, filtering by categories, search bar, add-to-cart features, and secure user authentication via login and signup. Integrated Redux and Context API for global state management.",
            buttons: ["JavaScript", "React.JS", "Context API", "Redux"],
            img: "/img/projects/mds.png"
        },
        {
            title: "Library System",
            content:
                "An online library booking system where users can explore book collections, subscribe to monthly/annual plans, save books to wishlists, and make payments via Stripe. Includes admin tools to manage book listings, subscribers, and notifications.",
            buttons: ["React.JS", "Next.js", "Tailwind CSS", "Framer Motion", "Stripe", "OpenAI"],
            img: "/img/projects/seller.png"
        },
        {
            title: "LMS",
            content:
                "A comprehensive Learning Management System with role-based access for Admin, Super Admin, Teachers, and Students. Features include course creation, quiz/exam management, gradebook, student progress tracking, assignment uploads, and announcements panel.",
            buttons: ["Next.JS", "Node.js", "MongoDB", "Express.js"],
            img: "/img/projects/lms.png"
        },
        {
            title: "Inventory Management System",
            content:
                "A POS and inventory tool built for shop owners to manage products, generate invoices, track customer orders, monitor low stock alerts, visualize sales trends, and maintain digital receipts. Includes real-time chart dashboards and sales summaries.",
            buttons: ["React.JS", "JavaScript", "CSS3", "Chart.js"],
            img: "/img/projects/pos.png"
        },
        {
            title: "Taakra Event Website",
            content:
                "A feature-packed event website promoting the Taakra festival, showcasing schedules, artist lineups, event galleries, and registration modules. Includes animated hero sections, countdown timers, and a fully responsive design for all devices.",
            buttons: ["React.JS", "Next.js", "Tailwind CSS", "Framer Motion"],
            img: "/img/projects/taakra.png"
        },
        {
            title: "DevTag Website",
            content:
                "A developer-focused web platform that showcases company services, case studies, and blog articles. Includes an integrated admin dashboard to dynamically manage content like portfolio items, blogs, and team profiles without code edits.",
            buttons: ["Next.JS", "AceternityUI", "Node.js", "Express", "MongoDB"],
            img: "/img/projects/devtag.png"
        },
        {
            title: "Product UI Design",
            content:
                "A high-fidelity Figma design for a product details page, featuring a structured layout, product carousel, user ratings, feature highlights, and buy CTA sections — focused on improving conversion and user engagement.",
            buttons: ["Figma", "UI Design", "Wireframing", "Modern Design"],
            img: "/img/projects/MRF.png"
        },
        {
            title: "Website UI",
            content:
                "A landing page concept in Figma designed for startups and SaaS, featuring a hero section, service highlights, testimonials, and contact form — complete with prototyping and animation-ready transitions.",
            buttons: ["Figma", "UI Design", "Prototyping", "Modern Design"],
            img: "/img/projects/ui56.png"
        }
    ];



    return (
        <div>
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-4">
                    <SectionButton btnText={"Quality Services"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-8 mt-2 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                    >
                        Explore <span style={{ color: "#48D1CC" }}>top notch</span> services
                    </h1>
                </div>

                {/* Projects section - standard layout without sticky scroll */}
                <div className="projects-container">
                    {projects.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.title}
                            content={item.content}
                            buttons={item.buttons}
                            img={item.img}
                            priority={index < 3}
                        />
                    ))}
                </div>
            </div>

            <style jsx global>{`
                .project-card {
                    opacity: 1;
                    transform: scale(1);
                    transition: all 0.3s ease;
                }
                
                .project-card:hover {
                    transform: scale(1.02);
                }
                
                @media (prefers-reduced-motion) {
                    .project-card {
                        transition: opacity 0.3s ease;
                        transform: none;
                    }
                }
            `}</style>
        </div>
    );
}