const features = [
    {
        title: "Lightning Fast",
        description: "Optimized performance wth sub-100ms response times",
        bg: "#DBEAFE"
    },
    {
        title: "Secure by Default",
        description: "Enterprise grade security with end-to-end encryption",
        bg: "#F3E8FF"
    },
    {
        title: "Advanced Analytics",
        description: "Real-time insights with customizable dashboards",
        bg: "#DCFCE7"
    },
    {
        title: "Team Collaboration",
        description: "Built for teams with real-time collaboration tools",
        bg: "#FFEDD4"
    }
];

export function FeaturesSection () {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            {/* Heading + subheading */}
            <div className="text-center">
                <h1 className="text-2xl text-slate-900 md:text-4xl">
                    Built for the detail-oriented
                </h1>
                <p className="mt-3 text-xl text-slate-600">
                    Every feature designed with precision and care. Experience the difference <br/> quality makes.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-19 grid gap-5 md:grid-cols-4">
                {features.map((feature) => (
                    <article
                        key={feature.title}
                        className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                        {/* Icon Placeholder */}
                        <div 
                        className="mb-4 inline-flex h-9 w-9 items center justify-center rounded-xl"
                        style={{ backgroundColor: feature.bg}}
                        />
                        <h3 className="text-sm text-slate-900">
                            {feature.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-slate-600">
                            {feature.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}