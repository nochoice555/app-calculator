import React from "react";
import "./CalcBtn.css";
import { observer } from "mobx-react-lite";

const CalcBtns = observer((props) => {
  return (
    <button className="calc-btn" onClick={props.onClick}>
      {props.children}
    </button>
  );
});

export default CalcBtns;
