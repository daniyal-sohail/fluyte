"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu as MenuIcon, PhoneCall, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactPopup from "../Common/ContactPopup"; // Import the ContactPopup component

// Custom button component
interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children: React.ReactNode;
    variant?: "default" | "ghost";
    size?: "default" | "icon";
}

export const Button = ({
    className,
    onClick,
    children,
    variant = "default",
    size = "default"
}: ButtonProps): React.ReactElement => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50";

    const variantStyles = {
        default: "bg-theme-color hover:bg-theme-color/90 text-white",
        ghost: "hover:bg-accent-color/10 text-white"
    };

    const sizeStyles = {
        default: "h-10 px-4 py-2 rounded-md text-sm",
        icon: "h-10 w-10 rounded-full"
    };

    return (
        <button
            className={cn(
                baseStyles,
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

// Define TypeScript interfaces
interface NavItem {
    name: string;
    href: string;
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-me" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Content Creation", href: "/content-creation" },
];

export function Navbar(): React.ReactElement {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isContactPopupOpen, setIsContactPopupOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            {/* Navbar positioned over hero section */}
            <header
                className={`absolute top-0 left-0 right-0 w-full z-50 transition-all duration-500 ${isMobileMenuOpen || isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
                    }`}
            >
                <div className="w-full py-4">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
                        {/* Logo on left */}
                        <div
                            className="flex items-center"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <Link href="/" className="flex items-center space-x-2 p-2 rounded-full bg-white hover:scale-105 transition-transform duration-300">
                                <div className="relative w-14 h-14">
                                    <Image
                                        src="/img/logo.png" // Replace with your logo path
                                        alt="Logo"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </Link>
                        </div>

                        {/* Navigation in middle - Hidden on screens smaller than ~1024px */}
                        <div
                            className="hidden lg:flex justify-center"
                            data-aos="fade-down"
                            data-aos-duration="800"
                            data-aos-delay="400"
                        >
                            <nav className="relative rounded-full border-1 border-gray-700 bg-[#000] shadow-input flex justify-center space-x-4 px-12 py-5 hover:shadow-lg transition-all duration-300">
                                {navItems.map((item, index) => (
                                    <Link
                                        href={item.href}
                                        key={index}
                                        data-aos="fade-down"
                                        data-aos-duration="600"
                                        data-aos-delay={500 + (index * 100)}
                                    >
                                        <p className="cursor-pointer text-white hover:text-[#3BBAB6] px-2 font-medium transition-all duration-300 hover:scale-105">
                                            {item.name}
                                        </p>
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Contact Us button - Hidden on screens smaller than ~1024px */}
                        <div
                            className="hidden lg:block"
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="600"
                        >
                            <Button
                                className="group flex items-center gap-2 !px-4 !py-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5 cursor-pointer bg-black rounded-full hover:scale-105 hover:shadow-lg"
                                onClick={openContactPopup}
                            >
                                <PhoneCall className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                                <span className="text-gray-300 group-hover:text-white transition-colors">Contact Me</span>
                            </Button>
                        </div>

                        {/* Mobile menu button - Shows on screens smaller than ~1024px */}
                        <div
                            className="lg:hidden flex items-center"
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="300"
                        >
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="text-white hover:bg-white/10 transition-colors duration-200 hover:scale-105"
                            >
                                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile menu dropdown - Improved styling */}
                    {isMobileMenuOpen && (
                        <div
                            className="xl:hidden bg-gradient-to-b from-[#000] to-[#171717] shadow-2xl backdrop-blur-sm"
                            data-aos="fade-down"
                            data-aos-duration="500"
                        >
                            <div className="container mx-auto px-6 py-6">
                                <nav className="flex flex-col space-y-2">
                                    {navItems.map((item, index) => (
                                        <Link
                                            href={item.href}
                                            key={index}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="group"
                                            data-aos="fade-right"
                                            data-aos-duration="400"
                                            data-aos-delay={index * 100}
                                        >
                                            <div className="cursor-pointer text-white hover:text-[#3BBAB6] px-4 py-3 font-medium rounded-lg hover:bg-white/5 transition-all duration-200 border-l-2 border-transparent hover:border-[#3BBAB6] hover:scale-105">
                                                {item.name}
                                            </div>
                                        </Link>
                                    ))}
                                    <div
                                        className="pt-4 border-t border-gray-700 mt-4"
                                        data-aos="fade-up"
                                        data-aos-duration="400"
                                        data-aos-delay="500"
                                    >
                                        <Button
                                            className="w-full group flex items-center justify-center gap-3 !px-6 !py-4 rounded-xl bg-gradient-to-r hover:bg-white/5 cursor-pointer bg-black transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                            onClick={openContactPopup}
                                        >
                                            <PhoneCall className="w-5 h-5" />
                                            <span>Contact Me</span>
                                        </Button>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </header >
        </>
    );
}

