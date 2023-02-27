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
      const { error } = await supabaseClient.auth.signInWithOtp({ email });
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
    <div className="flex flex-row justify-center">
      <div className="w-5/12 flex flex-col" aria-live="polite">
        <h1 className="w-full mb-5">Supabase + React</h1>
        <p className="description">
          Sign in via magic link with your email below
        </p>
        {loading ? (
          "Sending magic link..."
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button block" aria-live="polite">
              Send magic link!
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
