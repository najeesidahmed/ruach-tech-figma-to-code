import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline_black" | "outline_white";

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
    const base = "inline-flex items-center font-medium justify-center rounded-[8px] px-5 py-2.5 text-[14px]";
    const styles: Record<Variant, string> = {
       primary: "bg-(--button-dark) text-(--text-white)",
       secondary: "bg-(--button-light) text-(--button-dark)",
       outline_black: "border border-black/10",
       outline_white: "border border-white"
    };

    return (
        <button className={`${base} ${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}