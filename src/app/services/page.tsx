"use client";

import { Button } from "@/components/ui/button";
import { Truck, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full text-teal-700 mb-4">
                    <Truck size={32} />
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Mobile <span className="text-teal-600">Dental Clinic</span></h1>
                <p className="text-lg text-slate-600">
                    Bringing advanced dental care to remote locations. Our fully equipped mobile units conduct surgeries, checkups, and awareness camps.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="h-[400px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                    {/* REPLACE WITH REAL IMAGE URL */}
                    <img
                        src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800"
                        alt="Mobile Dental Van"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Upcoming Camps</h3>
                    {[
                        { loc: "Rural Health Center, Assam", date: "March 12, 2026" },
                        { loc: "Community Hall, Imphal", date: "March 18, 2026" }
                    ].map((camp, i) => (
                        <div key={i} className="flex items-center p-4 bg-white border border-slate-200 rounded-lg shadow-sm">
                            <div className="h-12 w-12 bg-teal-600 text-white rounded-lg flex items-center justify-center mr-4">
                                <MapPin />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900">{camp.loc}</p>
                                <p className="text-sm text-slate-500 flex items-center gap-1"><Calendar size={14} /> {camp.date}</p>
                            </div>
                        </div>
                    ))}
                    <Button className="w-full bg-slate-900 text-white">Request a Camp in Your Area</Button>
                </div>
            </div>
        </div>
    );
}
