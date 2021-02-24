import React from "react";
import { Formik, Form, Field } from "formik";
import { addQuestion } from "../redux/questions/actions";
import { useDispatch } from "react-redux";
import * as yup from "yup";

const QuestionAddForm = () => {
  const dispatch = useDispatch();

  const validationSchema = yup.object({
    question: yup.string().required(),
    answers: yup.object({
      answer_A: yup.string().required(),
      answer_B: yup.string().required(),
      answer_C: yup.string().required(),
      answer_D: yup.string().required(),
    }),
    solution: yup.string().required(),
  });
  return (
    <div>
      <Formik
        initialValues={{
          question: "",
          answers: {
            answer_A: "",
            answer_B: "",
            answer_C: "",
            answer_D: "",
          },
          solution: "A",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          dispatch(
            addQuestion(values.question, values.answers, values.solution)
          );
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isValid }) => (
          <Form className="newquestion">
            <label style={{ borderBottom: "2px solid #000000" }}>
              Add new question
            </label>
            <label>
              Question
              <Field type="text" name="question" placeholder="Question name" />
            </label>
            <label>Answers</label>
            <div className="answerbox">
              <label>
                A answer
                <Field
                  type="text"
                  name="answers.answer_A"
                  placeholder="A answer"
                />
              </label>
              <label>
                B answer
                <Field
                  type="text"
                  name="answers.answer_B"
                  placeholder="B answer"
                />
              </label>
              <label>
                C answer
                <Field
                  type="text"
                  name="answers.answer_C"
                  placeholder="C answer"
                />
              </label>
              <label>
                D answer
                <Field
                  type="text"
                  name="answers.answer_D"
                  placeholder="D answer"
                />
              </label>
            </div>
            <label>
              Solution
              <Field type="select" as="select" name="solution">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </Field>
            </label>
            <button type="submit" disabled={!isValid}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuestionAddForm;
