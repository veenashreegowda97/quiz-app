import React, { memo } from "react";
import "./index.scss";

function Button(props) {
  return (
    <button onClick={props.onClick} className="button-wrapper">
      {props.children}
    </button>
  );
}

export default memo(Button);
