import { ADD_QUESTION, REMOVE_QUESTION } from "./actions";
import { v4 as uuid } from "uuid";

const initialSate = {
  questions: [],
};

function questionReducer(state = initialSate, action) {
  switch (action.type) {
    case ADD_QUESTION:
      return {
        questions: [
          ...state.questions,
          {
            id: uuid(),
            question: action.question,
            answers: action.answers,
            solution: action.solution,
          },
        ],
      };
    case REMOVE_QUESTION:
      return {
        questions: state.questions.filter(
          (question, index) => question.id !== action.id
        ),
      };
    default:
      return state;
  }
}

export default questionReducer;
