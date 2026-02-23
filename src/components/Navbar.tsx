"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
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
    { name: "Training & Workshops", href: "/training" },
    { name: "Education", href: "/education" },
    { name: "Mobile Dental Clinic", href: "/services" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-8">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center space-x-2">
                        {/* Added Logo Icon */}
                        <div className="h-8 w-8 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-800 dark:text-white">
                            Kindway<span className="text-teal-600">BioReZens</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition-colors hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400 min-h-[44px] flex items-center"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white min-h-[44px] font-semibold">
                        <Link href="/products">View Product Catalogue</Link>
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="md:hidden min-h-[44px] min-w-[44px]"
                            aria-label="Toggle Menu"
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        {/* Header Title inside mobile canvas to adhere to Shadcn accessibility */}
                        <div className="sr-only">Mobile Navigation Menu</div>
                        <nav className="flex flex-col gap-4 mt-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-lg font-medium text-slate-800 transition-colors hover:text-teal-600 min-h-[44px] py-2 dark:text-slate-200"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white min-h-[44px] mt-4 w-full">
                                <Link href="/products" onClick={() => setIsOpen(false)}>
                                    View Product Catalogue
                                </Link>
                            </Button>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </motion.header>
    );
}
