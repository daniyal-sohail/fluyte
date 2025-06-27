import Image from "next/image";

interface ProjectCardProps {
    title: string;
    content: string;
    buttons?: string[];
    btnOne?: string;
    btnTwo?: string;
    btnThree?: string;
    img: string;
}

function ProjectCard({ title, content, buttons = [], btnOne, btnTwo, btnThree, img }: ProjectCardProps) {
    // Convert legacy button props to array if buttons array is not provided
    const buttonArray = buttons.length > 0
        ? buttons
        : [btnOne, btnTwo, btnThree].filter(btn => btn !== undefined) as string[];

    return (
        <div className="project-card w-full flex items-center justify-center p-4 mb-8">
            <div className="bg-gray-900/10 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 w-full">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    <div className="w-full md:w-2/5 space-y-4">
                        <h1 className="text-white text-3xl font-medium tracking-tight leading-tight">
                            {title}
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            {buttonArray.map((button, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 border border-teal-500/20"
                                >
                                    {button}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                            {content}
                        </p>
                    </div>

                    <div className="w-full md:w-4/5">



                        <div className="relative overflow-hidden rounded-lg shadow-md">
                            <Image
                                src={img}
                                alt={title || "Project"}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
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