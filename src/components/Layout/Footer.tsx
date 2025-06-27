"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from './Navbar'
import { Linkedin, Github, Instagram, MessageCircle, Mail, PhoneCall } from 'lucide-react'
import ContactPopup from '../Common/ContactPopup'

function Footer() {
    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/mdaniyal-sohail/",
            icon: Linkedin,
            label: "LinkedIn",
            color: "hover:text-blue-400"
        },
        {
            href: "https://github.com/daniyal-sohail",
            icon: Github,
            label: "GitHub",
            color: "hover:text-gray-300"
        },
        {
            href: "https://www.instagram.com/daniyal__sohail/",
            icon: Instagram,
            label: "Instagram",
            color: "hover:text-pink-400"
        },
        {
            href: "https://wa.me/923254881328",
            icon: MessageCircle,
            label: "WhatsApp",
            color: "hover:text-green-400"
        }
    ]

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isContactPopupOpen, setIsContactPopupOpen] = useState<boolean>(false);

    const openContactPopup = () => {
        setIsContactPopupOpen(true);
        // Close mobile menu if it's open
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            {/* Contact Popup Component */}
            {isContactPopupOpen && (
                <ContactPopup onClose={() => setIsContactPopupOpen(false)} />
            )}
            <footer className="bg-gradient-to-br from-[#0f0f0f]  text-white p-6 sm:p-8 md:p-12 lg:p-16 mt-12 mb-4 mx-6 sm:mx-16 rounded-3xl 2xl:mx-32 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl" />

                {/* Top Section */}
                <div className="relative z-10">
                    <div className="w-full lg:w-4/5 xl:w-3/4">
                        <div className="mb-8">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-[140%] mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                                Ready to bring your ideas to life?
                            </h1>
                            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-[150%] mb-8">
                                Let&apos;s collaborate and create something extraordinary together.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start">

                                <Button
                                    className="group flex items-center gap-2 !px-6 !py-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                                    onClick={openContactPopup}
                                >
                                    <PhoneCall className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">Contact Me</span>
                                </Button>
                                <Link
                                    href="mailto:daniyalsohaildev@gmail.com"
                                    className="group flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                                >
                                    <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">Quick Email</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-center mt-12 pt-8 border-t border-white/10">
                        {/* Left Section - Contact */}
                        <div className="w-full lg:w-auto mb-6 lg:mb-0 text-center lg:text-left">
                            <p className="text-sm text-gray-400 mb-2">Get in touch</p>
                            <Link
                                href="mailto:daniyalsohaildev@gmail.com"
                                className="text-white hover:text-[#48D1CC] transition-colors duration-300 font-medium text-lg"
                            >
                                daniyalsohaildev@gmail.com
                            </Link>
                        </div>

                        {/* Middle Section - Copyright */}
                        <div className="w-full lg:w-auto text-center mb-6 lg:mb-0">
                            <p className="text-sm text-gray-400 mb-1">© 2025 All rights reserved</p>
                            <p className="text-sm text-gray-500">
                                Created using NextJs & NestJs by{'  '}
                                <Link
                                    href="https://www.linkedin.com/in/mdaniyal-sohail"
                                    className="text-gray-300 hover:text-white transition-colors duration-300"
                                >
                                    Daniyal Sohail
                                </Link>
                            </p>
                        </div>

                        {/* Right Section - Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => {
                                const IconComponent = social.icon
                                return (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group p-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 hover:scale-110 ${social.color}`}
                                        aria-label={social.label}
                                    >
                                        <IconComponent className="w-5 h-5 transition-all duration-300" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer