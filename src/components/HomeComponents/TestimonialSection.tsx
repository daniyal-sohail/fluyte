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
                <h3 className="text-white font-bold text-2xl mb-3">
                    You inspired me to start my own digital products business.
                </h3>
                <p className="text-gray-400 text-xl mb-6 flex-grow">
                    Thanks to your team, I sourced digital products in my niche and
                    started my online store.
                </p>
                <div className="flex items-center mt-auto">

                    <div>
                        <p className="font-medium text-white">Jacob L.</p>
                        <p className="text-gray-400 text-xs">UNITED STATES</p>
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
                <h3 className="text-white font-bold text-2xl mb-3">
                    An absolute game-changer for my own business community.
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                    This gave me the opportunity to quickly create digital products and
                    lead magnets for my community.
                </p>
                <div className="flex items-center mt-auto">

                    <div>
                        <p className="font-medium text-white">Michael K.</p>
                        <p className="text-gray-400 text-xs">UNITED STATES</p>
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
                <h3 className="text-white font-bold text-2xl mb-3">
                    Excited to get all visuals, including the graphics and mockups!
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                    The flexibility of the library is insane; can&apos;t wait to use this in my
                    funnel.
                </p>
                <div className="flex items-center mt-auto">

                    <div>
                        <p className="font-medium text-white">Frederik J.</p>
                        <p className="text-gray-400 text-xs">DENMARK</p>
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
                <h3 className="text-white font-bold text-2xl mb-3">
                    I will definitely take another product for my secondary niche.
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                    If I had known, it would have been so complete! Quality of this
                    content is immersive.
                </p>
                <div className="flex items-center mt-auto">

                    <div>
                        <p className="font-medium text-white">Edwin P.</p>
                        <p className="text-gray-400 text-xs">SINGAPORE</p>
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
                <h3 className="text-white font-bold text-2xl mb-3">
                    The templates saved me weeks of design and content work.
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                    These resources are professionally made and easy to customize for my
                    specific audience needs.
                </p>
                <div className="flex items-center mt-auto">

                    <div>
                        <p className="font-medium text-white">Elena R.</p>
                        <p className="text-gray-400 text-xs">ITALY</p>
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
                        data-aos="fade-up"
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