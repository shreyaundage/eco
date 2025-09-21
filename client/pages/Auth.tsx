import PixelLayout from "@/components/PixelLayout";

import { useState } from "react";
import PixelLayout from "../components/PixelLayout";
import { useNavigate, useLocation } from "react-router-dom";

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || "/";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    // Accept any values; gate the app by setting a simple localStorage flag
    setTimeout(() => {
      try {
        localStorage.setItem("eco_logged_in", "1");
      } catch (err) {
        // ignore storage errors
      }
      setSubmitting(false);
      navigate(from, { replace: true });
    }, 600);
  }

  return (
    <PixelLayout>
      <div className="max-w-md mx-auto p-4">
        <div className="pixel-card p-6 space-y-4">
          <h1 className="font-pixel text-center text-lg">Welcome to Eco Campus</h1>
          <p className="text-center text-sm opacity-80">Sign in to track your progress and unlock rewards.</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-xs mb-1 font-pixel">Username or Email</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 rounded-sm pixel-border bg-card"
                placeholder="any username"
                aria-label="username"
                required={false}
              />
            </div>
            <div>
              <label className="block text-xs mb-1 font-pixel">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="w-full px-3 py-2 rounded-sm pixel-border bg-card"
                placeholder="any password"
                aria-label="password"
                required={false}
              />
            </div>

            <button
              type="submit"
              className={`pixel-button w-full ${submitting ? "opacity-80 animate-pulse" : ""}`}
              aria-busy={submitting}
            >
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="text-center text-sm opacity-70 font-pixel">No validation — enter any values to continue.</div>
        </div>

        <div className="text-center mt-4">
          <a href="/" className="text-xs opacity-70">Continue as guest (still requires login)</a>
        </div>
      </div>
    </PixelLayout>
  );
}
