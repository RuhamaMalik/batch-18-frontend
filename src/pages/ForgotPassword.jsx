import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Enter a valid email address.");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/forgot-password`,
        { email },
      );
      setError("");
      setSent(true);
    } catch (error) {
      setError(error.message);
    }

    // UI only: call your API here
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        {!sent ? (
          <>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V7.5a4.5 4.5 0 10-9 0v3m-1.5 0h12a1.5 1.5 0 011.5 1.5v7.5a1.5 1.5 0 01-1.5 1.5H6A1.5 1.5 0 014.5 19.5V12A1.5 1.5 0 016 10.5z"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-semibold text-slate-900">
              Forgot your password?
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Enter the email linked to your account and we’ll send you a link
              to reset your password.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-slate-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  aria-invalid={!!error}
                  className={`w-full rounded-lg border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:ring-2 ${
                    error
                      ? "border-red-400 focus:ring-red-200"
                      : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200"
                  }`}
                />
                {error && (
                  <p className="mt-1.5 text-sm text-red-600">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
              >
                Send reset link
              </button>
            </form>

            <NavLink
              to="/login"
              className="mt-6 block text-center text-sm font-medium text-slate-600 hover:text-indigo-600"
            >
              Back to sign in
            </NavLink>
          </>
        ) : (
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-semibold text-slate-900">
              Check your email
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              We sent a reset link to{" "}
              <span className="font-medium text-slate-700">{email}</span>. It
              may take a minute to arrive.
            </p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 text-sm font-medium text-indigo-600 hover:text-indigo-700"
            >
              Use a different email
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
