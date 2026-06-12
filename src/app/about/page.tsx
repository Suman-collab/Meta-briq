"use client";

import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-background">
      <CustomCursor />
      <Navbar />

      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-12">
            Redefining Digital Commerce.
          </h1>
        </ScrollReveal>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <ScrollReveal delay={0.1}>
            <p className="text-2xl text-muted leading-relaxed mb-8">
              We believe that ecommerce shouldn't just be functional—it should be a memorable experience. Scalient is a demonstration of what happens when cutting-edge technology meets pixel-perfect design.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted">To empower brands with lightning-fast, accessible, and beautifully animated storefronts that convert visitors into loyal customers.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Tech Stack</h3>
                <p className="text-muted">Built on Next.js 14 App Router, styled with Tailwind CSS, animated seamlessly with Framer Motion, and smoothed out by Lenis scroll.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  );
}
