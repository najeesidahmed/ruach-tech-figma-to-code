import Image from "next/image";
import { Button } from "../ui/Button";

export function HeroSection () {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                {/* Left Side */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-lg bg-(--button-dark) px-2 py-0.5">
                        <span className="rounded-full px-2 py-0.5 text-[12px] font-medium text-white">
                            New Release v2.0
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="-mt-7 text-5xl tracking-tight text-(--text-title) md:text-5xl leading-tight">
                        Build with precision <br />
                        and 
                        <span className="font-bold bg-linear-to-r from-(--brand-blue) to-(--brand-purple) bg-clip-text text-transparent"> attention to detail
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-md text-m text-(--text-paragraph) leading-relaxed">
                        The modern platform for teams who care about <br />quality. Every pixel matters, every interaction counts.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items center gap-4">
                        <Button className="px-4 flex items-center gap-4">Start Free Trial
                        <Image 
                            src="/icons/arrow.svg"
                            alt=""
                            width={16}
                            height={16}
                        />
                        </Button>
                        <Button variant="outline_black" className="px-6 text-(--text-title)">Watch Demo</Button>
                    </div>

                    {/* Social Proof */}
                    <div className="pt-4 flex items-center gap-7">
                        {/* Avatars */}
                        <div className="flex -space-x-2">
                            <div className="h-11 w-11 border-2 border-white rounded-full bg-linear-to-r from-[#FB64B6] to-[#FF6467]"/>
                            <div className="h-11 w-11 border-2 border-white rounded-full bg-linear-to-r from-[#51A2FF] to-[#00D3F2]"/>
                            <div className="h-11 w-11 border-2 border-white rounded-full bg-linear-to-r from-[#05DF72] to-[#00D492]"/>
                            <div className="h-11 w-11 border-2 border-white rounded-full bg-linear-to-r from-[#C27AFF] to-[#7C86FF]"/>
                        </div>

                        {/* Rating text */}
                        <div className="text-xs text-(--text-paragraph)">
                            Trusted by 10,000+ developers
                            <div className="flex items-center gap-1">
                                <span className="text-(--review-yellow)">★</span>
                                <span className="text-(--review-yellow)">★</span>
                                <span className="text-(--review-yellow)">★</span>
                                <span className="text-(--review-yellow)">★</span>
                                <span className="text-(--review-yellow)">★</span>
                                <span className="text-(--review-yellow)">4.9/5 rating</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="relative">
                    <div className="relative overflow-hidden shadow-xl">
                        <Image
                        src="/hero/workspace-hero.png"
                        alt="Workspace"
                        width={562}
                        height={422}
                        className="object-cover"
                        priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}