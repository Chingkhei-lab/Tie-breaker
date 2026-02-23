"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
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
                                    <p className="font-medium">+91 91988 46529</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center text-teal-600"><Mail size={20} /></div>
                                <div>
                                    <p className="text-sm text-slate-500">Email</p>
                                    <p className="font-medium">support@kindway.com</p>
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

                    {/* Google Maps Embed */}
                    <div className="h-[300px] w-full bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52728034389636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1708704000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
