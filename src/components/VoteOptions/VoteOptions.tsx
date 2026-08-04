import css from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";
import { useState } from "react";
// import VoteStats from "../VoteStats/VoteStats";

export interface VoteOptionsProps {
  onVote: VoteType;
  onReset: string;
  canReset: boolean;
}

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}: VoteOptionsProps) {
  const [clicks, setClicks] = useState(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setClicks(clicks + 1);
    console.log(event);
  };

  // const resetVotes = () => { };
  
  return (
    <div className={css.container}>
      <button className={css.button} onClick={handleClick}>
        Good
      </button>
      <button className={css.button} onClick={handleClick}>
        Neutral
      </button>
      <button className={css.button} onClick={handleClick}>
        Bad
      </button>
      <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>
  );
  console.log(onVote, onReset, canReset);
}
