import React, { useState } from "react";
import AnswerInGame from "./AnswerInGame";

const QuestionInGame = ({ question, nextRound, goodAnswer }) => {
  const [chosen, setChosen] = useState("");
  const [answered, setAnswered] = useState(false);

  const handleChoose = (chosen) => {
    setChosen(chosen);
  };

  const handleSend = () => {
    setAnswered(true);
    if (chosen === question.solution) {
      goodAnswer();
    }
  };

  const handleNext = () => {
    if (chosen === question.solution) {
      nextRound(true);
    } else {
      nextRound(false);
    }
    setChosen(false);
    setAnswered(false);
  };

  return (
    <div className="questioningame">
      <div className="top">
        <p style={{ fontWeight: "bold" }}>{question.question}</p>
      </div>
      <div className="answers">
        <AnswerInGame
          answer={question.answers.answer_A}
          handleChoose={handleChoose}
          type="A"
          chosen={chosen}
          solution={question.solution}
          answered={answered}
        />
        <AnswerInGame
          answer={question.answers.answer_B}
          handleChoose={handleChoose}
          type="B"
          chosen={chosen}
          solution={question.solution}
          answered={answered}
        />
        <AnswerInGame
          answer={question.answers.answer_C}
          handleChoose={handleChoose}
          type="C"
          chosen={chosen}
          solution={question.solution}
          answered={answered}
        />
        <AnswerInGame
          answer={question.answers.answer_D}
          handleChoose={handleChoose}
          type="D"
          chosen={chosen}
          solution={question.solution}
          answered={answered}
        />
      </div>
      <div className="bottom">
        <button onClick={handleSend} disabled={answered}>
          Send
        </button>
        <button onClick={handleNext} disabled={!answered}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuestionInGame;
