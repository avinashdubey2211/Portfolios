import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  BrainCircuit,
  Cloud,
  ShieldCheck,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Build powerful, responsive and scalable websites with modern technologies.",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    number: "02",
    title: "App Development",
    description:
      "Create seamless mobile experiences with beautiful interfaces and smooth performance.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-400",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    number: "03",
    title: "UI / UX Design",
    description:
      "Design intuitive, engaging and visually stunning digital experiences.",
    icon: Palette,
    color: "from-pink-500 to-orange-400",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    number: "04",
    title: "AI Solutions",
    description:
      "Bring intelligence to your business with automation and AI-powered solutions.",
    icon: BrainCircuit,
    color: "from-cyan-500 to-blue-500",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    number: "05",
    title: "Cloud Solutions",
    description:
      "Deploy, manage and scale applications with reliable cloud infrastructure.",
    icon: Cloud,
    color: "from-indigo-500 to-purple-500",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    number: "06",
    title: "Cyber Security",
    description:
      "Protect your digital assets with secure and reliable technology solutions.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-cyan-400",
    glow: "group-hover:shadow-emerald-500/20",
  },
];

const Services = () => {
  return (
    <section className="relative overflow-hidden bg-[#070b1a] px-6 py-28 text-white md:px-16">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-2.5 text-sm text-purple-300">
            <Sparkles size={16} />
            What We Offer
          </div>

          <h2 className="text-4xl font-extrabold md:text-6xl">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            We combine creativity, technology and innovation to deliver digital
            solutions that help businesses grow.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className={`group relative rounded-3xl border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-purple-400/40 hover:bg-white/[0.07] hover:shadow-2xl ${service.glow}`}
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-slate-600">
                    / {service.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                    <Icon
                      size={27}
                      className="text-purple-300 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-9 text-2xl font-bold transition-colors group-hover:text-purple-300">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[75px] text-sm leading-7 text-slate-400">
                  {service.description}
                </p>

                {/* Gradient Line */}
                <div
                  className={`mt-7 h-[3px] w-12 rounded-full bg-gradient-to-r ${service.color} transition-all duration-500 group-hover:w-full`}
                />

                {/* Explore */}
                <div className="mt-7 flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-300">
                    Explore Service
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-purple-400 group-hover:bg-purple-500">
                    <ArrowUpRight
                      size={20}
                      className="transition-transform group-hover:rotate-45"
                    />
                  </div>
                </div>

                {/* Hover Glow */}
                <div
                  className={`pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-30`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 md:flex-row md:px-12"
        >
          <div>
            <h3 className="text-2xl font-bold">Have a project in mind?</h3>
            <p className="mt-2 text-sm text-slate-400">
              Let's turn your ideas into something extraordinary.
            </p>
          </div>

          <a
            href="/contact"
            className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-7 py-4 font-semibold transition hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Let's Talk
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
