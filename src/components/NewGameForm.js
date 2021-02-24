import React from "react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
const NewGameForm = ({ setUser, newGame }) => {
  const validationSchema = yup.object({
    name: yup.string().required(),
  });
  return (
    <div className="newgamepanel">
      <p>QuizApp</p>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setUser(values.name);
          newGame();
        }}
      >
        {({ isValid }) => (
          <Form className="newgameform">
            <Field type="name" name="name" placeholder="Your name" />
            <button type="submit" disabled={!isValid}>
              new game
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewGameForm;
