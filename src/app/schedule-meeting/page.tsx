"use client";
import React, { useEffect } from 'react';
import { Calendar, Clock, Video, CheckCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schedule Meeting with Daniyal Sohail - Full Stack Developer",
    description: "Schedule a meeting with Daniyal Sohail, professional Full Stack Developer. Book a consultation for web development projects, React development, Node.js development, and custom solutions.",
    keywords: [
        "Schedule Meeting Daniyal Sohail",
        "Book Consultation",
        "Full Stack Developer Consultation",
        "Web Development Consultation",
        "React Developer Meeting",
        "Node.js Developer Consultation",
        "Project Discussion",
        "Development Consultation"
    ],
    openGraph: {
        title: "Schedule Meeting with Daniyal Sohail - Full Stack Developer",
        description: "Schedule a meeting with Daniyal Sohail, professional Full Stack Developer. Book a consultation for web development projects and custom solutions.",
        url: "https://daniyalsohail.me/schedule-meeting",
        images: [
            {
                url: "/img/hero.png",
                width: 1200,
                height: 630,
                alt: "Schedule Meeting with Daniyal Sohail - Full Stack Developer",
            },
        ],
    },
    twitter: {
        title: "Schedule Meeting with Daniyal Sohail - Full Stack Developer",
        description: "Schedule a meeting with Daniyal Sohail, professional Full Stack Developer. Book a consultation for web development projects and custom solutions.",
    },
    alternates: {
        canonical: "https://daniyalsohail.me/schedule-meeting",
    },
};

const ScheduleMeetingPage = () => {
    useEffect(() => {
        // Redirect to Calendly after a short delay
        const timer = setTimeout(() => {
            window.open('https://calendly.com/daniyalsohaildev', '_blank');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const openCalendly = () => {
        window.open('https://calendly.com/daniyalsohaildev', '_blank');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a] text-white">
            {/* Header */}
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                </Link>

                {/* Hero Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
                        Schedule a Meeting
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Redirecting you to my calendar to book a consultation...
                    </p>
                </div>

                {/* Main Content */}
                <div className="max-w-4xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Left Column - Booking Info */}
                        <div className="space-y-6">
                            <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800">
                                <h2 className="text-2xl font-bold mb-4 flex items-center">
                                    <Calendar className="w-6 h-6 mr-3 text-teal-400" />
                                    What to Expect
                                </h2>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium">30-Minute Consultation</h3>
                                            <p className="text-gray-400 text-sm">Dedicated time to discuss your project requirements</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium">Technical Discussion</h3>
                                            <p className="text-gray-400 text-sm">Deep dive into your technical needs and challenges</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium">Solution Recommendations</h3>
                                            <p className="text-gray-400 text-sm">Get expert advice on the best approach for your project</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <CheckCircle className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-medium">Q&A Session</h3>
                                            <p className="text-gray-400 text-sm">Address any concerns or questions you may have</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800">
                                <h2 className="text-2xl font-bold mb-4 flex items-center">
                                    <Video className="w-6 h-6 mr-3 text-teal-400" />
                                    Meeting Details
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-300">
                                        <Clock className="w-4 h-4 mr-2 text-teal-400" />
                                        <span>Duration: 30 minutes</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Video className="w-4 h-4 mr-2 text-teal-400" />
                                        <span>Platform: Google Meet / Zoom</span>
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Calendar className="w-4 h-4 mr-2 text-teal-400" />
                                        <span>Timezone: Your local time</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Widget */}
                        <div className="bg-[#1e1e1e] p-6 rounded-xl border border-gray-800">
                            <h2 className="text-2xl font-bold mb-6">Book Your Meeting</h2>
                            <p className="text-gray-300 mb-6">
                                You&apos;ll be redirected to my calendar in a few seconds. If not, click the button below.
                            </p>

                            <button
                                onClick={openCalendly}
                                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Open Calendar Now
                            </button>

                            <div className="mt-6 p-4 bg-[#2a2a2a] rounded-lg">
                                <h3 className="font-medium mb-2">Need to reschedule?</h3>
                                <p className="text-gray-400 text-sm">
                                    You can reschedule or cancel your meeting up to 24 hours before the scheduled time.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleMeetingPage;
