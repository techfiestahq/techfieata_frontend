"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface Nominee {
  id: string;
  name: string;
  imageUrl: string | null;
  votesCount: number;
  percentage: string;
}

interface Category {
  id: string;
  title: string;
  nominees: Nominee[];
}

interface AwardsProps {
  token?: string;
  hasVoted?: boolean;
  votedNomineeId?: string;
  onVoteSuccess?: (nomineeId: string) => void;
}

export default function VoteSection({
  token,
  hasVoted,
  votedNomineeId,
  onVoteSuccess,
}: AwardsProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [votingNomineeId, setVotingNomineeId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userHasVoted, setUserHasVoted] = useState(hasVoted || false);
  const [userVotedNomineeId, setUserVotedNomineeId] = useState(votedNomineeId);

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    setUserHasVoted(hasVoted || false);
    setUserVotedNomineeId(votedNomineeId);
  }, [hasVoted, votedNomineeId]);

  const fetchResults = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/vote/results`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) throw new Error("Failed to fetch results");

      const data = await res.json();
      setCategories(data.categories);
    } catch (error) {
      console.error("Error fetching results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (nomineeId: string) => {
    if (!token) {
      setErrorMessage("Please verify your token first");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    if (userHasVoted) {
      setErrorMessage("You have already cast your vote");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setVotingNomineeId(nomineeId);
    setErrorMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          nomineeId: nomineeId,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to cast vote");
      }

      console.log("Vote cast successfully:", data);

      // Mark as voted locally
      setUserHasVoted(true);
      setUserVotedNomineeId(nomineeId);

      // Notify parent component
      if (onVoteSuccess) {
        onVoteSuccess(nomineeId);
      }

      // Refresh results to show updated vote counts
      await fetchResults();
    } catch (err) {
      console.error("Vote error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to cast vote. Please try again.";
      setErrorMessage(errorMessage);
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setVotingNomineeId(null);
    }
  };

  if (loading) {
    return (
      <section className="bg-black text-white text-center py-20">
        <p>Loading categories...</p>
      </section>
    );
  }

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
          <motion.h2
            variants={fadeUp}
            className="text-center text-2xl md:text-4xl font-semibold mb-14 border-b border-white pb-4"
          >
            Award Categories
          </motion.h2>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500 rounded-lg p-4 mb-6 text-center max-w-2xl mx-auto"
            >
              <p className="text-red-400 text-lg">{errorMessage}</p>
            </motion.div>
          )}

          {categories.map((category: Category) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              className="mb-16 border-b border-white/10 pb-10"
            >
              <h3 className="text-xl md:text-3xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                {category.nominees.map((nominee, idx) => {
                  const isVoting = votingNomineeId === nominee.id;
                  const isVotedNominee = userVotedNomineeId === nominee.id;

                  return (
                    <motion.div
                      key={nominee.id || idx}
                      variants={fadeUp}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg">
                        {nominee.imageUrl ? (
                          <Image
                            src={nominee.imageUrl}
                            alt={nominee.name}
                            fill
                            className="object-cover object-center"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-[#1C1C1C] text-white/30 text-sm">
                            No Image
                          </div>
                        )}
                      </div>

                      <p className="mt-3 mb-2 text-2xl font-normal">
                        {nominee.name}
                      </p>
                      <div className="w-full flex items-center gap-[26px] mt-4">
                        <button
                          onClick={() => handleVote(nominee.id)}
                          disabled={isVoting || userHasVoted || !token}
                          className={`w-4/5 h-[51px] text-white font-normal rounded-full text-2xl transition-colors ${
                            isVotedNominee
                              ? "bg-green-600 cursor-not-allowed"
                              : isVoting
                              ? "bg-gray-500 cursor-not-allowed"
                              : userHasVoted
                              ? "bg-gray-700 cursor-not-allowed"
                              : !token
                              ? "bg-gray-700 cursor-not-allowed"
                              : "bg-[#8154FE] hover:bg-[#7C3AED] cursor-pointer"
                          }`}
                        >
                          {isVotedNominee
                            ? "Your Vote ✓"
                            : isVoting
                            ? "Voting..."
                            : userHasVoted
                            ? "Voted"
                            : "Vote"}
                        </button>
                        <div className="text-white text-end">
                          <p className="text-2xl font-bold">
                            {nominee.percentage}%
                          </p>
                          <p className="text-xs font-normal">
                            {nominee.votesCount}{" "}
                            {nominee.votesCount === 1 ? "vote" : "votes"}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
