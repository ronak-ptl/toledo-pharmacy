/*
 * Design: "Community Mosaic" — Vibrant Neighborhood Energy
 * Blog: Health tips and pharmacy news from Toledo Pharmacy
 */

import { motion } from "framer-motion";
import { Link } from "wouter";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts } from "@/data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
};

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Health Blog | Pharmacy Tips & Wellness Advice"
        description="Stay informed with health tips, pharmacy news, and wellness advice from Toledo Pharmacy in Union City, NJ. Expert guidance from our pharmacists."
        path="/blog"
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
            Health & Wellness
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg font-body max-w-2xl mx-auto"
          >
            Stay informed with the latest health tips, pharmacy news, and
            wellness advice from our team.
          </motion.p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link
              href={`/blog/${blogPosts[0].id}`}
              className="group block relative rounded-2xl overflow-hidden bg-white shadow-lg shadow-navy/5 border border-navy/5 hover:shadow-xl hover:shadow-navy/10 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-[280px] lg:h-auto overflow-hidden">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold/90 text-navy text-xs font-display font-semibold">
                      <Tag className="w-3 h-3" />
                      {blogPosts[0].category}
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-navy/40 text-sm font-body mb-3">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                  <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-4 group-hover:text-marigold-dark transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-navy/60 text-base leading-relaxed font-body mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-marigold-dark font-display font-semibold text-sm group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Other Posts Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.slice(1).map((post, i) => (
              <motion.article
                key={post.id}
                custom={i}
                variants={fadeUp}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-md hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 group"
              >
                <Link href={`/blog/${post.id}`} className="block">
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-navy text-xs font-display font-semibold">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-navy/40 text-xs font-body mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </div>
                  <h3 className="font-display font-semibold text-navy text-lg mb-2 group-hover:text-marigold-dark transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-navy/55 text-sm leading-relaxed font-body mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-marigold-dark font-display font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <motion.h2
              custom={0}
              variants={fadeUp}
              className="font-display font-bold text-white text-3xl md:text-4xl mb-4"
            >
              Stay <span className="text-marigold">Informed</span>
            </motion.h2>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-white/60 text-base font-body mb-6"
            >
              Visit us or call for the latest health information and pharmacy
              updates. Our team is always here to help.
            </motion.p>
            <motion.div custom={2} variants={fadeUp}>
              <a
                href="tel:2018670297"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold rounded-lg shadow-lg shadow-marigold/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Call Us for Updates
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
