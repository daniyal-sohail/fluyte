import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

interface CTAComponentProps {
    buttonText?: string;
    href?: string;
    className?: string;
    icon?: React.ReactNode;
    external?: boolean; // For external links
    onClick?: () => void;
}

export default function CTA({
    buttonText = "Work with me",
    href = "mailto:daniyalsohaildev@gmail.com",
    className = "",
    icon,
    external = false,
    onClick
}: CTAComponentProps) {
    // Default icon if none provided
    const defaultIcon = <ArrowRight size={20} strokeWidth={2.5} color="white" />;

    // Check if it's an email link
    const isEmailLink = href.startsWith('mailto:');

    // Use external for email links and explicitly external links
    const shouldUseAnchor = external || isEmailLink;

    const buttonContent = (
        <>
            <div className="arrow-circle">
                <span className="arrow-icon">
                    {icon || defaultIcon}
                </span>
            </div>
            <span>{buttonText}</span>
        </>
    );

    return (
        <div className={`cta-container`}>
            <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="100" className={`flex ${className} z-[10]`}>
                {shouldUseAnchor ? (
                    <a
                        href={href}
                        className="btn-animated"
                        target={external && !isEmailLink ? "_blank" : undefined}
                        rel={external && !isEmailLink ? "noopener noreferrer" : undefined}
                        onClick={onClick}
                    >
                        {buttonContent}
                    </a>
                ) : (
                    <Link href={href} className="btn-animated" onClick={onClick}>
                        {buttonContent}
                    </Link>
                )}
            </div>
        </div>
    );
}