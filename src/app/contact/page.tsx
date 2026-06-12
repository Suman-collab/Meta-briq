"use client";

import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-background">
      <CustomCursor />
      <Navbar />

      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h1 className="text-6xl font-bold tracking-tight mb-6">Let's Talk.</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-muted mb-16">
            Have a project in mind? We'd love to hear about it. Fill out the form below and we'll be in touch.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted">Name</label>
                <input type="text" className="w-full bg-accent/30 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-muted">Email</label>
                <input type="email" className="w-full bg-accent/30 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-muted">Message</label>
              <textarea rows={6} className="w-full bg-accent/30 border border-border rounded-xl px-4 py-4 focus:outline-none focus:border-primary transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            
            <MagneticButton>
              <button className="w-full bg-primary text-secondary py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </MagneticButton>
          </form>
        </ScrollReveal>
      </div>
    </main>
  );
}
