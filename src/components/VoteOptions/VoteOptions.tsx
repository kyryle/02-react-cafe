import css from "./VoteOptions.module.css";

interface options {
  onVote: string,
  onReset: string,
  canReset: boolean
}


export default function VoteOptions({onVote, onReset, canReset}: options) {
  return (
  <div className={css.container}>
    <button className={css.button} >Good</button>
    <button className={css.button}>Neutral</button>
    <button className={css.button}>Bad</button>
    <button className={`${css.button} ${css.reset}`}>Reset</button>
    </div>);
  console.log(onVote, onReset, canReset);
  
}
