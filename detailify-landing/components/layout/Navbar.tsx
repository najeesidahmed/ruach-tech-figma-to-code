import { Button } from "../ui/Button";

const navLinks = ["Features", "Pricing", "About", "Dashboard"];

export function Navbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-[#E5E7EB] bg-white backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-[10px] bg-linear-to-br from-(--brand-blue) to-(--brand-purple)" />
                    <span className="text-sm font-semibold text-(--text-title)">
                        Detailify
                    </span>
                </div>

                {/*Nav Links */}
                <div className="hidden items-center gap-8 text-sm text-(--text-paragraph) md:flex">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="hover:text-neutral-900">
                            {link}
                        </a>
                    ))}
                </div>

                {/*Buttons*/}
                <div className="flex items-center gap-6">
                        <button className="text-sm text-(--text-title)">
                            Sign In
                        </button>
                        <Button className="px-4 py-2">Get Started</Button>
                </div>
            </nav>
        </header>
    )
}