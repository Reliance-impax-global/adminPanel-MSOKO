import React from "react";
import { ResponsiveBump } from "@nivo/bump";
import { useTheme } from "@mui/material";

const bumpChartData = [
  {
    id: "categoryA",
    data: [
      { x: "January", y: 10 },
      { x: "February", y: 20 },
      { x: "March", y: 15 },
      // Add more data points for each month...
    ],
  },
  {
    id: "categoryB",
    data: [
      { x: "January", y: 15 },
      { x: "February", y: 10 },
      { x: "March", y: 5 },
      // Add more data points for each month...
    ],
  },
  {
    id: "categoryC",
    data: [
      { x: "January", y: 5 },
      { x: "February", y: 8 },
      { x: "March", y: 12 },
      // Add more data points for each month...
    ],
  },
];

const colors = ["#ff5733", "#33ff57", "#5733ff"]; // Define colors for each category

const AreaBumpChart = () => {
  const theme = useTheme();

  // Determine the text color based on the current theme mode
  const textColor = theme.palette.mode === "dark" ? "#ffffff" : "#000000";

  // Define the Nivo theme based on the current theme mode
  const nivoTheme = {
    labels: {
      text: {
        fill: textColor, // Set the label text color based on theme mode
      },
    },
    tooltip: {
      container: {
        background: theme.palette.background.paper,
        color: textColor,
      },
    },
  };

  return (
    <div style={{ height: "300px" }}>
      <ResponsiveBump
        data={bumpChartData}
        margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
        colors={colors}
        lineWidth={3}
        activeLineWidth={6}
        inactiveLineWidth={3}
        inactiveOpacity={0.15}
        pointSize={10}
        pointColor={{ from: "color" }}
        startLabel="id"
        endLabel="id"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
        }}
        axisLeft={null}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        theme={nivoTheme}
      />
    </div>
  );
};

export default AreaBumpChart;
