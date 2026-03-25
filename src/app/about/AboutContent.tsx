"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

export default function AboutContent() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20 overflow-hidden">

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
        >
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">Sevensky</span> Vision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto"
        >
          We are the ultimate digital hub connecting brands with premium marketing services, flawless event execution, and breathtaking design. We turn your ambitious concepts into tangible, high-impact experiences.
        </motion.p>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-500/10 blur-[120px] rounded-[100%] z-0 pointer-events-none"></div>

      {/* Core Values Section */}
      <div className="bg-slate-900/50 border-y border-white/5 py-24 sm:py-32 relative z-10 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white mb-16 text-center"
            >
              Our Core Pillars
            </motion.h2>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Innovation First',
                  description: 'We leverage the latest technology, including 3D rendering and advanced analytics, to put your brand ahead of the curve.',
                  icon: '💡'
                },
                {
                  name: 'Flawless Execution',
                  description: 'From mall activations to corporate podiums, our team ensures every physical and digital touchpoint is pixel-perfect.',
                  icon: '🎯'
                },
                {
                  name: 'Data-Driven ROI',
                  description: 'Every campaign and booking is backed by deep analytics, market research, and performance tracking.',
                  icon: '📊'
                },
              ].map((value, index) => (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex flex-col bg-slate-950 p-8 rounded-3xl border border-white/5 hover:border-brand-500/30 transition-colors shadow-2xl"
                >
                  <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-white mb-4">
                    <span className="text-4xl p-3 bg-white/5 rounded-2xl border border-white/10">{value.icon}</span>
                  </dt>
                  <dd className="mt-2 flex flex-auto flex-col text-base leading-relaxed text-slate-400">
                    <h3 className="text-white font-bold text-xl mb-2">{value.name}</h3>
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA & Contact Links */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16 backdrop-blur-xl relative overflow-hidden isolate shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/10 to-transparent z-[-1]"></div>

          <h2 className="text-4xl font-bold mb-6">Partner with us.</h2>
          <p className="text-slate-300 mb-10 text-lg max-w-xl mx-auto">Discover what your brand can achieve when nothing is impossible.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <a
              href="mailto:contact@sevensky.com"
              target="_blank"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-white/5 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-white/10 transition-all border border-white/10"
            >
              <span>✉</span> <span className="ml-2">Email Us</span>
            </a>
            <a
              href="https://instagram.com/sevensky.ae"
              target="_blank"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-[1px] shadow-lg transition-transform hover:scale-105"
            >
              <span className="flex items-center w-full h-full bg-slate-900 rounded-full px-8 py-3 text-sm font-semibold text-white">
                <span>📸</span> <span className="ml-2">Follow on Instagram</span>
              </span>
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex justify-center items-center rounded-full bg-white/5 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-white/10 transition-all border border-white/10"
            >
              <span>📞</span> <span className="ml-2">Contact Details</span>
            </Link>
          </div>

          <Link
            href="/client/campaigns/new"
            className="inline-flex justify-center w-full sm:w-auto rounded-full bg-brand-600 px-12 py-4 text-base font-bold text-white shadow-lg hover:bg-brand-500 transition-all border border-brand-400/20 shadow-brand-500/40 hover:shadow-brand-500/60"
          >
            Start Your Campaign →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
