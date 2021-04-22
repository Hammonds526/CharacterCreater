import React from "react";

import "./style.css";

import ImageCenter from "../../images/selectiontab.png";

function SelectionTab(props) {
  return (
    <div
      className="position-relative"
      style={{
        width: "125px",
        height: "auto",
        position: "relative",
        ...props.tabStyle,
      }}
    >
      <p className="font-weight-bold position-absolute selection-tab-text">
        {props.charProperty}
      </p>
      <img id="selection" src={ImageCenter} alt="Selection tab"></img>
    </div>
  );
}

export default SelectionTab;
