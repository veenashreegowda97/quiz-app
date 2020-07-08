import React, { memo } from "react";
import "./index.scss";
import Dropdown from "../Dropdown";
import { useDispatch, useSelector } from "react-redux";

function Card(props) {
  const { quiz } = props;
  const dispatch = useDispatch();
  const allquiz = useSelector((state) => state.quiz);
  const errors = useSelector((state) => state.error);

  const onQuizChange = (index, e) => {
    let quizTemp = [...allquiz];
    quizTemp[index].selected = e.target.value;
    dispatch({ type: "QUIZ", payload: quizTemp });
  };

  return (
    <div
      className="card-wrapper"
      style={{ borderColor: errors.includes(props.index) ? "red" : "grey" }}
    >
      <div className="questions-section">{quiz && quiz.question}</div>
      <div className="answer-section">
        <Dropdown
          value={quiz.selected}
          options={quiz.options}
          onChange={(e, i) => onQuizChange(e, i)}
          index={props.index}
        />
      </div>
    </div>
  );
}

export default memo(Card);
