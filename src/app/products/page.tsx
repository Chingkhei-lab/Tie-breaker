"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Package, ArrowRight } from "lucide-react";

// --- 6 PRODUCTS WITH VERIFIED IMAGE URLS ---
const products = [
    {
        id: 1,
        name: "Titanium Dental Implant",
        category: "Implants",
        description: "High-grade titanium alloy implant engineered for superior osseointegration and long-term stability in all bone types.",
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&q=80",
        features: ["Grade 5 Titanium (Ti-6Al-4V)", "Self-tapping thread design", "SLA micro-surface texturing"],
        specs: { material: "Grade 5 Titanium", sizes: "3.5mm, 4.0mm, 4.5mm, 5.0mm diameter", lengths: "8mm to 16mm", surface: "SLA (Sandblasted, Large-grit, Acid-etched)", torque: "Up to 70 Ncm" },
        price: "₹ 3,500 per unit"
    },
    {
        id: 2,
        name: "Synthetic Bone Graft",
        category: "Regenerative",
        description: "Bioactive synthetic granules designed to stimulate natural bone formation and accelerate healing in defect sites.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
        features: ["Osteoconductive matrix", "Fast resorption rate", "Granule size: 0.5-1mm"],
        specs: { material: "β-TCP + Hydroxyapatite (60:40)", sizes: "0.25g, 0.5g, 1.0g, 2.0g vials", porosity: "65-80%", resorption: "4-6 months", sterilization: "Gamma irradiated" },
        price: "₹ 2,800 per vial"
    },
    {
        id: 3,
        name: "Collagen Membrane",
        category: "Regenerative",
        description: "Resorbable collagen barrier membrane for Guided Bone Regeneration (GBR) that maintains space for new bone growth.",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
        features: ["Type I & III porcine collagen", "Bilayer design", "12-24 week resorption"],
        specs: { material: "Type I/III Collagen", sizes: "15x20mm, 20x30mm, 30x40mm", thickness: "0.3mm", resorption: "12-24 weeks", sterilization: "Double blister pack, EO sterilized" },
        price: "₹ 4,200 per membrane"
    },
    {
        id: 4,
        name: "Healing Abutment Kit",
        category: "Prosthetics",
        description: "Precision-machined healing abutments for optimal soft tissue contouring during the healing phase post-implant placement.",
        image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
        features: ["Mirror-polished surface", "Multiple gingival heights", "Color-coded for easy ID"],
        specs: { material: "Grade 5 Titanium, Anodized", sizes: "Narrow, Regular, Wide platform", heights: "2mm, 4mm, 6mm gingival height", connection: "Internal Hex & Conical Morse Taper", kit: "12-piece assorted kit" },
        price: "₹ 8,500 per kit"
    },
    {
        id: 5,
        name: "PRF Centrifuge System",
        category: "Equipment",
        description: "Table-top centrifuge calibrated for Platelet-Rich Fibrin (PRF) preparation, essential for regenerative procedures.",
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
        features: ["Fixed 2700 RPM protocol", "8x10ml tube capacity", "Digital timer & auto-stop"],
        specs: { type: "Fixed-angle centrifuge", rpm: "2700 RPM (Choukroun Protocol)", capacity: "8 x 10ml blood tubes", timer: "Digital, 1-30 min programmable", power: "220V AC, 50Hz", weight: "3.5 kg" },
        price: "₹ 18,000 per unit"
    },
    {
        id: 6,
        name: "Surgical Implant Motor",
        category: "Equipment",
        description: "Brushless, torque-controlled implant motor with 20:1 contra-angle handpiece for precise and safe implant placement.",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80",
        features: ["Torque range: 5-80 Ncm", "Brushless motor", "Integrated irrigation pump"],
        specs: { type: "Brushless Electric Motor", speed: "300 - 40,000 RPM", torque: "5 - 80 Ncm (adjustable)", handpiece: "20:1 Contra-angle included", display: "LED touchscreen", irrigation: "Integrated peristaltic pump" },
        price: "₹ 45,000 per unit"
    }
];

