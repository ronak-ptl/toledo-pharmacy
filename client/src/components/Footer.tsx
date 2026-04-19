/*
 * Design: "Community Mosaic" — Vibrant Neighborhood Energy
 * Footer: Full-width dark navy section with organized columns, original logo
 */

import { Link } from "wouter";
import { Phone, MapPin, Clock } from "lucide-react";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/toledo-logo_1769e9dd.webp";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5">
              <img
                src={LOGO_URL}
                alt="Toledo Pharmacy"
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 font-body">
              Your trusted independent pharmacy in the heart of Union City, NJ.
              Over 40 years of personalized care for our community.
            </p>
            <p className="text-white/40 text-xs font-body">Se habla Español</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/blog", label: "Health Blog" },
                { href: "/contact", label: "Contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-marigold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Free Delivery",
                "Insurance Coordination",
                "All Major Vaccines",
                "Health Screenings",
                "Easy Transfers & Refills",
                "Lowest Price Guarantee",
              ].map(service => (
                <li key={service}>
                  <span className="text-white/60 text-sm font-body">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Legal
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-of-service", label: "Terms of Service" },
                { href: "/hipaa-notice", label: "HIPAA Notice" },
                { href: "/medical-disclaimer", label: "Medical Disclaimer" },
                { href: "/cookie-policy", label: "Cookie Policy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-marigold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:2018670297"
                  className="flex items-start gap-3 text-white/60 hover:text-marigold transition-colors group"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-marigold/70 group-hover:text-marigold" />
                  <div className="text-sm font-body">
                    <p className="text-white/80 font-medium">(201) 867-0297</p>
                    <p className="text-white/40 text-xs">Fax: (201) 867-6848</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=3808+Bergenline+Ave+Union+City+NJ+07087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/60 hover:text-marigold transition-colors group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-marigold/70 group-hover:text-marigold" />
                  <div className="text-sm font-body">
                    <p>3808 Bergenline Ave</p>
                    <p>Union City, NJ 07087</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-marigold/70" />
                <div className="text-sm font-body">
                  <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs font-body">
            &copy; {new Date().getFullYear()} Toledo Pharmacy. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link href="/privacy-policy" className="text-white/40 hover:text-marigold transition-colors text-xs font-body">Privacy Policy</Link>
            <span className="text-white/20 text-xs">·</span>
            <Link href="/hipaa-notice" className="text-white/40 hover:text-marigold transition-colors text-xs font-body">HIPAA Notice</Link>
            <span className="text-white/20 text-xs">·</span>
            <Link href="/legal" className="text-white/40 hover:text-marigold transition-colors text-xs font-body">Legal Center</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
