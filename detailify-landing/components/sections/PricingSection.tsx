import { Button } from "../ui/Button";
import { TickIcon } from "../ui/TickIcon";
import { Card, CardHeader, CardContent } from "../ui/Card";

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

                    <ul className="mt-6 space-y-3 text-sm text-slate-700">
                        <li className="flex items-center gap-2">
                            <TickIcon />
                            Up to 5 team members
                        </li>
                        <li className="flex items-center gap-2">
                            <TickIcon />
                            10GB storage
                        </li>
                        <li className="flex items-center gap-2">
                            <TickIcon />
                            Basic analytics
                        </li>
                        <li className="flex items-center gap-2">
                            <TickIcon />
                            Email support
                        </li>
                    </ul>
                </div> 

                {/* Professional - Highlighted */}
                <div className="rounded-xl border-2 border-[#155DFC] bg-white p-8 shadow-lg">
                    {/* Most Popular Tag */}
                    <div className="inline-flex items center ">
                        Most Popular
                    </div>
                </div>
            </div>
        </section>
    )
}