"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function ProductCard({ id, title, price, category, image }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group block">
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-white dark:bg-secondary/50 border border-border aspect-[4/5] mb-6"
        whileHover="hover"
      >
        <motion.div
          className="absolute inset-0 bg-black/5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <motion.div
          variants={{
            hover: { scale: 1.08 },
          }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full h-full relative"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>

        {/* Slide up "View Product" button on hover */}
        <motion.div
          variants={{
            hover: { y: 0, opacity: 1 },
          }}
          initial={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[90%]"
        >
          <div className="bg-primary text-secondary flex items-center justify-center gap-2 py-3 rounded-xl font-semibold shadow-xl">
            <span>View Product</span>
            <ArrowRight size={18} />
          </div>
        </motion.div>
      </motion.div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted font-medium">{category}</p>
        </div>
        <div className="text-lg font-bold text-foreground bg-accent px-3 py-1 rounded-lg">
          ${price.toFixed(2)}
        </div>
      </div>
    </Link>
  );
}
