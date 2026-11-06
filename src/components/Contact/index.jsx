
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
  FiClock,
  FiMessageCircle,
} from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailto = `mailto:hello@auratech.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: "Email Us",
      value: "hello@auratech.com",
      link: "mailto:hello@auratech.com",
    },
    {
      icon: <FiPhone />,
      title: "Call Us",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <FiMapPin />,
      title: "Our Location",
      value: "India",
      link: null,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070b1a] px-5 py-20 text-white sm:px-8 lg:px-12">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-purple-300">
            <FiMessageCircle />
            Get In Touch
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Let's Build Something
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Have a project in mind or want to work with us?
            We'd love to hear from you. Let's turn your ideas into reality.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-3xl border border-white/10 bg-[#10172b] p-7 sm:p-9">

              <h2 className="text-2xl font-bold">
                Contact Information
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Reach out to us through any of these channels.
                Our team will be happy to assist you.
              </p>

              <div className="mt-10 space-y-7">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl text-purple-400">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-xs text-slate-500">
                        {item.title}
                      </p>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="mt-1 block text-sm font-semibold text-white transition hover:text-purple-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm font-semibold text-white">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-600/20 to-blue-600/10 p-5">
                <div className="flex items-center gap-3">
                  <FiClock className="text-xl text-purple-400" />
                  <h3 className="font-semibold">Working Hours</h3>
                </div>

                <p className="mt-3 text-sm text-slate-400">
                  Monday – Friday
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  9:00 AM – 6:00 PM
                </p>
              </div>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl border border-white/10 bg-[#10172b] p-7 sm:p-9">

              <h2 className="text-2xl font-bold">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Fill out the form and we'll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-white/10 bg-[#080e20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-white/10 bg-[#080e20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-white/10 bg-[#080e20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#080e20] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 py-4 text-sm font-bold shadow-lg shadow-purple-900/20 transition hover:scale-[1.01] hover:shadow-purple-700/30"
                >
                  Send Message
                  <FiSend className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>

              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center sm:flex-row sm:text-left">
          <div>
            <h3 className="text-lg font-bold">
              Have a project ready?
            </h3>
            <p className="mt-1 text-sm text-slate-400">
              Let's discuss your next big idea.
            </p>
          </div>

          <a
            href="mailto:hello@auratech.com"
            className="flex items-center gap-2 font-semibold text-purple-400 transition hover:text-purple-300"
          >
            Let's Talk <FiArrowUpRight />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;
