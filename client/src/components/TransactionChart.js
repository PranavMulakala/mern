import { scaleBand } from "@devexpress/dx-chart-core";
import {
  Animation,
  ArgumentScale,
  EventTracker,
} from "@devexpress/dx-react-chart";
import {
  ArgumentAxis,
  BarSeries,
  Chart,
  Tooltip,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";

import Paper from "@mui/material/Paper";
import dayjs from "dayjs";
import * as React from "react";

const data = [
 // { year: '1950', population: 2.525 },
  //{ year: '1960', population: 3.018 },
  //{ year: '1970', population: 3.682 },
  //{ year: '1980', population: 4.440 },
  //{ year: '1990', population: 5.310 },
  //{ year: '2000', population: 6.127 },
  //{ year: '2010', population: 6.930 },
];

export default function TransactionChart({ data }) {
    const chartData = data.map((item) => {
      item.month = dayjs()
        .month(item._id - 1)
        .format("MMMM");
      return item;
    });
    return (
      <Paper sx={{ marginTop: 5 }}>
        <Chart data={chartData}>
          <ArgumentScale factory={scaleBand} />
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries valueField="totalExpenses" argumentField="month" />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
    );
  }