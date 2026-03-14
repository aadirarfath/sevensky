import { createClient } from "@/lib/supabase-server";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";

export default async function ClientCampaignsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // In a real app we would fetch the list of campaigns
  const { data: campaigns } = await supabase
    .from('campaigns')
    .select('*')
    .eq('client_id', user?.id)
    .order('created_at', { ascending: false });

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
         <div>
            <h1 className="text-2xl font-bold text-white mb-2">My Campaigns</h1>
            <p className="text-sm text-slate-400">View and manage all your marketing and event campaigns.</p>
         </div>
         <div className="mt-4 sm:mt-0 flex gap-4 shrink-0">
            <Link 
              href="/client/campaigns/new"
              className="inline-flex items-center justify-center rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 transition-all border border-brand-400/20 gap-2"
            >
              <PlusIcon className="w-4 h-4" />
              New Campaign
            </Link>
         </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-sm font-semibold text-white">
                     <th className="p-4 pl-6 whitespace-nowrap">Campaign Name</th>
                     <th className="p-4 whitespace-nowrap">Status</th>
                     <th className="p-4 whitespace-nowrap hidden sm:table-cell">Budget</th>
                     <th className="p-4 whitespace-nowrap hidden md:table-cell">Date Added</th>
                     <th className="p-4 pr-6 text-right whitespace-nowrap">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {campaigns && campaigns.length > 0 ? (
                    campaigns.map((campaign) => (
                      <tr key={campaign.id} className="hover:bg-white/5 transition-colors group">
                         <td className="p-4 pl-6">
                            <p className="font-medium text-white">{campaign.name}</p>
                            <p className="text-xs text-slate-400 mt-1 truncate max-w-xs">{campaign.description}</p>
                         </td>
                         <td className="p-4">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                               campaign.status === 'active' ? 'bg-green-400/10 text-green-400 ring-green-400/20' :
                               campaign.status === 'requested' ? 'bg-yellow-400/10 text-yellow-500 ring-yellow-400/20' :
                               campaign.status === 'completed' ? 'bg-blue-400/10 text-blue-400 ring-blue-400/20' :
                               'bg-slate-400/10 text-slate-400 ring-slate-400/20'
                            }`}>
                              {campaign.status.toUpperCase()}
                            </span>
                         </td>
                         <td className="p-4 text-sm text-slate-300 hidden sm:table-cell">
                            {campaign.budget ? `$${campaign.budget.toLocaleString()}` : 'TBD'}
                         </td>
                         <td className="p-4 text-sm text-slate-400 hidden md:table-cell">
                            {new Date(campaign.created_at).toLocaleDateString()}
                         </td>
                         <td className="p-4 pr-6 text-right">
                            <button className="text-brand-400 hover:text-brand-300 font-medium text-sm">View Details</button>
                         </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-slate-400 text-sm">
                        You have not requested any campaigns yet.<br/><br/>
                        <Link href="/client/campaigns/new" className="text-brand-400 hover:underline">Start a new campaign here.</Link>
                      </td>
                    </tr>
                  )}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  );
}
