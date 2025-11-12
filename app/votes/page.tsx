"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import VotesHero from "@/components/VotesHero";
import VoteComplete from "@/components/VoteComplete";
import VoteSection from "@/components/VoteSection";
import BecomeSponsors from "@/components/BecomeSponsor";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function VotesPage() {
  const [token, setToken] = useState<string>("");
  const [hasVoted, setHasVoted] = useState<boolean>(false);
  const [votedNomineeId, setVotedNomineeId] = useState<string | undefined>();

  const handleTokenVerified = (
    verifiedToken: string,
    voted: boolean,
    nomineeId?: string
  ) => {
    setToken(verifiedToken);
    setHasVoted(voted);
    setVotedNomineeId(nomineeId);
  };

  const handleVoteSuccess = (nomineeId: string) => {
    setHasVoted(true);
    setVotedNomineeId(nomineeId);
  };

  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      {hasVoted ? (
        <VoteComplete />
      ) : (
        <VotesHero onTokenVerified={handleTokenVerified} />
      )}

      {/* Only show VoteSection if user hasn't voted yet */}
      {!hasVoted && (
        <VoteSection
          token={token}
          hasVoted={hasVoted}
          votedNomineeId={votedNomineeId}
          onVoteSuccess={handleVoteSuccess}
        />
      )}

      <BecomeSponsors />
      <JoinUs />
      <Footer />
    </main>
  );
}
