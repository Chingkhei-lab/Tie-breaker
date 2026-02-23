"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function TrainingPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Workshops & <span className="text-teal-600">Training</span></h1>
                    <p className="text-slate-600">Master advanced implantology with our hands-on courses.</p>
                </div>
                <Button size="lg" className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700">
                    Download Course Brochure
                </Button>
            </div>

            <Tabs defaultValue="upcoming" className="w-full">
                <TabsList className="grid w-full grid-cols-2 max-w-[400px] mb-8">
                    <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                    <TabsTrigger value="past">Past Workshops</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-6">
                    {/* Workshop Card 1 */}
                    <div className="flex flex-col md:flex-row border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                        <div className="bg-teal-600 text-white p-6 flex flex-col items-center justify-center min-w-[150px]">
                            <span className="text-3xl font-bold">15</span>
                            <span className="text-lg uppercase">Mar</span>
                            <span className="text-teal-100">2026</span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Advanced Bone Grafting Techniques</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                    <span className="flex items-center gap-1"><MapPin size={16} /> New Delhi, India</span>
                                    <span className="flex items-center gap-1"><Clock size={16} /> 2 Days (Hands-on)</span>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    Learn vertical and horizontal ridge augmentation using the latest synthetic materials.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Button className="bg-slate-900 text-white">Register Now</Button>
                                <Button variant="outline">View Details</Button>
                            </div>
                        </div>
                    </div>

                    {/* Workshop Card 2 */}
                    <div className="flex flex-col md:flex-row border rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
                        <div className="bg-slate-800 text-white p-6 flex flex-col items-center justify-center min-w-[150px]">
                            <span className="text-3xl font-bold">22</span>
                            <span className="text-lg uppercase">Apr</span>
                            <span className="text-slate-300">2026</span>
                        </div>
                        <div className="p-6 flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Basics of Implant Surgery</h3>
                                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                    <span className="flex items-center gap-1"><MapPin size={16} /> Mumbai, India</span>
                                    <span className="flex items-center gap-1"><Clock size={16} /> 3 Days (Certification)</span>
                                </div>
                                <p className="text-slate-600 mb-4">
                                    A comprehensive starter course for general dentists looking to start implant practice.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Button className="bg-teal-600 hover:bg-teal-700 text-white">Register Now</Button>
                                <Button variant="outline">View Details</Button>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="past">
                    <p className="text-slate-500 italic">Archive of past events...</p>
                </TabsContent>
            </Tabs>
        </div>
    );
}
