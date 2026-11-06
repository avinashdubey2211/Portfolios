import React from "react";
import { motion } from "framer-motion";
import {  ArrowUpRight } from "lucide-react";

const teamMembers = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
    description: "Building ideas into meaningful digital experiences.",
  },
  {
    name: "Sophia Williams",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
    description: "Creating beautiful and user-friendly interfaces.",
  },
  {
    name: "Daniel Smith",
    role: "Frontend Developer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600",
    description: "Turning creative designs into interactive products.",
  },
  {
    name: "Olivia Brown",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600",
    description: "Making sure every project reaches its full potential.",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="relative overflow-hidden bg-[#080b18] px-5 py-24 text-white md:px-10 lg:px-20"
    >
      {/* Background */}
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
            MEET OUR TEAM
          </span>

          <h2 className="mt-7 text-4xl font-bold md:text-6xl">
            The People Behind
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              The Innovation
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Meet the creative minds and passionate professionals who bring our
            ideas to life.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-900/20"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080b18] via-transparent to-transparent" />

                {/* Social Icons */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 transition duration-300 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur-md hover:bg-purple-600"
                  >
                    {/* <Linkedin size={17} /> */}
                  </a>

                  <a
                    href="#"
                    aria-label="Twitter"
                    className="rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur-md hover:bg-purple-600"
                  >
                    {/* <Twitter size={17} /> */}
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="rounded-full border border-white/20 bg-black/50 p-3 backdrop-blur-md hover:bg-purple-600"
                  >
                    {/* <Instagram size={17} /> */}
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm font-medium text-purple-400">
                  {member.role}
                </p>

                <h3 className="mt-2 text-xl font-bold">{member.name}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {member.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-sm text-gray-500">Team Member</span>

                  <ArrowUpRight
                    size={19}
                    className="text-purple-400 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-10 text-center"
        >
          <h3 className="text-2xl font-bold md:text-3xl">
            Want to Join Our Team?
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-gray-400">
            We are always looking for creative people who love technology and
            innovation.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-7 py-3 font-semibold transition hover:scale-105"
          >
            Let's Connect
            <ArrowUpRight size={19} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
