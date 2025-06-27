"use client";
import React from "react";
import { SectionButton } from "../Common/SectionButton";
import WorkFlowCard from "./WorkFlowCard";

const work = [
    {
        title: "Discovery & Requirements Analysis",
        content: "I conduct comprehensive stakeholder interviews and technical assessments to understand your business objectives. I perform market research, competitor analysis, and feasibility studies to establish project scope, technical requirements, and success metrics.",
        hour: "3 - 5 Days"
    },
    {
        title: "Strategic Planning & Design",
        content: "I create detailed user experience maps, information architecture, and interactive prototypes. I develop comprehensive design systems, conduct usability testing, and iterate based on your feedback to ensure optimal user engagement.",
        hour: "1 - 2 Weeks"
    },
    {
        title: "Development & Implementation",
        content: "Using agile methodologies, I build scalable, secure solutions with clean code architecture. I implement continuous integration, conduct thorough code reviews, and perform rigorous testing including unit, integration, and performance testing.",
        hour: "2 - 8 Weeks"
    },
    {
        title: "Quality Assurance & Deployment",
        content: "I execute comprehensive testing protocols including cross-browser compatibility, security audits, and load testing. My deployment process includes staging environment validation, production deployment with zero-downtime strategies, and post-deployment monitoring.",
        hour: "3 - 5 Days"
    },
    {
        title: "Ongoing Support & Optimization",
        content: "Post-launch, I provide 24/7 monitoring, performance optimization, security updates, and feature enhancements. My support includes analytics review, user feedback analysis, and continuous improvement recommendations to maximize ROI.",
        hour: "Ongoing"
    },
];

export function MyWorkFlow() {

    return (
        <div className="shadow-lg my-6 rounded-[50px] bg-[#0f0f0f]">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-6">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"Work Flow"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-8 mt-2 text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                    >
                        How We <span style={{ color: "#48D1CC" }}>collboarte</span> better
                    </h1>


                </div>

                <div className="w-full max-w-6xl mb-16 mx-auto px-4 sm:px-6 lg:px-8">
                    {work.map((item, index) => (
                        <WorkFlowCard
                            key={index}
                            hour={item.hour}
                            title={item.title}
                            content={item.content}
                            index={index}
                        />
                    ))}
                </div>


            </div>
        </div>
    );
}