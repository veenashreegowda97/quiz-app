const initialState = {
  quiz: [],
  error: [],
  quizAnswered: false,
};

function QuizReducer(state = initialState, action) {
  switch (action.type) {
    case "QUIZ":
      return { ...state, quiz: action.payload };
    case "ERROR":
      return { ...state, error: action.payload };
    case "ANSWERED":
      return { ...state, quizAnswered: action.payload };
    default:
      return state;
  }
}

export default QuizReducer;
