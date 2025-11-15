import { Button } from "../ui/Button";

const navLinks = ["Features", "Pricing", "About", "Dashboard"];

export function Navbar() {
    return (
        <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white backdrop-blur">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-xl bg-linear-to-br from-[#155DFC] to-[#9810FA]" />
                    <span className="text-sm font-semibold text-black">
                        Detailify
                    </span>
                </div>

                {/*Nav Links */}
                <div className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
                    {navLinks.map((link) => (
                        <a key={link} href="#" className="hover:text-neutral-900">
                            {link}
                        </a>
                    ))}
                </div>

                {/*Buttons*/}
                <div className="flex items-center gap-6">
                        <button className="text-sm text-neutral-900">
                            Sign In
                        </button>
                        <Button className="px-4 py-2">Get Started</Button>
                </div>
            </nav>
        </header>
    )
}