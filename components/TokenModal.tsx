"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { X } from "lucide-react";

type TokenModalProps = {
  isTokenModalOpen: boolean;
  onClose: () => void;
  setIsTokenSentOpen: (isOpen: boolean) => void;
};

export default function TokenModal({
  isTokenModalOpen,
  setIsTokenSentOpen,
  onClose,
}: TokenModalProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/token/request`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data?.message || "Failed to send token.");
      }

      // ✅ Success: Close current modal & open Token Sent modal
      onClose();
      setIsTokenSentOpen(true);
    } catch (err) {
      console.error(err);
      const errorMessage =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isTokenModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#0D0D0D] text-white rounded-3xl shadow-2xl w-[90%] max-w-1/2 p-8 border border-[#141414]"
          >
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center my-16">
              <h2 className="text-2xl md:text-4xl font-medium mb-6 leading-snug">
                Enter your email to receive <br /> your unique voting token
              </h2>

              <p className="text-[#F9F9F9CC] text-lg font-normal mb-8">
                Each voter receives a unique access token via email. <br />
                You can use it anytime, but only once.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="bg-[#FFFFFF] border border-[#8E8E9378] text-xl font-normal w-[432px] h-16 rounded-[100px] px-6 text-black outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full h-16 sm:w-auto text-white text-xl font-medium rounded-[100px] px-14 transition-colors cursor-pointer ${
                    loading ? "bg-gray-500" : "bg-[#4A21BD] hover:bg-[#7C3AED]"
                  }`}
                >
                  {loading ? "Sending..." : "Send Token"}
                </button>
              </form>

              {error && <p className="text-red-400 mt-4">{error}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
