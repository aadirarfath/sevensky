import { createClient } from "@/lib/supabase-server";

export default async function ClientDashboardOverview() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // In a real app we would aggregate data from:
  // public.campaigns, public.bookings, public.analytics
  // For now, we mock the counts to demonstrate layout.

  const stats = [
    { name: 'Active Campaigns', stat: '2' },
    { name: 'Upcoming Event Bookings', stat: '1' },
    { name: 'Total Engagement Reach', stat: '45.2k' },
    { name: 'Messages', stat: '3' },
  ];

  return (
    <div>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
         <div>
            <h1 className="text-2xl font-bold text-white mb-1">Dashboard Overview</h1>
            <p className="text-sm text-slate-400">Track your marketing performance and event statuses.</p>
         </div>
         <div className="mt-4 sm:mt-0">
            <a href="/client/campaigns/new" className="inline-flex justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition-all border border-brand-400/20">
              + New Request
            </a>
         </div>
      </div>

      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-2xl bg-white/5 border border-white/10 px-4 py-5 shadow sm:p-6 backdrop-blur-sm"
          >
            <dt className="truncate text-sm font-medium text-slate-400">{item.name}</dt>
            <dd className="mt-2 text-3xl font-semibold tracking-tight text-white">{item.stat}</dd>
          </div>
        ))}
      </dl>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* Recent Campaigns Placeholder */}
         <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Recent Campaigns</h2>
            <div className="space-y-4">
               {[1, 2].map(i => (
                 <div key={i} className="bg-white/5 rounded-xl p-4 flex justify-between items-center border border-white/5">
                    <div>
                       <p className="font-medium text-white text-sm">Summer Product Launch</p>
                       <p className="text-xs text-slate-400 mt-1">Status: Active • Started May 1</p>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-400/20">
                      Active
                    </span>
                 </div>
               ))}
               <a href="/client/campaigns" className="block text-center text-sm text-brand-400 hover:text-brand-300 font-medium py-2">
                 View all campaigns →
               </a>
            </div>
         </div>

         {/* Recent Bookings Placeholder */}
         <div className="bg-slate-900 border border-white/10 rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Upcoming Event Bookings</h2>
            <div className="space-y-4">
                <div className="bg-white/5 rounded-xl p-4 flex justify-between items-center border border-white/5">
                    <div>
                       <p className="font-medium text-white text-sm">Dubai Mall Activation Booth</p>
                       <p className="text-xs text-slate-400 mt-1">Status: Confirmed • Date: Oct 15</p>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                      Confirmed
                    </span>
                 </div>
                 <a href="/client/bookings" className="block text-center text-sm text-brand-400 hover:text-brand-300 font-medium py-2">
                 Manage Bookings →
               </a>
            </div>
         </div>
      </div>
    </div>
  );
}
