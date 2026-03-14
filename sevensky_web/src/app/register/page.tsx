"use client";

import { useState } from "react";
import Link from "next/link";
import { createBrowserSupabaseClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  
  const supabase = createBrowserSupabaseClient();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 1. Sign up the user in auth.users
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      setError(authError.message);
      setLoading(false);
      return;
    }

    // 2. Insert their profile data into public.profiles
    if (authData.user) {
      const { error: profileError } = await supabase
        .from('profiles')
        .insert([
          { 
            id: authData.user.id, 
            full_name: fullName, 
            company_name: companyName,
            role: 'client' // Defaulting to client
          }
        ]);

      if (profileError) {
        console.error("Profile creation error:", profileError);
        // Fallback: Continue anyway, but warn
      }
    }

    setSuccess(true);
    setLoading(false);
  };

  if (success) {
    return (
       <div className="flex min-h-screen flex-1 bg-slate-950 px-6 py-12 lg:px-8 items-center justify-center pt-24">
         <div className="w-full max-w-md bg-slate-900/50 p-8 rounded-3xl border border-brand-500/30 text-center backdrop-blur-xl">
           <div className="mx-auto w-16 h-16 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
           <h2 className="text-2xl font-bold text-white mb-4">Registration Successful!</h2>
           <p className="text-slate-300 mb-8">Please check your email address for a verification link to activate your account.</p>
           <Link href="/login" className="text-brand-400 hover:text-brand-300 font-semibold bg-white/5 py-3 px-6 rounded-full border border-white/10 transition-colors">
              Return to Login
           </Link>
         </div>
       </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-1 bg-slate-950 px-6 py-12 lg:px-8 items-center justify-center pt-24">
      <div className="w-full max-w-md bg-slate-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mb-10">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white mb-2">
            Create your account
          </h2>
          <p className="text-center text-sm text-slate-400">
            Join Sevensky and transform your brand
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleRegister}>
          {error && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg text-center">
              {error}
            </div>
          )}

          <div>
             <label className="block text-sm font-medium leading-6 text-slate-300">Full Name</label>
             <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} className="mt-2 block w-full rounded-lg border-0 bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-brand-500 sm:text-sm px-4" />
          </div>

          <div>
             <label className="block text-sm font-medium leading-6 text-slate-300">Company / Brand Name</label>
             <input type="text" required value={companyName} onChange={(e) => setCompanyName(e.target.value)} className="mt-2 block w-full rounded-lg border-0 bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-brand-500 sm:text-sm px-4" />
          </div>
          
          <div>
            <label className="block text-sm font-medium leading-6 text-slate-300">Email address</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 block w-full rounded-lg border-0 bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-brand-500 sm:text-sm px-4" />
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-slate-300">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="mt-2 block w-full rounded-lg border-0 bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-brand-500 sm:text-sm px-4" />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="flex w-full justify-center rounded-full bg-brand-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-600 transition-all disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Sign up"}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold leading-6 text-brand-400 hover:text-brand-300">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
