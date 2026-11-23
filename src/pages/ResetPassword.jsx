import axios from "axios";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

function PasswordField({ id, label, value, onChange, error, autoComplete }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-medium text-slate-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          aria-invalid={!!error}
          className={`w-full rounded-lg border px-3.5 py-2.5 pr-16 text-sm text-slate-900 outline-none transition focus:ring-2 ${
            error
              ? "border-red-400 focus:ring-red-200"
              : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-200"
          }`}
        />
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute inset-y-0 right-0 px-3.5 text-sm font-medium text-slate-500 hover:text-indigo-600"
        >
          {show ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const next = {};
    if (password.length < 8) next.password = "Use at least 8 characters.";
    if (confirm !== password) next.confirm = "Passwords don’t match.";
    setErrors(next);
    if (Object.keys(next).length === 0) {

      
      /////////////////////////////////////////
      try {
    const {data} =   await  axios.post(`${import.meta.env.VITE_BASE_URL}/auth/reset-password`, {
          token,
          password,
        });

        setDone(true);

      } catch (error) {
        console.log(error.message);
        errors.error = "Password Reset Fail";
      }

      ///////////////////////////////////////
    }

     // UI only: call your API here
  };




  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        {!done ? (
          <>
            <h1 className="text-2xl font-semibold text-slate-900">
              Set a new password
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Choose a password you haven’t used before. It must be at least 8
              characters.
            </p>
            {errors?.error && (
              <p className="mt-2 text-sm text-red-500">{errors.error || ""}</p>
            )}
            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
              <PasswordField
                id="password"
                label="New password"
                value={password}
                onChange={setPassword}
                error={errors.password}
                autoComplete="new-password"
              />
              <PasswordField
                id="confirm"
                label="Confirm password"
                value={confirm}
                onChange={setConfirm}
                error={errors.confirm}
                autoComplete="new-password"
              />

              <button
                type="submit"
                className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2"
              >
                Reset password
              </button>
            </form>
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
              Password updated
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              You can now sign in with your new password.
            </p>
            <NavLink
              to="/auth"
              className="mt-6 inline-block w-full rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Go to sign in
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}
