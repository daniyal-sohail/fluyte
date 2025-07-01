"use client"
import React, { useState, useRef } from "react";
import { SectionButton } from "../Common/SectionButton";
import Image from "next/image";

export function ContextSection() {
    const [muted, setMuted] = useState(true);
    // Properly typed video ref
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setMuted(!muted);
        }
    };

    return (
        <div className="shadow-lg my-6">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"Content Creation"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"
                        className="mb-8 mt-2 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
                    >
                        Discover <span style={{ color: "#48D1CC" }}>impactful content that</span>  informs and inspires
                    </h1>

                </div>

                {/* Phone with video - Fixed Implementation */}
                <div className="flex justify-center items-center">
                    <div className="relative max-w-[350px] mx-auto">
                        {/* Main phone frame container */}
                        <div className="relative">
                            {/* Frame image as background */}
                            <Image
                                data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100"
                                src="/img/frame.png"
                                alt="Mobile frame"
                                width={350}
                                height={700}
                                className="w-full h-auto"
                            />

                            {/* Video overlay positioned exactly */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    data-aos="fade-in" data-aos-duration="700" data-aos-delay="300"
                                    style={{

                                        position: 'absolute',
                                        top: '1%',
                                        left: '4%',
                                        width: '92%',
                                        height: '98%',
                                        borderRadius: '40px',
                                        overflow: 'hidden'
                                    }}>
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                    >
                                        <source src="/img/reel.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>

                                    {/* Mute/Unmute button */}
                                    <button
                                        onClick={toggleMute}
                                        className="absolute bottom-4 right-4 z-10 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all"
                                        aria-label={muted ? "Unmute video" : "Mute video"}
                                        type="button"
                                    >
                                        {muted ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}