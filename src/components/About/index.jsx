import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Rocket,
  Users,
  Code2,
  Award,
  ArrowUpRight,
} from "lucide-react";

const stats = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: Code2,
  },
  {
    number: "30+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "5+",
    label: "Years Experience",
    icon: Award,
  },
  {
    number: "15+",
    label: "Expert Members",
    icon: Rocket,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080b18] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      {/* Background Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300">
            ABOUT AURATECH
          </span>

          <h2 className="mt-7 text-4xl font-bold leading-tight md:text-6xl">
            We Build Digital
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
            We help businesses transform their ideas into powerful digital
            products through innovative technology, creative design, and smart
            solutions.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-xl md:p-10">
              <div className="absolute -right-3 -top-3 h-20 w-20 rounded-full bg-purple-500/20 blur-2xl" />

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
                <Rocket size={30} />
              </div>

              <h3 className="text-3xl font-bold">Turning Ideas Into Reality</h3>

              <p className="mt-5 leading-8 text-gray-400">
                At AuraTech, we believe technology should make life easier and
                businesses stronger. Our team combines creativity, strategy, and
                modern development to create meaningful digital experiences.
              </p>

              <p className="mt-4 leading-8 text-gray-400">
                From websites to advanced digital platforms, we focus on
                quality, performance, and long-term growth.
              </p>

              <a
                href="#services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-purple-400 transition hover:text-blue-400"
              >
                Explore Our Services
                <ArrowUpRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side Mission & Vision */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-8 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                  <Target size={28} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>

              <p className="leading-8 text-gray-400">
                Our mission is to deliver innovative, reliable, and
                user-friendly technology solutions that help businesses grow and
                succeed in the digital world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-transparent p-8 backdrop-blur-xl"
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                  <Eye size={28} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>

              <p className="leading-8 text-gray-400">
                Our vision is to become a trusted technology partner by building
                future-ready digital experiences and making innovation
                accessible to everyone.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl transition"
              >
                <Icon className="mx-auto mb-4 text-purple-400" size={28} />

                <h3 className="text-3xl font-bold md:text-4xl">
                  {item.number}
                </h3>

                <p className="mt-2 text-sm text-gray-400">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
