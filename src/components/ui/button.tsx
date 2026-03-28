"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 cursor-pointer disabled:pointer-events-none disabled:opacity-50 outline-none",
    {
        variants: {
            variant: {
                default:
                    "bg-[#D4A843] text-[#0C0C0C] hover:bg-[#F0C040] active:scale-95",
                outline:
                    "border border-[#D4A843] text-[#D4A843] bg-transparent hover:bg-[#D4A843] hover:text-[#0C0C0C] active:scale-95",
                ghost:
                    "text-[#D4A843] hover:bg-[#D4A843]/10 active:scale-95",
                muted:
                    "border border-[#2A2415] text-[#C9A84C] hover:border-[#D4A843] hover:text-[#F0C040] active:scale-95",
            },
            size: {
                default: "h-10 px-6 py-2 rounded-full",
                sm: "h-8 px-4 text-xs rounded-full",
                lg: "h-12 px-8 text-base rounded-full",
                icon: "h-10 w-10 rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={buttonVariants({ variant, size, className })}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
