import { Session } from "@supabase/supabase-js";
import { useContext, useEffect } from "react";
import { SupabaseClientContext } from "./SupabaseClientContext";
import React from "react";

export interface Props {
  className: string;
  session: Session;
}

export default function Sidebar({ className, session }: Props) {
  const supabaseClient = useContext(SupabaseClientContext);

  useEffect(() => {
    getProfile();
  }, [session]);

  const getProfile = async () => {
    const { user } = session;
    supabaseClient
      .from("profiles")
      .select(`username, avatar_url`)
      .eq("id", user.id)
      .single();
  };

  return (
    <div className={className + " bg-slate-600"}>
      <p>Redpen</p>
    </div>
  );
}
