import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

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
    const base = "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm shadow-sm";
    const styles: Record<Variant, string> = {
       primary: "bg-[var(--button-dark)] text-[var(--text-white)]",
       secondary: "bg-[var(--button-light)] text-[var(--button-dark)]",
       outline: "border border-white" 
    };

    return (
        <button className={`${base} ${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}