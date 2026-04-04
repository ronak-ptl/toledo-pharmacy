/*
 * Design: "Community Mosaic" — Vibrant Neighborhood Energy
 * Home: Hero with diagonal clip, services grid, about preview, blog highlights
 * Colors: Navy (#1B2A4A), Marigold (#F2994A), Cream, Light-gray
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Truck,
  ShieldCheck,
  Syringe,
  DollarSign,
  RefreshCw,
  ArrowRight,
  Phone,
  Clock,
  Star,
  HeartPulse,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/hero-pharmacy-NNBzxgMYoJH5SHhL8ZDxic.webp";
const DELIVERY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/pharmacy-services-9e7AJhAUU88VVotXMy5zw4.webp";
const COMMUNITY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/community-health-b8Mtsb7ZrpbPxc22Uah2iH.webp";
const TEAM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/pharmacy-team-Gcs6aoK2Y2sFTDZ5tWgFFx.webp";
const VACCINE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663492047795/CBkFvG4mcJ8DQojrBJ59Fz/vaccination-service-oCeUoFsJH2N8hkySDiniox.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

const services = [
  {
    icon: Truck,
    title: "Free Delivery",
    desc: "Get your prescriptions delivered right to your door at no cost. Fast, reliable, and always on time.",
    color: "from-teal/10 to-teal/5",
    iconColor: "text-teal",
  },
  {
    icon: ShieldCheck,
    title: "Insurance Coordination",
    desc: "We work with all major insurance plans and handle the paperwork so you don't have to. Hassle-free coverage, every time.",
    color: "from-marigold/10 to-marigold/5",
    iconColor: "text-marigold-dark",
  },
  {
    icon: HeartPulse,
    title: "All Major Vaccines",
    desc: "COVID-19, Flu, Shingles, Pneumonia, Tdap, and more — all available with no appointment needed. Walk-ins always welcome.",
    color: "from-navy/10 to-navy/5",
    iconColor: "text-navy",
  },
  {
    icon: Syringe,
    title: "Health Screenings",
    desc: "Free blood pressure checks, glucose monitoring, and wellness consultations to help you stay on top of your health.",
    color: "from-teal/10 to-teal/5",
    iconColor: "text-teal",
  },
  {
    icon: DollarSign,
    title: "Lowest Prices",
    desc: "Competitive pricing on all prescriptions and OTC products. We price-match to make sure you get the best deal.",
    color: "from-marigold/10 to-marigold/5",
    iconColor: "text-marigold-dark",
  },
  {
    icon: RefreshCw,
    title: "Easy Transfers & Refills",
    desc: "Switch to Toledo Pharmacy in minutes. We handle the transfer and set up auto-refills so you never miss a dose.",
    color: "from-navy/10 to-navy/5",
    iconColor: "text-navy",
  },
];

const stats = [
  { value: "40+", label: "Years Serving\nOur Community" },
  { value: "Free", label: "Prescription\nDelivery" },
  { value: "Walk-In", label: "Vaccinations\nAvailable" },
  { value: "Bilingual", label: "English & Spanish\nService" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/60" />
        </div>

        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-marigold/15 border border-marigold/25 mb-6"
            >
              <Star className="w-3.5 h-3.5 text-marigold fill-marigold" />
              <span className="text-marigold text-sm font-medium font-body">
                Trusted Since 1982 &middot; Union City, NJ
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6"
            >
              Your health is our{" "}
              <span className="text-marigold">passion.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed mb-8 font-body max-w-xl"
            >
              Trust us to take care of you with personalized attention at your
              neighborhood pharmacy. Over 40 years of dedicated service to the
              Union City community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="tel:2018670297"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold rounded-lg shadow-lg shadow-marigold/25 hover:shadow-xl hover:shadow-marigold/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </a>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-white font-display font-semibold rounded-lg border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Diagonal bottom edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path d="M0 80H1440V20L0 80Z" fill="var(--color-cream, #FAF9F5)" />
          </svg>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-cream -mt-2">
        <div className="container py-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={fadeUp}
                className="text-center p-4"
              >
                <div className="font-display font-bold text-2xl md:text-3xl text-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-navy/50 text-sm font-body whitespace-pre-line leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="inline-block text-marigold-dark font-display font-semibold text-sm uppercase tracking-wider mb-3"
            >
              What We Offer
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display font-bold text-navy text-3xl md:text-4xl lg:text-5xl mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-navy/60 text-lg font-body max-w-2xl mx-auto"
            >
              We go above and beyond to provide comprehensive pharmacy services
              tailored to your needs.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                variants={fadeUp}
                className="group relative bg-white rounded-xl p-7 shadow-sm hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 border border-navy/5"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}
                >
                  <service.icon className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h3 className="font-display font-semibold text-navy text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-navy/55 text-sm leading-relaxed font-body">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative bg-white py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image side */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy/10">
                <img
                  src={TEAM_IMG}
                  alt="Toledo Pharmacy Team"
                  className="w-full h-[400px] md:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-5 -right-2 md:right-6 bg-white rounded-xl p-4 shadow-xl shadow-navy/10 border border-navy/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-marigold to-marigold-dark flex items-center justify-center">
                    <Clock className="w-5 h-5 text-navy" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-navy text-sm">Open 6 Days</p>
                    <p className="text-navy/50 text-xs font-body">Mon-Fri 9-7 &middot; Sat 9-4</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.span
                custom={0}
                variants={fadeUp}
                className="inline-block text-marigold-dark font-display font-semibold text-sm uppercase tracking-wider mb-3"
              >
                About Us
              </motion.span>
              <motion.h2
                custom={1}
                variants={fadeUp}
                className="font-display font-bold text-navy text-3xl md:text-4xl leading-tight mb-6"
              >
                Your Neighborhood Pharmacy for{" "}
                <span className="text-marigold-dark">Over 40 Years</span>
              </motion.h2>
              <motion.p
                custom={2}
                variants={fadeUp}
                className="text-navy/60 text-base leading-relaxed mb-4 font-body"
              >
                Welcome to Toledo Pharmacy, your trusted independent pharmacy
                located in the heart of Union City, NJ. We take pride in
                providing personalized attention and care to our customers.
              </motion.p>
              <motion.p
                custom={3}
                variants={fadeUp}
                className="text-navy/60 text-base leading-relaxed mb-4 font-body"
              >
                We understand that each individual has unique healthcare needs,
                and we take the time to listen to our customers and offer
                tailored advice and guidance. Our experienced pharmacists and
                staff members are committed to providing top-notch
                pharmaceutical care.
              </motion.p>
              <motion.p
                custom={4}
                variants={fadeUp}
                className="text-navy/60 text-base leading-relaxed mb-8 font-body"
              >
                We also offer free health screenings and educational seminars to
                help our community stay healthy and informed.{" "}
                <span className="text-navy/40 italic">Se habla Español.</span>
              </motion.p>
              <motion.div custom={5} variants={fadeUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-display font-semibold text-sm rounded-lg hover:bg-navy-light transition-colors duration-200"
                >
                  Read Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vaccination CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={VACCINE_IMG}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-navy/70" />
        </div>
        <div className="container relative z-10 py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal/20 text-teal-light text-sm font-medium font-body mb-4"
            >
              <Syringe className="w-3.5 h-3.5" />
              Walk-Ins Welcome
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-4"
            >
              All Major Vaccines Available
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-white/70 text-base leading-relaxed mb-6 font-body"
            >
              COVID-19, Flu, Shingles, Pneumonia, Tdap, HPV, and more —
              all available at Toledo Pharmacy. No appointment needed, just
              walk in! Protect yourself and your loved ones today.
            </motion.p>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-white/50 text-sm mb-8 font-body italic"
            >
              Todas las vacunas principales disponibles. No se necesita cita
              previa. Se aceptan walk-ins.
            </motion.p>
            <motion.div custom={4} variants={fadeUp}>
              <a
                href="tel:2018670297"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold rounded-lg shadow-lg shadow-marigold/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                Call to Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Community / Delivery Section */}
      <section className="bg-light-gray py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Delivery card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src={DELIVERY_IMG}
                alt="Free Prescription Delivery"
                className="w-full h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  Free Prescription Delivery
                </h3>
                <p className="text-white/70 text-sm font-body mb-4">
                  We deliver your prescriptions right to your door — completely
                  free of charge. Convenience you can count on.
                </p>
                <a
                  href="tel:2018670297"
                  className="inline-flex items-center gap-2 text-marigold font-display font-semibold text-sm hover:text-marigold-light transition-colors"
                >
                  Order Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Community card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src={COMMUNITY_IMG}
                alt="Community Health Events"
                className="w-full h-[320px] md:h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  Community Health Events
                </h3>
                <p className="text-white/70 text-sm font-body mb-4">
                  Free health screenings and educational seminars to help our
                  community stay healthy and informed.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-marigold font-display font-semibold text-sm hover:text-marigold-light transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-14"
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="inline-block text-marigold-dark font-display font-semibold text-sm uppercase tracking-wider mb-3"
            >
              What Our Customers Say
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-display font-bold text-navy text-3xl md:text-4xl lg:text-5xl mb-4"
            >
              Trusted by Our Community
            </motion.h2>
            <motion.div
              custom={2}
              variants={fadeUp}
              className="flex items-center justify-center gap-2 mb-2"
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-marigold fill-marigold" />
                ))}
              </div>
              <span className="font-display font-bold text-navy text-2xl">4.9</span>
            </motion.div>
            <motion.p
              custom={3}
              variants={fadeUp}
              className="text-navy/50 text-base font-body"
            >
              Based on 57 Google Reviews
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          >
            {[
              {
                name: "Katherine R.",
                time: "3 months ago",
                text: "The most exceptional customer service I have ever endured! So respectful, caring and loving! Always on point and always so focused! Hardic and his team are the best! 10 stars from me!",
                initials: "KR",
                color: "from-marigold to-marigold-dark",
              },
              {
                name: "Duygu H.",
                time: "2 months ago",
                text: "Special thanks to Hardic! I was in a severe asthma flare-up and struggling to breathe. Despite being uninsured, Hardic went above and beyond to find the best possible pricing for my medication.",
                initials: "DH",
                color: "from-teal to-teal-dark",
              },
              {
                name: "Michael C.",
                time: "2 years ago",
                text: "Nice little pharmacy with some OTC selections, service was quick and the staff on site is friendly. A great alternative if you prefer supporting small local businesses in this area.",
                initials: "MC",
                color: "from-navy to-navy-light",
              },
            ].map((review, i) => (
              <motion.div
                key={review.name}
                custom={i}
                variants={fadeUp}
                className="bg-white rounded-xl p-7 shadow-sm border border-navy/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-marigold fill-marigold" />
                  ))}
                </div>
                <p className="text-navy/70 text-sm leading-relaxed font-body mb-5 line-clamp-4">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center`}
                  >
                    <span className="text-white font-display font-semibold text-xs">
                      {review.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-navy text-sm">
                      {review.name}
                    </p>
                    <p className="text-navy/40 text-xs font-body">{review.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <a
              href="https://search.google.com/local/writereview?placeid=ChIJG-Ps0CZYwokRrPUja-Lzx3A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-navy text-white font-display font-semibold rounded-lg hover:bg-navy-light transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Leave Us a Review on Google
            </a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="font-display font-bold text-white text-3xl md:text-4xl mb-4"
            >
              Ready to Experience{" "}
              <span className="text-marigold">Better Care?</span>
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-white/60 text-lg font-body mb-8"
            >
              Visit us today or give us a call. We're here to help with all your
              pharmacy needs.
            </motion.p>
            <motion.div
              custom={2}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
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
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Floating Call Button - Mobile */}
      <a
        href="tel:2018670297"
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 bg-gradient-to-br from-marigold to-marigold-dark text-navy rounded-full flex items-center justify-center shadow-lg shadow-marigold/30 animate-pulse hover:animate-none hover:scale-110 transition-transform"
        aria-label="Call Toledo Pharmacy"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
