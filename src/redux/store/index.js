import { createStore, compose } from "redux";
import QuizReducer from "../reducer";

export default function configureStore(initialState) {
  const store = createStore(
    QuizReducer,
    initialState,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (f) => f
    )
  );
  return store;
}
