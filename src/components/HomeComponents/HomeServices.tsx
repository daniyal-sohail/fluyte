import React from "react";
import Image, { StaticImageData } from "next/image";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconCode,
    IconBrandReact,
    IconServer,
    IconPalette,
    IconBrandFigma,
    IconBrandWordpress,
    IconRocket
} from "@tabler/icons-react";
import { SectionButton } from "../Common/SectionButton";
import CTA from "../Common/CTA";

const images: string[] = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/6.png",
    "/img/7.png",
    "/img/5.png",
    "/img/4.png",
];

// ✅ Fix type of props: `img` can be a URL string or a StaticImageData object
interface SkeletonProps {
    img: StaticImageData | string;
}

// ✅ Use Next.js `<Image>` for optimized images
const Skeleton: React.FC<SkeletonProps> = ({ img }) => (
    <Image
        src={img}
        alt="Service Image"
        width={300}
        height={200}
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover object-top bg-gradient-to-br from-neutral-200 to-neutral-100"
        layout="responsive"
    />

);

export function HomeServices() {
    return (
        <div className=" shadow-lg my-2">
            <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
                {/* Heading */}
                <div className="flex flex-col items-center text-center">
                    <SectionButton btnText={"What I Offer"} />
                    {/* Large Heading */}
                    <h1
                        data-aos="fade-up"
                        className="mb-8 mt-2 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"

                    >
                        Delivering <span style={{ color: "#48D1CC" }}>cutting-edge solutions</span>  that drive results
                    </h1>


                </div>


                <BentoGrid className="max-w-4xl mx-auto my-8">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={<Skeleton img={images[i]} />}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                        />
                    ))}


                </BentoGrid>
                <div className="max-w-4xl mx-auto my-8">
                    <CTA className="items-center justify-end" buttonText={"Explore All"} />

                </div>
            </div>
        </div>
    );
}

const items = [
    {
        description: "Full-Stack Web Development",
        title: "MERN Stack, Next.js, TypeScript, CMS Integration, REST APIs",
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },
    {
        description: "Frontend Development",
        title: "React.js, Next.js, JavaScript, GSAP, Shadcn UI",
        icon: <IconBrandReact className="h-4 w-4 text-neutral-500" />,
    },
    {
        description: "Backend Development",
        title: "Node.js, Express.js, MongoDB, SQL, REST APIs, Cloud Deployment",
        icon: <IconServer className="h-4 w-4 text-neutral-500" />,
    },
    {
        description: "UI/UX Design",
        title: "Figma, User Research, Wireframing, Prototyping, User Flows, Interaction Design",
        icon: <IconBrandFigma className="h-4 w-4 text-neutral-500" />,
    },
    {
        description: "Graphic Design",
        title: "Adobe Photoshop, Illustrator, Logo Design, Brand Identity, Marketing Materials",
        icon: <IconPalette className="h-4 w-4 text-neutral-500" />,
    },
    {
        description: "WordPress & Shopify Development",
        title: "Custom Themes, E-commerce, WooCommerce, Shopify Apps",
        icon: <IconBrandWordpress className="h-4 w-4 text-neutral-500" />,
    },
    {
        description: "Website Maintenance & Optimization",
        title: "SEO Optimization, Performance Testing, Payment Integration, Security Hardening, Analytics",
        icon: <IconRocket className="h-4 w-4 text-neutral-500" />,
    },
];