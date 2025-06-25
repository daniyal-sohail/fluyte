"use client";
import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import Image from "next/image";

export const ContainerScroll = ({
    titleComponent,
}: {
    titleComponent: string | React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div
            className="h-[60rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div
                className="py-10 md:py-30 w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <Header translate={translate} titleComponent={titleComponent} />
                <PhoneFrame rotate={rotate} translate={translate} scale={scale} />
            </div>
        </div>
    );
};

interface HeaderProps {
    translate: MotionValue<number>;
    titleComponent: string | React.ReactNode;
}

export const Header = ({ translate, titleComponent }: HeaderProps) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const PhoneFrame = ({
    rotate,
    scale,
    translate,
}: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
}) => {
    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const [muted1, setMuted1] = useState(true);
    const [muted2, setMuted2] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const toggleMute1 = () => {
        if (videoRef1.current) {
            videoRef1.current.muted = !muted1;
            setMuted1(!muted1);
        }
    };

    const toggleMute2 = () => {
        if (videoRef2.current) {
            videoRef2.current.muted = !muted2;
            setMuted2(!muted2);
        }
    };

    const SinglePhone = ({ videoRef, muted, toggleMute }: {
        videoRef: React.RefObject<HTMLVideoElement | null>,
        muted: boolean,
        toggleMute: () => void
    }) => (
        <div className="relative max-w-[350px] mx-auto">
            <div className="relative">
                <Image
                    src="/img/frame.png"
                    alt="Mobile frame"
                    width={400}
                    height={250}
                    className="w-full h-auto"
                />
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
                            <source src="/img/reel.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
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
    );

    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                y: translate,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-5xl -mt-12 mx-auto w-full"
        >
            <div className="flex justify-center items-center">
                {isMobile ? (
                    // Single phone on mobile
                    <SinglePhone
                        videoRef={videoRef1}
                        muted={muted1}
                        toggleMute={toggleMute1}
                    />
                ) : (
                    // Two phones side by side on desktop
                    <div className="flex gap-8 items-center">
                        <SinglePhone
                            videoRef={videoRef1}
                            muted={muted1}
                            toggleMute={toggleMute1}
                        />
                        <SinglePhone
                            videoRef={videoRef2}
                            muted={muted2}
                            toggleMute={toggleMute2}
                        />
                    </div>
                )}
            </div>
        </motion.div>
    );
};