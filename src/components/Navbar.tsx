"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Transparent -> Frosted Glass
    if (latest > 80) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Auto-hide on scroll down, reappear on scroll up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-8 pt-4 pb-4"
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between p-2 pl-4 rounded-xl transition-colors duration-300",
          isScrolled
            ? "bg-white/6 dark:bg-white/5 backdrop-blur-md border border-white/5"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
          Scalient
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-nav-gray font-medium transition-colors hover:text-primary py-1"
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className={cn(isActive && "text-primary")}>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Cart (0)
          </Link>
          <Link
            href="/shop"
            className="bg-primary text-secondary px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get Template
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
