"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Truck, Calendar, MapPin, Users, Clock, CheckCircle2, Stethoscope, Shield, HeartPulse } from "lucide-react";

// --- UPCOMING CAMP DATA ---
const CAMPS = [
    {
        id: 1,
        location: "Rural Health Center, Assam",
        date: "March 12, 2026",
        time: "9:00 AM - 5:00 PM",
        services: ["Free Dental Checkups", "Oral Cancer Screening", "Fluoride Treatment"],
        capacity: "200 Patients",
        coordinator: "Dr. R. Gogoi",
        status: "Open for Registration"
    },
    {
        id: 2,
        location: "Community Hall, Imphal",
        date: "March 18, 2026",
        time: "10:00 AM - 4:00 PM",
        services: ["Basic Extractions", "Dental Awareness Workshop", "Free X-Rays"],
        capacity: "150 Patients",
        coordinator: "Dr. M. Singh",
        status: "Open for Registration"
    },
    {
        id: 3,
        location: "Govt. School Campus, Shillong",
        date: "April 5, 2026",
        time: "8:30 AM - 3:00 PM",
        services: ["Pediatric Dental Checkups", "Sealant Application", "Oral Hygiene Education"],
        capacity: "300 Students",
        coordinator: "Dr. L. Khongwir",
        status: "Coming Soon"
    }
];

// --- MOBILE UNIT FEATURES ---
const UNIT_FEATURES = [
    { icon: Stethoscope, title: "Full Diagnostic Suite", desc: "Digital X-ray (RVG), intraoral camera, and LED operating lights." },
    { icon: Shield, title: "Sterile Surgical Bay", desc: "Autoclave, ultrasonic cleaner, and a fully equipped minor-OT for extractions and implants." },
    { icon: HeartPulse, title: "Patient Monitoring", desc: "Pulse oximeter, BP monitor, and emergency drug kit for medically compromised patients." },
    { icon: Users, title: "4-Chair Setup", desc: "Treats up to 200 patients per day with 4 portable dental chairs and a waiting area." },
];

