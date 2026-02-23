"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, MapPin, Maximize2, Navigation } from "lucide-react";

const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708704000000!5m2!1sen!2sin";

export default function ContactPage() {
    const [isMapOpen, setIsMapOpen] = useState(false);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                    <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in <span className="text-teal-600">Touch</span></h1>
                    <p className="text-slate-600 mb-8">
                        Have a question about our products or training? Fill out the form below.
                    </p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input placeholder="First Name" />
                            <Input placeholder="Last Name" />
                        </div>
                        <Input type="email" placeholder="Email Address" />
                        <Input type="tel" placeholder="Phone Number" />
                        <Textarea placeholder="How can we help you?" className="min-h-[120px]" />
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white h-12">
                            Send Message
                        </Button>
                    </form>
                </div>

                {/* Info & Map */}
                <div className="flex flex-col gap-8">
                    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                        <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600"><Phone size={20} /></div>
                                <div>
                                    <p className="text-sm text-slate-500">Phone</p>
                                    <a href="tel:+919198846529" className="font-medium hover:text-teal-600 transition-colors">+91 91988 46529</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600"><Mail size={20} /></div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <a href="mailto:support@kindway.com" className="font-medium hover:text-teal-600 transition-colors">support@kindway.com</a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600"><MapPin size={20} /></div>
                                <div>
                                    <p className="text-sm text-slate-500">Location</p>
                                    <p className="font-medium">New Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Google Maps Preview + Expand */}
                    <div className="relative group">
                        <div className="h-[250px] w-full bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
                            <iframe
                                src={MAP_EMBED_URL}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                        {/* Overlay with expand button */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-2xl flex items-center justify-center pointer-events-none">
                            <Button
                                className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-slate-900 hover:bg-slate-100 shadow-xl pointer-events-auto"
                                onClick={() => setIsMapOpen(true)}
                            >
                                <Maximize2 className="mr-2 h-4 w-4" /> View Full Map
                            </Button>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <Button
                            className="flex-1 bg-slate-900 hover:bg-slate-800"
                            onClick={() => setIsMapOpen(true)}
                        >
                            <MapPin className="mr-2 h-4 w-4" /> Open Full Map
                        </Button>
                        <Button
                            variant="outline"
                            className="flex-1"
                            asChild
                        >
                            <a href="https://maps.google.com/?q=New+Delhi+India" target="_blank" rel="noopener noreferrer">
                                <Navigation className="mr-2 h-4 w-4" /> Get Directions
                            </a>
                        </Button>
                    </div>
                </div>
            </div>

            {/* FULLSCREEN MAP DIALOG */}
            <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
                <DialogContent className="sm:max-w-[90vw] h-[85vh] p-0 overflow-hidden">
                    <DialogHeader className="p-4 pb-0 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-white via-white/90 to-transparent">
                        <DialogTitle className="text-xl font-bold flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-teal-600" /> Kindway BioReZens — New Delhi, India
                        </DialogTitle>
                    </DialogHeader>
                    <div className="w-full h-full pt-14">
                        <iframe
                            src={MAP_EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}
