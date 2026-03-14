"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { useState } from 'react';
import { createBookingAction } from '@/app/actions/bookingActions';

export default function ServiceContent({ serviceName }: { serviceName: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const formData = new FormData(e.currentTarget);
    formData.append("serviceName", serviceName); // Inject the hidden service name

    const result = await createBookingAction(formData);

    if (result.error) {
       setErrorMsg(result.error);
    } else {
       setSuccess(true);
    }
    
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20 overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-brand-600/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 pt-16 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 mb-6 text-sm font-semibold tracking-wider text-brand-400 bg-brand-500/10 rounded-full border border-brand-500/20"
        >
          Service Overview
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-8 capitalize"
        >
          {serviceName}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto"
        >
          We bring unparalleled expertise and a dedicated approach to our {serviceName} services, tailored entirely to the scale of your ambition.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Mock Image/Visual */}
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7 }}
               className="aspect-square lg:aspect-[4/3] rounded-3xl bg-slate-900 border border-white/10 relative overflow-hidden flex items-center justify-center shadow-2xl isolate group"
            >
               <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Service Showcase" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 z-[-1]" />
               <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/80 to-slate-900/40 z-[-1]"></div>
               <span className="text-white font-bold text-3xl relative z-10 flex flex-col items-center drop-shadow-lg scale-95 group-hover:scale-100 transition-transform">
                  <span className="text-6xl mb-6">✨</span>
                  Premium Execution
               </span>
            </motion.div>
            
            {/* Details */}
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7, delay: 0.2 }}
            >
               <h2 className="text-3xl font-bold mb-6">Why choose Sevensky for {serviceName}?</h2>
               <div className="space-y-6 text-slate-300">
                  <p className="text-lg leading-relaxed">
                    Our approach integrates seamless execution with data-driven strategy. Whether you are launching a new product, or expanding your brand footprint, our platform connects you with the exact resources you need.
                  </p>
                  <ul className="space-y-4 mt-8">
                     {['Customized strategic planning', 'End-to-end execution and management', 'Real-time performance analytics', 'Dedicated account managers'].map((benefit, i) => (
                       <motion.li 
                         key={i} 
                         initial={{ opacity: 0, x: 20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.4 + (i * 0.1) }}
                         className="flex items-center text-slate-200 bg-white/5 p-4 rounded-xl border border-white/5"
                       >
                         <span className="flex-shrink-0 h-8 w-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 mr-4 text-sm shadow-inner shrink-0">✓</span>
                         {benefit}
                       </motion.li>
                     ))}
                  </ul>
                  
                  <div className="pt-10 mt-10 border-t border-white/10">
                     <div className="bg-slate-900/80 border border-brand-500/20 rounded-3xl p-8 shadow-2xl shadow-brand-900/20 backdrop-blur-md relative overflow-hidden isolate">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent z-[-1]"></div>
                        <h3 className="text-2xl font-bold text-white mb-2">Request this Service</h3>
                        <p className="text-sm text-slate-400 mb-8">Fill out this quick form or connect to your client portal for advanced tracking.</p>
                        
                        {success ? (
                           <div className="text-center py-8">
                             <div className="mx-auto w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-3xl mb-4 shadow-[0_0_15px_theme('colors.green.500/20')]">✓</div>
                             <h4 className="text-xl font-bold text-white mb-2">Request Sent!</h4>
                             <p className="text-sm text-slate-300">Our operations team will review your booking details and reach out shortly.</p>
                           </div>
                        ) : (
                          <form onSubmit={handleBooking} className="space-y-5">
                             {errorMsg && (
                                <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm p-3 rounded-xl text-center">
                                  {errorMsg}
                                </div>
                             )}
                             <input 
                               type="text" 
                               name="nameCompany"
                               required
                               placeholder="Your Name / Company" 
                               className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all shadow-inner" 
                             />
                             <input 
                               type="email" 
                               name="email"
                               required
                               placeholder="Email Address" 
                               className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all shadow-inner" 
                             />
                             <textarea 
                               name="details"
                               required
                               placeholder={`Tell us about your ${serviceName} needs...`} 
                               rows={4}
                               className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all shadow-inner resize-none" 
                             ></textarea>
                             <button 
                               type="submit" 
                               disabled={loading}
                               className="w-full rounded-xl bg-brand-600 px-4 py-4 text-sm font-bold text-white hover:bg-brand-500 transition-all shadow-lg shadow-brand-500/20 disabled:opacity-50"
                             >
                                {loading ? "Sending..." : "Send Booking Request"}
                             </button>
                          </form>
                        )}

                        {!success && (
                          <div className="mt-6 text-center">
                             <span className="text-xs text-slate-500">or</span>
                             <Link href="/client/dashboard" className="block mt-3 text-sm text-brand-400 hover:text-brand-300 font-medium">
                                Go to Client Portal →
                             </Link>
                          </div>
                        )}
                     </div>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
    </div>
  );
}
