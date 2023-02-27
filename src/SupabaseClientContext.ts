import { createContext } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ewfnxnbgecwscdiktiiu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3Zm54bmJnZWN3c2NkaWt0aWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0Nzc5NzMsImV4cCI6MTk5MzA1Mzk3M30.iAQMbOaEYE9UUXk5wSuX71Tm3YAl84BQOFjwXBwVOa0"
);

export const SupabaseClientContext = createContext(supabase);
