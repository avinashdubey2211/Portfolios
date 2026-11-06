import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ArrowUpRight, BadgeCheck } from "lucide-react";

const testimonials = [
  {
    name: "James Wilson",
    role: "CEO, TechVision",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    review:
      "AuraTech transformed our business website into a modern digital experience. Their team understood our vision and delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Sophia Anderson",
    role: "Founder, CreativeHub",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
    review:
      "Amazing design quality and professional communication. The entire development process was smooth and the final result was impressive.",
    rating: 5,
  },
  {
    name: "Michael Brown",
    role: "Product Manager, Finova",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    review:
      "The dashboard they developed is fast, beautiful, and easy to use. I would definitely recommend their team for digital projects.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080b18] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      {/* Background Effects */}
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
          <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-7 text-4xl font-bold md:text-6xl">
            What Our Clients
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            We believe great work speaks for itself. Here's what our clients
            have to say about their experience with AuraTech.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 flex max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
        >
          <h3 className="text-5xl font-bold">4.9/5</h3>

          <div className="my-4 flex gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={22} fill="currentColor" />
            ))}
          </div>

          <p className="text-sm text-gray-400">Client satisfaction score</p>
        </motion.div>

        {/* Review Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-900/20"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-400">
                  <Quote size={25} />
                </div>

                <div className="flex gap-1 text-yellow-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="min-h-36 leading-8 text-gray-300">
                "{item.review}"
              </p>

              {/* Client Profile */}
              <div className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full border-2 border-purple-500/40 object-cover"
                />

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold">{item.name}</h3>
                    <BadgeCheck size={17} className="text-blue-400" />
                  </div>

                  <p className="mt-1 text-sm text-gray-500">{item.role}</p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="ml-auto shrink-0 text-purple-400 transition group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold md:text-3xl">
            Ready to Create Something Great?
          </h3>

          <p className="mt-3 text-gray-400">
            Let's make your next project a success.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold transition hover:scale-105"
          >
            Start Your Project
            <ArrowUpRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
