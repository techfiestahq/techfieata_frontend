"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import Candidate1 from "@/public/candidate-1.png";

const categories = [
  {
    title: "Community Builder of the Year",
    nominees: [
      { name: "Damilola Odufuwa", img: Candidate1, votes: 20 },
      { name: "David Shokunbi", img: Candidate1, votes: 20 },
      { name: "Daniel Okonkwo", img: Candidate1, votes: 20 },
      { name: "Diana Umeh", img: Candidate1, votes: 20 },
    ],
  },
  {
    title: "Rising Talent Award",
    nominees: [
      { name: "Chike Osondu", img: Candidate1, votes: 20 },
      { name: "Mary Njoku", img: Candidate1, votes: 20 },
      { name: "Ibrahim Lawal", img: Candidate1, votes: 20 },
      { name: "Faith Eze", img: Candidate1, votes: 20 },
    ],
  },
  {
    title: "Tech Content Creator / Educator of the Year",
    nominees: [
      { name: "Gloria James", img: Candidate1, votes: 20 },
      { name: "Chris Olumide", img: Candidate1, votes: 20 },
      { name: "John Akintayo", img: Candidate1, votes: 20 },
      { name: "Ada Okeke", img: Candidate1, votes: 20 },
    ],
  },
  {
    title: "Open Source Contributor of the Year",
    nominees: Array(4).fill({
      name: "David Smith",
      img: Candidate1,
      votes: 0,
    }),
  },
  {
    title: "Innovator of the Year",
    nominees: Array(4).fill({
      name: "David Smith",
      img: Candidate1,
      votes: 0,
    }),
  },
  {
    title: "Technical Leadership Award",
    nominees: Array(4).fill({
      name: "David Smith",
      img: Candidate1,
      votes: 0,
    }),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Awards() {
  return (
    <section className="bg-black text-white">
      <ContainerLayout>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            className="text-center text-2xl md:text-4xl font-semibold mb-14 border-b border-white pb-4"
          >
            Award Categories
          </motion.h2>

          {/* Category List */}
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="mb-16 border-b border-white/10 pb-10"
            >
              <h3 className="text-xl md:text-3xl font-semibold mb-6">
                {cat.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {cat.nominees.map((n, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUp}
                    className="flex flex-col items-center text-center"
                  >
                    {/* Nominee Image */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                      {n.img ? (
                        <Image
                          src={n.img}
                          alt={n.name}
                          fill
                          className="object-cover object-center"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-[#1C1C1C] text-white/30 text-sm">
                          No Image
                        </div>
                      )}
                    </div>

                    {/* Nominee Name */}
                    <p className="mt-3 mb-2 text-2xl font-normal">{n.name}</p>
                    <div className="w-full flex items-center gap-[26px] mt-4">
                      {/* Vote Button */}
                      <button className="w-4/5 h-[51px] bg-[#8154FE] hover:bg-[#7C3AED] text-white font-normal rounded-full text-2xl transition-colors cursor-pointer">
                        Vote
                      </button>

                      {/* Inactive Vote Button */}
                      {/* <button className="w-4/5 h-[51px] bg-[#C5B3F8] text-white font-normal rounded-full text-2xl cursor-not-allowed">
                        Voted
                      </button> */}

                      {/* Vote Percentage */}
                      <div className="text-white text-end">
                        <p className="text-2xl font-bold">{n.votes}%</p>
                        <p className="text-xs font-normal">Votes</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
