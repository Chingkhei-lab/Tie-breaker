"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PlayCircle, FileText, ArrowRight, BookOpen, Clock, CalendarDays, User2 } from "lucide-react";

// --- EDUCATIONAL RESOURCES (Videos/Webinars) ---
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
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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

// --- BLOG POSTS (Required by spec) ---
const BLOG_POSTS = [
    {
        id: "implants-101",
        title: "How Dental Implants Work: A Complete Guide",
        author: "Dr. Rajesh Mehta",
        date: "February 15, 2026",
        readTime: "8 min read",
        category: "Dental Implants",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
        excerpt: "Dental implants are the gold standard for replacing missing teeth. Learn how they work, from initial placement to final restoration.",
        content: `Dental implants are titanium posts surgically placed into the jawbone to serve as artificial tooth roots. They provide a permanent foundation for fixed or removable replacement teeth.

**The Three Components of a Dental Implant:**

1. **The Implant (Fixture):** A Grade 5 titanium screw that is surgically placed into the jawbone. At Kindway BioReZens, our implants feature SLA (Sandblasted, Large-grit, Acid-etched) micro-surface texturing that dramatically improves osseointegration rates.

2. **The Abutment:** A connector piece that is placed on top of the implant after healing. It supports the final restoration and helps shape the gingival tissue for optimal aesthetics.

3. **The Prosthesis (Crown):** The visible part of the tooth. It can be a single crown, bridge, or even a full-arch denture secured by multiple implants.

**The Implant Process Step-by-Step:**

• **Consultation & Planning:** Using CBCT scans and digital impressions, the surgeon creates a precise surgical plan. This phase identifies available bone volume, proximity to vital structures (like the inferior alveolar nerve), and ideal implant positioning.

• **Surgical Placement:** Under local anesthesia, a small incision is made in the gum tissue. A precision surgical motor (like the Kindway 80 Ncm Implant Motor) drills the osteotomy at controlled speeds. The implant is then inserted with controlled torque.

• **Osseointegration (Healing):** Over 3-6 months, the jawbone naturally fuses with the titanium surface. Our SLA micro-textured implants can reduce this period to as little as 6-8 weeks in healthy patients.

• **Restoration:** Once osseointegration is confirmed (ISQ values > 65), the abutment and final prosthesis are placed. The result is a restoration that looks, feels, and functions like a natural tooth.

**Success Rates:** Modern dental implants have a success rate of 95-98% over 10 years when placed by trained professionals using quality materials. Factors affecting success include bone quality, oral hygiene, and systemic conditions like diabetes.

At Kindway BioReZens, we provide complete implant solutions — from surgical motors and implant fixtures to prosthetic components — all backed by hands-on training programs.`
    },
    {
        id: "bone-grafts",
        title: "Why Bone Grafts Are Critical for Implant Success",
        author: "Dr. Priya Anand",
        date: "February 8, 2026",
        readTime: "7 min read",
        category: "Bone Grafts",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
        excerpt: "Without adequate bone volume, implants fail. Discover why bone grafting is often the most critical step in implant treatment planning.",
        content: `Nearly 50% of patients seeking dental implants lack sufficient bone volume for successful placement. This is where bone grafting becomes not just important, but essential.

**Why Does Bone Loss Happen?**

When a tooth is lost, the surrounding alveolar bone begins to resorb. Within the first year after extraction, the ridge can lose up to 25% of its width. After 3 years, up to 40-60% of the bone volume may be lost. This process, called disuse atrophy, makes implant placement impossible without augmentation.

**Types of Bone Graft Materials:**

1. **Autografts (Patient's own bone):** Considered the gold standard but requires a second surgical site. Common donor sites include the chin, ramus, or iliac crest.

2. **Allografts (Donor human bone):** Processed cadaver bone that is demineralized and sterilized. Eliminates the need for a second surgical site.

3. **Xenografts (Animal-derived):** Typically bovine-derived hydroxyapatite. Slow resorption allows it to act as a scaffold for extended periods.

4. **Alloplasts (Synthetic materials):** This is where Kindway BioReZens excels. Our β-TCP + Hydroxyapatite (60:40) synthetic bone graft provides predictable results without the ethical concerns of donor tissue. It's osteoconductive, gamma-irradiated for sterility, and resorbs in 4-6 months.

**When Is Bone Grafting Required?**

• **Socket Preservation:** Immediately after tooth extraction to prevent ridge collapse
• **Lateral Ridge Augmentation:** When the ridge width is < 5mm
• **Vertical Augmentation:** When bone height is insufficient (often requiring sinus lift procedures)
• **Sinus Lift:** When maxillary posterior teeth are missing and the sinus floor has pneumatized

**The Role of Barrier Membranes:**

Bone grafts alone are not enough. A resorbable collagen membrane (like our Type I/III Collagen Membrane) must be placed over the graft to prevent soft tissue ingrowth and allow undisturbed bone regeneration — a technique known as Guided Bone Regeneration (GBR).

**Key Takeaway:** Bone grafting is not an optional step — it is the foundation upon which implant success is built. Skipping this step in bone-deficient sites leads to implant failure, peri-implantitis, and costly re-treatment.`
    },
    {
        id: "surgery-tips",
        title: "10 Tips for Successful Implant Surgery Planning",
        author: "Dr. Sarah Williams",
        date: "January 28, 2026",
        readTime: "6 min read",
        category: "Surgery Planning",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
        excerpt: "From CBCT analysis to torque protocols — practical tips that experienced implantologists wish they knew earlier.",
        content: `Successful implant surgery is 90% planning and 10% execution. Here are 10 evidence-based tips that will improve your surgical outcomes:

**1. Always Start with a CBCT Scan**
2D panoramic X-rays are insufficient for implant planning. A CBCT reveals bone density, width, height, and proximity to vital structures in 3D. Never place an implant without one.

**2. Classify Your Bone Quality**
Use the Lekholm & Zarb classification (Type I-IV). Type I (dense cortical) requires slower drilling speeds; Type IV (thin cortical, sparse trabecular) may need under-preparation and condensing techniques.

**3. Plan for Prosthetics First**
"Prosthetically driven implant placement" means positioning the implant where the final tooth needs to be — not where the bone is easiest to drill. Use surgical guides when possible.

**4. Respect the 1.5mm Rule**
Maintain at least 1.5mm of bone buccally and lingually around the implant. An implant placed too close to the buccal plate leads to bone loss and gingival recession.

**5. Control Your Torque**
Over-torquing (>70 Ncm) can cause marginal bone necrosis. Under-torquing (<15 Ncm) results in poor primary stability. Our Kindway Surgical Motors provide precise digital torque control from 5-80 Ncm.

**6. Manage the Extraction Socket**
If placing immediately after extraction, fill any gaps with particulate bone graft material. Our β-TCP + HA granules are ideal for this application.

**7. Check ISQ Values**
Implant Stability Quotient (ISQ) measurements using resonance frequency analysis tell you objectively whether the implant is ready for loading. ISQ > 65 = safe to load.

**8. Don't Skip the Healing Abutment**
Proper soft tissue management during healing creates the emergence profile needed for aesthetic restorations. Use appropriately sized healing abutments.

**9. Document Everything**
Photograph each surgical step. This creates a medical-legal record, enables case review, and provides material for continuing education.

**10. Never Stop Learning**
Attend hands-on workshops regularly. Our Kindway training programs offer goat-jaw practice sessions, live surgery observation, and certification courses specifically designed for implantologists at every skill level.

The best implant surgeon is not the one with the steadiest hands — it's the one with the best plan.`
    },
    {
        id: "case-studies",
        title: "Workshop Case Studies: Real Clinical Outcomes",
        author: "Dr. A. Patel & Dr. R. Mehta",
        date: "January 20, 2026",
        readTime: "10 min read",
        category: "Case Studies",
        image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80",
        excerpt: "Three real-world cases from our 2025 workshop series showing how participants applied their training to achieve excellent clinical results.",
        content: `Our training workshops don't just teach theory — they produce clinicians who deliver real results. Here are three documented cases from our 2025 workshop alumni.

**CASE 1: Full Arch Rehabilitation — Dr. Sneha K., Mumbai**

• **Patient:** 58-year-old female, completely edentulous maxilla
• **Challenge:** Severe ridge resorption, pneumatized maxillary sinuses, only 4mm of residual bone height posteriorly
• **Workshop Applied:** "Immediate Loading: All-on-X" (Kindway Certification, April 2025)
• **Treatment:** Bilateral sinus lifts using Kindway β-TCP bone graft, followed by 6 implant placement after 4 months. Immediate provisional prosthesis delivered using multi-unit abutments.
• **Outcome:** Full fixed prosthesis delivered at 6 months post-implant. ISQ values ranged from 72-78. Patient regained full masticatory function and reported dramatically improved quality of life.
• **Key Learning:** "The tilted implant concept I learned at the workshop allowed me to avoid bone grafting in the posterior region entirely, reducing treatment time by 3 months." — Dr. Sneha K.

**CASE 2: Complex Bone Augmentation — Dr. Vikram S., Bangalore**

• **Patient:** 45-year-old male, missing #21 (upper left central incisor) for 8 years
• **Challenge:** Only 3mm ridge width remaining — far below the minimum 6mm needed
• **Workshop Applied:** "Soft Tissue Management" (Kindway Masterclass, May 2025) + "Advanced Sinus Lift" (March 2025)
• **Treatment:** Lateral ridge augmentation using Kindway synthetic bone graft (1.0g) covered with Kindway collagen membrane (20x30mm). After 6 months of healing, a 3.5mm diameter Kindway titanium implant was placed with 45 Ncm insertion torque.
• **Outcome:** Final ceramic crown delivered at 9 months. Ridge width increased from 3mm to 8mm. Patient reported the implant crown was indistinguishable from natural teeth.
• **Key Learning:** "The membrane fixation techniques I practiced on the goat jaw during the workshop translated directly to my patient case. Without that hands-on practice, I wouldn't have attempted this case." — Dr. Vikram S.

**CASE 3: Mobile Clinic Outreach — Dr. Laishram M., Imphal**

• **Patient:** 32-year-old male, traumatic loss of #11 and #12 from a road accident
• **Challenge:** Patient from rural Manipur with no access to specialist dental care. Presented at a Kindway Mobile Dental Camp with fractured roots and infected sockets.
• **Workshop Applied:** Kindway Mobile Clinic Surgical Protocol Training (2025)
• **Treatment:** Atraumatic extraction of fractured roots, socket debridement, and immediate bone graft placement (Kindway β-TCP, 0.5g per socket) for future implant site preparation. Patient was referred to a partner clinic in Imphal for implant placement after 4 months.
• **Outcome:** Both implants integrated successfully. Fixed bridge delivered. Patient returned to the 2026 camp for a follow-up checkup — completely healthy.
• **Key Learning:** "The mobile clinic training gave me confidence to manage complex trauma cases in a field setting. The Kindway surgical kit was compact enough to carry in the mobile van but powerful enough for precision work." — Dr. Laishram M.

**Conclusion:** These cases demonstrate that structured, hands-on training produces clinicians who can tackle complex cases with confidence. Our 2026 workshop calendar is now open for registration.`
    }
];

