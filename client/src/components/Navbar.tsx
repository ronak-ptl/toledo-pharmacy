/*
 * Design: "Community Mosaic" — Vibrant Neighborhood Energy
 * Navbar: Sticky top nav, original Toledo Pharmacy logo
 * Typography: Outfit for brand, Source Sans 3 for links
 * Mobile: Hamburger menu with slide-in panel
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MapPin } from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/toledo-logo_1769e9dd.webp";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-navy text-white/80 text-sm hidden md:block">
        <div className="container flex justify-between items-center py-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:2018670297"
              className="flex items-center gap-1.5 hover:text-marigold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(201) 867-0297</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              3808 Bergenline Ave, Union City, NJ 07087
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60">Mon-Fri: 9AM-7PM</span>
            <span className="text-white/40">|</span>
            <span className="text-white/60">Sat: 9AM-4PM</span>
            <span className="text-white/40">|</span>
            <span className="text-white/60">Sun: Closed</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-navy/5"
            : "bg-white"
        }`}
      >
        <div className="container flex items-center justify-between py-3 md:py-4">
          {/* Logo - original from old site */}
          <Link href="/" className="flex items-center group shrink-0">
            <img
              src={LOGO_URL}
              alt="Toledo Pharmacy"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 font-body text-[15px] font-medium rounded-lg transition-all duration-200 ${
                  location === link.href
                    ? "text-marigold-dark bg-marigold/10"
                    : "text-navy/70 hover:text-navy hover:bg-navy/5"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-marigold rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:2018670297"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold text-sm rounded-lg shadow-md shadow-marigold/20 hover:shadow-lg hover:shadow-marigold/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy/30 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl md:hidden"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between">
                  <img
                    src={LOGO_URL}
                    alt="Toledo Pharmacy"
                    className="h-8 w-auto"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-navy/60 hover:bg-navy/5"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1 mt-8">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`px-4 py-3 rounded-lg font-display font-medium text-lg transition-colors ${
                        location === link.href
                          ? "text-marigold-dark bg-marigold/10"
                          : "text-navy/70 hover:text-navy hover:bg-navy/5"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                <div className="mt-auto pb-6 space-y-4">
                  <a
                    href="tel:2018670297"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold rounded-lg shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    (201) 867-0297
                  </a>
                  <div className="text-center text-sm text-navy/50">
                    <p>3808 Bergenline Ave</p>
                    <p>Union City, NJ 07087</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
