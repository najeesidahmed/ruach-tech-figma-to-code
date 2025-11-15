import Image from "next/image";

const features = [
    {
        title: "Lightning Fast",
        description: "Optimized performance wth sub-100ms response times",
        bg: "#DBEAFE",
        icon: "/features/thunder.svg"
    },
    {
        title: "Secure by Default",
        description: "Enterprise grade security with end-to-end encryption",
        bg: "#F3E8FF",
        icon: "/features/default.svg"
    },
    {
        title: "Advanced Analytics",
        description: "Real-time insights with customizable dashboards",
        bg: "#DCFCE7",
        icon: "/features/analytics.svg"
    },
    {
        title: "Team Collaboration",
        description: "Built for teams with real-time collaboration tools",
        bg: "#FFEDD4",
        icon: "/features/team.svg"
    }
];

export function FeaturesSection () {
    return (
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            {/* Heading + subheading */}
            <div className="text-center">
                <h2 className="text-[40px] text-(--text-title)">
                    Built for the detail-oriented
                </h2>
                <p className="mt-2 text-[20px] text-(--text-paragraph)">
                    Every feature designed with precision and care. Experience the difference <br/> quality makes.
                </p>
            </div>

            {/* Feature Cards */}
            <div className="mt-19 grid gap-5 md:grid-cols-4">
                {features.map((feature) => (
                    <article
                        key={feature.title}
                        className="flex flex-col rounded-2xl border-2 border-black/10 bg-white p-4 shadow-sm"
                    >
                        {/* Icon Placeholder */}
                        <div 
                        className="mb-4 inline-flex h-12 w-12 items center justify-center rounded-[10px]"
                        style={{ backgroundColor: feature.bg}}
                        >
                            <Image 
                                src={feature.icon}
                                alt={feature.title}
                                width={18}
                                height={18}
                            />
                        </div>
                        <h3 className="text-[16px] text-(--text-title)">
                            {feature.title}
                        </h3>
                        <p className="mt-2 max-w-[180px] text-[16px] leading-relaxed text-(--text-card-p)">
                            {feature.description}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    )
}