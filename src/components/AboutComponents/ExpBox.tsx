import React from "react";
import Image from "next/image";

interface ExpBoxProps {
    img: string;
    title: string;
    role: string;
    duration: string;
}

function ExpBox({ img, title, role, duration }: ExpBoxProps) {
    return (
        <div className="group relative overflow-hidden">


            <div className="relative flex justify-between items-center w-full py-6 px-4 sm:py-8 sm:px-6 border-b border-gray-300 group-hover:border-gray-400 transition-all duration-300">
                <div className="flex items-center flex-1 min-w-0 pr-3 sm:pr-4">
                    {/* Enhanced image container */}
                    <div className="relative flex-shrink-0">
                        <Image
                            src={img}
                            alt={`${title} at ${role}`}
                            width={64}
                            height={64}
                            className="relative h-12 w-12 xs:h-14 xs:w-14 sm:h-16 sm:w-16 md:h-14 md:w-14 rounded-4xl object-cover shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
                        />
                    </div>

                    {/* Enhanced text content */}
                    <div className="ml-3 xs:ml-4 sm:ml-6 flex-1 min-w-0">
                        <h1 className="text-base xs:text-lg sm:text-xl font-semibold leading-tight text-gray-600 group-hover:text-gray-700 transition-colors duration-200 mb-0.5 sm:mb-1 truncate">
                            {title}
                        </h1>
                        <p className="text-sm xs:text-base text-gray-300 group-hover:text-gray-400 transition-colors duration-200 font-medium truncate">
                            {role}
                        </p>
                    </div>
                </div>

                {/* Enhanced duration with badge style */}
                <div className="flex-shrink-0">
                    <div className="inline-flex items-center px-2 py-1 xs:px-3 xs:py-1.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20 whitespace-nowrap">
                        {duration}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExpBox;
