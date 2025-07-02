import React from "react";
import { SectionButton } from "../Common/SectionButton";
import { VideoPhone } from "./VideoPhone";

export function ReactComponent() {
    // Sample video data - replace with your actual video sources
    const videos = [
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429262/use-state_ga5ftr.mp4",
            title: "Vite vs CRA"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429264/jsx_mfgki4.mp4",
            title: "JSX in React"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429264/virtual-dom_kyxway.mp4",
            title: "Virtual Dom"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429252/use-effect_rmy28c.mp4",
            title: "Use Effect Hook"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429250/use-memo_bsrbhm.mp4",
            title: "Use Memo Hook"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429247/react-router_ciw1vz.mp4",
            title: "React Router Dom"
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