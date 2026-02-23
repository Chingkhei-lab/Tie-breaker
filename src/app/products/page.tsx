"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Titanium Dental Implant",
        category: "Implants",
        description: "High-grade titanium alloy for superior osseointegration and long-term stability.",
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800",
        features: ["Grade 5 Titanium", "Self-tapping thread", "Micro-surface texturing"]
    },
    {
        id: 2,
        name: "Synthetic Bone Graft",
        category: "Regenerative",
        description: "Bioactive synthetic material designed to stimulate natural bone formation.",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800",
        features: ["Osteoconductive", "Fast absorption", "Granule size: 0.5-1mm"]
    },
    // Add more products here
];

export default function ProductsPage() {
    return (
        <div className="container mx-auto py-16 px-4">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Premium <span className="text-teal-600">Solutions</span></h1>
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Explore our range of biorenewable implants and grafting materials trusted by professionals worldwide.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                            <div className="h-48 bg-slate-100 relative overflow-hidden rounded-t-xl">
                                {/* Using native img to bypass next/image domain config */}
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                <Badge className="absolute top-4 right-4 bg-teal-600">{product.category}</Badge>
                            </div>
                            <CardHeader>
                                <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-slate-600 mb-4">{product.description}</p>
                                <ul className="list-disc list-inside text-sm text-slate-500 space-y-1">
                                    {product.features.map(f => <li key={f}>{f}</li>)}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full bg-slate-900 hover:bg-slate-800">
                                    <Link href="/contact">Request Quote</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
