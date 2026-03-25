import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { 
  ArrowRightOnRectangleIcon, 
  HomeIcon, 
  UsersIcon, 
  BriefcaseIcon, 
  FolderIcon, 
  CurrencyDollarIcon 
} from "@heroicons/react/24/outline";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Double check admin role
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  if (profile?.role !== 'admin') {
     redirect("/client/dashboard");
  }

  const navigation = [
    { name: 'Overview', href: '/admin/dashboard', icon: HomeIcon },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-900 border-r border-accent-500/20 flex-shrink-0 flex flex-col hidden md:flex relative overflow-hidden">
         {/* Admin specific styling accent */}
         <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 blur-3xl rounded-full"></div>
      
         <div className="h-20 flex items-center px-6 border-b border-white/10 relative z-10">
            <span className="text-xl font-bold text-white tracking-tight flex items-center">
               Sevensky <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded bg-accent-500/20 text-accent-500 border border-accent-500/30">ADMIN</span>
            </span>
         </div>

         <div className="p-4 flex-grow relative z-10">
            <nav className="space-y-1">
               {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2.5 text-sm font-medium rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors group focus:outline-none focus:ring-2 focus:ring-accent-500/50"
                  >
                     <item.icon className="h-5 w-5 mr-3 text-slate-400 group-hover:text-accent-500 transition-colors" />
                     {item.name}
                  </Link>
               ))}
            </nav>
         </div>

         <div className="p-4 border-t border-white/10 relative z-10">
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
        <div className="md:hidden h-16 bg-slate-900 border-b border-accent-500/20 flex items-center justify-between px-4">
           <span className="text-lg font-bold text-white tracking-tight flex items-center">
               Sevensky <span className="ml-2 text-xs font-bold px-2 py-0.5 rounded bg-accent-500/20 text-accent-500 border border-accent-500/30">ADMIN</span>
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
