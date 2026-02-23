"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Education", href: "/education" },
    { name: "Workshops", href: "/training" },
    { name: "Mobile Clinic", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const pathname = usePathname();

    return (
        <header
            className="sticky top-0 z-[100] w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">

                {/* LEFT SIDE: LOGO & BRAND */}
                <div className="flex-shrink-0 flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="h-10 w-10 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-md">
                            <ShieldCheck size={24} />
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
                                Kindway<span className="text-teal-600">BioReZens</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">
                                Biotech Innovations
                            </span>
                        </div>
                    </Link>
                </div>

                {/* CENTER: NAVIGATION LINKS (Hidden on Mobile) */}
                <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors px-3 py-2 rounded-full ${isActive
                                    ? "bg-teal-600 text-white font-bold shadow-md"
                                    : "text-slate-600 hover:text-teal-600 hover:bg-teal-50 dark:text-slate-300 dark:hover:text-teal-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* RIGHT SIDE: CTA BUTTON (Hidden on Mobile) */}
                <div className="hidden lg:flex flex-shrink-0 items-center gap-4">
                    <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white shadow-lg font-semibold">
                        <Link href="/products">View Product Catalogue</Link>
                    </Button>
                </div>

                {/* MOBILE MENU TRIGGER (Hamburger) */}
                <div className="lg:hidden flex items-center">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-10 w-10"
                                aria-label="Toggle Menu"
                            >
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px]">
                            <div className="flex flex-col gap-6 mt-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-8 w-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                                        <ShieldCheck size={18} />
                                    </div>
                                    <span className="font-bold text-lg">Menu</span>
                                </div>
                                <nav className="flex flex-col gap-2">
                                    {navLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={`text-lg font-medium py-2 border-b transition-colors ${isActive
                                                    ? "text-teal-600 font-bold border-l-4 border-teal-600 pl-3 bg-teal-50 rounded-r-md border-b-slate-100"
                                                    : "text-slate-700 hover:text-teal-600 border-b-slate-100"
                                                    }`}
                                            >
                                                {link.name}
                                            </Link>
                                        );
                                    })}
                                </nav>
                                <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white w-full mt-4">
                                    <Link href="/products" onClick={() => setIsOpen(false)}>
                                        View Product Catalogue
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </header>
    );
}
