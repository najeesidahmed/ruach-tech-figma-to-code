const footerLinks = [
    {
        title: "Product",
        links: ["Features", "Pricing", "Integrations", "Changelog"]
    },
    {
        title: "Company",
        links: ["About", "Blog", "Careers", "Contact"]
    },
    {
        title: "Legal",
        links: ["Privacy", "Terms", "Security"]
    },
];

export function Footer() {
    return (
        <footer className="bg-[#101828] text-slate-300">
            <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
                {/* Top row: logo + columns */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
                    {/* Brand block */}
                    <div className="max-w-2xs">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-xl bg-linear-to-br from-[#155DFC] to-[#9810FA]" />
                            <span className="text-sm font-semibold text-white">
                                Detailify
                            </span>
                        </div>
                        <p className="mt-4 text-[#D1D5DC]">
                            Building the future of precise, detail-oriented development.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}