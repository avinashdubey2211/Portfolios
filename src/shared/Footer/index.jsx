import React, { useState } from "react";

import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

import {
  FiZap,
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiPhone,
  FiArrowUp,
} from "react-icons/fi";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaTwitter,
    href: "https://twitter.com",
    label: "Twitter",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Frontend Development",
  "Backend Development",
  "Responsive Design",
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    alert("Thank you for subscribing!");
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060914] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Newsletter */}
        <div className="border-b border-white/10 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                Stay Connected
              </span>

              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Let's Build Something
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Amazing Together.
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-gray-400">
                Subscribe to our newsletter for the latest updates, insights and
                technology trends.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <div className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4">
                <FiMail size={19} className="text-purple-400" />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent py-4 text-white outline-none placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-semibold transition hover:scale-105"
              >
                Subscribe
                <FiArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2">
              <div className="rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 p-2">
                <FiZap size={23} />
              </div>

              <span className="text-2xl font-bold">
                Aura<span className="text-purple-400">Tech</span>
              </span>
            </a>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
              We create modern digital experiences through innovative
              technology, creative design and powerful development.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 transition hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/20 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 transition hover:pl-2 hover:text-purple-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Our Services</h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-gray-400 transition hover:translate-x-1 hover:text-purple-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Contact Us</h3>

            <div className="space-y-5">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <FiMapPin size={19} className="shrink-0 text-purple-400" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>

              <a
                href="mailto:hello@auratech.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-purple-400"
              >
                <FiMail size={19} className="text-purple-400" />
                hello@auratech.com
              </a>

              <a
                href="tel:+910000000000"
                className="flex items-center gap-3 text-sm text-gray-400 transition hover:text-purple-400"
              >
                <FiPhone size={19} className="text-purple-400" />
                +91 00000 00000
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 py-7 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AuraTech. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#privacy" className="transition hover:text-purple-400">
              Privacy Policy
            </a>

            <a href="#terms" className="transition hover:text-purple-400">
              Terms & Conditions
            </a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-purple-500 hover:bg-purple-500"
          >
            <FiArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
