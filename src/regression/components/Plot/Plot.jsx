import React, { useState } from "react";
import {
  FlexibleWidthXYPlot,
  MarkSeries,
  LineSeries,
  HorizontalGridLines,
  VerticalGridLines,
  XAxis,
  YAxis,
  Crosshair,
  Hint,
} from "react-vis";

import calculateRegression from "./regression";
import { years } from "./dataPrep";

const XMAX = 2022;
function getAlignStyle(align, x, y) {
  return {
    right: 0,
    top: 80 + y,
  };
}

const Plot = (props) => {
  const [plotState, setPlotState] = useState({
    crosshairValues: [],
    value: null,
  });

  const rememberValue = (value) =>
    setPlotState((prevValue) => ({ ...prevValue, value }));

  const { value } = plotState;

  const renderRegression = () => {
    if (props.regression) {
      return (
        <LineSeries
          data={calculateRegression(props.data).regressionData}
          color="red"
          animation="gentle"
          onNearestX={(value, { index }) =>
            setPlotState((prevValue) => {
              console.log("value", value, "index", index);
              return {
                ...prevValue,
                crosshairValues: [
                  calculateRegression(props.data).regressionData[index],
                ],
              };
            })
          }
        />
      );
    }
  };

  return (
    <div className="container">
      <FlexibleWidthXYPlot
        height={400}
        xType="ordinal"
        style={{ strokeWidth: "2px" }}
        onMouseLeave={() =>
          setPlotState((prevState) => ({ ...prevState, crosshairValues: [] }))
        }
      >
        <HorizontalGridLines />
        <VerticalGridLines />
        <MarkSeries
          data={props.data}
          onNearestX={rememberValue}
          animation={"gentle"}
        />
        {value ? (
          <LineSeries
            data={[
              { x: value.x, y: value.y },
              { x: XMAX, y: value.y },
            ]}
            stroke="black"
          />
        ) : null}
        {value ? (
          <Hint value={value} getAlignStyle={getAlignStyle}>
            <div className="rv-hint__content">
              {`(Year ${value.x}, sales: ${value.y})`}
            </div>
          </Hint>
        ) : null}
        {renderRegression()}
        <XAxis top={0} hideTicks tickValues={years} title="X" />
        <XAxis title="Month" tickFormat={(v) => v} />
        <YAxis title="Number of sales" />
        <Crosshair
          values={plotState.crosshairValues}
          style={{
            line: { backgroundColor: "red" },
          }}
        >
          <div className="rv-hint__content" style={{ backgroundColor: "red" }}>
            <p>
              Year:{" "}
              {plotState.crosshairValues[0]
                ? plotState.crosshairValues[0].x
                : []}
            </p>
            <p>
              Sales:{" "}
              {plotState.crosshairValues[0]
                ? plotState.crosshairValues[0].y
                : []}
            </p>
          </div>
        </Crosshair>
      </FlexibleWidthXYPlot>
    </div>
  );
};

export default Plot;
