"use client";
import React, { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import Link from "next/link";

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
  linkedinUrl: string;
  twitterUrl: string;
}

interface Category {
  id: string;
  title: string;
  nominees: Nominee[];
}

interface VoteSectionProps {
  token?: string;
  votedCategories: Map<string, string>;
  onVoteComplete?: () => void;
}

export default function VoteSection({
  token,
  votedCategories,
  onVoteComplete,
}: VoteSectionProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Track selected nominees (categoryId -> nomineeId)
  const [selectedNominees, setSelectedNominees] = useState<Map<string, string>>(
    new Map()
  );

  useEffect(() => {
    fetchResults();
  }, []);

  useEffect(() => {
    // Initialize with already voted nominees
    setSelectedNominees(new Map(votedCategories));
  }, [votedCategories]);

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

  console.log(categories);

  const handleSelectNominee = (categoryId: string, nomineeId: string) => {
    // Can't change vote if already voted in this category
    if (votedCategories.has(categoryId)) {
      setErrorMessage("You have already voted in this category");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setSelectedNominees((prev) => {
      const updated = new Map(prev);
      // Toggle selection: if already selected, deselect; otherwise select
      if (updated.get(categoryId) === nomineeId) {
        updated.delete(categoryId);
      } else {
        updated.set(categoryId, nomineeId);
      }
      return updated;
    });
  };

  const handleSubmitVotes = async () => {
    if (!token) {
      setErrorMessage("Please verify your token first");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    // Get only new selections (not already voted)
    const newSelections = Array.from(selectedNominees.entries()).filter(
      ([categoryId]) => !votedCategories.has(categoryId)
    );

    if (newSelections.length === 0) {
      setErrorMessage("Please select at least one nominee to vote for");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const votes = newSelections.map(([, nomineeId]) => ({ nomineeId }));

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/vote/batch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
          votes: votes,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to submit votes");
      }

      console.log("Votes submitted successfully:", data);
      setSuccessMessage(data.message || "Votes submitted successfully!");

      // Wait a moment to show success message, then trigger completion
      setTimeout(() => {
        onVoteComplete?.();
      }, 1500);
    } catch (err) {
      console.error("Vote submission error:", err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to submit votes. Please try again.";
      setErrorMessage(errorMessage);
      setTimeout(() => setErrorMessage(""), 5000);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <section className="bg-black text-white text-center py-20">
        <p>Loading categories...</p>
      </section>
    );
  }

  const hasNewSelections = Array.from(selectedNominees.keys()).some(
    (categoryId) => !votedCategories.has(categoryId)
  );

  return (
    <section className="bg-black text-white pb-20">
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

          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500 rounded-lg p-4 mb-6 text-center max-w-2xl mx-auto"
            >
              <p className="text-green-400 text-lg">{successMessage}</p>
            </motion.div>
          )}

          {categories.map((category: Category) => {
            const hasVotedInCategory = votedCategories.has(category.id);
            const votedNomineeId = votedCategories.get(category.id);
            const selectedNomineeId = selectedNominees.get(category.id);

            return (
              <motion.div
                key={category.id}
                variants={fadeUp}
                className="mb-16 border-b border-white/10 pb-10"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl md:text-3xl font-semibold">
                    {category.title}
                  </h3>
                  {hasVotedInCategory && (
                    <span className="text-green-400 text-sm md:text-base font-medium">
                      ✓ Voted
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-8">
                  {category.nominees.map((nominee, idx) => {
                    const isSelected = selectedNomineeId === nominee.id;
                    const isVotedNominee = votedNomineeId === nominee.id;

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
                          {/* Selection Indicator */}
                          {/* {(isSelected || isVotedNominee) && (
                            <div className="absolute inset-0 bg-[#8154FE]/20 border-4 border-[#8154FE] rounded-lg flex items-center justify-center">
                              <div className="bg-[#8154FE] rounded-full w-12 h-12 flex items-center justify-center">
                                <span className="text-white text-2xl">✓</span>
                              </div>
                            </div>
                          )} */}
                        </div>

                        <p className="mt-3 mb-2 text-2xl font-normal">
                          {nominee.name}
                        </p>

                        <div className="w-full flex items-center gap-[26px] mt-4">
                          <button
                            onClick={() =>
                              handleSelectNominee(category.id, nominee.id)
                            }
                            disabled={hasVotedInCategory || !token}
                            className={`w-4/5 h-[51px] text-white font-normal rounded-full text-2xl transition-colors ${
                              isVotedNominee
                                ? "bg-green-600 cursor-not-allowed"
                                : isSelected
                                ? "bg-[#00BA00] cursor-pointer"
                                : hasVotedInCategory
                                ? "bg-[#00BA00] cursor-not-allowed"
                                : !token
                                ? "bg-[#C5B3F8] cursor-not-allowed"
                                : "bg-[#8154FE] hover:bg-[#7C3AED] cursor-pointer"
                            }`}
                          >
                            {isVotedNominee
                              ? "Your Vote"
                              : isSelected
                              ? "Your Vote"
                              : hasVotedInCategory
                              ? "Voted"
                              : "Vote"}
                          </button>

                          <div className="flex items-center gap-5 text-white text-end">
                            <Link href={nominee?.twitterUrl} target="_blank">
                              <FaTwitter size={24} className="cursor-pointer" />
                            </Link>
                            <Link href={nominee?.linkedinUrl} target="_blank">
                              <FaLinkedin
                                size={24}
                                className="cursor-pointer"
                              />
                            </Link>
                            {/* <p className="text-xs font-normal">
                              {nominee.votesCount}{" "}
                              {nominee.votesCount === 1 ? "vote" : "votes"}
                            </p> */}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {/* Submit Button */}
          {token && hasNewSelections && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mt-12"
            >
              <button
                onClick={handleSubmitVotes}
                disabled={submitting}
                className={`bg-transparent border border-[#FFFFFF] text-white text-2xl font-medium rounded-[100px] px-16 h-16 transition-colors ${
                  submitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#4A21BD] cursor-pointer"
                }`}
              >
                {submitting ? "Submitting Votes..." : "Submit All Votes"}
              </button>
            </motion.div>
          )}
        </motion.div>
      </ContainerLayout>
    </section>
  );
}
