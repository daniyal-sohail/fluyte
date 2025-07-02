"use client"
import React from "react";
import { SectionButton } from "../Common/SectionButton";
import { RiDoubleQuotesR } from "react-icons/ri";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";


const testimonialItems = [
    {
        content: (
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-3xl p-10 w-[400px] h-[350px] flex flex-col">
                <div className="bg-[#48D1CC] rounded-full p-2 w-fit mb-4">
                    <RiDoubleQuotesR className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-200 text-xl mb-6 flex-grow">
                    Daniyal&apos;s work on the Settle Homes website was exceptional. His attention to detail greatly improved our client experience. Highly recommended!
                </p>
                <div className="flex items-center mt-auto">
                    <div>
                        <p className="font-medium text-white">Serena Huage</p>
                        <p className="text-gray-400 text-xs">CEO OF SETTLE HOMES</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        content: (
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-3xl p-10 w-[400px] h-[350px] flex flex-col">
                <div className="bg-[#48D1CC] rounded-full p-2 w-fit mb-4">
                    <RiDoubleQuotesR className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-200 text-xl mb-6 flex-grow">
                    Daniyal created an amazing Desert Safari Booking website. His creativity and technical skills made it engaging and responsive. I&apos;m very pleased!
                </p>
                <div className="flex items-center mt-auto">
                    <div>
                        <p className="font-medium text-white">Fahad</p>
                        <p className="text-gray-400 text-xs">CEO OF ARABIAN SAFARI</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        content: (
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-3xl p-10 w-[400px] h-[350px] flex flex-col">
                <div className="bg-[#48D1CC] rounded-full p-2 w-fit mb-4">
                    <RiDoubleQuotesR className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-200 text-xl mb-6 flex-grow">
                    Daniyal did an excellent job on our clinic website. He made it user-friendly and visually appealing, enhancing our patient interactions.
                </p>
                <div className="flex items-center mt-auto">
                    <div>
                        <p className="font-medium text-white">Dr. Abid Mustaq</p>
                        <p className="text-gray-400 text-xs">CEO OF MUSHTAQ HEALTH CLINIC</p>
                    </div>
                </div>
            </div>
        ),
    },
    {
        content: (
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-3xl p-10 w-[400px] h-[350px] flex flex-col">
                <div className="bg-[#48D1CC] rounded-full p-2 w-fit mb-4">
                    <RiDoubleQuotesR className="w-5 h-5 text-white" />
                </div>
                <p className="text-gray-200 text-xl mb-6 flex-grow">
                    Daniyal&apos;s work on our website was impressive. He delivered a modern site that perfectly showcases our services. Great job!
                </p>
                <div className="flex items-center mt-auto">
                    <div>
                        <p className="font-medium text-white">Mansoor Iqbal</p>
                        <p className="text-gray-400 text-xs">CEO OF CONSTRUCTION AND CONSULTANCY</p>
                    </div>
                </div>
            </div>
        ),
    },
];

export function Testimonial() {
    return (
        <div className="shadow-lg my-4">

            <div className="container mx-auto px-4 md:px-8 lg:px-8 py-6">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"Testimonial"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"
                        className="mb-8 mt-2 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl"
                    >
                        What <span style={{ color: "#48D1CC" }}>my clients</span> say about me
                    </h1>

                </div>


                {/* Testimonial Cards */}
                <div className="mb-12">
                    <InfiniteMovingCards
                        items={testimonialItems}
                        direction="left"
                        speed="fast"
                        className="py-10"
                    />
                </div>
            </div>
        </div>
    );
}