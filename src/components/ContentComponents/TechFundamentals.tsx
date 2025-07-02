import React from "react";
import { SectionButton } from "../Common/SectionButton";
import { VideoPhone } from "./VideoPhone";

export function TechFundamentals() {
    // Sample video data - replace with your actual video sources
    const videos = [
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429257/web-dev_myjdtu.mp4",
            title: "Frontend vs Backend"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429253/fronted_df3fj0.mp4",
            title: "Frontend Roadmap"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751437973/backend_eomkhy.mp4",
            title: "Backend Roadmap"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751451738/reel_t58iph.mp4",
            title: "Authentication vs Authorization"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751437964/internet_jsd5nf.mp4",
            title: "How Internet Works"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751437962/http_fgtjfk.mp4",
            title: "HTTP vs HTTPS"
        },
        {
            src: "https://res.cloudinary.com/dkke0ibzk/video/upload/v1751429251/deepseek_xslplt.mp4",
            title: "DeepSeek"
        },
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