"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { createClient } from "@/lib/supabase-server";

export async function createCampaignAction(formData: FormData) {
  // First, verify the user is authenticated using the secure SSR client
  const supabaseServer = await createClient();
  const { data: { user } } = await supabaseServer.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to create a campaign." };
  }

  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const budgetRaw = formData.get("budget");
  const budget = budgetRaw ? parseFloat(budgetRaw as string) : null;

  // Perform the insert using the Admin client to bypass restrictive RLS INSERT policies
  const { error } = await supabaseAdmin.from("campaigns").insert([
    {
      client_id: user.id,
      name,
      description,
      budget,
      status: "requested"
    }
  ]);

  if (error) {
    console.error("Campaign Creation Error: ", error);
    return { error: "Failed to create campaign. Please contact support." };
  }

  return { success: true };
}
