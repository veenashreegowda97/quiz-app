import React, { memo } from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
charts(FusionCharts);

function BarGraph(props) {
  const quizAnswered = useSelector((state) => state.quizAnswered);
  if (quizAnswered === false) {
    props.history.push("/");
  }
  const quiz = useSelector((state) => state.quiz);
  let count = 0;
  quiz.map((item) => {
    if (item.ans === item.selected) {
      count++;
    }
  });
  const incorrectAns = quiz.length - count;
  const dataSource = {
    chart: {
      caption: "Based on answers submitted",
      yaxisname: "Answer count",
      integer: "1",
      theme: "fusion",
    },
    data: [
      {
        label: "Correct",
        value: count,
      },
      {
        label: "Incorrect",
        value: incorrectAns,
      },
    ],
  };
  return (
    <ReactFusioncharts
      type="column3d"
      width="100%"
      height="50%"
      dataFormat="JSON"
      dataSource={dataSource}
    />
  );
}

export default memo(withRouter(BarGraph));
