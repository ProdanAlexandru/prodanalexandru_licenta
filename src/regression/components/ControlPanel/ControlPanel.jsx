import React from "react";

const ControlPanel = (props) => (
  <div>
    <div className="row">
      <a
        className="waves-effect waves-light btn red lighten-1"
        onClick={props.calcRegression}
      >
        Toggle Regression Curve
      </a>
    </div>
  </div>
);

export default ControlPanel;
