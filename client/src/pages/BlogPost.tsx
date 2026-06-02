/*
 * Design: "Community Mosaic" — Vibrant Neighborhood Energy
 * Blog post detail page for Toledo Pharmacy.
 */

import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { Calendar, ArrowLeft, ArrowRight, Tag, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { blogPosts, getPostById } from "@/data/blogPosts";

export default function BlogPost() {
  const params = useParams();
  const post = params.id ? getPostById(params.id) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <section className="bg-cream flex-1 py-24">
          <div className="container text-center max-w-xl mx-auto">
            <span className="inline-block text-marigold-dark font-display font-semibold text-sm uppercase tracking-wider mb-4">
              Post Not Found
            </span>
            <h1 className="font-display font-bold text-navy text-3xl md:text-4xl mb-4">
              We couldn't find that article
            </h1>
            <p className="text-navy/60 font-body mb-8">
              The blog post you're looking for may have been moved or removed.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold rounded-lg shadow-lg shadow-marigold/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 3);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Toledo Pharmacy",
    },
    publisher: {
      "@type": "Organization",
      name: "Toledo Pharmacy",
      url: "https://www.toledopharmacy.com",
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        ogImage={post.image}
        ogType="article"
        jsonLd={blogJsonLd}
      />
      <Navbar />

      {/* Hero Banner */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-white/60 hover:text-marigold font-display font-semibold text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-marigold/90 text-navy text-xs font-display font-semibold mb-4">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <h1 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-5">
              {post.title}
            </h1>
            <div className="flex items-center gap-5 text-white/50 text-sm font-body">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article */}
      <section className="bg-cream py-16 md:py-20">
        <div className="container max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden mb-10 shadow-lg shadow-navy/5"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-[280px] md:h-[400px] object-cover"
            />
          </motion.div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {post.content.map((block, i) => {
              if (block.type === "h") {
                return (
                  <h2
                    key={i}
                    className="font-display font-bold text-navy text-xl md:text-2xl pt-4"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "disclaimer") {
                return (
                  <p
                    key={i}
                    className="text-navy/50 text-sm italic leading-relaxed font-body mt-8 pt-6 border-t border-navy/10"
                  >
                    {block.text}
                  </p>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2.5 pl-1">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-3 text-navy/70 text-base leading-relaxed font-body"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-marigold-dark shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p
                  key={i}
                  className="text-navy/70 text-base md:text-lg leading-relaxed font-body"
                >
                  {block.text}
                </p>
              );
            })}
          </motion.article>

          {/* Inline CTA */}
          <div className="mt-12 p-6 md:p-8 rounded-2xl bg-white border border-navy/5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h3 className="font-display font-bold text-navy text-lg mb-1">
                Questions about your health?
              </h3>
              <p className="text-navy/55 text-sm font-body">
                Our pharmacists are here to help. Give us a call anytime.
              </p>
            </div>
            <a
              href="tel:2018670297"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-marigold to-marigold-dark text-navy font-display font-semibold rounded-lg shadow-lg shadow-marigold/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              (201) 867-0297
            </a>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-white py-16 md:py-20 border-t border-navy/5">
        <div className="container">
          <h2 className="font-display font-bold text-navy text-2xl md:text-3xl mb-8 text-center">
            More from the Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.id}
                href={`/blog/${rp.id}`}
                className="group block bg-cream rounded-xl overflow-hidden shadow-sm border border-navy/5 hover:shadow-md hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-[160px] overflow-hidden">
                  <img
                    src={rp.image}
                    alt={rp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-navy/40 text-xs font-body mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    {rp.date}
                  </div>
                  <h3 className="font-display font-semibold text-navy text-base mb-2 group-hover:text-marigold-dark transition-colors">
                    {rp.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-marigold-dark font-display font-semibold text-sm group-hover:gap-2.5 transition-all">
                    Read More <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
