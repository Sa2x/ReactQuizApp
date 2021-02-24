import React from "react";

const AnswerInGame = ({
  answer,
  answered,
  solution,
  chosen,
  type,
  handleChoose,
}) => {
  if (answered && chosen === type && solution !== type) {
    return (
      <p className="answerBasic" style={{ backgroundColor: "#dd3355" }}>
        {`${answer}`}
      </p>
    );
  } else if (answered && solution === type) {
    return (
      <p className="answerBasic" style={{ backgroundColor: "#55dd85" }}>
        {`${answer}`}
      </p>
    );
  } else if (answered && chosen === type && solution === type) {
    return (
      <p
        className="answerBasic"
        style={{ backgroundColor: "#55dd85", borderWidth: "0.2rem" }}
      >
        {`${answer}`}
      </p>
    );
  } else if (chosen && chosen === type) {
    return <p className="answerChosen">{`${answer}`}</p>;
  } else if (answered && chosen !== type && solution !== type) {
    return <p className="answerBasic">{`${answer}`}</p>;
  } else if (!chosen || (chosen && chosen !== type)) {
    return (
      <p
        onClick={() => {
          handleChoose(type);
        }}
        className="answerBasic"
      >
        {`${answer}`}
      </p>
    );
  }
};

export default AnswerInGame;
