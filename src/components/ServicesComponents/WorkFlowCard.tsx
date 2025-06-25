interface WorkFlowCardProps {
    hour: string
    title: string
    content: string
    index: number
    isLast: boolean
}

function WorkFlowCard({ hour, title, content, index, isLast }: WorkFlowCardProps) {
    return (
        <div className="w-full px-3 sm:px-4 lg:px-0">
            <div className="relative mb-4 sm:mb-6 lg:mb-8 max-w-full">
                <div
                    className="relative p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl sm:shadow-2xl border border-gray-800 hover:border-[#3BBAB6]/30 group overflow-hidden w-full transition duration-300 ease-in-out bg-gradient-to-br from-[#092120] via-black to-[#092120]"
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                >
                    {/* Background gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3BBAB6]/5 via-transparent to-[#3BBAB6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Mobile-optimized header layout */}
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                        {/* Step indicator */}
                        <div className="bg-[#3BBAB6] text-white text-xs font-bold px-2.5 py-1 sm:px-4 sm:py-2 rounded-full shadow-md">
                            STEP {index + 1}
                        </div>

                        {/* Hour badge */}
                        <div className="bg-gradient-to-r from-[#3BBAB6] to-[#2dd4bf] text-white py-1 px-3 sm:py-2 sm:px-4 rounded-full shadow-lg">
                            <span className="font-medium text-xs sm:text-sm">{hour}</span>
                        </div>
                    </div>

                    {/* Title - mobile optimized */}
                    <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight group-hover:text-[#3BBAB6] transition-all duration-300 w-full">
                        {title}
                    </h3>

                    {/* Content - mobile optimized */}
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-gray-200 transition-colors duration-300 font-light w-full">
                        {content}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1">
                        <div className="bg-[#3BBAB6] h-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>

                    {/* Decorative elements - hidden on mobile for cleaner look */}
                    <div className="hidden sm:block absolute top-4 sm:top-6 left-4 sm:left-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#3BBAB6] rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-500" />
                    <div className="hidden sm:block absolute bottom-4 sm:bottom-6 right-4 sm:right-6 w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#3BBAB6] rounded-full opacity-30 group-hover:opacity-70 transition-opacity duration-700" />

                    {/* Corner accent - responsive */}
                    <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-[#3BBAB6]/10 to-transparent rounded-tl-lg sm:rounded-tl-xl lg:rounded-tl-2xl" />
                </div>
            </div>
        </div>
    )
}

export default WorkFlowCard