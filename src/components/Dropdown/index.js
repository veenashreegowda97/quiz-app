import React, { memo } from "react";
import "./index.scss";

function Dropdown({ value, options, index, onChange }) {
  return (
    <select
      value={value}
      className="dropdown-wrapper"
      onChange={(e) => onChange(index, e)}
    >
      <option value="">Select an Option</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default memo(Dropdown);
