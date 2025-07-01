import { cn } from "../../lib/utils";
import Image from "next/image";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
    imageUrl,
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    imageUrl?: string;
}) => {
    return (
        <div
            data-aos="fade-in" data-aos-duration="700" data-aos-delay="100"
            className={cn(
                "row-span-1 rounded-xl group/bento shadow-md hover:shadow-[0_2px_10px_rgba(78,21,191,0.2)] transition duration-300    p-4  bg-[#1A1A1A] border-white/[0.2] border  justify-between flex flex-col space-y-4   ease-in-out hover:border-gradient-to-tr hover:from-[#0d2e2c] hover:to-[#0d2e2c]  hover:shadow-emerald-500/10 bg-gradient-to-br from-[#092120] via-black to-[#092120] ",
                className
            )}
        >
            {imageUrl ? (
                <div data-aos="zoom-in" data-aos-duration="700" data-aos-delay="100" className="relative overflow-hidden rounded-lg">
                    <Image
                        src={imageUrl}
                        alt={typeof title === 'string' ? title : 'Bento grid item'}
                        width={400}
                        height={128}
                        className="w-full h-32 object-cover group-hover/bento:scale-105 transition-transform duration-300"
                    />
                </div>
            ) : (
                header
            )}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                {icon}
                <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="100" className=" text-xl sm:text-xl md:text-2xl  font-normal text-white  ">
                    {description}
                </p>
                <h3
                    data-aos="fade-up" data-aos-duration="700" data-aos-delay="100"
                    className="text-sm sm:text-base md:text-base font-bold mb-2 mt-2"
                    style={{ color: "#3BBAB6" }}
                >
                    {title}
                </h3>


            </div>
        </div>
    );
};
