import { Session } from "@supabase/supabase-js";
import { useState, useEffect, useContext } from "react";
import React from "react";
import LoggedInApp from "./LoggedInApp";
import { SupabaseClientContext } from "./SupabaseClientContext";
import Auth from "./Auth";
import "@fontsource/vollkorn";
import "@fontsource/fira-mono";

export default function App() {
  const supabaseClient = useContext(SupabaseClientContext);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabaseClient.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return <>{!session ? <Auth /> : <LoggedInApp session={session} />}</>;
}
