import Tiptap from "./Tiptap";
import Sidebar from "./Sidebar";
import { Session } from "@supabase/supabase-js";
import React from "react";

export interface Props {
  session: Session;
}

export default function LoggedInApp({ session }: Props) {
  return (
    <div className="flex flex-row">
      <Sidebar className="h-screen basis-1/6" session={session} />
      <Tiptap className="h-screen basis-5/6" />
    </div>
  );
}
