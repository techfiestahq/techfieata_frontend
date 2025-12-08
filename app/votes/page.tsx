"use client";

import React, { useState, useCallback } from "react";
import Navbar from "@/components/navbar/Navbar";
import VotesHero from "@/components/VotesHero";
import VoteComplete from "@/components/VoteComplete";
import VoteSection from "@/components/VoteSection";
import BecomeSponsors from "@/components/BecomeSponsor";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

interface VoteData {
  categoryId: string;
  nomineeId: string;
}

export default function VotesPage() {
  const [token, setToken] = useState<string>("");
  const [votedCategories, setVotedCategories] = useState<Map<string, string>>(
    new Map()
  );
  const [hasVotedInAllCategories, setHasVotedInAllCategories] =
    useState<boolean>(false);
  const [totalCategories, setTotalCategories] = useState<number>(0);

  console.log("totalCategories:", totalCategories);

  // Memoize the callback to prevent unnecessary re-renders
  const handleTokenVerified = useCallback(
    (
      verifiedToken: string,
      votes: VoteData[],
      totalCats: number,
      completedAll: boolean
    ) => {
      setToken(verifiedToken);
      setTotalCategories(totalCats);
      setHasVotedInAllCategories(completedAll);

      // Convert votes array to Map for easy lookup
      const votesMap = new Map<string, string>();
      votes.forEach((vote) => {
        votesMap.set(vote.categoryId, vote.nomineeId);
      });
      setVotedCategories(votesMap);
    },
    [] // Empty deps - this function doesn't depend on any state
  );

  const handleVoteComplete = useCallback(() => {
    setHasVotedInAllCategories(true);
  }, []);

  return (
    <main className="h-auto overflow-x-hidden">
      <Navbar />
      {hasVotedInAllCategories ? (
        <VoteComplete />
      ) : (
        <VotesHero onTokenVerified={handleTokenVerified} />
      )}

      {!hasVotedInAllCategories && (
        <VoteSection
          token={token}
          votedCategories={votedCategories}
          onVoteComplete={handleVoteComplete}
        />
      )}

      <BecomeSponsors />
      <JoinUs />
      <Footer />
    </main>
  );
}
