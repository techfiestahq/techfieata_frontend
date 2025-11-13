"use client";
import React from "react";
import Image from "next/image";
import TokenSentIcon from "@/public/token-sent.svg";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type TokenModalProps = {
  isTokenSentOpen: boolean;
  onClose: () => void;
};

export default function TokenSentModal({
  isTokenSentOpen,
  onClose,
}: TokenModalProps) {
  // click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // only close if the click was directly on the backdrop, not on modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isTokenSentOpen && (
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
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-8 right-8 text-white/60 hover:text-white transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal content */}
            <div className="text-center my-16">
              <Image
                src={TokenSentIcon}
                alt="Token Sent"
                className="mx-auto mb-6"
              />
              <h2 className="text-2xl md:text-4xl font-medium mb-6 leading-snug">
                Your unique voting token has <br /> been sent to your email.
              </h2>

              <p className="text-[#F9F9F9CC] text-lg font-normal mb-8">
                You can use this token anytime to cast your vote. <br /> Once
                used, it becomes invalid.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  onClose();
                }}
                className="flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <button className="w-full h-16 sm:w-auto bg-[#4A21BD] hover:bg-[#7C3AED] text-white text-xl font-medium rounded-[100px] px-14 transition-colors cursor-pointer">
                  Return to Voting Page
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
