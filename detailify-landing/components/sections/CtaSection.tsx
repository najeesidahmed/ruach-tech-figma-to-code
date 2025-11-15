import { Button } from "../ui/Button";
import Image from "next/image"

export function CtaSection() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16">
            <div className="relative overflow-hidden rounded-[14px] bg-linear-to-r from-[#155DFC] to-[#9810FA] px-10 py-10 text-center text-white">
                {/* decorative circles */}
                <div className="pointer-events-none absolute -left-24 -bottom-30 h-56 w-56 rounded-full bg-white/10"/>
                <div className="pointer-events-none absolute -right-24 -top-30 h-56 w-56 rounded-full bg-white/10"/>
                <h2 className="text-3xl font-medium">
                    Ready to get started?
                </h2>
                <p className="mt-3 text-slate-300">
                    Join thousands of teams building with precision and attention to detail
                </p>

                <div className="mt-8 flex gap-4 justify-center">
                    <Button variant="secondary" className="px-4 flex items-center gap-4">Start Free Trial
                        <Image
                            src="/icons/arrow-black.svg"
                            alt=""
                            width={16}
                            height={16}
                        />
                    </Button>
                    <Button variant="outline_white">Schedule Demos</Button>
                </div>
            </div>
        </section>
    )
}