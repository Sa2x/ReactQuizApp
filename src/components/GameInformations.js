import React from "react";
import { useSelector } from "react-redux";

const GameInformations = ({ round, user, points }) => {
  const questions = useSelector((state) => state.allQuestions.questions);

  return (
    <div className="infopanel">
      <div>Current user: {user}</div>
      <div>All questions: {questions.length}</div>
      <div>Current round: {round + 1}</div>
      <div>Correct answers: {points}</div>
    </div>
  );
};

export default GameInformations;
