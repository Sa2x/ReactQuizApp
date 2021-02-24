import { combineReducers, createStore } from "redux";
import questionReducer from "./questions/reducer";
import userReducer from "./users/reducer";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

const allReducers = combineReducers({
  allQuestions: questionReducer,
  allUsers: userReducer,
});

const persistedState = loadFromLocalStorage();

const store = createStore(
  allReducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;
