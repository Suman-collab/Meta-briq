"use client";

import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import ScrollReveal from "@/components/ScrollReveal";
import CustomCursor from "@/components/CustomCursor";
import products from "@/data/products.json";

export default function Shop() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-4 md:px-8">
      <CustomCursor />
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Shop All Works</h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-muted max-w-2xl mb-16">
            Explore our complete collection of premium, handcrafted items designed for modern living.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard {...product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </main>
  );
}
