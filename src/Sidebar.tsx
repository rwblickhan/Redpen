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
    <div
      className={
        className +
        " prose dark:prose-invert bg-black slate-600 p-2 flex flex-col justify-between"
      }
    >
      <h1 className="text-white underline decoration-red-700">Redpen</h1>
      <div>
        <button
          className="text-white border border-blue-600 rounded p-2 bg-blue-600 w-full"
          onClick={() => supabaseClient.auth.signOut()}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
