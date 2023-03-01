import { useState, useContext, FormEvent } from "react";
import { SupabaseClientContext } from "./SupabaseClientContext";
import React from "react";
import { isAuthError } from "@supabase/supabase-js";

export default function Auth() {
  const supabaseClient = useContext(SupabaseClientContext);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log(`origin: ${window.location.origin}`);
      const { error } = await supabaseClient.auth.signInWithOtp({
        email,
        // Important: The email should redirect to the current origin
        //            Otherwise this will break on localhost
        options: { emailRedirectTo: window.location.origin },
      });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error: unknown) {
      if (isAuthError(error)) {
        alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-rwb-background-dark h-screen w-screen grid place-items-center">
      <div className="prose w-1/2">
        <h1 className="text-center underline decoration-red-700">Redpen</h1>
        {loading ? (
          <p>Sending magic link...</p>
        ) : (
          <div className="bg-rwb-slate-light dark:bg-neutral-800 my-4 px-5 pt-4 pb-1.5 max-w-3xl mx-auto rounded">
            <form onSubmit={handleLogin}>
              <label htmlFor="bd-email">Email</label>
              <input
                type="email"
                id="bd-email"
                name="email"
                placeholder="Your email"
                className="block mb-4 px-4 py-3 w-full bg-white dark:bg-neutral-900 border border-slate-400 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="submit"
                value="Send magic link!"
                className="block mb-2 px-4 py-3 w-full text-white dark:text-rwb-text-dark bg-rwb-link-light dark:bg-rwb-button-background-dark border-0 rounded cursor-pointer"
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
