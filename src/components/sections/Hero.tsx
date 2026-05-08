"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SequenceState = 'start_playing' | 'waiting_for_scroll' | 'scroll_playing' | 'finished';

export function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const startVideoRef = useRef<HTMLVideoElement>(null);
    const scrollVideoRef = useRef<HTMLVideoElement>(null);

    const [sequenceState, setSequenceState] = useState<SequenceState>('start_playing');
    const [mottoShown, setMottoShown] = useState(false);
    const [brandShown, setBrandShown] = useState(false);

    // Lock scrolling until the entire sequence is finished
    useEffect(() => {
        if (sequenceState !== 'finished') {
            document.body.style.overflow = "hidden";
            // Ensure we are locked exactly at the top of the page
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [sequenceState]);

    // Force scroll to top on refresh/mount
    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    // Listen for manual scroll intent to trigger the second video
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (sequenceState === 'waiting_for_scroll' && e.deltaY > 0) {
                startScrollVideo();
            }
        };

        let touchStartY = 0;
        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };
        const handleTouchMove = (e: TouchEvent) => {
            if (sequenceState === 'waiting_for_scroll') {
                const touchEndY = e.touches[0].clientY;
                if (touchStartY - touchEndY > 20) { // Swiping up (scrolling down)
                    startScrollVideo();
                }
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: true });
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [sequenceState]);

    const startScrollVideo = () => {
        setSequenceState('scroll_playing');
        if (scrollVideoRef.current) {
            scrollVideoRef.current.currentTime = 0;
            scrollVideoRef.current.playbackRate = 1.5;
            scrollVideoRef.current.play().catch(() => {});
        }
    };

    const handleStartVideoTimeUpdate = () => {
        if (startVideoRef.current) {
            const { currentTime, duration } = startVideoRef.current;
            if (duration > 0 && currentTime / duration >= 0.8 && !mottoShown) {
                setMottoShown(true);
            }
        }
    };

    const handleScrollVideoTimeUpdate = () => {
        if (scrollVideoRef.current) {
            const { currentTime, duration } = scrollVideoRef.current;
            // Display SEVENSKY just before the sequence ends
            if (duration > 0 && currentTime / duration >= 0.95 && !brandShown) {
                setBrandShown(true);
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            // Height is strictly the screen size now, because we control progression via state locking, not scroll distance
            className="relative h-screen w-full overflow-hidden bg-[#2d6fbc]"
        >
            {/* Video 1: start.mp4 */}
            <video
                ref={startVideoRef}
                src="/hero/start.mp4"
                autoPlay
                muted
                playsInline
                loop={false}
                onTimeUpdate={handleStartVideoTimeUpdate}
                onEnded={() => setSequenceState('waiting_for_scroll')}
                className={`absolute inset-0 w-full h-full object-cover ${(sequenceState === "start_playing" || sequenceState === "waiting_for_scroll") ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />

            {/* Video 2: scroll1.mp4 */}
            {/* Playback is strictly standard time (normal speed) once triggered */}
            <video
                ref={scrollVideoRef}
                src="/hero/scroll1.mp4"
                muted
                playsInline
                loop={false}
                preload="auto"
                onTimeUpdate={handleScrollVideoTimeUpdate}
                onEnded={() => setSequenceState('finished')}
                className={`absolute inset-0 w-full h-full object-cover ${(sequenceState === "scroll_playing" || sequenceState === "finished") ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            />

            {/* Overlays */}
            <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-center items-center">
                
                {/* Motto Text Overlay */}
                <AnimatePresence>
                    {mottoShown && (sequenceState === "start_playing" || sequenceState === "waiting_for_scroll") && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0 flex flex-col justify-end items-center text-center px-4 sm:px-6 pb-20 sm:pb-24 md:pb-32 bg-black/20"
                        >
                            <p 
                                className="text-4xl sm:text-5xl md:text-6xl text-white font-medium mb-4 sm:mb-6 drop-shadow-xl" 
                                style={{ fontFamily: "var(--font-display)", letterSpacing: "0.02em" }}
                            >
                                Where brands take flight.
                            </p>
                            <p className="text-white/90 text-[10px] sm:text-xs md:text-xl tracking-widest uppercase mb-3 sm:mb-4 drop-shadow-md leading-relaxed">
                                Bold Storytelling · Sharper design · smarter marketing
                            </p>
                            <p className="text-[#F5F0E8]/90 text-[10px] sm:text-xs md:text-base tracking-widest uppercase drop-shadow-md">
                                We build brands worth remembering
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Brand Name Overlay */}
                <AnimatePresence>
                    {brandShown && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="absolute inset-0 flex flex-col justify-center items-center bg-black/30 px-4"
                        >
                            <h1 
                                className="text-[22vw] sm:text-[18vw] md:text-[20vw] leading-none uppercase font-black tracking-tighter text-white drop-shadow-2xl text-center"
                                style={{ fontFamily: "var(--font-display)" }}
                            >
                                SEVENSKY
                            </h1>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
}
