
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes, VoteType } from "../../types/votes";
import { useState } from "react";


export default function App() {
  const [clicks, setClicks] = useState<Votes>({good: 0, neutral: 0, bad: 0});

  
  const handleClick = (click: VoteType) => {
    setClicks({...clicks, [click] : clicks[click] + 1});
  };
  const totalVotes = clicks.good + clicks.neutral + clicks.bad

  const positiveRate = totalVotes
    ? Math.round((clicks.good / totalVotes) * 100)
    : 0

   const resetVotes = () => {
    setClicks({good: 0, neutral: 0, bad: 0})
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleClick} onReset={resetVotes} canReset={totalVotes > 0} />
      {totalVotes > 0 ?
        <VoteStats votes={clicks} totalVotes={totalVotes} positiveRate={positiveRate} />
        :<Notification />}
      </div>
  );
}
