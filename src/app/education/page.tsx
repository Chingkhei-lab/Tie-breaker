"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PlayCircle, FileText, ArrowRight } from "lucide-react";

// --- RELATABLE EDUCATIONAL DATA ---
const RESOURCES = [
    {
        id: 1,
        title: "Understanding Osseointegration",
        type: "Article",
        category: "Clinical Research",
        readTime: "5 min read",
        summary: "New studies suggest that modified surface textures can improve implant success rates in compromised hosts.",
        content: "Osseointegration is the direct structural and functional connection between living bone and the surface of a load-carrying implant. In this paper, we explore how hydrophilic surfaces accelerate the initial stability...",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "Surgical Guide: Synthetic Bone Grafts",
        type: "Video",
        category: "Surgical Technique",
        readTime: "12 min watch",
        summary: "Step-by-step visual guide on preparing and placing synthetic graft materials for ridge augmentation.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder for demo
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "Digital Workflow for Full Arch",
        type: "Webinar",
        category: "Prosthetics",
        readTime: "45 min webinar",
        summary: "Dr. Sharma discusses immediate loading protocols and full-arch rehabilitation using intraoral scanners.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
    }
];

export default function EducationPage() {
    const [selectedResource, setSelectedResource] = useState<any>(null);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Educational <span className="text-teal-600">Hub</span></h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Stay updated with the latest clinical research, surgical techniques, and material science innovations.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {RESOURCES.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-lg transition-all cursor-pointer group flex flex-col">
                        <div className="h-48 w-full relative overflow-hidden rounded-t-xl">
                            <img src={resource.image} alt={resource.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            <Badge className="absolute top-4 left-4 bg-white/90 text-slate-900 hover:bg-white">{resource.category}</Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="group-hover:text-teal-600 transition-colors line-clamp-2">{resource.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-slate-600 text-sm mb-4 line-clamp-3">{resource.summary}</p>
                        </CardContent>
                        <CardFooter className="border-t pt-4 bg-slate-50">
                            <div className="flex justify-between items-center w-full text-xs font-medium uppercase tracking-wider">
                                <span className="flex items-center gap-1 text-slate-500">
                                    {resource.type === 'Video' || resource.type === 'Webinar' ? <PlayCircle size={14} /> : <FileText size={14} />}
                                    {resource.readTime}
                                </span>
                                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto font-bold" onClick={() => setSelectedResource(resource)}>
                                    Access Now <ArrowRight size={14} className="ml-1" />
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {/* RESOURCE PLAYER DIALOG */}
            <Dialog open={!!selectedResource} onOpenChange={(open) => !open && setSelectedResource(null)}>
                <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-black text-white">
                    <DialogHeader className="p-6 absolute top-0 left-0 z-10 w-full bg-gradient-to-b from-black/80 to-transparent">
                        <DialogTitle className="text-white text-xl">{selectedResource?.title}</DialogTitle>
                    </DialogHeader>

                    <div className="aspect-video w-full bg-slate-900 flex items-center justify-center">
                        {/* If Video/Webinar -> Show Embed */}
                        {(selectedResource?.type === 'Video' || selectedResource?.type === 'Webinar') ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={selectedResource?.videoUrl}
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            /* If Article -> Show Text Preview */
                            <div className="p-8 h-full overflow-y-auto bg-white text-slate-900 mt-16">
                                <h3 className="text-2xl font-bold mb-4">{selectedResource?.title}</h3>
                                <div className="flex gap-2 mb-6">
                                    <Badge>Published: Feb 2026</Badge>
                                    <Badge variant="outline">Dr. A. Smith</Badge>
                                </div>
                                <p className="text-lg leading-relaxed text-slate-700">
                                    {selectedResource?.content}
                                    <br /><br />
                                    [Full PDF Download Available for Verified Clinicians]
                                </p>
                            </div>
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
