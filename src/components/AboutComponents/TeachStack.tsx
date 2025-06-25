"use client";
import React from "react";

// Skills data with logos
const skillsData = {
    skills: [
        {
            name: "HTML",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
            name: "CSS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        {
            name: "JavaScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            name: "TypeScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        {
            name: "React",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            name: "Next.js",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        },
        {
            name: "NestJS",
            image: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg"
        },
        {
            name: "MongoDB",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        {
            name: "Express",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        {
            name: "Node.js",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        {
            name: "Pug",
            image: "https://cdn.worldvectorlogo.com/logos/pug.svg"
        },
        {
            name: "AJAX",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        {
            name: "Redux",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        },
        {
            name: "React Query",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        {
            name: "GSAP",
            image: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg"
        },
        {
            name: "Framer Motion",
            image: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
        },
        {
            name: "Tailwind CSS",
            image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
        },
        {
            name: "Bootstrap",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
        {
            name: "Material-UI",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
        },
        {
            name: "SQL",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        {
            name: "Figma",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        },
        {
            name: "GitHub",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        {
            name: "Postman",
            image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        },
        {
            name: "Shopify",
            image: "https://cdn.worldvectorlogo.com/logos/shopify.svg"
        },
        {
            name: "WordPress",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg"
        },
        {
            name: "Appwrite",
            image: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg"
        },
        {
            name: "Strapi",
            image: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg"
        }
    ]
};

export function TeachStack() {
    return (
        <div className="shadow-lg my-16 rounded-[50px] bg-[#1A1A1A]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <h1
                        data-aos="fade-up"
                        className="mb-8 mt-2 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                    >
                        My <span style={{ color: "#48D1CC" }}>Skills</span>
                    </h1>

                    <div className="flex flex-wrap justify-center gap-4">
                        {skillsData.skills.map((item, itemIndex) => (
                            <div
                                className="flex flex-col items-center text-center p-4 border border-gray-700 rounded-lg hover:border-[#48D1CC] transition-colors duration-300 bg-gray-800/50"
                                key={itemIndex}
                                data-aos="fade-up"
                                data-aos-delay={itemIndex * 50}
                            >
                                <img
                                    className="h-12 w-12 mb-2 object-contain"
                                    src={item.image}
                                    alt={item.name}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                                <span className="text-sm text-white font-medium">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}