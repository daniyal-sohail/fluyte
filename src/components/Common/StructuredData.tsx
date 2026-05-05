import React from 'react';

interface StructuredDataProps {
    type: 'person' | 'website' | 'organization' | 'article' | 'service';
    data: Record<string, unknown>;
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
            name: "Daniyal Sohail ",
            jobTitle: "SaaS Engineer & Full Stack Developer",
            description: "Daniyal Sohail is a SaaS Engineer and Full Stack Developer helping founders turn ideas into production ready AI powered products. Building XenorAI — approved by Microsoft for Startups and accepted into Takhleeq Incubator.",
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
                "AI Developer",
                "Full Stack Developer",
                "Next.js Developer",
                "Node.js Developer",
                "AI SaaS Development",
                "SaaS MVP Development",
                "RAG Pipelines",
                "OpenAI Developer",
                "XenorAI",
                "AI Automation",
                "Freelance AI Developer",
                "Freelance SaaS Developer",
                "TypeScript Developer",
                "React Developer",
                "Pakistan Developer",
                "Lahore Developer",
                "Hire AI Developer",
                "Hire SaaS Developer",
                "AI Integration",
                "LLM Integration",
                "AI Chatbot Developer",
                "SaaS Founder",
                "Microsoft for Startups",
                "React.js",
                "Node.js",
                "NextJS",
                "TypeScript",
                "JavaScript",
                "NestJS",
                "Web Development",
                "MERN Stack Development",
                "UI/UX Design",
                "Frontend Development",
                "Backend Development",
                "MongoDB",
                "PostgreSQL",
                "Git",
                "REST APIs",
            ],
            worksFor: {
                "@type": "Organization",
                "name": "Startups and Founders"
            },
            alumniOf: {
                "@type": "Organization",
                "name": "University of Central Punjab"
            },
            hasOccupation: {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                    "@type": "Country",
                    "name": "Pakistan"
                }
            },
            award: [
                "2.5+ Years Experience",
                "15+ Projects Completed",
                "8+ Happy Clients",
                "Ai Based SaaS Products"
            ]
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



export default StructuredData; 