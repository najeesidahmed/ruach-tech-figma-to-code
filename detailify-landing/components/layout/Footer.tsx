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
        <footer className="bg-(--footer-bg)">
            <div className="mx-auto max-w-6xl px-2 py-12">
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
                        <p className="mt-4 text-(--text-footer-light)">
                            Building the future of precise, detail-oriented development.
                        </p>
                    </div>

                    {/* Link Columns */}
                    <div className="grid flex-1 gap-8 text-[16px] sm:grid-cols-3">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
                                <h3 className="font-regular text-(--text-white)">{section.title}</h3>
                                <ul className="mt-4 space-y-2 text-[14px] text-(--text-footer-light)">
                                    {section.links.map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom row: copyright */}
                <div className="mt-4 text-center text-[14px] text-(--text-footer-light)">
                © 2025 Detailify. All rights reserved.
                </div>
            </div>
        </footer>
    )
}