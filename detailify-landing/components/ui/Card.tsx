import React from "react";

type CardProps = {
    children: React.ReactNode;
    className?: string;
};

export function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`rounded-xl border bg-white p-8 ${className}`}>
            {children}
        </div>
    );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
    return <div className="space-y-1">{children}</div>
}

export function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="mt-6 spoace-y-4">{children}</div>
}