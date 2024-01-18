// src/components/AnalyticsBarChart.js

import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import { Card, CardContent, Grid, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import StreamChart from "./StreamChart";
import { Link } from "react-router-dom";

const data = [
  {
    category: "Category A",
    userTraffic: 3000,
    conversionRate: 15000,
    revenue: 45000,
  },
  {
    category: "Category B",
    userTraffic: 4500,
    conversionRate: 10000,
    revenue: 55000,
  },
  {
    category: "Category C",
    userTraffic: 6000,
    conversionRate: 12000,
    revenue: 48000,
  },
];

const pieChartData = [
  {
    id: "product",
    label: "Product",
    value: 40,
  },
  {
    id: "property",
    label: "Property",
    value: 30,
  },
  {
    id: "service",
    label: "Service",
    value: 30,
  },
];

const AnalyticsBarChart = () => {
  const theme = useTheme();

  // Determine the text color based on the current theme mode
  const textColor = theme.palette.mode === "dark" ? "#ffffff" : "#000000";

  // Define the Nivo theme based on the current theme mode
  const nivoTheme = {
    background: theme.palette.background.default,
    axis: {
      ticks: {
        text: {
          fill: textColor,
        },
      },
    },
    legends: {
      text: {
        fill: textColor,
      },
    },
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
    <>
      <h1>
        <Typography variant="h4" gutterBottom style={{ marginLeft: 16 }}>
          Analytics and Reporting
        </Typography>
      </h1>
      <div style={{ height: "400px" }}>
        {/* <h2>Bar Chart</h2> */}
        <ResponsiveBar
          data={data}
          keys={["userTraffic", "conversionRate", "revenue"]}
          indexBy="category"
          margin={{ top: 50, right: 60, bottom: 50, left: 70 }}
          padding={0.3}
          layout="horizontal"
          colors={{ scheme: "nivo" }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 50,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          theme={nivoTheme} // Apply the custom Nivo theme
        />
      </div>
      <div style={{ height: "400px" }}>
        <h3 style={{ marginLeft: "16px" }}>Pie Chart</h3>
        <ResponsivePie
          data={pieChartData}
          margin={{ top: 40, right: 80, bottom: 80, left: 10 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "category10" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          theme={nivoTheme}
        />
      </div>
      {/* <StreamChart /> */}
      <div style={{marginTop:"48px"}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card style={{ marginLeft: 16 }}>
              <CardContent>
                <a href="/sales-reports" underline="none">
                  <Typography variant="h6" color="secondary">
                    Generate Sales Reports
                  </Typography>
                </a>
                {/* Add your content for sales reports */}
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ marginLeft: 16 }}>
              <CardContent>
                <a href="/user-engagement" underline="none">
                  <Typography variant="h6" color="secondary">
                    Monitor User Engagement and Retention
                  </Typography>
                </a>
                {/* Add your content for user engagement and retention */}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card style={{ marginLeft: 16 }}>
              <CardContent>
                <a href="/revenue-trends" underline="none">
                  <Typography variant="h6" color="secondary">
                    Analyze Revenue and Profit Trends
                  </Typography>
                </a>
                {/* Add your content for revenue and profit trends */}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default AnalyticsBarChart;
