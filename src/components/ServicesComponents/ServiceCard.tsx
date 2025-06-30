"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import ServicePopup from "../../components/Common/ServicePopup"; // Import the popup component

interface ServiceCardProps {
    title: string;
    description: string;
    img: string | StaticImageData;
    priority?: boolean;
}

export function ServiceCard({ title, description, img, priority = false }: ServiceCardProps) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleGetQuoteClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <>
            <CardContainer data-aos="fade-up" className="inter-var">
                <CardBody className="relative group/card w-auto sm:w-[22rem] h-auto rounded-2xl p-5 border border-white/[0.1] bg-[#1A1A1A] backdrop-blur-md transition duration-300 ease-in-out hover:border-gradient-to-tr hover:from-[#08201e] hover:to-[#08201e] hover:shadow-xl hover:shadow-emerald-500/10 bg-gradient-to-br from-[#092120] via-black to-[#092120]">

                    <CardItem translateZ="100" className="w-full overflow-hidden rounded-xl">
                        <Image
                            src={img}
                            height={224}
                            width={352}
                            className="h-56 w-full object-cover rounded-xl transition-transform duration-300 group-hover/card:scale-105"
                            alt={`${title} service thumbnail`}
                            priority={priority}
                            placeholder="blur"
                            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                        />
                    </CardItem>

                    <CardItem translateZ="50" className="text-xl font-semibold text-white mt-4">
                        {title}
                    </CardItem>

                    <CardItem as="p" translateZ="60" className="text-sm mt-2 text-neutral-300 leading-relaxed">
                        {description}
                    </CardItem>

                    <div className="flex justify-end items-end mt-2">
                        <CardItem
                            translateZ={20}
                            as="button"
                            onClick={handleGetQuoteClick}
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold cursor-pointer  transition-colors"
                        >
                            Get Quote →
                        </CardItem>
                    </div>

                </CardBody>
            </CardContainer>

            {/* Service Popup */}
            {isPopupOpen && (
                <ServicePopup
                    onClose={handleClosePopup}
                    serviceTitle={title}
                />
            )}
        </>
    );
}