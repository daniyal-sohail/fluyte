import React from "react";
import { SectionButton } from "../Common/SectionButton";
import { ServiceCard } from "./ServiceCard"; // Import your existing ServiceCard

const items = [
    {
        title: "Full-Stack Web Development",
        description:
            "End-to-end web solutions built using modern technologies like MERN and Next.js. Ideal for dynamic, scalable, and high-performance applications tailored to business needs.",
        img: "/img/1.png",
    },
    {
        title: "Frontend Development",
        description:
            "Visually appealing, responsive, and interactive user interfaces crafted with React, Next.js, and modern animation libraries for seamless user experiences.",
        img: "/img/2.png",
    },
    {
        title: "Backend Development",
        description:
            "Robust server-side development using Node.js and Express, paired with MongoDB or SQL databases. Ensures secure data handling and efficient API architecture.",
        img: "/img/3.png",
    },
    {
        title: "UI/UX Design",
        description:
            "User-centric design focused on aesthetics, usability, and smooth interaction. Includes user research, wireframes, and high-fidelity prototypes using Figma.",
        img: "/img/6.png",
    },
    {
        title: "Graphic Design",
        description:
            "Creative branding and visual content including logos, identity design, and marketing material. Designed with Adobe tools to match modern design standards.",
        img: "/img/7.png",
    },
    {
        title: "WordPress & Shopify Development",
        description:
            "Custom theme development and store setup for WordPress and Shopify. Optimized for performance, SEO, and smooth shopping experiences.",
        img: "/img/5.png",
    },
    {
        title: "Website Maintenance & Optimization",
        description:
            "Comprehensive support including SEO, speed optimization, analytics setup, payment gateways, and ongoing security updates to keep websites running flawlessly.",
        img: "/img/4.png",
    },
];


export function AllServices() {
    return (
        <section
            data-aos="fade-in"
            data-aos-duration="800"
            data-aos-delay="100"
            className="relative min-h-screen  py-6"
        >
            {/* Background Pattern */}
            <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                data-aos-delay="200"
                className="absolute inset-0 "
            />

            <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
                {/* Header Section */}
                <div
                    data-aos="slide-up"
                    data-aos-duration="700"
                    data-aos-delay="300"
                    className="text-center mb-16"
                >
                    <div
                        data-aos="fade-down"
                        data-aos-duration="600"
                        data-aos-delay="400"
                        className="inline-block mb-6"
                    >
                        <SectionButton btnText="Quality Services" />
                    </div>

                    <h1
                        data-aos="fade-in"
                        data-aos-duration="800"
                        data-aos-delay="500"
                        className="mb-8 mt-2 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-lg sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl"
                    >
                        Discover <span style={{ color: "#48D1CC" }}>high quality services that</span> deliver real results

                    </h1>

                </div>

                {/* Services Grid using your ServiceCard */}
                <div

                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
                >
                    {items.map((item, index) => (
                        <ServiceCard
                            key={index}
                            title={item.title}
                            description={item.description}
                            img={item.img}
                            priority={index < 3} // Set priority for first 3 images
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}