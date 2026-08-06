import css from "./VoteOptions.module.css";
// import type { VoteType } from "../../types/votes";
// import { useState } from "react";
// import VoteStats from "../VoteStats/VoteStats";

// export interface VoteOptionsProps {
//   onVote: ;
//   onReset: ;
//   canReset: boolean;
// }

export default function VoteOptions({
  onVote,
  onReset,
  canReset,
}) {
  // const [clicks, setClicks] = useState(0);
  // const [visible, setVisible] = useState(canReset);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setClicks(clicks + 1);
  //   console.log(clicks);
  //   setVisible(true)
  // };

  // const resetVotes = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setClicks(0)
  //   setVisible(false)
  // };

  return (
    <div className={css.container}>
      <button className={css.button} onClick={onVote}>
        Good
      </button>
      <button className={css.button} onClick={onVote}>
        Neutral
      </button>
      <button className={css.button} onClick={onVote}>
        Bad
      </button>
      {canReset &&<>
        <button className={`${css.button} ${css.reset}`} onClick={onReset}>
          Reset
        </button>
        </>}
    </div>
  );
  console.log(onVote, onReset, canReset);
}
