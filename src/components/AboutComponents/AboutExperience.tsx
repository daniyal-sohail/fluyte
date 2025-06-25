import React from 'react'
import { SectionButton } from '../Common/SectionButton'
import ExpBox from './ExpBox'

function AboutExperience() {
    let exp = [
        {
            title: "Developer Tag",
            role: "Software Engineer",
            img: "/img/devtag.png",
            duration: "feb 25 - present",
        },
        {
            title: "ZAI System",
            role: "MERN stack Developer",
            img: "/img/zai.webp",
            duration: "oct 24 - march 25",
        },
        {
            title: "Fiverr",
            role: "Full Stack Web Developer",
            img: "/img/fi.png",
            duration: "2022-present",
        },
        {
            title: "Upwork",
            role: "Full Stack Web Developer",
            img: "/img/upw.png",
            duration: "2022-present",
        },
        {
            title: "Developer Hub",
            role: "Internship",
            img: "/img/devhub.png",
            duration: "aug 24 - sep 24",
        },
        {
            title: "Settle Homes",
            role: "Frontend Web Developer",
            img: "/img/settle.png",
            duration: "2023-2024",
        },
    ]
    return (
        <div className="shadow-lg mb-8 mt-0">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-4">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"My Experience"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-8 mt-2 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                    >
                        Collaborated with <span style={{ color: "#48D1CC" }}>industry leading</span> teams
                    </h1>

                </div>

                <div className="grid grid-cols-1 ">
                    {exp.map((item) => (
                        <ExpBox title={item.title} img={item.img} role={item.role} duration={item.duration} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutExperience