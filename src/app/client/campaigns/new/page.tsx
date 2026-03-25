"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createCampaignAction } from "@/app/actions/campaignActions";

export default function NewCampaignPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await createCampaignAction(formData);

    if (result.error) {
       alert(result.error);
    } else {
       setSuccess(true);
    }
    
    setLoading(false);
  };

  if (success) {
    return (
       <div className="max-w-2xl mx-auto text-center mt-20 p-8 bg-slate-900 border border-brand-500/30 rounded-3xl">
          <div className="mx-auto w-16 h-16 bg-brand-500/20 text-brand-400 rounded-full flex items-center justify-center text-3xl mb-6">✓</div>
          <h2 className="text-2xl font-bold text-white mb-4">Campaign Requested!</h2>
          <p className="text-slate-300 mb-8">Your account manager will review the details and reach out shortly to begin planning.</p>
          <button onClick={() => router.push('/client/dashboard')} className="text-brand-400 hover:text-brand-300 font-semibold bg-white/5 py-3 px-6 rounded-full border border-white/10 transition-colors">
             Return to Dashboard
          </button>
       </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="mb-8">
         <h1 className="text-2xl font-bold text-white mb-2">Start a New Campaign</h1>
         <p className="text-slate-400">Provide the high-level details of your next big project. You can add specific bookings (like booths or promoters) to this campaign later.</p>
      </div>

      <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 sm:p-8 shadow-xl">
         <form onSubmit={handleSubmit} className="space-y-6">
            <div>
               <label className="block text-sm font-medium leading-6 text-slate-300 mb-2">
                 Campaign Name
               </label>
               <input
                 type="text"
                 name="name"
                 required
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder="e.g., Summer Product Launch 2024"
                 className="block w-full rounded-lg border-0 bg-slate-950 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm"
               />
            </div>

            <div>
               <label className="block text-sm font-medium leading-6 text-slate-300 mb-2">
                 Objectives & Description
               </label>
               <textarea
                 name="description"
                 required
                 rows={5}
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 placeholder="Tell us what you want to achieve..."
                 className="block w-full rounded-lg border-0 bg-slate-950 py-3 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm"
               />
            </div>

            <div>
               <label className="block text-sm font-medium leading-6 text-slate-300 mb-2">
                 Estimated Budget (USD) <span className="text-slate-500 font-normal">(Optional)</span>
               </label>
               <div className="relative">
                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                   <span className="text-slate-500 sm:text-sm">$</span>
                 </div>
                 <input
                   type="number"
                   name="budget"
                   value={budget}
                   onChange={(e) => setBudget(e.target.value)}
                   className="block w-full rounded-lg border-0 bg-slate-950 py-3 pl-8 pr-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-brand-500 sm:text-sm"
                   placeholder="10000"
                 />
               </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex gap-4 justify-end">
               <button
                 type="button"
                 onClick={() => router.back()}
                 className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2"
               >
                 Cancel
               </button>
               <button
                 type="submit"
                 disabled={loading}
                 className="rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 transition-all disabled:opacity-50"
               >
                 {loading ? "Submitting..." : "Submit Request"}
               </button>
            </div>
         </form>
      </div>
    </div>
  );
}