export default function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isQuoteOpen, setIsQuoteOpen] = useState(false);
    const [quoteProduct, setQuoteProduct] = useState<any>(null);

    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Premium <span className="text-teal-600">Solutions</span></h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Explore our range of biorenewable implants, grafting materials, and surgical equipment trusted by professionals worldwide.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow group">
                            <div className="h-48 bg-slate-100 relative overflow-hidden rounded-t-xl">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                <Badge className="absolute top-4 right-4 bg-teal-600">{product.category}</Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-slate-600 mb-4 text-sm">{product.description}</p>
                                <ul className="space-y-1">
                                    {product.features.map(f => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-slate-500">
                                            <CheckCircle2 size={14} className="text-teal-600 shrink-0" /> {f}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter className="flex gap-2 border-t pt-4">
                                <Button
                                    variant="outline"
                                    className="flex-1"
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    View Specs
                                </Button>
                                <Button
                                    className="flex-1 bg-slate-900 hover:bg-slate-800"
                                    onClick={() => { setQuoteProduct(product); setIsQuoteOpen(true); }}
                                >
                                    Request Quote
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* ===== PRODUCT SPECS DIALOG ===== */}
            <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
                <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-teal-700 flex items-center gap-2">
                            <Package className="h-6 w-6" /> {selectedProduct?.name}
                        </DialogTitle>
                        <DialogDescription>
                            <Badge className="mt-1">{selectedProduct?.category}</Badge>
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                        <div className="h-40 rounded-xl overflow-hidden mb-4 bg-slate-100">
                            <img src={selectedProduct?.image} alt={selectedProduct?.name} className="w-full h-full object-cover" />
                        </div>
                        <h4 className="font-semibold mb-3 text-slate-900">Technical Specifications:</h4>
                        <div className="space-y-2">
                            {selectedProduct?.specs && Object.entries(selectedProduct.specs).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-start py-2 border-b border-slate-50 last:border-0">
                                    <span className="text-sm text-slate-500 capitalize font-medium">{key}</span>
                                    <span className="text-sm text-slate-900 font-semibold text-right max-w-[60%]">{value as string}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                            <span className="text-slate-500 text-sm">Indicative Price:</span>
                            <span className="text-lg font-bold text-slate-900">{selectedProduct?.price}</span>
                        </div>
                    </div>
                    <Button
                        className="w-full bg-teal-600 hover:bg-teal-700"
                        onClick={() => { setQuoteProduct(selectedProduct); setSelectedProduct(null); setIsQuoteOpen(true); }}
                    >
                        Request Quote for This Product <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </DialogContent>
            </Dialog>

            {/* ===== QUOTE REQUEST SHEET ===== */}
            <Sheet open={isQuoteOpen} onOpenChange={(open) => { setIsQuoteOpen(open); if (!open) setQuoteProduct(null); }}>
                <SheetContent className="overflow-y-auto">
                    <SheetHeader>
                        <SheetTitle>Request a Quote</SheetTitle>
                        <SheetDescription>
                            Product: <span className="font-bold text-teal-600">{quoteProduct?.name}</span>
                        </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-6 mt-8">
                        <div className="space-y-2">
                            <Label>Doctor / Clinic Name</Label>
                            <Input placeholder="e.g. Dr. Patel's Dental Clinic" />
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
                            <Label>City / State</Label>
                            <Input placeholder="e.g. Mumbai, Maharashtra" />
                        </div>
                        <div className="space-y-2">
                            <Label>Quantity Required</Label>
                            <Input type="number" placeholder="e.g. 10" />
                        </div>
                        <div className="space-y-2">
                            <Label>Additional Requirements (Optional)</Label>
                            <Textarea placeholder="e.g. Need specific sizes, bulk discount inquiry, etc." />
                        </div>
                        <Button className="w-full bg-teal-600 hover:bg-teal-700 text-lg h-12">
                            Submit Quote Request
                        </Button>
                        <p className="text-xs text-center text-slate-400">Our sales team will respond within 24 hours with a detailed quotation.</p>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
}
