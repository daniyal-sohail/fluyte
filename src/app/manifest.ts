import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Daniyal Sohail - SaaS Engineer & Full Stack Developer",
        short_name: "Daniyal Sohail",
        description: "Helping founders turn ideas into production ready AI powered SaaS products. Building XenorAI  approved by Microsoft for Startups.",
        start_url: "/",
        display: "standalone",
        background_color: "#F2F1F0",
        theme_color: "#0F8CA0",
        icons: [
            {
                src: "/img/log.png",
                sizes: "any",
                type: "image/png",
            },
            {
                src: "/img/log.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/img/log.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}