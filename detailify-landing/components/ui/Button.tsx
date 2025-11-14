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
    const base = "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-bold shadow-sm";
    const styles: Record<Variant, string> = {
       primary: "bg-[#030213] text-white",
       outline: "border border-slate-200 text-slate-900 bg-white hover:bg-slate-50" 
    };

    return (
        <button className={`${base} ${styles[variant]} ${className}`} {...props}>
            {children}
        </button>
    )
}