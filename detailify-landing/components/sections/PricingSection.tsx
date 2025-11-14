import { Button } from "../ui/Button";

export function PricingSection() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-24">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl text-neutral-900">
                    Simple, transparent pricing
                </h2>
                <p className="mt-2 text-slate-600">
                    Choose the plan that's right for your team
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="mt-14 grid gap-6 md:grid-cols-3">
                {/* Starter */}
                <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h3 className="text-sm font-medium text-slate-900">Starter</h3>
                    <p className="mt-4 text-3xl text-slate-900">
                        $29
                        <span className="text-base text-slate-500">/month</span>
                    </p>

                    <p className="mt-2 text-sm text-slate-500">Perfect for small teams</p>
                    <Button className="mt-6 w-full" variant="outline">Get Started</Button>
                </div> 
            </div>
        </section>
    )
}