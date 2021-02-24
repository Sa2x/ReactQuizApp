import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/users/actions";

export const useUser = () => {
  const [user, setUser] = useState("");
  const [points, setPoints] = useState(0);

  const dispatch = useDispatch();

  const goodAnswer = () => {
    setPoints((points) => points + 1);
  };

  const endGame = () => {
    dispatch(addUser(user, points));
  };

  return { user, setUser, points, setPoints, goodAnswer, endGame };
};
