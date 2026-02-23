import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 w-full">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="text-xl font-bold mb-3">
                            Kindway<span className="text-teal-400">BioReZens</span>
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Pioneering bio-regenerative dental solutions. ISO 13485 certified, FDA approved products for dental professionals worldwide.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Products", href: "/products" },
                                { name: "Education Hub", href: "/education" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Services</h4>
                        <ul className="space-y-2 text-sm">
                            {[
                                { name: "Training & Workshops", href: "/training" },
                                { name: "Mobile Dental Clinic", href: "/services" },
                                { name: "Contact Sales", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-400 hover:text-teal-400 transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone size={16} className="text-teal-400 shrink-0" />
                                <a href="tel:+919198846529" className="hover:text-teal-400 transition-colors">+91 91988 46529</a>
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail size={16} className="text-teal-400 shrink-0" />
                                <a href="mailto:support@kindway.com" className="hover:text-teal-400 transition-colors">support@kindway.com</a>
                            </li>
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
                                <span>New Delhi, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Kindway BioReZens. All rights reserved.</p>
                    <p>Dental Implants &middot; Bone Graft Materials &middot; Dental Outreach Programs &middot; Implant Training</p>
                </div>
            </div>
        </footer>
    );
}
