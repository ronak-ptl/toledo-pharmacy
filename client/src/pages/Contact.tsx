/*
 * Design: "Community Mosaic" — Vibrant Neighborhood Energy
 * Contact: Map, contact info cards, contact form
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Printer,
  Navigation,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    primary: "(201) 867-0297",
    secondary: "Call us during business hours",
    href: "tel:2018670297",
  },
  {
    icon: Printer,
    title: "Fax",
    primary: "(201) 867-6848",
    secondary: "Send us a fax anytime",
    href: null,
  },
  {
    icon: MapPin,
    title: "Address",
    primary: "3808 Bergenline Ave",
    secondary: "Union City, NJ 07087",
    href: "https://maps.google.com/?q=3808+Bergenline+Ave+Union+City+NJ+07087",
  },
];

const hours = [
  { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
  { day: "Saturday", time: "9:00 AM - 4:00 PM" },
  { day: "Sunday", time: "Closed" },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  _honeypot: string;
};

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Honeypot: silently reject bot submissions
    if (data._honeypot) return;

    setStatus("submitting");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-lg border text-navy font-body text-sm placeholder:text-navy/30 focus:outline-none focus:ring-2 transition-all duration-200 ${
      hasError
        ? "border-red-300 bg-red-50 focus:ring-red-200"
        : "border-navy/10 bg-white focus:ring-marigold/30 focus:border-marigold/40"
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot — hidden from humans, bots fill this in */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute opacity-0 pointer-events-none w-0 h-0"
        {...register("_honeypot")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Name */}
        <div>
          <label className="block text-navy font-display font-medium text-sm mb-1.5">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            placeholder="Jane Smith"
            className={inputClass(!!errors.name)}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-xs font-body">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-navy font-display font-medium text-sm mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            placeholder="jane@example.com"
            className={inputClass(!!errors.email)}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-red-500 text-xs font-body">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label className="block text-navy font-display font-medium text-sm mb-1.5">
          Phone <span className="text-red-400">*</span>
        </label>
        <input
          type="tel"
          placeholder="(201) 555-0000"
          className={inputClass(!!errors.phone)}
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[\d\s\-().+]{7,}$/, message: "Enter a valid phone number" },
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-red-500 text-xs font-body">{errors.phone.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-navy font-display font-medium text-sm mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="How can we help you?"
          className={inputClass(!!errors.message)}
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "Message must be at least 10 characters" },
          })}
        />
        {errors.message && (
          <p className="mt-1 text-red-500 text-xs font-body">{errors.message.message}</p>
        )}
      </div>

      {/* Success / Error feedback */}
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-green-50 border border-green-200 mb-4">
          <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
          <p className="text-green-700 text-sm font-body">
            Message sent! We'll get back to you soon.
          </p>
        </div>
      )}
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 rounded-lg bg-red-50 border border-red-200 mb-4">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          <p className="text-red-700 text-sm font-body">
            Something went wrong. Please call us at (201) 867-0297.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold text-sm rounded-lg shadow-md shadow-marigold/20 hover:shadow-lg hover:shadow-marigold/30 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        <Send className="w-4 h-4" />
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Contact Us | Visit or Call Toledo Pharmacy"
        description="Contact Toledo Pharmacy at (201) 867-0297 or visit us at 3808 Bergenline Ave, Union City, NJ 07087. Open Mon-Fri 9AM-7PM, Sat 9AM-4PM. Se habla Español."
        path="/contact"
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy py-16 md:py-24">
        <div className="container text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-marigold font-display font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg font-body max-w-2xl mx-auto"
          >
            We'd love to hear from you. Visit us, call us, or send us a message.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {contactInfo.map((info, i) => {
              const Wrapper = info.href ? "a" : "div";
              const wrapperProps = info.href
                ? { href: info.href, target: info.href.startsWith("http") ? "_blank" : undefined, rel: info.href.startsWith("http") ? "noopener noreferrer" : undefined }
                : {};
              return (
                <motion.div key={info.title} custom={i} variants={fadeUp}>
                  <Wrapper
                    {...(wrapperProps as any)}
                    className="block bg-white rounded-xl p-6 shadow-sm border border-navy/5 hover:shadow-md hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-marigold/15 to-marigold/5 flex items-center justify-center mb-4">
                      <info.icon className="w-5 h-5 text-marigold-dark" />
                    </div>
                    <h3 className="font-display font-semibold text-navy text-sm uppercase tracking-wider mb-2">
                      {info.title}
                    </h3>
                    <p className="font-display font-semibold text-navy text-lg mb-1">
                      {info.primary}
                    </p>
                    <p className="text-navy/50 text-sm font-body">
                      {info.secondary}
                    </p>
                  </Wrapper>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-marigold-dark font-display font-semibold text-sm uppercase tracking-wider mb-3">
                Send Us a Message
              </span>
              <h2 className="font-display font-bold text-navy text-3xl md:text-4xl leading-tight mb-4">
                We'd Love to Hear From You
              </h2>
              <p className="text-navy/60 text-base leading-relaxed font-body mb-6">
                Have a question about your prescription, our services, or insurance? Fill out the form and we'll get back to you as soon as possible.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-navy/70 text-sm font-body">
                  <div className="w-8 h-8 rounded-lg bg-marigold/10 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-marigold-dark" />
                  </div>
                  Prefer to call? Reach us at{" "}
                  <a href="tel:2018670297" className="text-navy font-semibold hover:text-marigold-dark transition-colors">
                    (201) 867-0297
                  </a>
                </div>
                <div className="flex items-center gap-3 text-navy/70 text-sm font-body">
                  <div className="w-8 h-8 rounded-lg bg-marigold/10 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-marigold-dark" />
                  </div>
                  We typically respond within one business day
                </div>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-cream rounded-2xl p-7 border border-navy/5"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map + Hours */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 rounded-2xl overflow-hidden shadow-lg shadow-navy/5 border border-navy/5 h-[400px] md:h-[480px]"
            >
              <iframe
                src="https://maps.google.com/maps?q=3808+Bergenline+Ave,+Union+City,+NJ+07087&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toledo Pharmacy location"
              />
            </motion.div>

            {/* Hours & Directions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-6"
            >
              {/* Hours Card */}
              <div className="bg-white rounded-xl p-6 border border-navy/5">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal/15 to-teal/5 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-teal" />
                  </div>
                  <h3 className="font-display font-semibold text-navy text-lg">
                    Business Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="text-navy/70 text-sm font-body">{h.day}</span>
                      <span className="text-navy font-display font-medium text-sm">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Directions Card */}
              <div className="bg-navy rounded-xl p-6">
                <h3 className="font-display font-semibold text-white text-lg mb-3">
                  Get Directions
                </h3>
                <p className="text-white/60 text-sm font-body mb-5">
                  We're located on Bergenline Avenue in the heart of Union City, NJ. Easy access from Route 495 and NJ Transit bus lines.
                </p>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3808+Bergenline+Ave,+Union+City,+NJ+07087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold text-sm rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>

              {/* Call Card */}
              <div className="bg-gradient-to-br from-marigold/10 to-marigold/5 rounded-xl p-6 border border-marigold/15">
                <h3 className="font-display font-semibold text-navy text-lg mb-2">
                  Need Help Now?
                </h3>
                <p className="text-navy/60 text-sm font-body mb-4">
                  Give us a call and our friendly staff will be happy to assist you.
                </p>
                <a
                  href="tel:2018670297"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white font-display font-semibold text-sm rounded-lg hover:bg-navy-light transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  (201) 867-0297
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
