"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Clock, User, CheckCircle2 } from "lucide-react";

// --- RELATABLE DENTAL CONTENT DATA ---
const COURSES = [
    {
        id: 1,
        title: "Advanced Sinus Lift Protocols",
        date: "15 Mar 2026",
        location: "New Delhi, India",
        type: "Hands-on Surgery",
        instructor: "Dr. R. Mehta, Oral Surgeon",
        price: "₹ 25,000",
        syllabus: ["Lateral Window Technique", "Managing Perforations", "Piezo-surgery Basics"],
        description: "Master the art of vertical bone height augmentation using the lateral window approach. Includes goat-jaw hands-on practice."
    },
    {
        id: 2,
        title: "Immediate Loading: All-on-X",
        date: "22 Apr 2026",
        location: "Mumbai, India",
        type: "Certification",
        instructor: "Dr. Sarah Williams",
        price: "₹ 45,000",
        syllabus: ["Tilted Implant Concepts", "Multi-unit Abutment Selection", "Prosthetic Conversion"],
        description: "A comprehensive guide to full-arch rehabilitation. Learn how to deliver teeth-in-a-day using the Kindway Implant System."
    },
    {
        id: 3,
        title: "Soft Tissue Management",
        date: "10 May 2026",
        location: "Bangalore, India",
        type: "Masterclass",
        instructor: "Dr. A. Patel",
        price: "₹ 15,000",
        syllabus: ["Free Gingival Grafts", "Connective Tissue Grafts", "Suturing Techniques"],
        description: "Achieve superior aesthetic results by mastering soft tissue handling around implants."
    }
];

export default function TrainingPage() {
    const [selectedCourse, setSelectedCourse] = useState<any>(null);
    const [isRegisterOpen, setIsRegisterOpen] = useState(false);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">Workshops & <span className="text-teal-600">Training</span></h1>
                    <p className="text-slate-600">Upgrade your clinical skills with industry-leading experts.</p>
                </div>
                <Button size="lg" className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700" onClick={() => setIsCalendarOpen(true)}>
                    <Calendar className="mr-2 h-5 w-5" /> View 2026 Course Calendar
                </Button>
            </div>

            <div className="space-y-6">
                {COURSES.map((course) => (
                    <Card key={course.id} className="overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col md:flex-row">
                            <div className="bg-slate-900 text-white p-6 flex flex-col items-center justify-center min-w-[150px] text-center">
                                <span className="text-3xl font-bold">{course.date.split(" ")[0]}</span>
                                <span className="text-lg uppercase">{course.date.split(" ")[1]}</span>
                                <Badge variant="outline" className="mt-2 text-teal-400 border-teal-400">{course.type}</Badge>
                            </div>
                            <CardContent className="p-6 flex-1 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-slate-900">{course.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                                        <span className="flex items-center gap-1"><MapPin size={16} /> {course.location}</span>
                                        <span className="flex items-center gap-1"><User size={16} /> {course.instructor}</span>
                                    </div>
                                    <p className="text-slate-600 mb-4">{course.description}</p>
                                </div>
                                <div className="flex gap-3">
                                    <Button
                                        className="bg-teal-600 hover:bg-teal-700"
                                        onClick={() => { setSelectedCourse(course); setIsRegisterOpen(true); }}
                                    >
                                        Register Now
                                    </Button>
                                    <Button variant="outline" onClick={() => setSelectedCourse(course)}>
                                        View Details
                                    </Button>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>

            {/* VIEW DETAILS DIALOG (POPUP) */}
            <Dialog open={!!selectedCourse && !isRegisterOpen} onOpenChange={(open) => { if (!open && !isRegisterOpen) setSelectedCourse(null); }}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-teal-700">{selectedCourse?.title}</DialogTitle>
                        <DialogDescription className="text-lg font-medium text-slate-700">
                            Instructor: {selectedCourse?.instructor}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <h4 className="font-semibold mb-3">Course Syllabus:</h4>
                        <ul className="space-y-2">
                            {selectedCourse?.syllabus?.map((item: string, i: number) => (
                                <li key={i} className="flex items-center gap-2 text-slate-600">
                                    <CheckCircle2 size={16} className="text-teal-600" /> {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                            <span className="text-slate-500">Course Fee:</span>
                            <span className="text-xl font-bold text-slate-900">{selectedCourse?.price}</span>
                        </div>
                    </div>
                    <Button className="w-full bg-slate-900" onClick={() => setIsRegisterOpen(true)}>Proceed to Registration</Button>
                </DialogContent>
            </Dialog>

            {/* REGISTER SHEET (SIDEBAR FORM) */}
            <Sheet open={isRegisterOpen} onOpenChange={(open) => { setIsRegisterOpen(open); if (!open) setSelectedCourse(null); }}>
                <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Secure Your Seat</SheetTitle>
                        <SheetDescription>
                            Registering for: <span className="font-bold text-teal-600">{selectedCourse?.title}</span>
                        </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-8">
                        <div className="space-y-2">
                            <Label>Full Name (Dr.)</Label>
                            <Input placeholder="e.g. Dr. Rajesh Kumar" />
                        </div>
                        <div className="space-y-2">
                            <Label>Email Address</Label>
                            <Input type="email" placeholder="doctor@clinic.com" />
                        </div>
                        <div className="space-y-2">
                            <Label>Mobile Number</Label>
                            <Input type="tel" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                            <Label>DCI Registration Number</Label>
                            <Input placeholder="DCI-XXXX" />
                        </div>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg h-12">
                            Confirm & Pay {selectedCourse?.price}
                        </Button>
                        <p className="text-xs text-center text-slate-400">Secure Payment Gateway via Razorpay</p>
                    </div>
                </SheetContent>
            </Sheet>

            {/* COURSE CALENDAR DIALOG */}
            <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <Calendar className="h-6 w-6 text-teal-600" /> 2026 Course Calendar
                        </DialogTitle>
                        <DialogDescription>Upcoming workshops and certifications by Kindway BioReZens.</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        {COURSES.map((course) => (
                            <div key={course.id} className="flex gap-4 items-start p-4 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                                <div className="bg-teal-600 text-white rounded-lg px-3 py-2 text-center min-w-[60px] shrink-0">
                                    <span className="text-xl font-bold block leading-none">{course.date.split(" ")[0]}</span>
                                    <span className="text-xs uppercase">{course.date.split(" ")[1]}</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-slate-900">{course.title}</h4>
                                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-1"><MapPin size={12} /> {course.location}</p>
                                    <Badge variant="outline" className="mt-2 text-xs">{course.type} &middot; {course.price}</Badge>
                                </div>
                                <Button size="sm" variant="ghost" className="text-teal-600 shrink-0" onClick={() => { setIsCalendarOpen(false); setSelectedCourse(course); setIsRegisterOpen(true); }}>Register</Button>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-center text-slate-400 pt-2 border-t">All dates subject to confirmation. Early bird discounts available.</p>
                </DialogContent>
            </Dialog>
        </div>
    );
}
