import { createClient } from "@/lib/supabase-server";

export default async function ClientBookingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  // In a real app we would fetch the list of bookings linked to the client
  const { data: bookings } = await supabase
    .from('bookings')
    .select('*, service:services(title), campaign:campaigns(name)')
    .eq('client_id', user?.id)
    .order('created_at', { ascending: false });

  return (
    <div className="max-w-6xl mx-auto pb-12">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
         <div>
            <h1 className="text-2xl font-bold text-white mb-2">My Bookings</h1>
            <p className="text-sm text-slate-400">View and manage your specific service bookings and operational events.</p>
         </div>
         <div className="mt-4 sm:mt-0 flex gap-4 shrink-0">
            <a 
              href="/services"
              className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20 transition-all border border-white/10"
            >
              Browse Services
            </a>
         </div>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
         <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
               <thead>
                  <tr className="border-b border-white/10 bg-white/5 text-sm font-semibold text-white">
                     <th className="p-4 pl-6 whitespace-nowrap">Service Details</th>
                     <th className="p-4 whitespace-nowrap">Status</th>
                     <th className="p-4 whitespace-nowrap hidden sm:table-cell">Event Date</th>
                     <th className="p-4 pr-6 text-right whitespace-nowrap">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {bookings && bookings.length > 0 ? (
                    bookings.map((booking: any) => (
                      <tr key={booking.id} className="hover:bg-white/5 transition-colors group">
                         <td className="p-4 pl-6">
                            <p className="font-medium text-white">{booking.service?.title || 'Custom Booking'}</p>
                            <p className="text-xs text-brand-400 mt-1">{booking.campaign?.name ? `Campaign: ${booking.campaign.name}` : ''}</p>
                         </td>
                         <td className="p-4">
                            <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                               booking.status === 'confirmed' ? 'bg-blue-400/10 text-blue-400 ring-blue-400/20' :
                               booking.status === 'in_progress' ? 'bg-green-400/10 text-green-400 ring-green-400/20' :
                               booking.status === 'pending' ? 'bg-yellow-400/10 text-yellow-500 ring-yellow-400/20' :
                               'bg-slate-400/10 text-slate-400 ring-slate-400/20'
                            }`}>
                              {booking.status.replace('_', ' ').toUpperCase()}
                            </span>
                         </td>
                         <td className="p-4 text-sm text-slate-300 hidden sm:table-cell">
                            {booking.event_date ? new Date(booking.event_date).toLocaleDateString() : 'TBD'}
                         </td>
                         <td className="p-4 pr-6 text-right">
                            <button className="text-brand-400 hover:text-brand-300 font-medium text-sm">View Details</button>
                         </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="p-8 text-center text-slate-400 text-sm">
                        You have not made any specific service bookings yet.
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
