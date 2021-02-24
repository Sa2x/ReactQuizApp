import React from "react";
import { useDispatch } from "react-redux";
import { removeQuestion } from "../redux/questions/actions";

const QuestionView = ({ question }) => {
  const dispatch = useDispatch();

  const deleteQuestion = (id) => {
    dispatch(removeQuestion(id));
  };

  return (
    <div className="questionview">
      <div className="top">
        <p className="name">{question.question}</p>
        <p
          onClick={() => {
            deleteQuestion(question.id);
          }}
          className="delete"
        >
          x
        </p>
      </div>
      <table>
        <tbody>
          <tr>
            <td>A</td>
            <td>{question.answers.answer_A}</td>
          </tr>
          <tr>
            <td>B</td>
            <td>{question.answers.answer_B}</td>
          </tr>
          <tr>
            <td>C</td>
            <td>{question.answers.answer_C}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{question.answers.answer_D}</td>
          </tr>
        </tbody>
      </table>
      <div className="bottom">
        <p className="solution">Solution: {question.solution}</p>
      </div>
    </div>
  );
};

export default QuestionView;
