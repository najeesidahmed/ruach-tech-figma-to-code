import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant? : Variant;
    children: ReactNode;
}

export function Button({
    variant = "primary",
    className = "",
    children,
    ...props
}: ButtonProps) {
    const base = "inline-flex items-center justify-center rounded-30 px-5 py-2.5 text-sm font-medium transition shadow-sm";
    const styles: Record<Variant, string> = {
       primary: "bg-black text-white hover:bg-neutral-900",
       outline: "border border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-50" 
    };

    return (
        <button className={`${base} ${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}