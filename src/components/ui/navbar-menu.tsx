"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface MenuItemProps {
    href: string;
    item: string;
}

interface MenuProps {
    children: React.ReactNode;
}

interface HoveredLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

// Simple animation transition
const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({ href, item }: MenuItemProps): React.ReactElement => {
    return (
        <Link href={href}>
            <motion.p
                transition={{ duration: 0.3 }}
                className="cursor-pointer text-white hover:opacity-[0.9] px-2 font-medium"
                whileHover={{ scale: 1.05 }}
            >
                {item}
            </motion.p>
        </Link>
    );
};

export const Menu = ({ children }: MenuProps): React.ReactElement => {
    return (
        <nav className="relative rounded-full border border-transparent bg-[#232323] shadow-input flex justify-center space-x-4 px-12 py-5">
            {children}
        </nav>
    );
};

export const HoveredLink = ({ children, href, className = "" }: HoveredLinkProps): React.ReactElement => {
    return (
        <Link
            href={href}
            className={`text-white hover:text-accent-color transition-colors duration-200 ${className}`}
        >
            {children}
        </Link>
    );
};