import Image from "next/image";
import { Button } from "../ui/Button";

export function HeroSection () {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
                {/* Left Side */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-black px-2 py-0.5">
                        <span className="rounded-full px-2 py-0.5 text-10px text-white">
                            New Release v2.0
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl tracking-tight text-slate-900 md:text-5xl leading-tight">
                        Build with precision <br />
                        and 
                        <span className="font-bold bg-gradient-to-r from-[#155DFC] to-[#9810FA] bg-clip-text text-transparent"> attention to detail
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="max-w-md text-m text-slate-600 leading-relaxed">
                        The modern platform for teams who care about <br />quality. Every pixel matters, every interaction counts.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items center gap-3">
                        <Button className="px-6">Start Free Trial</Button>
                        <Button variant="outline" className="px-6">Watch Demo</Button>
                    </div>

                    {/* Social Proof */}
                    <div className="pt-4 flex items-center gap-4">
                        {/* Avatars */}
                        <div className="flex -space-x-2">
                            <div className="h-10 w-10 border-2 border-white rounded-full bg-gradient-to-r from-[#FB64B6] to-[#FF6467]"/>
                            <div className="h-10 w-10 border-2 border-white rounded-full bg-gradient-to-r from-[#51A2FF] to-[#00D3F2]"/>
                            <div className="h-10 w-10 border-2 border-white rounded-full bg-gradient-to-r from-[#05DF72] to-[#00D492]"/>
                            <div className="h-10 w-10 border-2 border-white rounded-full bg-gradient-to-r from-[#C27AFF] to-[#7C86FF]"/>
                        </div>

                        {/* Rating text */}
                        <div className="text-xs text-slate-600">
                            Trusted by 10,000+ developers
                            <div className="flex items-center gap-1">
                                <span className="text-[#F0B100]">★</span>
                                <span className="text-[#F0B100]">★</span>
                                <span className="text-[#F0B100]">★</span>
                                <span className="text-[#F0B100]">★</span>
                                <span className="text-[#F0B100]">★</span>
                                <span className="text-[#F0B100]">4.9/5 rating</span>
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
                        width={800}
                        height={600}
                        className="object-cover"
                        priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}