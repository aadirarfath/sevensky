import { createClient } from "@/lib/supabase-server";

export default async function AdminDashboardOverview() {
  const supabase = await createClient();

  // In a real app we would aggregate data from all clients:
  // public.campaigns, public.bookings, public.analytics
  
  const stats = [
    { name: 'Total Active Clients', stat: '14' },
    { name: 'Pending Campaign Requests', stat: '3' },
    { name: 'Upcoming Events (30 Days)', stat: '8' },
    { name: 'Total Revenue (MTD)', stat: '$45,200' },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
         <div>
            <h1 className="text-2xl font-bold text-white mb-1">Admin Overview</h1>
            <p className="text-sm text-slate-400">Master control panel for Sevensky operations.</p>
         </div>
         <div className="mt-4 sm:mt-0 flex gap-4">
            <button className="inline-flex justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all border border-white/10">
              Export Report
            </button>
            <a href="/admin/campaigns" className="inline-flex justify-center rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-500 transition-all border border-accent-400/20">
              Review Requests
            </a>
         </div>
      </div>

      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-2xl bg-slate-900 border border-accent-500/20 px-4 py-5 shadow sm:p-6 relative isolate"
          >
             {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-accent-500/5 blur-2xl rounded-full -z-10"></div>
            
            <dt className="truncate text-sm font-medium text-slate-400">{item.name}</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight text-white">{item.stat}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Actionable Requests Placeholder */}
         <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4 flex items-center justify-between">
               Actionable Campaign Requests
               <span className="bg-accent-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3 New</span>
            </h2>
            <div className="space-y-4">
               {[
                  { client: 'Acme Corp', campaign: 'Q4 Marketing Push', status: 'requested', time: '2 hours ago' },
                  { client: 'Global Retail', campaign: 'Mall Activation Booth', status: 'draft', time: '1 day ago' },
               ].map((req, i) => (
                 <div key={i} className="bg-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center border border-white/5 gap-4">
                    <div>
                       <p className="font-medium text-white text-sm">{req.campaign}</p>
                       <p className="text-xs text-slate-400 mt-1">{req.client} • {req.time}</p>
                    </div>
                    <div className="flex gap-2">
                       <button className="px-3 py-1.5 bg-brand-600 text-white text-xs font-semibold rounded-md hover:bg-brand-500 transition-colors">Review</button>
                    </div>
                 </div>
               ))}
               <a href="/admin/campaigns" className="block text-center text-sm text-accent-400 hover:text-accent-300 font-medium py-2">
                 View all campaigns →
               </a>
            </div>
         </div>

         {/* Upcoming Operations Placeholder */}
         <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Operations & Bookings</h2>
            <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 flex justify-between items-center border border-white/5">
                    <div>
                       <p className="font-medium text-white text-sm">Tech Expo 2024 Booth</p>
                       <p className="text-xs text-slate-400 mt-1">Client: Future Inc • Date: Oct 15</p>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                      Confirmed
                    </span>
                 </div>
                 <a href="/admin/bookings" className="block text-center text-sm text-accent-400 hover:text-accent-300 font-medium py-2">
                 Manage Operations →
               </a>
            </div>
         </div>
      </div>
    </div>
  );
}
