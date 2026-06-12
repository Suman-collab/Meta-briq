"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import Marquee from "@/components/Marquee";
import NumberCounter from "@/components/NumberCounter";
import ProductCard from "@/components/ProductCard";
import MagneticButton from "@/components/MagneticButton";
import products from "@/data/products.json";

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);

  return (
    <main ref={container} className="relative min-h-screen">
      <CustomCursor />
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden px-4 pt-20">
        <motion.div
          style={{ y }}
          className="absolute inset-0 z-0 opacity-40 dark:opacity-20"
        >
          {/* Abstract floating shapes can go here if needed */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-nav-gray rounded-full mix-blend-multiply filter blur-[128px] opacity-30" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 bg-accent rounded-full p-2 pr-4 mb-8 backdrop-blur-sm border border-border">
              <span className="bg-white dark:bg-black text-black dark:text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW
              </span>
              <span className="text-sm font-medium text-foreground">
                No Hidden Pricing
              </span>
            </div>
          </ScrollReveal>

          <AnimatedText
            text="Elevate Your Commerce Experience."
            className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-foreground leading-[1.1] mb-8 max-w-4xl"
          />

          <ScrollReveal delay={0.6}>
            <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 font-medium">
              A pixel-perfect Webflow clone rebuilt with Next.js 14, Tailwind CSS, and Framer Motion. Unleash the power of modern web development.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <div className="flex items-center gap-6">
              <MagneticButton>
                <Link
                  href="/shop"
                  className="bg-primary text-secondary px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2 group"
                >
                  Start Shopping
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                </Link>
              </MagneticButton>
              <Link
                href="/about"
                className="text-foreground font-semibold text-lg hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
              >
                Learn More
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="py-24 border-y border-border bg-background relative overflow-hidden">
        <div className="mb-12">
          <p className="text-center text-muted font-semibold tracking-widest uppercase text-sm mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </p>
          <Marquee speed="normal">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-4xl font-bold text-border px-8">
                BRAND LOGO {i}
              </div>
            ))}
          </Marquee>
        </div>

        {/* Double Tilted Strips */}
        <div className="relative h-[200px] mt-24 flex items-center justify-center overflow-hidden w-[110%] -ml-[5%]">
          {/* Dark Strip (clockwise 4deg) */}
          <div
            className="absolute inset-x-0 h-16 bg-secondary text-white flex items-center z-10"
            style={{ transform: "rotate(4deg)" }}
          >
            <Marquee speed="fast" direction="right" pauseOnHover={false}>
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-xl font-bold mx-4 uppercase whitespace-nowrap">
                  Build faster. Launch sooner. ✦
                </span>
              ))}
            </Marquee>
          </div>
          {/* Lime Strip (counter-clockwise 4deg) */}
          <div
            className="absolute inset-x-0 h-16 bg-primary text-secondary flex items-center z-20"
            style={{ transform: "rotate(-4deg)" }}
          >
            <Marquee speed="fast" direction="left" pauseOnHover={false}>
              {[...Array(10)].map((_, i) => (
                <span key={i} className="text-xl font-bold mx-4 uppercase whitespace-nowrap">
                  Premium Quality ✦ Pixel Perfect ✦ Modern Tech ✦
                </span>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-32 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Our Best Works
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-muted text-lg max-w-md">
                Discover our curated collection of premium products designed to elevate your space.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 text-foreground font-semibold text-lg border-b-2 border-transparent hover:border-primary pb-1 transition-colors"
            >
              View All Works
              <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary group-hover:text-secondary transition-colors">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(0, 6).map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard {...product} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-24 bg-secondary text-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <ScrollReveal>
            <div className="flex flex-col gap-2 border-l-2 border-primary/30 pl-6">
              <div className="text-6xl font-bold text-primary flex items-baseline gap-1">
                <NumberCounter value={98} />%
              </div>
              <p className="text-lg text-white/70 font-medium">Customer Satisfaction Rate</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col gap-2 border-l-2 border-primary/30 pl-6">
              <div className="text-6xl font-bold text-primary flex items-baseline gap-1">
                <NumberCounter value={24} />/7
              </div>
              <p className="text-lg text-white/70 font-medium">Premium Support Availability</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col gap-2 border-l-2 border-primary/30 pl-6">
              <div className="text-6xl font-bold text-primary flex items-baseline gap-1">
                <NumberCounter value={150} />+
              </div>
              <p className="text-lg text-white/70 font-medium">Projects Successfully Delivered</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-background py-20 px-4 md:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-sm">
            <h3 className="text-2xl font-bold tracking-tight text-foreground mb-6">
              Scalient
            </h3>
            <p className="text-muted mb-8">
              Subscribe to our newsletter for the latest updates, exclusive offers, and design tips.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-accent/50 border border-border rounded-lg px-4 py-3 flex-1 text-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold text-foreground mb-6">Links</h4>
              <ul className="flex flex-col gap-4 text-muted">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/shop" className="hover:text-primary transition-colors">Shop</Link></li>
                <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-6">Legal</h4>
              <ul className="flex flex-col gap-4 text-muted">
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-muted text-sm gap-4">
          <p>© 2024 Scalient Clone. Rebuilt with Next.js & Framer Motion.</p>
          <div className="flex gap-4">
            {/* Social Icons would go here */}
            <span className="hover:text-primary cursor-pointer transition-colors">Twitter</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Instagram</span>
            <span className="hover:text-primary cursor-pointer transition-colors">LinkedIn</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
