import React, { useEffect, memo } from "react";
import { questionBook } from "../../utils/questionBook";
import Card from "../../components/Card";
import "./index.scss";
import Button from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

function Main(props) {
  const quiz = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  useEffect(() => {
    getQuiz(questionBook);
  });
  const getQuiz = (payload) => {
    dispatch({ type: "QUIZ", payload: payload });
  };
  const getError = (payload) => {
    dispatch({ type: "ERROR", payload: payload });
  };
  const submit = () => {
    if (validate()) {
      dispatch({ type: "ANSWERED", payload: true });
      props.history.push("/graph");
    }
  };
  const validate = () => {
    let notAnswered = [];
    quiz.forEach((item, index) => {
      if (item.selected === "") {
        notAnswered.push(index);
      }
    });
    getError(notAnswered);
    return notAnswered.length === 0 ? true : false;
  };
  const clear = () => {
    let quizTemp = quiz.map((item) => {
      return { ...item, selected: "" };
    });
    getQuiz(quizTemp);
    getError([]);
  };

  return (
    <div className="main-wrapper">
      {quiz &&
        quiz.map((item, index) => {
          return (
            <div className="quiz-section" key={index}>
              <Card quiz={item} index={index} />
            </div>
          );
        })}
      <div className="btn-wrapper">
        <div>{<Button onClick={submit}>Submit</Button>}</div>
        <div>{<Button onClick={clear}>Clear</Button>}</div>
      </div>
    </div>
  );
}

export default memo(withRouter(Main));
