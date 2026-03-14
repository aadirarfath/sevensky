import { createClient } from '@supabase/supabase-js';

// WARNING: This client uses the SERVICE ROLE KEY. 
// It completely bypasses all Row Level Security (RLS) policies.
// It must NEVER be exposed to the browser or used in client components.
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
