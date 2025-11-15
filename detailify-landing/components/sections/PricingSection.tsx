import { Button } from "../ui/Button";
import { TickIcon } from "../ui/TickIcon";
import { Card, CardHeader, CardContent } from "../ui/Card";

export function PricingSection() {
    return (
        <section className="mx-auto max-w-6xl px-6 py-24">
            {/* Heading */}
            <div className="text-center">
                <h2 className="text-[40px] text-(--text-title)">
                    Simple, transparent pricing
                </h2>
                <p className="mt-2 text-[20px] text-(--text-paragraph)">
                    Choose the plan that's right for your team
                </p>
            </div>

            {/* Pricing Grid */}
            <div className="mt-14 grid md:grid-cols-3 gap-1 items-center justify-center">
                {/* Starter */}
                <Card className="max-h-[448px] w-full max-w-[320px] border border-black/10">
                    <CardHeader>
                        <h3 className="text-[16px] font-medium text-(--text-title)">Starter</h3>
                        <p className="mt-4 text-[36px] text-(--text-title)">
                            $29
                            <span className="text-[16px] text-(--text-paragraph)">/month</span>
                        </p>
                        <p className="text-[16px] text-(--text-card-p)">Perfect for small teams</p>
                    </CardHeader>
                        
                    <CardContent>
                        <Button className="mt-2 w-full" variant="outline_black">Get Started</Button>

                        <ul className="mt-2 space-y-3 text-sm text-slate-700">
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
                    </CardContent>
                </Card> 

                {/* Professional - Highlighted */}
                <Card className="min-h-[470px] w-full max-w-[336px] border-2 border-[#155DFC] shadow-2xl">
                    <CardHeader>
                        <div className="inline-flex items center rounded-xl bg-(--button-dark) px-3 py-1 text-xs text-white">
                            Most Popular
                        </div>

                        <h3 className="mt-2 text-[16px] font-medium text-(--text-title)">Professional</h3>
                        <p className="mt-1 text-[36px] text-(--text-title)">
                            $79
                            <span className="text-[16px] text-(--text-paragraph)">/month</span>
                        </p>
                        <p className="text-[16px] text-(--text-card-p)">For growing businesses</p>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full">Get Started</Button>

                        <ul className="mt-2 space-y-3 text-sm text-slate-700">
                            <li className="flex items-center gap-2">
                                <TickIcon /> Up to 20 team members
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon /> 100GB storage
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon /> Advanced analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon /> Priority support
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon /> Custom integrations
                            </li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Custom */}
                <Card className="max-h-[448px] w-full max-w-[320px] border border-black/10">
                    <CardHeader>
                        <h3 className="text-[16px] font-medium text-(--text-title)">Enterprise</h3>
                        <p className="mt-4 text-3xl text-slate-900">
                            Custom
                        </p>
                        <p className="mt-3 text-[16px] text-(--text-card-p)">For large organizations</p>
                    </CardHeader>
                        
                    <CardContent>
                        <Button className="mt-2 w-full" variant="outline_black">Contact Sales</Button>

                        <ul className="mt-2 space-y-3 text-sm text-slate-700">
                            <li className="flex items-center gap-2">
                                <TickIcon />
                                Unlimited team members
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon />
                                Unlimited storage
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon />
                                Enterprise analytics
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon />
                                24/7 dedicated support
                            </li>
                            <li className="flex items-center gap-2">
                                <TickIcon />
                                Custom SLA
                            </li>
                        </ul>
                    </CardContent>
                </Card> 
            </div>
        </section>
    )
}