import { Link } from "wouter";
import { motion } from "framer-motion";
import { Shield, FileText, Heart, Cookie, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const policies = [
  {
    icon: Lock,
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information when you visit our website or use our pharmacy services.",
    href: "/privacy-policy",
    color: "from-navy/10 to-navy/5",
    iconColor: "text-navy",
  },
  {
    icon: FileText,
    title: "Terms of Service",
    description: "The rules and conditions that govern your use of our websites, contact form, and the services we describe online.",
    href: "/terms-of-service",
    color: "from-marigold/10 to-marigold/5",
    iconColor: "text-marigold-dark",
  },
  {
    icon: Shield,
    title: "HIPAA Notice of Privacy Practices",
    description: "Your rights regarding your protected health information and how Toledo Pharmacy uses and discloses it as required by federal law.",
    href: "/hipaa-notice",
    color: "from-teal/10 to-teal/5",
    iconColor: "text-teal",
  },
  {
    icon: Heart,
    title: "Medical & Health Disclaimer",
    description: "Important information about the limitations of health content on our site, prescription delivery terms, and emergency guidance.",
    href: "/medical-disclaimer",
    color: "from-red-500/10 to-red-500/5",
    iconColor: "text-red-500",
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    description: "What cookies we use, why we use them, and how you can manage your preferences as a visitor to our websites.",
    href: "/cookie-policy",
    color: "from-marigold/10 to-marigold/5",
    iconColor: "text-marigold-dark",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function Legal() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-cream">

        {/* Hero */}
        <section className="bg-navy py-16 md:py-20">
          <div className="container text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-marigold font-body text-sm font-semibold uppercase tracking-widest mb-3"
            >
              Legal
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-white text-4xl md:text-5xl mb-4"
            >
              Legal & Privacy Center
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/60 text-lg font-body max-w-2xl mx-auto"
            >
              All our legal policies in one place. We believe in being transparent about how we operate and how we handle your information.
            </motion.p>
          </div>
        </section>

        {/* Policy Cards */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-5"
            >
              {policies.map((policy, i) => (
                <motion.div key={policy.href} custom={i} variants={fadeUp}>
                  <Link
                    href={policy.href}
                    className="flex gap-5 p-6 bg-white rounded-2xl border border-navy/5 shadow-sm hover:shadow-md hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 group h-full"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${policy.color} flex items-center justify-center shrink-0 mt-0.5`}>
                      <policy.icon className={`w-6 h-6 ${policy.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-marigold-dark transition-colors">
                        {policy.title}
                      </h2>
                      <p className="text-navy/55 text-sm leading-relaxed font-body">
                        {policy.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 bg-white rounded-2xl p-8 border border-navy/5 text-center"
            >
              <p className="text-navy/60 font-body text-sm mb-2">
                Have questions about any of our policies?
              </p>
              <p className="text-navy font-display font-semibold mb-4">
                We're happy to help — reach out anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:2018670297"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-navy text-white font-display font-semibold text-sm rounded-lg hover:bg-navy-light transition-colors"
                >
                  (201) 867-0297
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-marigold/10 text-navy font-display font-semibold text-sm rounded-lg hover:bg-marigold/20 transition-colors border border-marigold/20"
                >
                  Send a Message
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
}
