import React from "react";
import { SectionButton } from "../Common/SectionButton";
import { VideoPhone } from "./VideoPhone";

export function ReactComponent() {
    // Sample video data - replace with your actual video sources
    const videos = [
        {
            src: "/img/reel.mp4",
            title: "Full Stack Roadmap"
        },
        {
            src: "/img/reel.mp4",
            title: "Frontend vs Backend"
        },
        {
            src: "/img/reel.mp4",
            title: "Authentication vs Authorization"
        },
        {
            src: "/img/reel.mp4",
            title: "How Internet Works"
        },
        {
            src: "/img/reel.mp4",
            title: "Dark Web Explained"
        },
        {
            src: "/img/reel.mp4",
            title: "Web Security Basics"
        }
    ];

    return (
        <div className="shadow-lg mb-8 mt-0">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"Tech Fundamentals"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-8 mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                    >
                        Master <span style={{ color: "#48D1CC" }}>Core Tech</span> Concepts
                    </h1>


                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {videos.map((video, index) => (
                        <VideoPhone
                            key={index}
                            videoSrc={video.src}
                            title={video.title}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}