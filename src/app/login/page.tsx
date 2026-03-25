"use client";

import { useState } from "react";
import Link from "next/link";
import { createBrowserSupabaseClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const supabase = createBrowserSupabaseClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else if (authData.user) {
      // Fetch the role to route to the correct dashboard
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', authData.user.id)
        .single();
        
      if (profile?.role === 'admin') {
         router.push("/admin/dashboard");
      } else {
         router.push("/client/dashboard");
      }
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-screen flex-1 bg-slate-950 px-6 py-12 lg:px-8 items-center justify-center pt-24">
      <div className="w-full max-w-md bg-slate-900/50 p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-white mb-2">
            Welcome back
          </h2>
          <p className="text-center text-sm text-slate-400">
            Sign in to access your dashboard
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-lg text-center">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium leading-6 text-slate-300">
                Email address
              </label>
              <div className="mt-2 text-slate-900">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-lg border-0 bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm sm:leading-6 px-4"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-slate-300">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-brand-400 hover:text-brand-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 text-slate-900">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-lg border-0 bg-white/5 py-2.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm sm:leading-6 px-4"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-full bg-brand-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all disabled:opacity-50"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-slate-400">
            Not a member?{" "}
            <Link href="/register" className="font-semibold leading-6 text-brand-400 hover:text-brand-300">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
