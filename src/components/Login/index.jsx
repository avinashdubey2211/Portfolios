import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  LockKeyhole,
  CheckCircle2,
  Sparkles,
  Send,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Already Logged In
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  // Send OTP
  const handleSendOtp = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setOtpSent(true);
      setLoading(false);
    }, 800);
  };

  // Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter 6 digit OTP");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      if (otp === "123456") {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userMobile", mobile);

        navigate("/", { replace: true });
      } else {
        alert("Invalid OTP! Try 123456");
        setLoading(false);
      }
    }, 800);
  };

  // Change Mobile Number
  const handleChangeNumber = () => {
    setOtpSent(false);
    setOtp("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050817] text-white">
      {/* Background Effects */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-700/30 blur-[130px]" />

      <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-700/30 blur-[130px]" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-7 md:px-16 lg:px-24">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg shadow-purple-500/30">
            <Sparkles size={24} />
          </div>

          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Aura<span className="text-purple-400">Tech</span>
            </h2>

            <p className="text-xs text-slate-400">Build. Innovate. Grow.</p>
          </div>
        </div>

        <p className="hidden text-sm text-slate-400 sm:block">
          Need help? <span className="text-purple-400">Contact Us</span>
        </p>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl items-center gap-10 px-6 py-10 md:px-16 lg:grid-cols-2 lg:px-24">
        {/* LEFT LOGIN FORM */}
        <div className="w-full max-w-lg">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
            <Sparkles size={15} />
            Secure Authentication
          </div>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            Welcome{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Back.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-7 text-slate-400 md:text-lg">
            {otpSent
              ? "Enter the verification code sent to your mobile number."
              : "Enter your mobile number to receive OTP and login to your account."}
          </p>

          <form
            onSubmit={otpSent ? handleVerifyOtp : handleSendOtp}
            className="mt-10 space-y-6"
          >
            {/* MOBILE NUMBER */}
            <div>
              <label className="mb-3 block text-sm font-medium text-slate-300">
                Mobile Number
              </label>

              <div className="flex items-center rounded-2xl border border-slate-700 bg-white/[0.04] px-4 transition focus-within:border-purple-500 focus-within:ring-2 focus-within:ring-purple-500/20">
                <span className="border-r border-slate-700 pr-4 text-sm font-semibold">
                  🇮🇳 +91
                </span>

                <input
                  type="tel"
                  maxLength={10}
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
                  disabled={otpSent}
                  required
                  placeholder="Enter mobile number"
                  className="w-full bg-transparent px-4 py-5 text-white outline-none placeholder:text-slate-500 disabled:opacity-50"
                />
              </div>
            </div>

            {/* OTP INPUT */}
            {otpSent && (
              <div>
                <div className="mb-3 flex justify-between">
                  <label className="text-sm font-medium text-slate-300">
                    Enter OTP
                  </label>

                  <button
                    type="button"
                    onClick={handleChangeNumber}
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Change Number
                  </button>
                </div>

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  placeholder="Enter 6 digit OTP"
                  required
                  className="w-full rounded-2xl border border-slate-700 bg-white/[0.04] px-5 py-5 tracking-[12px] text-white outline-none transition placeholder:tracking-normal placeholder:text-slate-500 focus:border-purple-500"
                />

                <p className="mt-3 text-xs text-slate-500">Demo OTP: 123456</p>
              </div>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 py-5 font-semibold shadow-xl shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Please wait..."
                : otpSent
                  ? "Verify & Login"
                  : "Send OTP"}

              {!loading && (
                <ArrowRight
                  size={20}
                  className="transition group-hover:translate-x-2"
                />
              )}
            </button>
          </form>

          {/* OR */}
          <div className="my-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-slate-800" />

            <span className="text-sm text-slate-500">OR</span>

            <div className="h-px flex-1 bg-slate-800" />
          </div>

          {/* SIGNUP */}
          <p className="text-sm text-slate-400">
            Don't have an account?
            <button
              type="button"
              className="ml-2 font-semibold text-purple-400 hover:text-purple-300"
            >
              Sign Up
            </button>
          </p>

          {/* SECURITY */}
          <div className="mt-12 flex items-center gap-4">
            <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-3">
              <ShieldCheck className="text-purple-400" size={26} />
            </div>

            <div>
              <p className="text-sm font-semibold">Your data is safe with us</p>

              <p className="mt-1 text-xs text-slate-500">
                Secure authentication to protect your account.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="relative hidden h-[600px] items-center justify-center lg:flex">
          {/* Glow */}
          <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[100px]" />

          {/* Orbit */}
          <div className="absolute h-[440px] w-[440px] rounded-full border border-blue-400/30" />

          <div className="absolute h-[350px] w-[350px] rounded-full border border-purple-400/20" />

          {/* Floating Circle */}
          <div className="absolute left-10 top-28 h-44 w-44 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 opacity-80 blur-[2px] animate-pulse" />

          <div className="absolute bottom-24 right-5 h-36 w-36 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-70 blur-[2px]" />

          {/* Phone */}
          <div className="relative z-10 w-[280px] rotate-[-8deg] rounded-[45px] border border-blue-300/40 bg-gradient-to-br from-blue-500/30 via-indigo-950 to-purple-900/60 p-3 shadow-[0_0_80px_rgba(59,130,246,0.3)] backdrop-blur-xl transition duration-700 hover:rotate-0">
            <div className="relative flex h-[490px] flex-col items-center rounded-[36px] border border-white/10 bg-gradient-to-b from-[#101e52] to-[#080d25] px-6 py-10">
              {/* Camera */}
              <div className="absolute top-3 h-5 w-20 rounded-full bg-black" />

              <div className="mt-12 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-6 shadow-xl shadow-blue-500/30">
                <LockKeyhole size={55} strokeWidth={1.5} />
              </div>

              <h3 className="mt-8 text-2xl font-bold">Secure Login</h3>

              <p className="mt-3 text-center text-sm leading-6 text-slate-400">
                Your security is our priority. Verify your identity securely.
              </p>

              {/* OTP Boxes */}
              <div className="mt-10 flex gap-2">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className="flex h-11 w-8 items-center justify-center rounded-lg border border-blue-400/30 bg-blue-500/10 text-sm text-blue-200"
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Status */}
              <div className="mt-10 flex w-full items-center gap-3 rounded-2xl border border-green-400/20 bg-green-400/10 p-4">
                <CheckCircle2 className="text-green-400" size={25} />

                <div>
                  <p className="text-sm font-semibold">OTP Sent!</p>

                  <p className="text-xs text-slate-400">
                    Verification in progress
                  </p>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-2 text-xs text-slate-500">
                <Smartphone size={15} />
                Powered by AuraTech
              </div>
            </div>
          </div>

          {/* Floating Notification */}
          <div className="absolute left-0 top-1/2 z-20 flex -translate-y-1/2 items-center gap-3 rounded-2xl border border-blue-400/30 bg-[#111b40]/90 px-5 py-4 shadow-2xl backdrop-blur-xl animate-bounce">
            <div className="rounded-full bg-purple-500 p-2">
              <Send size={17} />
            </div>

            <div>
              <p className="text-sm font-semibold">OTP Sent!</p>

              <p className="text-xs text-slate-400">Check your phone</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-6 text-center text-xs text-slate-600">
        © 2026 AuraTech. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
