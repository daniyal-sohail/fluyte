import { HoverBoderBtn } from "./SectionButton";

interface HeadingProps {
    para: string;
    headOne: string;
    headTwo: string;
    headThree: string;
    btnText: string;
}

export default function Heading({ para, headOne, headTwo, headThree, btnText }: HeadingProps) {
    return (
        <div className="flex flex-col items-center text-center">

            <HoverBoderBtn btnText={btnText} />

            {/* Large Heading */}
            <h1
                data-aos="fade-up"
                className="my-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black font-semibold max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
            >
                {headOne} <span style={{ color: "#48D1CC" }}>{headTwo}</span> {headThree}
            </h1>

            {/* Centered Paragraph */}
            <p className="text-gray-600 text-base max-w-2xl">
                {para}
            </p>
        </div>
    );
}
