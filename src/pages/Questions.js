import React from "react";
import { useSelector } from "react-redux";
import QuestionAddForm from "../components/QuestionAddForm";
import QuestionView from "../components/QuestionView";

const Questions = () => {
  const questions = useSelector((state) => state.allQuestions.questions);

  return (
    <div className="questionlist">
      <p
        style={{
          fontWeight: "bold",
          borderBottom: "1px solid black",
          paddingBottom: "1rem",
        }}
      >
        Questions
      </p>
      {questions.length === 0 ? (
        <p style={{ fontWeight: "bold" }}>There is no questions</p>
      ) : (
        <div>
          {questions.map((question, index) => {
            return <QuestionView question={question} key={question.id} />;
          })}
        </div>
      )}
      <QuestionAddForm />
    </div>
  );
};

export default Questions;
