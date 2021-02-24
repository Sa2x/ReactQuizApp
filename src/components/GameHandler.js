import React from "react";
import { useGame } from "../hooks/useGame";
import { useSelector } from "react-redux";

const GameHandler = () => {
  const questions = useSelector((state) => state.allQuestions.questions);
  const { nextRound, round } = useGame(questions);

  return (
    <>
      <p>{questions[round].question}</p>
      <p>{questions[round].answers.answer_A}</p>
      <p>{questions[round].answers.answer_B}</p>
      <p>{questions[round].answers.answer_C}</p>
      <p>{questions[round].answers.answer_D}</p>
      <button
        onClick={() => {
          console.log("hello");
          nextRound(true);
        }}
      >
        Tovább
      </button>
    </>
  );
};

export default GameHandler;
