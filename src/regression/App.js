import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import { prepareData } from "./components/Plot/dataPrep";
import calculateRegression from "./components/Plot/regression";
import Plot from "./components/Plot/Plot";
import ControlPanel from "./components/ControlPanel/ControlPanel";
import Footer from "./components/Footer/Footer";

const LinearRegression = () => {
  const [regressionState, setRegressionState] = useState({
    regression: false,
    age: "",
  });

  const switchAge = (newAge) =>
    setRegressionState((prevState) => ({ ...prevState, age: newAge }));

  const renderRegression = () => {
    setRegressionState((prevState) => ({
      ...prevState,
      regression: !prevState.regression,
    }));
  };

  const renderRegressionInfo = () => {
    if (regressionState.regression) {
      return calculateRegression(prepareData(regressionState.age)).gradient;
    } else {
      return null;
    }
  };

  return (
    <div className="regression">
      <h5>Sales of the web shop over time</h5>
      <Plot
        regression={regressionState.regression}
        data={prepareData(regressionState.age)}
      />
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large waves-effect waves-light red">
          {renderRegressionInfo()}
        </a>
      </div>

      <ControlPanel
        switchAge={(arg) => switchAge(arg)}
        calcRegression={renderRegression}
      />
      {regressionState.regression ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            Prediction for 2022:{" "}
            {
              calculateRegression(prepareData(regressionState.age))
                .prediction[1]
            }
          </p>
          <p>
            The Coefficient of Determination R2:{" "}
            {calculateRegression(prepareData(regressionState.age)).coefficient}
          </p>
        </div>
      ) : (
        ""
      )}
      <Footer />
    </div>
  );
};

export default LinearRegression;