export default function ServicesPage() {
    const [selectedCamp, setSelectedCamp] = useState<any>(null);
    const [isRequestOpen, setIsRequestOpen] = useState(false);
    const [isCampRegisterOpen, setIsCampRegisterOpen] = useState(false);
    const [isUnitInfoOpen, setIsUnitInfoOpen] = useState(false);

    return (
        <div className="container mx-auto py-16 px-4">
            {/* HERO */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full text-teal-700 mb-4">
                    <Truck size={32} />
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Mobile <span className="text-teal-600">Dental Clinic</span></h1>
                <p className="text-lg text-slate-600">
                    Bringing advanced dental care to remote locations. Our fully equipped mobile units conduct surgeries, checkups, and awareness camps across Northeast India.
                </p>
            </div>

            {/* IMAGE + CAMPS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
                <div className="space-y-4">
                    <div className="h-[300px] bg-slate-200 rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
                            alt="Mobile Dental Van"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <Button
                        variant="outline"
                        className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 font-semibold"
                        onClick={() => setIsUnitInfoOpen(true)}
                    >
                        <Truck className="mr-2 h-4 w-4" /> Learn More About Our Mobile Units
                    </Button>
                </div>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-slate-900">Upcoming Camps</h3>
                    {CAMPS.map((camp) => (
                        <Card
                            key={camp.id}
                            className="cursor-pointer hover:shadow-md transition-shadow border-slate-200"
                            onClick={() => setSelectedCamp(camp)}
                        >
                            <CardContent className="p-4 flex items-center gap-4">
                                <div className="h-12 w-12 bg-teal-600 text-white rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin />
                                </div>
                                <div className="flex-1">
                                    <p className="font-bold text-slate-900">{camp.location}</p>
                                    <p className="text-sm text-slate-500 flex items-center gap-1"><Calendar size={14} /> {camp.date}</p>
                                </div>
                                <Badge variant={camp.status === "Open for Registration" ? "default" : "secondary"} className="shrink-0 text-xs">
                                    {camp.status}
                                </Badge>
                            </CardContent>
                        </Card>
                    ))}
                    <Button
                        className="w-full bg-slate-900 hover:bg-slate-800 text-white text-lg h-12"
                        onClick={() => setIsRequestOpen(true)}
                    >
                        Request a Camp in Your Area
                    </Button>
                </div>
            </div>

            {/* ===== CAMP DETAILS DIALOG ===== */}
            <Dialog open={!!selectedCamp && !isCampRegisterOpen} onOpenChange={(open) => !open && setSelectedCamp(null)}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-teal-700 flex items-center gap-2">
                            <MapPin className="h-6 w-6" /> {selectedCamp?.location}
                        </DialogTitle>
                        <DialogDescription className="text-base text-slate-600">
                            Coordinated by {selectedCamp?.coordinator}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                        <div className="flex gap-6 text-sm text-slate-600">
                            <span className="flex items-center gap-1"><Calendar size={14} /> {selectedCamp?.date}</span>
                            <span className="flex items-center gap-1"><Clock size={14} /> {selectedCamp?.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <Users size={14} className="text-teal-600" />
                            <span className="text-slate-600">Capacity: <strong>{selectedCamp?.capacity}</strong></span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-slate-900">Services Offered:</h4>
                            <ul className="space-y-2">
                                {selectedCamp?.services.map((s: string, i: number) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-600">
                                        <CheckCircle2 size={16} className="text-teal-600 shrink-0" /> {s}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-4 bg-teal-50 rounded-lg border border-teal-100 text-center">
                            <p className="text-sm text-teal-800 font-medium">All services are provided free of charge for community members.</p>
                        </div>
                    </div>
                    <Button
                        className="w-full bg-teal-600 hover:bg-teal-700"
                        onClick={() => setIsCampRegisterOpen(true)}
                        disabled={selectedCamp?.status !== "Open for Registration"}
                    >
                        {selectedCamp?.status === "Open for Registration" ? "Pre-Register for This Camp" : "Registration Opening Soon"}
                    </Button>
                </DialogContent>
            </Dialog>

            {/* ===== CAMP PRE-REGISTRATION SHEET ===== */}
            <Sheet open={isCampRegisterOpen} onOpenChange={(open) => { setIsCampRegisterOpen(open); if (!open) setSelectedCamp(null); }}>
                <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Camp Pre-Registration</SheetTitle>
                        <SheetDescription>
                            Registering for camp at: <span className="font-bold text-teal-600">{selectedCamp?.location}</span> on {selectedCamp?.date}
                        </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-8">
                        <div className="space-y-2">
                            <Label>Patient Name</Label>
                            <Input placeholder="e.g. Rajesh Kumar" />
                        </div>
                        <div className="space-y-2">
                            <Label>Age</Label>
                            <Input type="number" placeholder="e.g. 35" />
                        </div>
                        <div className="space-y-2">
                            <Label>Mobile Number</Label>
                            <Input type="tel" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                            <Label>Chief Complaint</Label>
                            <Input placeholder="e.g. Tooth pain, swelling, checkup" />
                        </div>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg h-12">
                            Confirm Pre-Registration
                        </Button>
                        <p className="text-xs text-center text-slate-400">You will receive an SMS confirmation with your token number.</p>
                    </div>
                </SheetContent>
            </Sheet>

            {/* ===== REQUEST A CAMP SHEET ===== */}
            <Sheet open={isRequestOpen} onOpenChange={setIsRequestOpen}>
                <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Request a Camp</SheetTitle>
                        <SheetDescription>
                            Fill in details and our outreach team will contact you within 48 hours.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-8">
                        <div className="space-y-2">
                            <Label>Organization / Village Name</Label>
                            <Input placeholder="e.g. Sunrise NGO / Maram Village" />
                        </div>
                        <div className="space-y-2">
                            <Label>Full Address</Label>
                            <Textarea placeholder="Provide full address including district and state" />
                        </div>
                        <div className="space-y-2">
                            <Label>Contact Person Name</Label>
                            <Input placeholder="e.g. Mr. Th. Biren" />
                        </div>
                        <div className="space-y-2">
                            <Label>Contact Number</Label>
                            <Input type="tel" placeholder="+91 98765 43210" />
                        </div>
                        <div className="space-y-2">
                            <Label>Expected Number of Patients</Label>
                            <Input type="number" placeholder="e.g. 100" />
                        </div>
                        <div className="space-y-2">
                            <Label>Preferred Date Range</Label>
                            <Input placeholder="e.g. April 2026 first week" />
                        </div>
                        <div className="space-y-2">
                            <Label>Additional Notes (Optional)</Label>
                            <Textarea placeholder="e.g. Need pediatric dentist, venue has electricity, etc." />
                        </div>
                        <Button className="w-full bg-slate-900 hover:bg-slate-800 text-lg h-12">
                            Submit Camp Request
                        </Button>
                        <p className="text-xs text-center text-slate-400">Our outreach coordinator will reach out to you within 2 working days.</p>
                    </div>
                </SheetContent>
            </Sheet>

            {/* ===== MOBILE UNIT INFO DIALOG ===== */}
            <Dialog open={isUnitInfoOpen} onOpenChange={setIsUnitInfoOpen}>
                <DialogContent className="sm:max-w-[550px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <Truck className="h-6 w-6 text-teal-600" /> Our Mobile Dental Unit
                        </DialogTitle>
                        <DialogDescription>
                            A fully self-contained clinic-on-wheels designed for rural and underserved communities.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                        {UNIT_FEATURES.map((feat, i) => (
                            <div key={i} className="flex gap-4 items-start p-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-colors">
                                <div className="h-10 w-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center shrink-0">
                                    <feat.icon size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{feat.title}</h4>
                                    <p className="text-sm text-slate-500">{feat.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 bg-slate-50 rounded-lg border text-center">
                        <p className="text-sm text-slate-600">Interested in partnering? <button className="text-teal-600 font-bold hover:underline" onClick={() => { setIsUnitInfoOpen(false); setIsRequestOpen(true); }}>Request a camp now →</button></p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
