import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowRightOnRectangleIcon, HomeIcon, ChartBarIcon, CalendarIcon, ArchiveBoxIcon } from "@heroicons/react/24/outline";

export default async function ClientLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Fetch profile to display name
  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  const navigation = [
    { name: 'Dashboard', href: '/client/dashboard', icon: HomeIcon },
    { name: 'My Campaigns', href: '/client/campaigns', icon: ChartBarIcon },
    { name: 'Survey Builder', href: '/client/surveys/builder', icon: ArchiveBoxIcon },
    { name: '3D Booth Tools', href: '/client/booth-preview', icon: ArchiveBoxIcon },
    { name: 'Bookings', href: '/client/bookings', icon: CalendarIcon },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-white/10 flex-shrink-0 flex flex-col hidden md:flex">
         <div className="h-20 flex items-center px-6 border-b border-white/10">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-accent-500 tracking-tight">
               Sevensky Portal
            </span>
         </div>

         <div className="p-4 flex-grow">
            <div className="mb-8 px-2">
               <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Welcome Back</p>
               <p className="text-sm font-medium text-white truncate">{profile?.full_name || user.email}</p>
               <p className="text-xs text-brand-400 truncate">{profile?.company_name}</p>
            </div>

            <nav className="space-y-1">
               {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors group"
                  >
                     <item.icon className="h-5 w-5 mr-3 text-slate-400 group-hover:text-brand-400" />
                     {item.name}
                  </Link>
               ))}
            </nav>
         </div>

         <div className="p-4 border-t border-white/10">
             <form action="/auth/signout" method="post">
                <button type="submit" className="flex items-center w-full px-3 py-2.5 text-sm font-medium rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors">
                   <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3" />
                   Sign Out
                </button>
             </form>
         </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-950">
        {/* Mobile Header */}
        <div className="md:hidden h-16 bg-slate-900 border-b border-white/10 flex items-center justify-between px-4">
           <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-accent-500 tracking-tight">
               Sevensky Portal
           </span>
           <form action="/auth/signout" method="post">
              <button type="submit" className="text-sm text-red-400 font-medium">Sign Out</button>
           </form>
        </div>

        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
