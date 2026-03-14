import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Portfolio | Sevensky',
  description: 'Explore our latest activations, booth designs, and campaigns.',
};

const fakeProjects = [
  { id: 1, title: 'Tech Expo 2024 Booth', category: 'Exhibition Booths', img: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 2, title: 'Summer Mall Activation', category: 'Events', img: 'https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 3, title: 'Product Launch Stage', category: 'Events', img: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 4, title: 'Global Retail Signage', category: 'Branding', img: 'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 5, title: 'Luxury Car Podium', category: 'Luxury Podiums', img: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: 6, title: 'City Marathon Marketing', category: 'Sports Events', img: 'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-20">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pt-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-500">Portfolio</span>
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          A showcase of our world-class event execution, premium booth designs, and impactful marketing campaigns.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fakeProjects.map((project) => (
              <div key={project.id} className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-white/10 isolate">
                 {/* Image Placeholder */}
                 <div className="aspect-[4/3] w-full bg-slate-800 relative">
                    <img 
                      src={project.img} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80"></div>
                 </div>
                 
                 {/* Content overlay */}
                 <div className="absolute bottom-0 left-0 p-6 w-full">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider bg-brand-500/20 text-brand-300 rounded-full border border-brand-500/30">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                 </div>
                 
                 {/* Reveal link on hover */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-sm">
                    <button className="px-6 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-full hover:bg-brand-500 transition-colors shadow-lg">
                      View Case Study
                    </button>
                 </div>
              </div>
            ))}
         </div>
         
         <div className="mt-16 text-center">
            <Link href="/client/dashboard" className="text-slate-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-1">
              Are you a client? View your private gallery.
            </Link>
         </div>
      </div>
    </div>
  );
}
