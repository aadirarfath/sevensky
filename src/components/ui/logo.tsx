export function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
            <div className="relative group">
                <div className="absolute inset-0 bg-white opacity-20 blur-xl rounded-full transition-opacity duration-500 group-hover:opacity-40"></div>
                <img 
                    src="/hero/logo.jpg" 
                    alt="SevenSky" 
                    className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover shadow-2xl border border-white/10" 
                />
            </div>
            
            <div className="flex flex-col items-center mt-2">
                <h1
                    className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.2em] text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    SEVEN SKY
                </h1>
                <p
                    className="text-[0.6rem] md:text-xs tracking-[0.4em] text-white/60 uppercase font-light mt-1"
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
            <img 
                src="/hero/logo.jpg" 
                alt="SevenSky" 
                className="w-10 h-10 rounded-lg object-cover border border-white/10" 
            />
            <div className="flex flex-col">
                <span
                    className="text-lg md:text-xl font-bold tracking-[0.15em] text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    SEVEN SKY
                </span>
                <span
                    className="text-[0.45rem] tracking-[0.25em] uppercase font-light -mt-0.5 text-white/60"
                    style={{ fontFamily: "var(--font-body)" }}
                >
                    Advertising
                </span>
            </div>
        </div>
    );
}
