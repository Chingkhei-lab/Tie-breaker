"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

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
                </div>
                <div className="flex-1 h-[400px] w-full bg-slate-200 rounded-2xl overflow-hidden relative">
                    {/* REPLACE WITH REAL IMAGE URL */}
                    <img
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800"
                        alt="Lab Team"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
}
