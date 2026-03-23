import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bcagjxgqnmegaqojfyjl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjYWdqeGdxbm1lZ2Fxb2pmeWpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM3MTU3MzAsImV4cCI6MjA4OTI5MTczMH0.XPn0WUv9zXBniqJE12iAUxfJhErH_WlzT1iGfz7WpXY";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