export default function EducationPage() {
    const [selectedResource, setSelectedResource] = useState<any>(null);
    const [selectedPost, setSelectedPost] = useState<any>(null);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Educational <span className="text-teal-600">Hub</span></h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Stay updated with the latest clinical research, surgical techniques, and material science innovations in dental implantology.
                </p>
            </div>

            {/* RESOURCES SECTION */}
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><PlayCircle className="text-teal-600" /> Videos & Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

            {/* BLOG POSTS SECTION */}
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2"><BookOpen className="text-teal-600" /> Blog & Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.map((post) => (
                    <Card key={post.id} className="hover:shadow-lg transition-all cursor-pointer group flex flex-col" onClick={() => setSelectedPost(post)}>
                        <div className="h-48 w-full relative overflow-hidden rounded-t-xl">
                            <img src={post.image} alt={post.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            <Badge className="absolute top-4 left-4 bg-teal-600 text-white">{post.category}</Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="group-hover:text-teal-600 transition-colors">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-slate-600 text-sm mb-4">{post.excerpt}</p>
                            <div className="flex gap-4 text-xs text-slate-400">
                                <span className="flex items-center gap-1"><User2 size={12} /> {post.author}</span>
                                <span className="flex items-center gap-1"><CalendarDays size={12} /> {post.date}</span>
                                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                            </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                            <Button variant="ghost" className="text-teal-600 hover:text-teal-700 hover:bg-teal-50 p-0 h-auto font-bold w-full justify-center">
                                Read Full Article <ArrowRight size={14} className="ml-1" />
                            </Button>
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
                        {(selectedResource?.type === 'Video' || selectedResource?.type === 'Webinar') ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src={selectedResource?.videoUrl}
                                title="Video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
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

            {/* BLOG POST READER DIALOG */}
            <Dialog open={!!selectedPost} onOpenChange={(open) => !open && setSelectedPost(null)}>
                <DialogContent className="sm:max-w-[700px] max-h-[85vh] overflow-y-auto">
                    <DialogHeader>
                        <div className="flex gap-2 mb-2">
                            <Badge className="bg-teal-600">{selectedPost?.category}</Badge>
                            <Badge variant="outline">{selectedPost?.readTime}</Badge>
                        </div>
                        <DialogTitle className="text-2xl font-bold text-slate-900 leading-tight">{selectedPost?.title}</DialogTitle>
                        <DialogDescription className="flex gap-4 text-sm pt-2">
                            <span className="flex items-center gap-1"><User2 size={14} /> {selectedPost?.author}</span>
                            <span className="flex items-center gap-1"><CalendarDays size={14} /> {selectedPost?.date}</span>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="h-48 rounded-xl overflow-hidden my-4">
                        <img src={selectedPost?.image} alt={selectedPost?.title} className="w-full h-full object-cover" />
                    </div>
                    <article className="prose prose-slate max-w-none">
                        {selectedPost?.content.split('\n\n').map((paragraph: string, i: number) => (
                            <p key={i} className="text-slate-700 leading-relaxed mb-4 text-sm" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/• /g, '&bull; ') }} />
                        ))}
                    </article>
                </DialogContent>
            </Dialog>

            {/* CTA BANNER */}
            <div className="bg-teal-600 rounded-2xl p-8 md:p-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Put Knowledge Into Practice</h2>
                    <p className="text-teal-100">Join our hands-on workshops and master the techniques you just read about.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                    <Button asChild className="bg-white text-teal-700 hover:bg-teal-50 shadow-lg text-base h-12 px-6 font-bold">
                        <Link href="/training">Register for Workshop <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                    <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg h-12 px-6 font-bold">
                        <Link href="/products">View Product Catalogue</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
