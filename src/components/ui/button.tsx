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
                    "bg-[#111111] text-white hover:bg-[#333333] active:scale-95",
                outline:
                    "border border-[#111111] text-[#111111] bg-transparent hover:bg-[#111111] hover:text-white active:scale-95",
                ghost:
                    "text-[#111111] hover:bg-[#111111]/5 active:scale-95",
                muted:
                    "border border-[#D8D8D0] text-[#888880] hover:border-[#111111] hover:text-[#111111] active:scale-95",
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
