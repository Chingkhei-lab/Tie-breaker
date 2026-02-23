import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kindway BioReZens — Dental Implants, Bone Grafts & Training",
  description: "Premium dental implants, synthetic bone graft materials, surgical training workshops, and mobile dental outreach programs. ISO 13485 certified. Trusted by 1500+ clinicians across India.",
  keywords: "dental implants training, bone graft materials, dental outreach programs, implant surgery planning, dental workshops India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background font-sans antialiased")}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
