"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                <div className="flex-1">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Pioneering <span className="text-teal-600">Bio-Regenerative</span> Dentistry
                    </h1>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Founded in 2015, Kindway BioReZens has bridged the gap between advanced biotechnology and clinical dental practice. We specialize in synthetic bone grafts and titanium implants that reduce recovery time by 40%.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {['FDA Approved', 'ISO 13485 Certified', '100% Biocompatible', 'Global Distribution'].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                                <CheckCircle2 className="text-teal-600 h-5 w-5" /> {item}
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg">
                            <Link href="/products">View Product Catalogue <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                        <Button asChild variant="outline" className="border-slate-300">
                            <Link href="/contact">Contact Sales Team</Link>
                        </Button>
                    </div>
                </div>
                <div className="flex-1 h-[400px] w-full bg-slate-200 rounded-2xl overflow-hidden relative">
                    <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                        alt="Lab Team"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>

            {/* CTA BANNER */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Upgrade Your Clinical Skills?</h2>
                    <p className="text-slate-300">Join 1500+ dentists who have trained with Kindway BioReZens experts.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                    <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white shadow-lg text-base h-12 px-6">
                        <Link href="/training">Book Your Training Slot <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg h-12 px-6 font-bold">
                        <Link href="/education">Explore Education Hub</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
