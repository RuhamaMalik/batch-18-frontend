import { useState } from "react";
import Field from "./Field";
import "./AuthForm.css";
import { setToken, setUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthForm({ mode, buttonText }) {
  let navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const isSignup = mode === "signup";

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /////////////////SignIn///////////////////////

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/login`,
        form,
      );

      if (data.success) {
        setUser(data.user);
        setToken(data.token);
        setForm({ name: "", email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  /////////////////SignIn///////////////////////

  /////////////////Signup///////////////////////

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/auth/signup`,
        form,
      );

      if (data.success) {
        setUser(data.user);
        setToken(data.token);
        setForm({ name: "", email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  /////////////////Signup///////////////////////

  ////////////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "login") {
      handleLogin(e);
    } else {
      handleSignup(e);
    }
  };
  ////////////////////////////////////////
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className={`name-row ${isSignup ? "open" : ""}`}>
        <div>
          <Field
            label="Full name"
            name="name"
            value={form.name}
            onChange={handleChange}
            disabled={!isSignup}
            required={isSignup}
            placeholder="Batch 18"
          />
        </div>
      </div>

      <Field
        label="Email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
        placeholder="you@example.com"
      />

      <Field
        label="Password"
        type={showPassword ? "text" : "password"}
        name="password"
        value={form.password}
        onChange={handleChange}
        required
        minLength={6}
        placeholder="••••••••"
        action={
          <button
            type="button"
            className="toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        }
      />

      {!isSignup && (
        <a className="forgot" href="/forgot-password">
          Forgot password?
        </a>
      )}

      <button className="submit" type="submit">
        {buttonText} <span>→</span>
      </button>
    </form>
  );
}
