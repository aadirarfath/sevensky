"use client"

import * as React from "react"
import { HTMLMotionProps, MotionConfig, motion } from "motion/react"
import { cn } from "@/lib/utils"

interface TextStaggerHoverProps {
    text: string
    index: number
}
interface HoverSliderImageProps {
    index: number
    imageUrl: string
}
interface HoverSliderProps { }
interface HoverSliderContextValue {
    activeSlide: number
    changeSlide: (index: number) => void
}
function splitText(text: string) {
    const words = text.split(" ").map((word) => word.concat(" "))
    const characters = words.map((word) => word.split("")).flat(1)

    return {
        words,
        characters,
    }
}

const HoverSliderContext = React.createContext<
    HoverSliderContextValue | undefined
>(undefined)
export function useHoverSliderContext() {
    const context = React.useContext(HoverSliderContext)
    if (context === undefined) {
        throw new Error(
            "useHoverSliderContext must be used within a HoverSliderProvider"
        )
    }
    return context
}

export const HoverSlider = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement> & HoverSliderProps
>(({ children, className, ...props }, ref) => {
    const [activeSlide, setActiveSlide] = React.useState<number>(0)
    const changeSlide = React.useCallback(
        (index: number) => setActiveSlide(index),
        [setActiveSlide]
    )
    return (
        <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
            <div className={className} {...props}>{children}</div>
        </HoverSliderContext.Provider>
    )
})
HoverSlider.displayName = "HoverSlider"

export const TextStaggerHover = React.forwardRef<
    HTMLElement,
    React.HTMLAttributes<HTMLElement> & TextStaggerHoverProps
>(({ text, index, children, className, ...props }, ref) => {
    const { activeSlide, changeSlide } = useHoverSliderContext()
    const { characters } = splitText(text)
    const isActive = activeSlide === index
    const handleMouse = () => changeSlide(index)
    return (
        <span
            className={cn(
                "relative inline-block origin-bottom overflow-hidden transition-opacity duration-300",
                isActive ? "opacity-100" : "opacity-40 hover:opacity-100",
                className
            )}
            {...props}
            ref={ref}
            onMouseEnter={handleMouse}
        >
            {characters.map((char, charIndex) => (
                <span
                    key={`${char}-${charIndex}`}
                    className="relative inline-block overflow-hidden"
                >
                    <MotionConfig
                        transition={{
                            delay: charIndex * 0.015,
                            duration: 0.25,
                            ease: "easeOut",
                        }}
                    >
                        <motion.span
                            className="inline-block"
                            initial={{ y: "0%" }}
                            animate={isActive ? { y: "-110%" } : { y: "0%" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>

                        <motion.span
                            className="absolute left-0 top-0 inline-block font-bold"
                            initial={{ y: "110%" }}
                            animate={isActive ? { y: "0%" } : { y: "110%" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    </MotionConfig>
                </span>
            ))}
        </span>
    )
})
TextStaggerHover.displayName = "TextStaggerHover"

export const clipPathVariants = {
    visible: {
        clipPath: "inset(0% 0% 0% 0%)",
        opacity: 1,
        scale: 1,
    },
    hidden: {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
        scale: 1.05,
    },
}
export const HoverSliderImageWrap = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
                className
            )}
            {...props}
        />
    )
})
HoverSliderImageWrap.displayName = "HoverSliderImageWrap"

export const HoverSliderImage = React.forwardRef<
    HTMLImageElement,
    HTMLMotionProps<"img"> & HoverSliderImageProps
>(({ index, imageUrl, children, className, ...props }, ref) => {
    const { activeSlide } = useHoverSliderContext()
    return (
        <motion.img
            className={cn("inline-block align-middle", className)}
            transition={{ ease: "circOut", duration: 0.6 }}
            variants={clipPathVariants}
            animate={activeSlide === index ? "visible" : "hidden"}
            ref={ref}
            {...props}
        />
    )
})
HoverSliderImage.displayName = "HoverSliderImage"
