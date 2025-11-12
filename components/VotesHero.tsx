"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContainerLayout from "@/components/ContainerLayout";
import TokenModal from "@/components/TokenModal";
import TokenSentModal from "./TokenSentModal";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.3 },
  },
};

interface VoteSectionProps {
  onTokenVerified?: (
    token: string,
    hasVoted: boolean,
    votedNomineeId?: string
  ) => void;
}

export default function VotesHero({ onTokenVerified }: VoteSectionProps) {
  const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
  const [isTokenSentOpen, setIsTokenSentOpen] = useState(false);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [checkingToken, setCheckingToken] = useState(true);

  // Memoize checkExistingToken to avoid recreating it on every render
  const checkExistingToken = useCallback(async () => {
    setCheckingToken(true);

    // Check localStorage for saved token
    const savedToken = localStorage.getItem("voting_token");

    if (savedToken) {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/vote/status/${savedToken}`
        );

        const data = await res.json();

        if (res.ok && data.isVerified) {
          setToken(savedToken);
          setIsVerified(true);

          // Pass token and vote status to parent
          onTokenVerified?.(savedToken, data.hasVoted, data.vote?.nomineeId);
        } else {
          // Token invalid or not verified, clear localStorage
          localStorage.removeItem("voting_token");
        }
      } catch (err) {
        console.error("Error checking existing token:", err);
        localStorage.removeItem("voting_token");
      }
    }

    setCheckingToken(false);
  }, [onTokenVerified]);

  // Check if user already has a verified token in localStorage
  useEffect(() => {
    checkExistingToken();
  }, [checkExistingToken]);

  const handleVerifyToken = async () => {
    const trimmedToken = token.trim().toUpperCase();

    if (!trimmedToken) {
      setErrorMessage("Please enter a token");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/token/verify`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: trimmedToken }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Token verification failed.");
      }

      console.log("Verified token response:", data);

      // Save token to localStorage
      localStorage.setItem("voting_token", trimmedToken);

      setIsVerified(true);

      // Check vote status after verification
      const statusRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/vote/status/${trimmedToken}`
      );

      const statusData = await statusRes.json();

      onTokenVerified?.(
        trimmedToken,
        statusData.hasVoted || false,
        statusData.vote?.nomineeId
      );
    } catch (err) {
      console.error(err);
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Verification failed. Please try again.";
      setErrorMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  if (checkingToken) {
    return (
      <section className="bg-[#000000] relative w-full overflow-hidden text-white">
        <ContainerLayout>
          <div className="relative flex flex-col items-center justify-center text-center py-24 md:py-32">
            <p className="text-white/70 text-xl">Checking token status...</p>
          </div>
        </ContainerLayout>
      </section>
    );
  }

  return (
    <section
      id="vote"
      className="bg-[#000000] relative w-full overflow-hidden text-white"
    >
      <ContainerLayout>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex flex-col items-center justify-center text-center pt-24 md:pt-32"
        >
          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-7xl font-medium leading-tight mb-5"
          >
            Vote for the people shaping <br className="hidden md:block" />{" "}
            Nigeria&apos;s tech story.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-[#F9F9F9CC] text-base md:text-2xl font-normal mb-10"
          >
            Your vote helps spotlight the builders, innovators, and connectors{" "}
            <br className="hidden md:block" />
            driving Nigeria&apos;s tech ecosystem forward.
          </motion.p>

          <AnimatePresence mode="wait">
            {!isVerified ? (
              <motion.div
                key="token-input"
                variants={fadeInScale}
                initial="hidden"
                animate="show"
                exit="exit"
                className="w-full"
              >
                {/* Token Input */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 w-full"
                >
                  <input
                    type="text"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    onBlur={(e) => setToken(e.target.value.trim())}
                    placeholder="Enter your unique voting token"
                    className="bg-[#FFFFFF] border border-[#8E8E9378] text-xl font-normal w-full sm:w-[432px] h-16 rounded-[100px] px-6 text-black outline-none"
                  />
                  <button
                    onClick={handleVerifyToken}
                    disabled={loading}
                    className={`w-full h-16 sm:w-auto text-white text-xl font-medium rounded-[100px] px-14 transition-colors cursor-pointer ${
                      loading
                        ? "bg-gray-500"
                        : "bg-[#4A21BD] hover:bg-[#7C3AED]"
                    }`}
                  >
                    {loading ? "Verifying..." : "Verify"}
                  </button>
                </motion.div>

                {errorMessage && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[#FF383C] text-xl font-normal mb-4"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                {/* Link to get token */}
                <motion.p
                  variants={fadeUp}
                  onClick={() => setIsTokenModalOpen(true)}
                  className="text-white/70 text-2xl font-medium hover:text-white transition-colors cursor-pointer"
                >
                  Get your free token here
                </motion.p>
              </motion.div>
            ) : (
              <motion.div
                key="token-verified"
                variants={fadeInScale}
                initial="hidden"
                animate="show"
                exit="exit"
                className="bg-transparent border border-[#FFFFFF] rounded-[100px] py-[19px] px-[41px] mt-8"
              >
                <p className="text-white text-lg font-medium">
                  Token Verified ✅
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </ContainerLayout>

      {/* Modals */}
      <TokenModal
        isTokenModalOpen={isTokenModalOpen}
        onClose={() => setIsTokenModalOpen(false)}
        setIsTokenSentOpen={setIsTokenSentOpen}
      />
      <TokenSentModal
        isTokenSentOpen={isTokenSentOpen}
        onClose={() => setIsTokenSentOpen(false)}
      />
    </section>
  );
}
