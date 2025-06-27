"use client"

import { useState } from "react"
import { Mail, Github, Linkedin, Instagram, Youtube, MapPin, Calendar, Award, Star, Rocket } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const AboutHero = ({
    name = "Daniyal Sohail",
    title = "Full Stack Developer",
    username = "@daniyal__sohail",
    isOnline = true,
    avatar = "/img/hero.png",
    bio = "Passionate developer crafting digital experiences with modern technologies. I love turning ideas into reality through clean, efficient code.",
    experience = "2.5",
    projectsCompleted = "10+",
    clientsSatisfied = "8+",
    technologies = ["NextJS", "Node.js", "TypeScript", "NestJS", "JavaScript", "ReactJS"],
    location = "Lahore, Pakistan",
    email = "daniyalsohaildev@gmail.com",
    github = "GitHub",
    linkedin = "LinkedIn",
}) => {
    const [hoveredStat, setHoveredStat] = useState<number | null>(null)
    const [hoveredTech, setHoveredTech] = useState<number | null>(null)
    const [hoveredSocial, setHoveredSocial] = useState<number | null>(null)
    const [hoveredCard, setHoveredCard] = useState(false)

    return (
        <div className="min-h-screen mt-16 sm:mt-20 lg:mt-24 text-white overflow-hidden" style={{ background: '#000000' }}>
            <div className="relative container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 min-h-screen flex items-center">
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start w-full">

                    {/* Left side - Profile Info */}
                    <div className="lg:col-span-3 space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">

                        {/* Status Badge - Hidden on mobile */}
                        <div className="hidden sm:flex justify-start">
                            <div className="inline-flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border text-xs sm:text-sm"
                                style={{
                                    backgroundColor: 'rgba(59, 186, 182, 0.1)',
                                    borderColor: 'rgba(59, 186, 182, 0.3)'
                                }}>
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full animate-pulse" style={{ backgroundColor: '#3BBAB6' }}></div>
                                <Link href="https://www.upwork.com/freelancers/~01341fed9cb414c4ac" target="_blank" rel="noopener noreferrer">
                                    <span className="font-medium" style={{ color: '#3BBAB6' }}>
                                        Available for opportunities
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Main Profile Section */}
                        <div className="space-y-6 sm:space-y-8">
                            {/* Name and Title - Hidden on mobile */}
                            <div className="hidden sm:block space-y-3 sm:space-y-4">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-clip-text text-transparent"
                                    style={{
                                        background: 'linear-gradient(180deg, #ffffff, #adadad)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}>
                                    {name}
                                </h1>

                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold" style={{ color: '#3BBAB6' }}>
                                        {title}
                                    </h2>
                                    <div className="hidden sm:block h-6 lg:h-8 w-px" style={{ backgroundColor: '#3BBAB6' }}></div>
                                    <span className="text-base sm:text-lg lg:text-xl" style={{ color: '#adadad' }}>{username}</span>
                                </div>
                            </div>

                            {/* Bio - Hidden on mobile */}
                            <p className="hidden sm:block text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl" style={{ color: '#adadad' }}>{bio}</p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                                {[
                                    { label: "Years Experience", value: experience, suffix: "+", icon: Calendar },
                                    { label: "Projects Completed", value: projectsCompleted, suffix: "", icon: Rocket },
                                    { label: "Happy Clients", value: clientsSatisfied, suffix: "", icon: Star },
                                    { label: "Technologies", value: technologies.length, suffix: "+", icon: Award },
                                ].map((stat, index) => {
                                    const IconComponent = stat.icon;
                                    const isHovered = hoveredStat === index;
                                    return (
                                        <div
                                            key={index}
                                            className="group relative p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl border cursor-pointer transition-all duration-300 hover:shadow-lg"
                                            style={{
                                                background: 'linear-gradient(180deg, #242424, #121212 65.62%)',
                                                borderColor: isHovered ? '#3BBAB6' : '#333333'
                                            }}
                                            onMouseEnter={() => setHoveredStat(index)}
                                            onMouseLeave={() => setHoveredStat(null)}
                                        >
                                            <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2">
                                                <IconComponent
                                                    size={16}
                                                    className="sm:w-5 sm:h-5"
                                                    style={{ color: isHovered ? '#3BBAB6' : '#adadad' }}
                                                />
                                                <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold transition-colors duration-300"
                                                    style={{ color: isHovered ? '#3BBAB6' : '#ffffff' }}>
                                                    {stat.value}{stat.suffix}
                                                </div>
                                                <div className="text-xs sm:text-sm font-medium leading-tight" style={{ color: '#adadad' }}>
                                                    {stat.label}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Tech Stack */}
                            <div className="space-y-3 sm:space-y-4">
                                <p className="text-xs sm:text-sm uppercase tracking-wider font-semibold" style={{ color: '#adadad' }}>Tech Stack</p>
                                <div className="flex flex-wrap gap-2 sm:gap-3">
                                    {technologies.map((tech, index) => {
                                        const isHovered = hoveredTech === index;
                                        return (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg sm:rounded-xl text-white text-xs sm:text-sm font-medium border transition-all duration-300 hover:shadow-lg"
                                                style={{
                                                    background: 'linear-gradient(180deg, #242424, #121212 65.62%)',
                                                    borderColor: isHovered ? '#3BBAB6' : '#333333'
                                                }}
                                                onMouseEnter={() => setHoveredTech(index)}
                                                onMouseLeave={() => setHoveredTech(null)}
                                            >
                                                {tech}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 text-sm sm:text-base" style={{ color: '#adadad' }}>
                                <div className="flex items-center space-x-2">
                                    <MapPin size={14} className="sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#3BBAB6' }} />
                                    <span className="truncate">{location}</span>
                                </div>
                                <Link className="flex items-center space-x-2" href="mailto:daniyalsohaildev@gmail.com">
                                    <Mail size={14} className="sm:w-4 sm:h-4 flex-shrink-0" style={{ color: '#3BBAB6' }} />
                                    <span className="truncate">{email}</span>
                                </Link>
                            </div>

                            {/* Social Links */}
                            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3 lg:gap-4">
                                {[
                                    { name: "GitHub", handle: github, icon: Github, href: "https://github.com/daniyal-sohail" },
                                    { name: "LinkedIn", handle: linkedin, icon: Linkedin, href: "https://www.linkedin.com/in/mdaniyal-sohail/" },
                                    { name: "Instagram", handle: "Instagram", icon: Instagram, href: "https://www.instagram.com/daniyal__sohail/" },
                                    { name: "Youtube", handle: "Youtube", icon: Youtube, href: "https://www.youtube.com/@daniyalsohail169/" },
                                ].map((social, index) => {
                                    const IconComponent = social.icon;
                                    const isHovered = hoveredSocial === index;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            className="flex items-center justify-center sm:justify-start space-x-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl border transition-all duration-300 hover:shadow-lg text-center sm:text-left"
                                            style={{
                                                background: 'linear-gradient(180deg, #242424, #121212 65.62%)',
                                                borderColor: isHovered ? '#3BBAB6' : '#333333',
                                                color: isHovered ? '#3BBAB6' : '#adadad'
                                            }}
                                            onMouseEnter={() => setHoveredSocial(index)}
                                            onMouseLeave={() => setHoveredSocial(null)}
                                        >
                                            <IconComponent size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm truncate">{social.handle}</span>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Profile Image */}
                    <div className="lg:col-span-2 order-1 lg:order-2">
                        {/* Enhanced Profile Image Card */}
                        <div className="relative max-w-sm mx-auto lg:max-w-none">
                            <div
                                className="border rounded-2xl sm:rounded-3xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg"
                                style={{
                                    background: 'linear-gradient(180deg, #242424, #121212 65.62%)',
                                    borderColor: hoveredCard ? '#3BBAB6' : '#333333'
                                }}
                                onMouseEnter={() => setHoveredCard(true)}
                                onMouseLeave={() => setHoveredCard(false)}
                            >
                                <div className="relative">
                                    {/* Profile Image */}
                                    <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden">
                                        <Image
                                            src={avatar || "/placeholder.svg"}
                                            alt={name}
                                            width={400}
                                            height={500}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                    </div>

                                    {/* Online Status */}
                                    <div className={`absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 sm:border-4 shadow-lg`}
                                        style={{
                                            borderColor: '#121212',
                                            backgroundColor: isOnline ? '#3BBAB6' : '#666666'
                                        }}>
                                        {isOnline && (
                                            <div className="absolute inset-0.5 sm:inset-1 rounded-full animate-pulse"
                                                style={{ backgroundColor: '#2dd4bf' }}></div>
                                        )}
                                    </div>
                                </div>

                                {/* User Info in Card */}
                                <div className="mt-4 sm:mt-6 text-center">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 truncate">{name}</h3>
                                    <p className="font-medium text-sm sm:text-base truncate" style={{ color: '#3BBAB6' }}>{title}</p>
                                    <div className="flex items-center justify-center mt-2 sm:mt-3 space-x-2">
                                        <span className="text-xs sm:text-sm truncate" style={{ color: '#adadad' }}>{username}</span>
                                        <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0`}
                                            style={{ backgroundColor: isOnline ? '#3BBAB6' : '#666666' }}></div>
                                        <span className={`text-xs flex-shrink-0`}
                                            style={{ color: isOnline ? '#3BBAB6' : '#adadad' }}>
                                            {isOnline ? "Online" : "Offline"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero;