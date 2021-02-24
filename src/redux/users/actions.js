export const ADD_USER = "ADD_USER";

export function addUser(user, point) {
  return {
    type: ADD_USER,
    user: user,
    point: point,
  };
}
