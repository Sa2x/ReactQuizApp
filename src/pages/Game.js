import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GameInformations from "../components/GameInformations";
import NewGameForm from "../components/NewGameForm";
import QuestionInGame from "../components/QuestionInGame";
import { useGame } from "../hooks/useGame";
import { useUser } from "../hooks/useUser";

const Game = () => {
  const questions = useSelector((state) => state.allQuestions.questions);
  const { round, nextRound, over, newGame } = useGame(questions);
  const { user, setUser, points, goodAnswer, setPoints, endGame } = useUser();

  useEffect(() => {
    if (over) {
      endGame();
    }
  }, [over]);

  if (questions.length !== 0) {
    if (user) {
      return (
        <div className="gamepanel">
          <GameInformations user={user} round={round} points={points} />
          {over ? (
            <div className="endgamepanel">
              <p>You scored {points} points </p>
              <button
                onClick={() => {
                  setUser("");
                  setPoints(0);
                }}
              >
                New game
              </button>
            </div>
          ) : (
            <div className="main">
              <QuestionInGame
                nextRound={nextRound}
                question={questions[round]}
                goodAnswer={goodAnswer}
              />
            </div>
          )}
        </div>
      );
    } else {
      return <NewGameForm setUser={setUser} newGame={newGame} />;
    }
  } else {
    return (
      <div className="noquestions">
        <p>QuizApp</p>
        <div>
          No questions, but you can add questions
          <br></br>
          <Link to="/questions"> here</Link>
        </div>
      </div>
    );
  }
};

export default Game;
