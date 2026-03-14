"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BoothPreviewGenerator() {
  const [selectedStyle, setSelectedStyle] = useState<string | null>("modern-minimal");
  const [selectedSize, setSelectedSize] = useState<string>("3x3");
  
  const styles = [
    { id: "modern-minimal", name: "Modern Minimal", color: "bg-slate-100", border: "border-slate-300", accent: "from-slate-200 to-white" },
    { id: "luxury-dark", name: "Luxury Dark", color: "bg-slate-900", border: "border-brand-500", accent: "from-slate-800 to-slate-950" },
    { id: "eco-wooden", name: "Eco Wooden", color: "bg-amber-900", border: "border-amber-700", accent: "from-amber-800 to-amber-900" },
    { id: "tech-neon", name: "Tech Neon", color: "bg-indigo-950", border: "border-indigo-500", accent: "from-indigo-900 to-blue-950" },
  ];

  const sizes = ["3x3", "3x6", "6x6", "Custom"];

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8">
         <h1 className="text-2xl font-bold text-white mb-2">3D Booth Preview Generator</h1>
         <p className="text-slate-400 max-w-2xl">Use our interactive tool to visualize your next exhibition space before booking. Select your preferred style and dimensions.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Controls Sidebar */}
        <div className="space-y-8 bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl lg:col-span-1 h-fit">
           
           <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">1. Architectural Style</h3>
              <div className="grid grid-cols-2 gap-3">
                 {styles.map(style => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`relative flex flex-col items-center p-3 rounded-xl border-2 transition-all ${selectedStyle === style.id ? 'border-brand-500 bg-brand-500/10' : 'border-white/5 bg-slate-950/50 hover:border-white/20'}`}
                    >
                       <div className={`w-full h-12 rounded-lg mb-3 border ${style.color} ${style.border}`}></div>
                       <span className="text-xs font-medium text-slate-300 text-center">{style.name}</span>
                       
                       {selectedStyle === style.id && (
                          <div className="absolute -top-2 -right-2 w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center text-white text-xs">✓</div>
                       )}
                    </button>
                 ))}
              </div>
           </div>

           <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">2. Floor Dimensions (Meters)</h3>
              <div className="flex flex-wrap gap-2">
                 {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedSize === size ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}`}
                    >
                       {size}
                    </button>
                 ))}
              </div>
           </div>

           <div className="pt-6 border-t border-white/10">
              <button className="w-full rounded-full bg-white text-slate-950 px-6 py-3.5 text-sm font-bold hover:bg-slate-200 transition-colors shadow-xl">
                 Request Official 3D Render
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">Our design team will contact you with a high-fidelity rendering based on these specs.</p>
           </div>
        </div>

        {/* 3D Preview Stage */}
        <div className="lg:col-span-2 bg-slate-900 border border-white/10 rounded-3xl p-4 sm:p-8 flex flex-col min-h-[500px]">
           <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                 <span className="text-sm font-medium text-slate-300">Live WebGL Preview</span>
              </div>
              <div className="flex gap-2">
                 {/* Mock UI controls for the 3D canvas */}
                 <button className="w-8 h-8 rounded bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">↺</button>
                 <button className="w-8 h-8 rounded bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">⛶</button>
              </div>
           </div>

           {/* The actual "3D" canvas area */}
           <div className="flex-1 rounded-2xl bg-black border border-white/5 relative overflow-hidden flex items-center justify-center perspective-[1000px]">
              
              <AnimatePresence mode="wait">
                 <motion.div 
                   key={selectedStyle + selectedSize}
                   initial={{ opacity: 0, scale: 0.9, rotateY: -30 }}
                   animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                   exit={{ opacity: 0, scale: 1.1, rotateY: 30 }}
                   transition={{ duration: 0.5, type: "spring" }}
                   className={`relative w-2/3 aspect-video rounded-xl shadow-2xl bg-gradient-to-tr ${styles.find(s => s.id === selectedStyle)?.accent} border ${styles.find(s => s.id === selectedStyle)?.border} flex flex-col items-center justify-end pb-8`}
                   style={{ transformStyle: 'preserve-3d' }}
                 >
                    {/* Simulated 3D Elements */}
                    <div className="absolute top-1/4 left-1/4 w-1/4 h-1/2 bg-black/20 rounded shadow-inner transform translate-z-12"></div>
                    <div className="absolute top-1/4 right-1/4 w-1/4 h-1/2 bg-black/20 rounded shadow-inner transform translate-z-12"></div>
                    
                    {/* Simulated Podium */}
                    <div className="w-1/3 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-t-lg shadow-2xl transform translate-z-24 flex items-center justify-center">
                       <span className="text-white/50 text-xs font-bold font-mono tracking-widest">{selectedSize} CONF</span>
                    </div>
                 </motion.div>
              </AnimatePresence>

              {/* Grid Floor */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[url('https://transparenttextures.com/patterns/cubes.png')] opacity-20" style={{ transform: 'perspective(500px) rotateX(60deg) scale(2)', transformOrigin: 'bottom' }}></div>
           </div>
        </div>

      </div>
    </div>
  );
}
