"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import products from "@/data/products.json";
import MagneticButton from "@/components/MagneticButton";

// In a real app, this would be managed via Context/Zustand
const cartItems = [
  { ...products[0], quantity: 1 },
  { ...products[2], quantity: 2 },
];

export default function Cart() {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-background pt-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-secondary/50 rounded-3xl p-8 border border-border">
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-border">
          <h1 className="text-4xl font-bold tracking-tight">Your Cart</h1>
          <span className="text-muted font-medium">{cartItems.length} items</span>
        </div>

        {cartItems.length > 0 ? (
          <div className="flex flex-col gap-8 mb-12">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-6 items-center">
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-accent shrink-0">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted text-sm">{item.category}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-lg font-medium bg-accent px-3 py-1 rounded-lg">Qty: {item.quantity}</span>
                  <span className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                  <button className="p-2 text-muted hover:text-red-500 transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted">
            <p className="text-xl mb-6">Your cart is empty.</p>
            <Link href="/shop" className="text-primary font-semibold underline">Continue Shopping</Link>
          </div>
        )}

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">
            Subtotal: <span className="text-primary">${subtotal.toFixed(2)}</span>
          </div>
          <MagneticButton>
            <button className="bg-primary text-secondary px-12 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity">
              Checkout
            </button>
          </MagneticButton>
        </div>
      </div>
    </div>
  );
}
