
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes } from "../../types/votes";
import { useState } from "react";


const votes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};
console.log(votes);


export default function App() {
  const [clicks, setClicks] = useState<Votes>({good: 0, neutral: 0, bad: 0});
  const [visible, setVisible] = useState(false)

  
  const handleClick = (click: 'good' | 'neutral' | 'bad') => {
    setClicks({...clicks, [click] : clicks[click] + 1});
    setVisible(true)
  };
  const totalVotes = clicks.good + clicks.neutral + clicks.bad

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0

   const resetVotes = () => {
    setClicks({good: 0, neutral: 0, bad: 0})
    setVisible(false)
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleClick} onReset={resetVotes} canReset={visible}/>
      <VoteStats votes = {votes} totalVotes = {totalVotes} positiveRate = {positiveRate}/>
      <Notification/>
      </div>
  );
}
