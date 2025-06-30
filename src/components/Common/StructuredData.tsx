import React from 'react';

interface StructuredDataProps {
    type: 'person' | 'website' | 'organization' | 'article' | 'service';
    data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
    const getStructuredData = () => {
        const baseData = {
            "@context": "https://schema.org",
            "@type": type === 'person' ? 'Person' :
                type === 'website' ? 'WebSite' :
                    type === 'organization' ? 'Organization' :
                        type === 'article' ? 'Article' : 'Service',
            ...data
        };

        return baseData;
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(getStructuredData())
            }}
        />
    );
};

// Predefined structured data for common use cases
export const PersonStructuredData: React.FC = () => (
    <StructuredData
        type="person"
        data={{
            name: "Daniyal Sohail",
            jobTitle: "Full Stack Developer",
            description: "Professional Full Stack Developer specializing in React, Node.js, and modern web technologies",
            url: "https://daniyalsohail.me",
            image: "https://daniyalsohail.me/img/hero.png",
            sameAs: [
                "https://linkedin.com/in/daniyalsohail",
                "https://github.com/daniyalsohail",
                "https://twitter.com/daniyalsohail",
                "https://dribbble.com/daniyalsohail",
                "https://behance.net/daniyalsohail"
            ],
            knowsAbout: [
                "React.js",
                "Node.js",
                "JavaScript",
                "TypeScript",
                "Web Development",
                "Full Stack Development",
                "Frontend Development",
                "Backend Development",
                "MongoDB",
                "PostgreSQL",
                "AWS",
                "Docker",
                "Git",
                "REST APIs",
                "GraphQL"
            ],
            worksFor: {
                "@type": "Organization",
                "name": "Freelance Developer"
            },
            alumniOf: {
                "@type": "Organization",
                "name": "University of Engineering and Technology"
            },
            hasOccupation: {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                    "@type": "Country",
                    "name": "Pakistan"
                }
            }
        }}
    />
);

export const WebsiteStructuredData: React.FC = () => (
    <StructuredData
        type="website"
        data={{
            name: "Daniyal Sohail Portfolio",
            url: "https://daniyalsohail.me",
            description: "Professional portfolio of Daniyal Sohail, a Full Stack Developer",
            author: {
                "@type": "Person",
                "name": "Daniyal Sohail"
            },
            potentialAction: {
                "@type": "SearchAction",
                "target": "https://daniyalsohail.me/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            },
            publisher: {
                "@type": "Person",
                "name": "Daniyal Sohail"
            }
        }}
    />
);

export const ServiceStructuredData: React.FC = () => (
    <StructuredData
        type="service"
        data={{
            name: "Full Stack Web Development Services",
            description: "Professional web development services including React development, Node.js development, and custom web solutions",
            provider: {
                "@type": "Person",
                "name": "Daniyal Sohail"
            },
            areaServed: {
                "@type": "Country",
                "name": "Worldwide"
            },
            serviceType: [
                "Web Development",
                "Full Stack Development",
                "React Development",
                "Node.js Development",
                "Custom Web Applications"
            ],
            offers: {
                "@type": "Offer",
                "availability": "https://schema.org/InStock"
            }
        }}
    />
);

export default StructuredData; 