"use client";

import { motion } from "framer-motion";
import { BookOpen, FileText, Video, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const resources = [
    {
        id: 1,
        title: "Fundamentals of Osseointegration",
        type: "Article",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800",
        description: "A deep dive into the biological processes behind successful dental implants and bone healing.",
        duration: "10 min read"
    },
    {
        id: 2,
        title: "Handling Synthetic Bone Grafts",
        type: "Video Guide",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800",
        description: "Step-by-step visual guide on preparing and placing synthetic graft materials for ridge augmentation.",
        duration: "15 min video"
    },
    {
        id: 3,
        title: "Advanced Prosthetic Protocols",
        type: "Webinar Replay",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
        description: "Dr. Sharma discusses immediate loading protocols and full-arch rehabilitation.",
        duration: "45 min webinar"
    }
];

export default function EducationPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Educational <span className="text-teal-600">Resources</span></h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Explore our library of clinical articles, technique videos, and webinars designed to keep you at the forefront of dental innovation.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, idx) => (
                    <motion.div
                        key={resource.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow border-slate-100 bg-white overflow-hidden">
                            <div className="w-full h-48 relative">
                                <img src={resource.image} alt={resource.title} className="w-full h-full object-cover" />
                            </div>
                            <CardHeader className="pb-4">
                                <div>
                                    <span className="text-xs font-semibold uppercase text-teal-600 tracking-wider block mb-1">{resource.type}</span>
                                    <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col justify-between">
                                <p className="text-slate-600 mb-6">{resource.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-sm text-slate-400 font-medium">{resource.duration}</span>
                                    <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50">
                                        Access <BookOpen className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Want specialized hands-on training?</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
                        Our comprehensive educational resources are paired perfectly with our in-person workshop and certification courses.
                    </p>
                    <Button asChild className="bg-teal-600 hover:bg-teal-500 text-white min-h-[56px] text-lg px-8">
                        <Link href="/training">View Upcoming Workshops</Link>
                    </Button>
                </div>
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-teal-600/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
