"use client";
import React from "react";
import { SectionButton } from "../Common/SectionButton";
import { Carousel } from "../ui/carousel";

export function ProjectsSection() {
    const slideData = [
        {
            title: "Attendance Dashboard",
            button: "Explore All",
            src: "/img/projects/attendance.png"
        },
        {
            title: "Sales Management System",
            button: "Explore All",
            src: "/img/projects/sales.png"
        },
        {
            title: "LMS",
            button: "Explore All",
            src: "/img/projects/lms.png"
        },
        {
            title: "AI Crypto Reports",
            button: "Explore All",
            src: "/img/projects/crypto.png"
        },
    ];

    return (
        <div className="shadow-lg my-2 bg-white rounded-[50px]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center mb-10">
                    <SectionButton btnText={"Projects"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-2 mt-2 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold !text-black max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                    >
                        Showcasing <span style={{ color: "#48D1CC" }}>real-world projects</span>  built with purpose
                    </h1>


                </div>

                {/* Carousel */}
                <div className="relative overflow-hidden w-[100%]   pb-8 sm:pb-14">
                    <Carousel slides={slideData} />
                </div>
            </div>
        </div>
    );
}