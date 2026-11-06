import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  ShieldCheck,
  Code2,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-[#070b1a] px-6 py-24 text-white md:px-16">
      {/* Background Glow */}
      <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-3 text-sm text-purple-300">
            <Sparkles size={16} />
            Next Generation Technology
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Build Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Digital Future.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 md:text-lg">
            Transform your ideas into powerful digital experiences. Discover
            innovative technology, smarter solutions and limitless possibilities
            with AuraTech.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/about"
              className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold shadow-lg shadow-purple-600/20 transition hover:-translate-y-1 hover:shadow-purple-500/40"
            >
              Explore More
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-2"
              />
            </Link>

            <Link
              to="/contact"
              className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold backdrop-blur-xl transition hover:bg-white/10"
            >
              <Play size={17} />
              Contact Us
            </Link>
          </div>

          {/* TRUST */}
          <div className="mt-14 flex flex-wrap gap-8">
            {[
              { icon: ShieldCheck, text: "Secure Solutions" },
              { icon: Zap, text: "Fast Performance" },
              { icon: Globe, text: "Modern Technology" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-400"
                >
                  <Icon size={19} className="text-purple-400" />
                  {item.text}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex min-h-[450px] items-center justify-center"
        >
          {/* Main Circle */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute h-[380px] w-[380px] rounded-full border border-dashed border-purple-400/30 md:h-[480px] md:w-[480px]"
          />

          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="relative z-10 w-full max-w-md rounded-[30px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_0_100px_rgba(99,102,241,0.2)] backdrop-blur-2xl md:p-8"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="text-sm text-slate-400">AuraTech Studio</p>
                <h3 className="mt-1 text-xl font-bold">Creative Dashboard</h3>
              </div>

              <div className="rounded-xl bg-purple-500/20 p-3">
                <Code2 className="text-purple-400" size={25} />
              </div>
            </div>

            {/* Dashboard Stats */}
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                <Zap className="text-blue-400" size={24} />
                <h2 className="mt-4 text-3xl font-bold">99%</h2>
                <p className="mt-1 text-xs text-slate-400">Performance</p>
              </div>

              <div className="rounded-2xl border border-purple-400/20 bg-purple-500/10 p-5">
                <Globe className="text-purple-400" size={24} />
                <h2 className="mt-4 text-3xl font-bold">24/7</h2>
                <p className="mt-1 text-xs text-slate-400">Availability</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Innovation Progress</span>
                <span className="text-purple-400">85%</span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "85%" }}
                  transition={{ duration: 2 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                />
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-sm font-semibold">Innovation starts here</p>
                <p className="text-xs text-slate-500">Think beyond limits</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-2 top-12 z-20 rounded-2xl border border-purple-400/30 bg-[#15152e]/90 p-4 shadow-xl backdrop-blur-xl md:-right-8"
          >
            <Sparkles className="text-purple-400" />
            <p className="mt-2 text-xs font-semibold">Future Ready</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-2 -left-2 z-20 rounded-2xl border border-blue-400/30 bg-[#101a35]/90 p-4 shadow-xl backdrop-blur-xl md:-left-8"
          >
            <ShieldCheck className="text-blue-400" />
            <p className="mt-2 text-xs font-semibold">Smart Solutions</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
