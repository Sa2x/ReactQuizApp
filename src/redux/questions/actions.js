export const ADD_QUESTION = "ADD_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";

export function addQuestion(question, answers, solution) {
  return {
    type: ADD_QUESTION,
    question: question,
    answers: answers,
    solution: solution,
  };
}

export function removeQuestion(id) {
  return {
    type: REMOVE_QUESTION,
    id: id,
  };
}
