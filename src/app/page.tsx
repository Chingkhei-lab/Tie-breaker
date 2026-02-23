"use client";

import * as React from "react"; import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Shield, Globe, ShieldPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-slate-50 py-16 md:py-32 flex items-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-2 md:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Elevating Dental <span className="text-teal-600">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 md:pr-12">
              Empowering dental professionals with innovative solutions, cutting-edge biorenewable products, and unwavering support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <Button asChild className="bg-teal-600 hover:bg-teal-700 text-white min-h-[44px] sm:min-h-[56px] text-lg px-8 shadow-lg shadow-teal-500/30">
                <Link href="/products">View Product Catalogue <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 min-h-[44px] sm:min-h-[56px] text-lg px-8">
                <Link href="/about">Read More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[350px] md:h-[500px] w-full order-1 md:order-2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50"
          >
            {/* AUTO-SLIDING CAROUSEL */}
            <HeroCarousel />

            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent flex items-end p-8 pointer-events-none">
              <div className="text-white">
                <p className="font-bold text-lg">Advanced Clinical Technology</p>
                <p className="text-sm text-teal-100">ISO 13485 Certified Manufacturing</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background shapes */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-blue-100/50 blur-3xl" />
      </section>

      {/* Services/Features Section */}
      <section className="py-20 bg-white w-full">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 mb-2">Kindway BioReZens</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What We Offer</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Card className="border-slate-100 shadow-lg hover:shadow-xl transition-shadow bg-slate-50 h-full">
                <CardContent className="pt-8 pb-8 flex flex-col gap-5 h-full">
                  <div className="h-16 w-16 rounded-2xl bg-teal-100 flex items-center justify-center text-teal-600 mb-2">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Training & Education</h3>
                  <p className="text-slate-600 flex-1 leading-relaxed">
                    We offer training, workshops, and educational resources to empower dental professionals with the latest techniques and best practices.
                  </p>
                  <Link href="/training" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors flex items-center group mt-4">
                    Register for Workshop <ArrowRight className="ml-1 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Card className="border-slate-100 shadow-lg hover:shadow-xl transition-shadow bg-slate-50 h-full">
                <CardContent className="pt-8 pb-8 flex flex-col gap-5 h-full">
                  <div className="h-16 w-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-2">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Mobile Dental Clinic</h3>
                  <p className="text-slate-600 flex-1 leading-relaxed">
                    We understand the challenges you face, offering on-the-go solutions and mobile medical camps to deliver care directly where it's needed.
                  </p>
                  <Link href="/services" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center group mt-4">
                    Learn about Clinics <ArrowRight className="ml-1 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <Card className="border-slate-100 shadow-lg hover:shadow-xl transition-shadow bg-slate-50 h-full">
                <CardContent className="pt-8 pb-8 flex flex-col gap-5 h-full">
                  <div className="h-16 w-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-2">
                    <Globe size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Global Reach</h3>
                  <p className="text-slate-600 flex-1 leading-relaxed">
                    Proudly serving dental practitioners worldwide, ensuring our biorenewable implants and medical devices are accessible to all.
                  </p>
                  <Link href="/about" className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors flex items-center group mt-4">
                    Discover Our Reach <ArrowRight className="ml-1 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-teal-700 text-white w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://pattern-bg.com')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-teal-500/50">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex flex-col py-6 md:py-0">
              <span className="text-5xl md:text-6xl font-extrabold mb-3">1500+</span>
              <span className="text-teal-100 font-semibold tracking-wide uppercase text-sm">Workshops Organized</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex flex-col py-6 md:py-0">
              <span className="text-5xl md:text-6xl font-extrabold mb-3">1160+</span>
              <span className="text-teal-100 font-semibold tracking-wide uppercase text-sm">Students Enrolled</span>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col py-6 md:py-0">
              <span className="text-5xl md:text-6xl font-extrabold mb-3">1145+</span>
              <span className="text-teal-100 font-semibold tracking-wide uppercase text-sm">Medical Camps</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Results Gallery */}
      <section className="py-24 bg-slate-50 w-full border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 mb-2">Before & After</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Clinical Results Gallery</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Card 1: Bone Loss */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="grid grid-cols-2 h-64">
                <div className="relative group">
                  {/* Verified Image: Dental Lab/Pre-Op */}
                  <img
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80"
                    alt="Bone Defect Before"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Pre-Op</span>
                </div>
                <div className="relative">
                  {/* Verified Image: Medical Office/Healed */}
                  <img
                    src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80"
                    alt="Healed Result"
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute bottom-2 right-2 bg-teal-600 text-white text-xs px-2 py-1 rounded">Healed</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Vertical Ridge Augmentation</h3>
                <p className="text-slate-600 text-sm">Successful bone regeneration using Kindway Synthetic Graft in 4 months.</p>
              </div>
            </div>

            {/* Card 2: Full Arch */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="grid grid-cols-2 h-64">
                <div className="relative">
                  {/* Verified Image: Surgery Room */}
                  <img
                    src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80"
                    alt="Surgery Procedure"
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">Procedure</span>
                </div>
                <div className="relative">
                  {/* Verified Image: Dental Clinic Final */}
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                    alt="Final Smile"
                    className="object-cover w-full h-full"
                  />
                  <span className="absolute bottom-2 right-2 bg-teal-600 text-white text-xs px-2 py-1 rounded">Final Result</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Full Arch Rehabilitation</h3>
                <p className="text-slate-600 text-sm">Immediate loading protocol using 4 Titanium Implants with fixed zirconia bridge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white w-full border-t border-slate-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase text-teal-600 mb-2">Social Proof</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">Trusted by Clinicians <br className="hidden md:block" /> Worldwide</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
              <div className="bg-slate-50 p-8 rounded-3xl h-full flex flex-col gap-6 shadow-sm border border-slate-100 relative">
                <div className="text-teal-500 absolute top-8 right-8 text-6xl opacity-20 font-serif">"</div>
                <div className="flex gap-1 text-teal-500">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-slate-700 italic flex-1 text-lg">
                  "The primary stability achieved with Kindway implants is phenomenal. It has significantly streamlined my immediate loading protocols. The workshops were an added bonus, offering great practical insights."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80" alt="Dr. Patel" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dr. Patel</h4>
                    <span className="text-xs text-slate-500">Maxillofacial Surgeon, Mumbai</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="bg-slate-50 p-8 rounded-3xl h-full flex flex-col gap-6 shadow-sm border border-slate-100 relative">
                <div className="text-teal-500 absolute top-8 right-8 text-6xl opacity-20 font-serif">"</div>
                <div className="flex gap-1 text-teal-500">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-slate-700 italic flex-1 text-lg">
                  "Kindway BioReZens' synthetic bone grafts are incredibly reliable. I've observed excellent radiographic fill and soft tissue healing. They offer premium quality at a price point that makes sense for my practice."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=200&q=80" alt="Dr. Sharma" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dr. Sharma</h4>
                    <span className="text-xs text-slate-500">Periodontist, Delhi</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="bg-slate-50 p-8 rounded-3xl h-full flex flex-col gap-6 shadow-sm border border-slate-100 relative">
                <div className="text-teal-500 absolute top-8 right-8 text-6xl opacity-20 font-serif">"</div>
                <div className="flex gap-1 text-teal-500">
                  {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
                </div>
                <p className="text-slate-700 italic flex-1 text-lg">
                  "Attending their training seminar completely changed how our clinic handles complex augmentations. The mobile setup they demonstrate is brilliant in its efficiency and hygiene standards."
                </p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="h-12 w-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=200&q=80" alt="Dr. Mehta" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Dr. Mehta</h4>
                    <span className="text-xs text-slate-500">Implantologist, Pune</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-slate-900 w-full text-center relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 flex flex-col items-center gap-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Ready to elevate your practice?</h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed">
            Join thousands of dental professionals who rely on Kindway BioReZens for advanced training and premium medical devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <Button asChild className="bg-teal-600 hover:bg-teal-500 text-white min-h-[56px] text-lg px-8 w-full sm:w-auto shadow-lg shadow-teal-600/20">
              <Link href="/training">Book Training</Link>
            </Button>
            <Button asChild variant="outline" className="border-transparent bg-slate-800 text-white hover:bg-slate-700 min-h-[56px] text-lg px-8 w-full sm:w-auto mt-4 sm:mt-0">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-3xl pointer-events-none"></div>
      </section>
    </div>
  );
}

function HeroCarousel() {
  const [index, setIndex] = React.useState(0);
  const images = [
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80", // Clean Blue Dental Clinic
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80", // Patient Smiling
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"  // Lab/Research Vibe
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slides every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-slate-100">
      {images.map((img, i) => (
        <motion.img
          key={img}
          src={img}
          alt="Clinic Slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      ))}
    </div>
  );
}
