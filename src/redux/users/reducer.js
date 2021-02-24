import { ADD_USER } from "./actions";
import { v4 as uuid } from "uuid";

const initialSate = {
  users: [],
};

function userReducer(state = initialSate, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [
          ...state.users,
          {
            id: uuid(),
            user: action.user,
            point: action.point,
          },
        ],
      };
    default:
      return state;
  }
}

export default userReducer;
