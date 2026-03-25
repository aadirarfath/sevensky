export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
            {/* Icon Area */}
            <div className="relative group">
                {/* Glow behind the icon */}
                <div className="absolute inset-0 bg-[#d4af37] opacity-20 blur-xl rounded-full transition-opacity duration-500 group-hover:opacity-40"></div>

                {/* The block containing the SS */}
                <div
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-[#0a0a0a] flex items-center justify-center border border-white/5 shadow-2xl overflow-hidden"
                    style={{
                        boxShadow:
                            "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px -10px rgba(0,0,0,0.8)",
                    }}
                >
                    {/* Inner metallic effect on the container */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-[2rem]"></div>

                    <div className="flex items-center gap-1 md:gap-2">
                        {/* First S */}
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 100 100"
                            className="w-10 h-10 md:w-16 md:h-16 drop-shadow-lg"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#E5C778" />
                                    <stop offset="25%" stopColor="#FFF2B2" />
                                    <stop offset="50%" stopColor="#C89D46" />
                                    <stop offset="75%" stopColor="#FDE192" />
                                    <stop offset="100%" stopColor="#8A6327" />
                                </linearGradient>
                                <filter id="bevel" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur" />
                                    <feOffset dx="-1" dy="-1" result="offsetGlow" />
                                    <feFlood floodColor="#ffffff" floodOpacity="0.8" />
                                    <feComposite in2="offsetGlow" operator="in" result="glow" />

                                    <feOffset in="blur" dx="2" dy="2" result="offsetShadow" />
                                    <feFlood floodColor="#000000" floodOpacity="0.6" />
                                    <feComposite in2="offsetShadow" operator="in" result="shadow" />

                                    <feMerge>
                                        <feMergeNode in="glow" />
                                        <feMergeNode in="shadow" />
                                        <feMergeNode in="SourceGraphic" />
                                    </feMerge>
                                </filter>
                            </defs>
                            <path
                                d="M 90 30 C 90 15, 75 10, 50 10 C 25 10, 10 15, 10 30 C 10 45, 25 50, 40 50 L 60 50 C 75 50, 90 55, 90 70 C 90 85, 75 90, 50 90 C 25 90, 10 85, 10 70"
                                stroke="url(#gold)"
                                strokeWidth="18"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#bevel)"
                            />
                        </svg>

                        {/* Second S */}
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 100 100"
                            className="w-10 h-10 md:w-16 md:h-16 drop-shadow-lg"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M 90 30 C 90 15, 75 10, 50 10 C 25 10, 10 15, 10 30 C 10 45, 25 50, 40 50 L 60 50 C 75 50, 90 55, 90 70 C 90 85, 75 90, 50 90 C 25 90, 10 85, 10 70"
                                stroke="url(#gold)"
                                strokeWidth="18"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#bevel)"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Text Area */}
            <div className="flex flex-col items-center mt-2 group-hover:scale-105 transition-transform duration-500">
                <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] relative"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    {/* Gold Text Gradient Component */}
                    <span className="bg-gradient-to-br from-[#E5C778] via-[#FFF2B2] to-[#C89D46] bg-clip-text text-transparent drop-shadow-md relative z-10">
                        SEVEN SKY
                    </span>
                    {/* subtle glow */}
                    <span className="absolute inset-0 bg-gradient-to-br from-[#E5C778] via-[#FFF2B2] to-[#C89D46] bg-clip-text text-transparent opacity-50 blur-sm z-0">
                        SEVEN SKY
                    </span>
                </h1>
                <p
                    className="text-[0.6rem] md:text-xs tracking-[0.3em] md:tracking-[0.4em] text-[#C89D46] uppercase font-light mt-1"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Advertising
                </p>
            </div>
        </div>
    );
}

export function LogoSmall({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {/* Small SS Icon */}
            <div className="relative group">
                <div
                    className="relative w-10 h-10 rounded-[0.8rem] bg-[#0a0a0a] flex items-center justify-center border border-white/5 shadow-lg overflow-hidden"
                    style={{
                        boxShadow:
                            "inset 0 1px 1px rgba(255,255,255,0.1), 0 4px 10px -2px rgba(0,0,0,0.8)",
                    }}
                >
                    <div className="flex items-center gap-[0.1rem]">
                        {/* First S */}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient id="goldSmall" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#E5C778" />
                                    <stop offset="25%" stopColor="#FFF2B2" />
                                    <stop offset="50%" stopColor="#C89D46" />
                                    <stop offset="75%" stopColor="#FDE192" />
                                    <stop offset="100%" stopColor="#8A6327" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M 90 30 C 90 15, 75 10, 50 10 C 25 10, 10 15, 10 30 C 10 45, 25 50, 40 50 L 60 50 C 75 50, 90 55, 90 70 C 90 85, 75 90, 50 90 C 25 90, 10 85, 10 70"
                                stroke="url(#goldSmall)"
                                strokeWidth="18"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#bevel)"
                            />
                        </svg>

                        {/* Second S */}
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 100 100"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M 90 30 C 90 15, 75 10, 50 10 C 25 10, 10 15, 10 30 C 10 45, 25 50, 40 50 L 60 50 C 75 50, 90 55, 90 70 C 90 85, 75 90, 50 90 C 25 90, 10 85, 10 70"
                                stroke="url(#goldSmall)"
                                strokeWidth="18"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                filter="url(#bevel)"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Text */}
            <div className="flex flex-col">
                <span
                    className="text-lg md:text-xl font-bold tracking-[0.15em] text-[#111111] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-[#E5C778] dark:via-[#FFF2B2] dark:to-[#C89D46]"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    SEVEN SKY
                </span>
                <span
                    className="text-[0.45rem] tracking-[0.25em] uppercase font-light -mt-0.5 text-[#888880] dark:text-[#C89D46]"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Advertising
                </span>
            </div>
        </div>
    );
}
