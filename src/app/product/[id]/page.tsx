"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";
import MagneticButton from "@/components/MagneticButton";
import products from "@/data/products.json";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0];
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 md:px-8 bg-background">
      <CustomCursor />
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <Link href="/shop" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12 font-medium">
          <ArrowLeft size={20} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <motion.div 
              className="relative aspect-square rounded-3xl overflow-hidden bg-accent/20 border border-border"
              layoutId={`product-image-${product.id}`}
            >
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </ScrollReveal>

          <div className="flex flex-col justify-center">
            <ScrollReveal delay={0.1}>
              <span className="inline-block px-4 py-1 rounded-full bg-accent text-sm font-semibold mb-6">
                {product.category}
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {product.title}
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p className="text-2xl font-semibold text-primary mb-8">
                ${product.price.toFixed(2)}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p className="text-lg text-muted mb-12 leading-relaxed">
                Experience unparalleled quality with this premium piece from our collection. Hand-crafted with meticulous attention to detail, it blends seamlessly into any modern aesthetic.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex items-center gap-6 mb-12">
                <div className="flex items-center border border-border rounded-xl">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-6 py-4 text-xl hover:text-primary transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-xl font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-6 py-4 text-xl hover:text-primary transition-colors"
                  >
                    +
                  </button>
                </div>
                <MagneticButton className="flex-1">
                  <button className="w-full bg-primary text-secondary py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
                    Add to Cart
                  </button>
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </main>
  );
}
