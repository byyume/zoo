import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface RestaurantRow {
  id: number;
  category: string;
  recommender: string | null;
  location: string | null;
  name: string;
  genre: string | null;
  notes: string | null;
  link: string | null;
  payco: string | null;
  verified: boolean | null;
  verified_by: string | null;
  review: string | null;
  solo_dining: boolean | null;
  created_at: string | null;
}
