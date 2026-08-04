
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import Notification from "../Notification/Notification";
import type { Votes } from "../../types/votes";


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
      <VoteOptions onVote="good" onReset='' canReset={true}/>
      <VoteStats votes = {votes} totalVotes = {0} positiveRate = {0}/>
      <Notification/>
      </div>
  );
}
