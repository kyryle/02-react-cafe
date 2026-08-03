// import { useState } from "react";

import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes } from "../../types/Votes";

const votes: Votes = {
  good: 0,
  neutral: 0,
  bad: 0,
};
console.log(votes);

export default function App() {
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions onVote='cat' onReset='' canReset={true}/>
      
      </div>
  );
}
// function handleVote(type) {
//     const [clicks, setClicks] = useState(0)
// }

// function resetVotes() {

// }