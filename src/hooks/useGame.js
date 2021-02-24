import { useState } from "react";

export const useGame = (questions) => {
  const [round, setRound] = useState(0);
  const [over, setOver] = useState(false);

  const nextRound = () => {
    if (round === questions.length - 1) {
      setOver(true);
    } else {
      setRound((round) => round + 1);
    }
  };

  const newGame = () => {
    setOver(false);
    setRound(0);
  };

  return { round, nextRound, over, newGame };
};
