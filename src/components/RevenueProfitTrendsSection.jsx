import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const RevenueProfitTrendsSection = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    // history.push("/analytics"); // Redirect to the analytics section
    navigate("/analytics-reporting");
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const revenueProfitData = [
    { month: "Jan", revenue: 12000, profit: 8000 },
    { month: "Feb", revenue: 15000, profit: 10000 },
    { month: "Mar", revenue: 18000, profit: 12000 },
    { month: "Apr", revenue: 20000, profit: 15000 },
    { month: "May", revenue: 22000, profit: 17000 },
    { month: "Jun", revenue: 25000, profit: 20000 },
  ];
  const pieChartData = [
    { id: "revenue", label: "Revenue", value: 135000 },
    { id: "profit", label: "Profit", value: 100000 },
  ];
  return (
    <div style={{ marginTop: 16, marginLeft: 16, marginRight: 6 }}>
      <Typography variant="h4" gutterBottom>
        Analyze Revenue and Profit Trends
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Monthly Revenue and Profit Trends
              </Typography>
              <List>
                {revenueProfitData.map((data, index) => (
                  <ListItem key={index}>
                    <ListItemText
                      primary={`Month: ${data.month}`}
                      secondary={`Revenue: $${data.revenue.toLocaleString()} | Profit: $${data.profit.toLocaleString()}`}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6">
                Revenue vs Profit Distribution
              </Typography>
              <div style={{ height: "300px" }}>
                <ResponsivePie
                  data={pieChartData}
                  theme={{
                    axis: {
                      domain: {
                        line: {
                          stroke: colors.grey[100],
                        },
                      },
                      legend: {
                        text: {
                          fill: colors.grey[100],
                        },
                      },
                      ticks: {
                        line: {
                          stroke: colors.grey[100],
                          strokeWidth: 1,
                        },
                        text: {
                          fill: colors.grey[100],
                        },
                      },
                    },
                    legends: {
                      text: {
                        fill: colors.grey[100],
                      },
                    },
                    tooltip: {
                      container: {
                        color: colors.primary[500],
                      },
                    },
                  }}
                  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                  innerRadius={0.5}
                  padAngle={0.7}
                  cornerRadius={3}
                  activeOuterRadiusOffset={8}
                  borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                  }}
                  arcLinkLabelsSkipAngle={10}
                  arcLinkLabelsTextColor={colors.grey[100]}
                  arcLinkLabelsThickness={2}
                  arcLinkLabelsColor={{ from: "color" }}
                  enableArcLabels={false}
                  arcLabelsRadiusOffset={0.4}
                  arcLabelsSkipAngle={7}
                  arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  defs={[
                    {
                      id: "dots",
                      type: "patternDots",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      size: 4,
                      padding: 1,
                      stagger: true,
                    },
                    {
                      id: "lines",
                      type: "patternLines",
                      background: "inherit",
                      color: "rgba(255, 255, 255, 0.3)",
                      rotation: -45,
                      lineWidth: 6,
                      spacing: 10,
                    },
                  ]}
                  legends={[
                    {
                      anchor: "bottom",
                      direction: "row",
                      justify: false,
                      translateX: 0,
                      translateY: 56,
                      itemsSpacing: 0,
                      itemWidth: 100,
                      itemHeight: 18,
                      itemTextColor: "#999",
                      itemDirection: "left-to-right",
                      itemOpacity: 1,
                      symbolSize: 18,
                      symbolShape: "circle",
                      effects: [
                        {
                          on: "hover",
                          style: {
                            itemTextColor: "#000",
                          },
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleGoBack}
          style={{ marginTop: 16, marginLeft: 16 }}
        >
          Go Back
        </Button>
      </Grid>
    </div>
  );
};

export default RevenueProfitTrendsSection;
