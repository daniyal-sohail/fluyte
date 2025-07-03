import Image from "next/image";

interface ProjectCardProps {
    title: string;
    content: string;
    buttons?: string[];
    btnOne?: string;
    btnTwo?: string;
    btnThree?: string;
    img: string;
    priority?: boolean;
    index?: number;
}

function ProjectCard({ title, content, buttons = [], btnOne, btnTwo, btnThree, img, priority = false, }: ProjectCardProps) {
    // Convert legacy button props to array if buttons array is not provided
    const buttonArray = buttons.length > 0
        ? buttons
        : [btnOne, btnTwo, btnThree].filter(btn => btn !== undefined) as string[];

    return (
        <div

            className="project-card w-full flex items-center justify-center p-4 mb-8"
        >
            <div className="bg-gray-900/10 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 w-full">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div
                        data-aos="fade-in"
                        data-aos-duration="550"
                        data-aos-delay="300"
                        className="w-full md:w-2/5 space-y-4"
                    >
                        <h1
                            data-aos="slide-right"
                            data-aos-duration="550"
                            data-aos-delay="700"
                            className="text-white text-3xl font-medium tracking-tight leading-tight"
                        >
                            {title}
                        </h1>

                        <div
                            data-aos="slide-right"
                            data-aos-duration="700"
                            data-aos-delay="300"
                            className="flex flex-wrap gap-2"
                        >
                            {buttonArray.map((button, buttonIndex) => (
                                <span
                                    key={buttonIndex}
                                    data-aos="flip-up"
                                    data-aos-duration="550"
                                    data-aos-delay="500"
                                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20"
                                >
                                    {button}
                                </span>
                            ))}
                        </div>
                        <p
                            data-aos="zoom-in"
                            data-aos-duration="550"
                            data-aos-delay="300"
                            className="text-gray-300 mb-6 text-lg leading-relaxed"
                        >
                            {content}
                        </p>
                    </div>

                    <div

                        className="w-full md:w-4/5"
                    >
                        <div
                            data-aos="fade-in"
                            data-aos-duration="700"
                            data-aos-delay="300"
                            className="relative overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={img}
                                alt={`${title} project screenshot`}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority={priority}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                                sizes="(max-width: 768px) 100vw, 66vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;