/*
 * Design: "Community Mosaic" — Vibrant Neighborhood Energy
 * About: Full story of Toledo Pharmacy with team image, services detail, community focus
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Heart,
  Users,
  Award,
  Shield,
  Phone,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/pharmacy-team-Gcs6aoK2Y2sFTDZ5tWgFFx.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/community-health-b8Mtsb7ZrpbPxc22Uah2iH.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/hero-pharmacy-NNBzxgMYoJH5SHhL8ZDxic.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const values = [
  {
    icon: Heart,
    title: "Personalized Care",
    desc: "We understand that each individual has unique healthcare needs. We take the time to listen and offer tailored advice.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "We offer free health screenings and educational seminars to help our community stay healthy and informed.",
  },
  {
    icon: Award,
    title: "40+ Years Experience",
    desc: "With over four decades of experience, we are proud to be a trusted healthcare provider for our customers.",
  },
  {
    icon: Shield,
    title: "Affordable Healthcare",
    desc: "We offer competitive pricing and work with insurance providers to ensure access to medications at a fair price.",
  },
];

const servicesList = [
  "Prescription medication dispensing",
  "All major vaccines (COVID-19, Flu, Shingles, Pneumonia, Tdap, HPV)",
  "Free health screenings & wellness consultations",
  "Medication therapy management",
  "Over-the-counter products & medical supplies",
  "Free prescription delivery",
  "Insurance coordination & billing",
  "Easy prescription transfers & auto-refills",
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        </div>
        <div className="container relative z-10 py-20 md:py-28 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block text-marigold font-display font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            About Toledo Pharmacy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg font-body max-w-2xl mx-auto"
          >
            Your trusted independent pharmacy in the heart of Union City, NJ.
            Serving our community with personalized care since 1982.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 60H1440V15L0 60Z" className="fill-cream" />
          </svg>
        </div>
      </section>

      {/* Main About Content */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10">
                <img
                  src={TEAM_IMG}
                  alt="Toledo Pharmacy Team"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.h2
                custom={0}
                variants={fadeUp}
                className="font-display font-bold text-navy text-3xl md:text-4xl leading-tight mb-6"
              >
                Welcome to{" "}
                <span className="text-marigold-dark">Toledo Pharmacy</span>
              </motion.h2>
              <motion.p custom={1} variants={fadeUp} className="text-navy/60 text-base leading-relaxed mb-4 font-body">
                Welcome to Toledo Pharmacy, your trusted independent pharmacy located in the heart of Union City, NJ. With over 40 years of experience serving the local community, we are proud to be a trusted healthcare provider for our customers.
              </motion.p>
              <motion.p custom={2} variants={fadeUp} className="text-navy/60 text-base leading-relaxed mb-4 font-body">
                At Toledo Pharmacy, we take pride in providing personalized attention and care to our customers. We understand that each individual has unique healthcare needs, and we take the time to listen to our customers and offer tailored advice and guidance.
              </motion.p>
              <motion.p custom={3} variants={fadeUp} className="text-navy/60 text-base leading-relaxed mb-4 font-body">
                Our experienced pharmacists and staff members are committed to providing top-notch pharmaceutical care to our customers, and we always go above and beyond to ensure that each person feels heard and supported.
              </motion.p>
              <motion.p custom={4} variants={fadeUp} className="text-navy/50 text-sm italic font-body">
                Se habla Español — We proudly serve our bilingual community.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <motion.span custom={0} variants={fadeUp} className="inline-block text-marigold-dark font-display font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </motion.span>
            <motion.h2 custom={1} variants={fadeUp} className="font-display font-bold text-navy text-3xl md:text-4xl mb-4">
              Our Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                variants={fadeUp}
                className="flex gap-5 p-6 rounded-xl bg-cream/60 border border-navy/5 hover:shadow-md hover:shadow-navy/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-marigold/15 to-marigold/5 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-marigold-dark" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-navy text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-navy/55 text-sm leading-relaxed font-body">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services List + Community Image */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.span custom={0} variants={fadeUp} className="inline-block text-marigold-dark font-display font-semibold text-sm uppercase tracking-wider mb-3">
                What We Offer
              </motion.span>
              <motion.h2 custom={1} variants={fadeUp} className="font-display font-bold text-navy text-3xl md:text-4xl leading-tight mb-6">
                Comprehensive Pharmacy Services
              </motion.h2>
              <motion.p custom={2} variants={fadeUp} className="text-navy/60 text-base leading-relaxed mb-8 font-body">
                We offer a wide range of services to meet all your healthcare needs, prioritizing convenience and affordability.
              </motion.p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicesList.map((service, i) => (
                  <motion.div
                    key={service}
                    custom={i + 3}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-teal shrink-0" />
                    <span className="text-navy/70 text-sm font-body">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10">
                <img
                  src={COMMUNITY_IMG}
                  alt="Community Health Event"
                  className="w-full h-[400px] md:h-[480px] object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mx-auto">
            <motion.h2 custom={0} variants={fadeUp} className="font-display font-bold text-white text-3xl md:text-4xl mb-4">
              Visit Us <span className="text-marigold">Today</span>
            </motion.h2>
            <motion.p custom={1} variants={fadeUp} className="text-white/60 text-lg font-body mb-8">
              We are honored to serve the Union City community and look forward to providing you with the personalized attention and care that you deserve.
            </motion.p>
            <motion.div custom={2} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2018670297"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold rounded-lg shadow-lg shadow-marigold/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                (201) 867-0297
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-display font-semibold rounded-lg border border-white/20 hover:bg-white/15 transition-all duration-200"
              >
                Contact Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
