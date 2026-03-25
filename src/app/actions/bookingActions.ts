"use server";

import { supabaseAdmin } from "@/lib/supabase-admin";
import { createClient } from "@/lib/supabase-server";

export async function createBookingAction(formData: FormData) {
  const supabaseServer = await createClient();
  const { data: { user } } = await supabaseServer.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to request a service booking." };
  }

  const nameCompany = formData.get("nameCompany") as string;
  const email = formData.get("email") as string;
  const details = formData.get("details") as string;
  const serviceName = formData.get("serviceName") as string;

  const notes = `Contact: ${nameCompany} (${email})\nService Requested: ${serviceName}\nDetails: ${details}`;

  const { error } = await supabaseAdmin.from("bookings").insert([
    {
      client_id: user.id,
      notes,
      status: "pending"
    }
  ]);

  if (error) {
    console.error("Booking Creation Error: ", error);
    return { error: "Failed to send booking request." };
  }

  return { success: true };
}
