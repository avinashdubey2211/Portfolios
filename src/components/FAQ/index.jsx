import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  MessageCircle,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What services does AuraTech provide?",
    answer:
      "AuraTech provides web development, mobile app development, UI/UX design, AI solutions, cloud services, and custom software development.",
  },
  {
    question: "How much does it cost to build a website?",
    answer:
      "The cost depends on your project requirements, features, design complexity, and technology. Contact us with your idea to discuss a suitable estimate.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines depend on the size and complexity of the work. A simple website may take a few weeks, while larger platforms can take longer.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, maintenance and support can include bug fixes, security updates, performance improvements, and ongoing technical assistance.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely! We can improve your existing website with modern UI/UX, responsive layouts, better performance, and updated functionality.",
  },
  {
    question: "How can I start a project with AuraTech?",
    answer:
      "Simply contact us through our contact form or email. Share your requirements, and we can discuss the next steps for your project.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#080b18] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            <HelpCircle size={16} />
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2 className="mt-7 text-4xl font-bold md:text-6xl">
            Got Questions?
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Find answers to common questions about our services, development
            process, and support.
          </p>
        </motion.div>

        {/* FAQ Layout */}
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/15 to-blue-600/10 p-8 md:p-10"
          >
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600">
              <MessageCircle size={30} />
            </div>

            <h3 className="text-3xl font-bold">Still Have Questions?</h3>

            <p className="mt-5 leading-8 text-gray-400">
              Can't find the answer you're looking for? Our team is ready to
              help you with your questions and project ideas.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-4 font-semibold transition hover:scale-105"
            >
              Contact Our Team
              <ArrowUpRight size={19} />
            </a>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-sm text-gray-400">Have a project in mind?</p>

              <p className="mt-2 font-semibold text-purple-300">
                Let's build something amazing together.
              </p>
            </div>
          </motion.div>

          {/* Right FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`overflow-hidden rounded-2xl border transition ${
                    isOpen
                      ? "border-purple-500/40 bg-purple-500/[0.08]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-semibold md:text-lg">
                      <span className="mr-3 text-purple-400">
                        0{index + 1}.
                      </span>
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                        isOpen
                          ? "bg-purple-600 text-white"
                          : "bg-white/10 text-gray-400"
                      }`}
                    >
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 pl-14 text-sm leading-8 text-gray-400 md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
