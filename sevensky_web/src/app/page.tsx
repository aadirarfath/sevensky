"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-brand-500 selection:text-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-accent-500 tracking-tight">
                Sevensky
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Services</Link>
              <Link href="/portfolio" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Portfolio</Link>
              <Link href="/about" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</Link>
              <div className="h-6 origin-center rotate-12 border-l border-white/20"></div>
              <Link href="/client/dashboard" className="text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/5 ring-1 ring-inset ring-white/10">
                Client Portal
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          
          {/* Stunning Background Image Layer */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=2000" 
               alt="Exhibition Background" 
               className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/60 to-slate-950"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-brand-600 to-accent-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex justify-center"
              >
                <span className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-brand-300 ring-1 ring-white/20 hover:ring-white/40 transition-all bg-white/5 backdrop-blur-sm">
                  The All-in-One Digital Hub.{' '}
                  <a href="#" className="font-semibold text-white ml-2">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read our vision <span aria-hidden="true">&rarr;</span>
                  </a>
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl font-bold tracking-tight text-white sm:text-7xl mb-8"
              >
                Transforming Brands Through{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-accent-500 to-brand-300">
                  Experiences
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 text-lg leading-8 text-slate-300 max-w-2xl mx-auto"
              >
                Connect instantly with top-tier marketing services, breathtaking exhibition booths, and flawless event execution. Book everything you need in one digital space.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex items-center justify-center gap-x-6"
              >
                <Link
                  href="/client/campaigns/new"
                  className="group relative rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Book Your Campaign
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
                </Link>
                <Link href="/services" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2">
                  Explore Services <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Features Row */}
        <section className="py-12 border-y border-white/10 bg-slate-900/50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { name: 'Digital Marketing', link: '/services/advertising-and-marketing', img: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Exhibition Booths', link: '/services/event-and-exhibition-services', img: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'UI/UX & Web Dev', link: '/services/web-development-and-ui-ux-design', img: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400' },
                  { name: 'Event Promoters', link: '/services/event-and-exhibition-services', img: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=400' }
                ].map((service, index) => (
                  <Link 
                    href={service.link}
                    key={service.name} 
                  >
                     <motion.div 
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.4, delay: index * 0.1 }}
                       className="relative flex flex-col items-center justify-end p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/20 transition-all cursor-pointer group h-64 overflow-hidden isolate"
                     >
                       <img src={service.img} alt={service.name} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-700 z-[-1]" />
                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-[-1]"></div>
                       
                       <div className="h-12 w-12 rounded-full bg-brand-500/80 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg border border-brand-400">
                          <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_theme('colors.white')]"></span>
                       </div>
                       <span className="text-white font-semibold text-lg drop-shadow-md text-center">{service.name}</span>
                     </motion.div>
                  </Link>
                ))}
              </div>
           </div>
        </section>

      </main>
    </div>
  );
}
