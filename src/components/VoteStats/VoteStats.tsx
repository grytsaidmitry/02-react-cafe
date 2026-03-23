import React from "react";
import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats: React.FC<VoteStatsProps> = ({
  votes,
  totalVotes,
  positiveRate,
}) => {
  return (
    <div className={css.container}>
      <p className={css.stat}>
        Good: <span className={css.value}>{votes.good}</span>
      </p>
      <p className={css.stat}>
        Neutral: <span className={css.value}>{votes.neutral}</span>
      </p>
      <p className={css.stat}>
        Bad: <span className={css.value}>{votes.bad}</span>
      </p>
      <p className={css.stat}>
        Total: <span className={css.value}>{totalVotes}</span>
      </p>
      <p className={css.stat}>
        Positive: <span className={css.value}>{positiveRate}%</span>
      </p>
    </div>
  );
};

export default VoteStats;
