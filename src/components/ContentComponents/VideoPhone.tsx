"use client"
import React, { useRef, useState } from 'react';
import Image from 'next/image';

interface VideoPhoneProps {
    videoSrc: string;
    title?: string;
}

export const VideoPhone: React.FC<VideoPhoneProps> = ({ videoSrc, title }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [muted, setMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !muted;
            setMuted(!muted);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center items-center">
                <div className="relative max-w-[250px] mx-auto">
                    {/* Main phone frame container */}
                    <div className="relative">
                        {/* Frame image as background */}
                        <Image
                            src="/img/frame.png"
                            alt="Mobile frame"
                            width={200}
                            height={150}
                            className="w-full h-auto"
                        />

                        {/* Video overlay positioned exactly */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div style={{
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
                                    <source src={videoSrc} type="video/mp4" />
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
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {title && (
                <h3 className="mt-4 text-lg font-medium text-center text-gray-800 dark:text-gray-200">
                    {title}
                </h3>
            )}
        </div>
    );
};