
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
  const [clicks, setClicks] = useState(0);
  const [visible, setVisible] = useState(false)

  
  const handleClick = () => {
    setClicks(clicks + 1);
    console.log(clicks);
    setVisible(true)
  };

   const resetVotes = () => {
    setClicks(0)
    setVisible(false)
  };
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote={handleClick} onReset={resetVotes} canReset={visible}/>
      <VoteStats votes = {votes} totalVotes = {0} positiveRate = {0}/>
      <Notification/>
      </div>
  );
}
