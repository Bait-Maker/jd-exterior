import { createSupabaseClient } from "@/lib/supabase/client";
import { User } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

export function useSupabaseAuth() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createSupabaseClient();

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
  });

  return { user, setUser };
}
