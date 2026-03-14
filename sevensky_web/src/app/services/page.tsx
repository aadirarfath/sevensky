"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const services = [
  {
    id: "advertising",
    title: "Advertising & Marketing",
    description: "Digital marketing, social media campaigns, and powerful promotional strategies.",
    features: ["Campaign Creation", "Media Planning", "Sales Promotions"]
  },
  {
    id: "events",
    title: "Event & Exhibition Services",
    description: "Flawless event setup, mall activations, and stunning exhibition booths.",
    features: ["Event Setup", "Booth Design", "Mall Activations"]
  },
  {
    id: "sports",
    title: "Sports Event Marketing",
    description: "Elevate sports events with sponsorships and audience analytics.",
    features: ["Sponsorship Campaigns", "Audience Analytics", "Event Promotions"]
  },
  {
    id: "agency",
    title: "Advertising Agency Services",
    description: "Full-service agency handling creative assets, budgets, and campaign reporting.",
    features: ["Creative Assets", "Budget Tracking", "Analytics"]
  },
  {
    id: "research",
    title: "Market Research",
    description: "Data-driven insights to understand consumer opinion and market trends.",
    features: ["Survey Builder", "Data Insights", "Polling Tools"]
  },
  {
    id: "web-dev",
    title: "Web Dev & UI/UX",
    description: "Custom web applications, e-commerce platforms, and beautiful interface designs.",
    features: ["Custom Web Apps", "E-commerce", "Modern UI/UX"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-300 max-w-2xl mx-auto"
        >
          Discover a comprehensive suite of solutions tailored to elevate your brand presence from digital screens to physical arenas.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-brand-500/50 transition-all group flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-brand-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-6 flex-grow">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.features.map(feature => (
                  <li key={feature} className="text-sm text-slate-300 flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`/services/${service.id}`}
                className="mt-auto inline-flex items-center text-sm font-semibold text-brand-400 hover:text-brand-300 transition-colors"
              >
                Learn more <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
         <div className="bg-gradient-to-tr from-brand-900/50 to-brand-800/30 border border-brand-500/20 rounded-3xl p-10 md:p-16">
            <h2 className="text-3xl font-bold mb-4">Ready to ignite your next campaign?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Build an immersive experience with our dedicated event and marketing experts.</p>
            <Link
              href="/client/campaigns/new"
              className="inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100 transition-all"
            >
              Start a Project
            </Link>
         </div>
      </div>

    </div>
  );
}
