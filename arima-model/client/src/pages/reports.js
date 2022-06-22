import React, { Component } from "react";
import { Helmet } from "react-helmet";
import DownloadIcon from "@material-ui/icons/PictureAsPdf";
import LoadingOverlay from "react-loading-overlay";
import {
  Box,
  Container,
  Card,
  CardContent,
  Button,
  Grid,
  MenuItem,
  Divider,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import { CSVReader } from "react-papaparse";
import axios from "axios";
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

const ARIMAPromise = require("arima/async");

ARIMAPromise.then((ARIMA) => {
  const ts = Array(10)
    .fill(0)
    .map((_, i) => i + Math.random() / 5);

  console.log("ts", ts);

  const data_array = [
    {
      Month: "2013-01",
      Sales: 2815,
    },
    {
      Month: "2013-02",
      Sales: 2672,
    },
    {
      Month: "2013-03",
      Sales: 2755,
    },
    {
      Month: "2013-04",
      Sales: 2721,
    },
    {
      Month: "2013-05",
      Sales: 2946,
    },
    {
      Month: "2013-06",
      Sales: 3036,
    },
    {
      Month: "2013-07",
      Sales: 2282,
    },
    {
      Month: "2013-08",
      Sales: 2212,
    },
    {
      Month: "2013-09",
      Sales: 2922,
    },
    {
      Month: "2013-10",
      Sales: 4301,
    },
    {
      Month: "2013-11",
      Sales: 5764,
    },
    {
      Month: "2013-12",
      Sales: 7312,
    },
    {
      Month: "2014-01",
      Sales: 2541,
    },
    {
      Month: "2014-02",
      Sales: 2475,
    },
    {
      Month: "2014-03",
      Sales: 3031,
    },
    {
      Month: "2014-04",
      Sales: 3266,
    },
    {
      Month: "2014-05",
      Sales: 3776,
    },
    {
      Month: "2014-06",
      Sales: 3230,
    },
    {
      Month: "2014-07",
      Sales: 3028,
    },
    {
      Month: "2014-08",
      Sales: 1759,
    },
    {
      Month: "2014-09",
      Sales: 3595,
    },
    {
      Month: "2014-10",
      Sales: 4474,
    },
    {
      Month: "2014-11",
      Sales: 6838,
    },
    {
      Month: "2014-12",
      Sales: 8357,
    },
    {
      Month: "2015-01",
      Sales: 3113,
    },
    {
      Month: "2015-02",
      Sales: 3006,
    },
    {
      Month: "2015-03",
      Sales: 4047,
    },
    {
      Month: "2015-04",
      Sales: 3523,
    },
    {
      Month: "2015-05",
      Sales: 3937,
    },
    {
      Month: "2015-06",
      Sales: 3986,
    },
    {
      Month: "2015-07",
      Sales: 3260,
    },
    {
      Month: "2015-08",
      Sales: 1573,
    },
    {
      Month: "2015-09",
      Sales: 3528,
    },
    {
      Month: "2015-10",
      Sales: 5211,
    },
    {
      Month: "2015-11",
      Sales: 7614,
    },
    {
      Month: "2015-12",
      Sales: 9254,
    },
    {
      Month: "2016-01",
      Sales: 5375,
    },
    {
      Month: "2016-02",
      Sales: 3088,
    },
    {
      Month: "2016-03",
      Sales: 3718,
    },
    {
      Month: "2016-04",
      Sales: 4514,
    },
    {
      Month: "2016-05",
      Sales: 4520,
    },
    {
      Month: "2016-06",
      Sales: 4539,
    },
    {
      Month: "2016-07",
      Sales: 3663,
    },
    {
      Month: "2016-08",
      Sales: 1643,
    },
    {
      Month: "2016-09",
      Sales: 4739,
    },
    {
      Month: "2016-10",
      Sales: 5428,
    },
    {
      Month: "2016-11",
      Sales: 8314,
    },
    {
      Month: "2016-12",
      Sales: 10651,
    },
    {
      Month: "2017-01",
      Sales: 3633,
    },
    {
      Month: "2017-02",
      Sales: 4292,
    },
    {
      Month: "2017-03",
      Sales: 4154,
    },
    {
      Month: "2017-04",
      Sales: 4121,
    },
    {
      Month: "2017-05",
      Sales: 4647,
    },
    {
      Month: "2017-06",
      Sales: 4753,
    },
    {
      Month: "2017-07",
      Sales: 3965,
    },
    {
      Month: "2017-08",
      Sales: 1723,
    },
    {
      Month: "2017-09",
      Sales: 5048,
    },
    {
      Month: "2017-10",
      Sales: 6922,
    },
    {
      Month: "2017-11",
      Sales: 9858,
    },
    {
      Month: "2017-12",
      Sales: 11331,
    },
    {
      Month: "2018-01",
      Sales: 4016,
    },
    {
      Month: "2018-02",
      Sales: 3957,
    },
    {
      Month: "2018-03",
      Sales: 4510,
    },
    {
      Month: "2018-04",
      Sales: 4276,
    },
    {
      Month: "2018-05",
      Sales: 4968,
    },
    {
      Month: "2018-06",
      Sales: 4677,
    },
    {
      Month: "2018-07",
      Sales: 3523,
    },
    {
      Month: "2018-08",
      Sales: 1821,
    },
    {
      Month: "2018-09",
      Sales: 5222,
    },
    {
      Month: "2018-10",
      Sales: 6872,
    },
    {
      Month: "2018-11",
      Sales: 10803,
    },
    {
      Month: "2018-12",
      Sales: 13916,
    },
    {
      Month: "2019-01",
      Sales: 2639,
    },
    {
      Month: "2019-02",
      Sales: 2899,
    },
    {
      Month: "2019-03",
      Sales: 3370,
    },
    {
      Month: "2019-04",
      Sales: 3740,
    },
    {
      Month: "2019-05",
      Sales: 2927,
    },
    {
      Month: "2019-06",
      Sales: 3986,
    },
    {
      Month: "2019-07",
      Sales: 4217,
    },
    {
      Month: "2019-08",
      Sales: 1738,
    },
    {
      Month: "2019-09",
      Sales: 5221,
    },
    {
      Month: "2019-10",
      Sales: 6424,
    },
    {
      Month: "2019-11",
      Sales: 9842,
    },
    {
      Month: "2019-12",
      Sales: 13076,
    },
    {
      Month: "2020-01",
      Sales: 3934,
    },
    {
      Month: "2020-02",
      Sales: 3162,
    },
    {
      Month: "2020-03",
      Sales: 4286,
    },
    {
      Month: "2020-04",
      Sales: 4676,
    },
    {
      Month: "2020-05",
      Sales: 5010,
    },
    {
      Month: "2020-06",
      Sales: 4874,
    },
    {
      Month: "2020-07",
      Sales: 4633,
    },
    {
      Month: "2020-08",
      Sales: 1659,
    },
    {
      Month: "2020-09",
      Sales: 5951,
    },
    {
      Month: "2020-10",
      Sales: 6981,
    },
    {
      Month: "2020-11",
      Sales: 9851,
    },
    {
      Month: "2020-12",
      Sales: 12670,
    },
    {
      Month: "2021-01",
      Sales: 4348,
    },
    {
      Month: "2021-02",
      Sales: 3564,
    },
    {
      Month: "2021-03",
      Sales: 4577,
    },
    {
      Month: "2021-04",
      Sales: 4788,
    },
    {
      Month: "2021-05",
      Sales: 4618,
    },
    {
      Month: "2021-06",
      Sales: 5312,
    },
    {
      Month: "2021-07",
      Sales: 4298,
    },
    {
      Month: "2021-08",
      Sales: 1413,
    },
    {
      Month: "2021-09",
      Sales: 5877,
    },
  ];

  const arima = new ARIMA({ p: 2, d: 1, q: 2, P: 0, D: 0, Q: 0, S: 0, verbose: false }).train(ts);
  console.log("arima", arima);
  const [pred, errors, ...rest] = arima.predict(10);
  console.log("pred", pred);
  console.log("errors", errors);
  console.log("rest", rest);
});

const buttonRef = React.createRef();
export class Reports extends Component {
  state = {
    selectedDate: "",
    predicted: null,
    hidden: true,
    hidden2: true,
    hidden3: true,
    arima: false,

    rnn: false,
    data: null,
    data2: null,
    data3: null,
    years: [],
    yearsx: [],
    sales: [],
    years2: [],
    years3: [],
    sales2: [],
    sales3: [],
    sales4: [],
  };
  handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };
  handleSelectChanege = (event) => {
    this.setState({ predicted: this.state.sales4[event.target.value].toFixed(2) });
    this.setState({ selectedDate: this.state.yearsx[event.target.value] });
  };
  drawArima = () => {
    this.setState({ arima: !this.state.arima });
  };
  drawRnn = () => {
    this.setState({ rnn: !this.state.rnn });
  };
  handleOnFileLoad = (data, file) => {
    this.setState({ hidden2: false });
    var sales2, sales3, sales4;
    axios({
      method: "post",
      url: "http://127.0.0.1:8000/upload/file",
      data: file,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((response) => {
        sales2 = Object.values(JSON.parse(response.data.data1).predicted_sales);

        console.log("response", response);

        sales3 = Object.values(JSON.parse(response.data.data2).Predictions);
        sales4 = Object.values(JSON.parse(response.data.data3).predicted_sales);

        this.setState({ sales2: sales2, sales3, sales3, sales4 });
        var yearsx = [];
        var int = 10;
        var y = "2021-";
        sales4.map((element, index) => {
          if (int > 12) {
            y = "2022-";
            int = 1;
            yearsx.push(y + int);
          } else {
            yearsx.push(y + int);
          }

          int = int + 1;
        });

        console.log(yearsx);

        this.setState({ yearsx: yearsx });
        this.setState({ hidden2: true });
        this.setState({ hidden: false });
      })
      .catch((response) => {
        //handle error
        console.log(response);
      });

    this.setState({ data: data });

    var years = [];
    this.state.data.map((element, index) => {
      if (index > 0) years.push(element.data[0]);
    });

    this.setState({ years: years });

    var years2 = years.filter((item, index) => {
      return index > 84;
    });
    this.setState({ years2: years2 });

    var years3 = years.filter((item, index) => {
      return index > 92;
    });
    this.setState({ years3: years3 });

    var sales = [];
    this.state.data.map((element, index) => {
      if (index > 0) sales.push(element.data[1]);
    });
    this.setState({ sales: sales });
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log("---------------------------");
    console.log(err);
    console.log("---------------------------");
  };
  handleOnRemoveFile = (data) => {
    console.log("---------------------------");
    console.log(data);
    console.log("---------------------------");
  };
  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };
  show = () => {
    this.setState({ hidden2: false });
    setTimeout(() => {
      this.setState({ hidden: false });
      this.setState({ hidden2: true });
    }, 2000);
  };

  render() {
    var arima_graph = this.state.arima
      ? {
          type: "scatter",
          mode: "lines",
          name: "sales after prediction Arima ",
          x: this.state.years2,
          y: this.state.sales2,
          line: { color: "#FF0000" },
        }
      : {
          type: "scatter",
          mode: "lines",
          name: "no graph ",
          x: [],
          y: [],
          line: { color: "#17BECF" },
        };

    var rnn_graph = this.state.rnn
      ? {
          type: "scatter",
          mode: "lines",
          name: "sales after prediction RNN",
          x: this.state.years3,
          y: this.state.sales3,
          line: { color: "#0000FF" },
        }
      : {
          type: "scatter",
          mode: "lines",
          name: "no graph ",
          x: [],
          y: [],
          line: { color: "#17BECF" },
        };

    return (
      <>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <LoadingOverlay active={!this.state.hidden2} spinner text="applying ARIMA algorithms">
          <Container maxWidth="lg">
            <Box
              sx={{
                backgroundColor: "background.default",
                minHeight: "100%",
              }}
            >
              <Box>
                <Card sx={{ m: 1 }}>
                  <CardContent style={{ minHeight: "500px" }}>
                    <Typography
                      component="div"
                      align="center"
                      variant="h3"
                      sx={{ textAlign: "center", p: 1 }}
                    >
                      Time Series Forecasting using ARIMA
                    </Typography>
                    <Divider />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",

                        p: 2,
                      }}
                    >
                      <CSVReader
                        ref={buttonRef}
                        onFileLoad={this.handleOnFileLoad}
                        onError={this.handleOnError}
                        noClick
                        noDrag
                        onRemoveFile={this.handleOnRemoveFile}
                      >
                        {({ file }) => (
                          <aside
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              marginBottom: 10,
                            }}
                          >
                            <Button
                              color="primary"
                              variant="contained"
                              onClick={this.handleOpenDialog}
                            >
                              Import CSV file
                            </Button>
                          </aside>
                        )}
                      </CSVReader>
                    </Box>
                  </CardContent>
                </Card>
              </Box>

              <Box sx={{ m: 3, display: this.state.hidden ? "none" : "block" }}>
                <Card>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        p: 2,
                      }}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={this.drawArima}
                        sx={{
                          m: 1,
                        }}
                      >
                        Apply ARIMA Model
                      </Button>
                    </Box>
                    <Box sx={{ maxWidth: 1000 }}>
                      <Box sx={{ m: 3 }} display="flex" justifyContent="center">
                        <Grid
                          container
                          spacing={0}
                          direction="column"
                          alignItems="center"
                          justify="center"
                        >
                          <div>
                            <Plot
                              data={[
                                {
                                  type: "scatter",
                                  mode: "lines",
                                  name: "sales before prediction ",
                                  x: this.state.years,
                                  y: this.state.sales,
                                  line: { color: "#17BECF" },
                                },
                                arima_graph,
                                rnn_graph,
                              ]}
                              layout={{
                                width: 1000,
                                height: 700,
                                title: "sales",
                                xaxis: {
                                  title: "date(Monthly)",
                                },
                                yaxis: {
                                  title: "Time series data",
                                },
                              }}
                            />
                          </div>
                        </Grid>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        p: 2,
                      }}
                    >
                      <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">select</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={this.state.selectedDate}
                          label="Age"
                          onChange={this.handleSelectChanege}
                        >
                          {this.state.yearsx.map((element, index) => (
                            <MenuItem key={index} value={index}>
                              {element}{" "}
                            </MenuItem>
                          ))}
                        </Select>
                        <FormHelperText>select a date to make prediction</FormHelperText>
                      </FormControl>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        p: 2,
                      }}
                    >
                      {this.state.predicted !== null && (
                        <h3>
                          {" "}
                          The predicted sale for {this.state.selectedDate} is :
                          {"  " + this.state.predicted + " DA"}
                        </h3>
                      )}
                    </Box>
                  </CardContent>
                  <Divider />
                </Card>
              </Box>
            </Box>
          </Container>
        </LoadingOverlay>
      </>
    );
  }
}
