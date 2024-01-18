import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Paper,
  Link,
} from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    category: "Category A",
    userTraffic: 3000,
    conversionRate: 15,
    revenue: 45000,
  },
  {
    category: "Category B",
    userTraffic: 4500,
    conversionRate: 10,
    revenue: 55000,
  },
  {
    category: "Category C",
    userTraffic: 6000,
    conversionRate: 12,
    revenue: 48000,
  },
];



const AnalyticsReporting = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ marginLeft: 16 }}>
        Analytics and Reporting
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Link href="/sales-reports" underline="none">
                <Typography variant="h6" color="secondary">
                  Generate Sales Reports
                </Typography>
              </Link>
              {/* Add your content for sales reports */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Link href="/user-engagement" underline="none">
                <Typography variant="h6" color="secondary">
                  Monitor User Engagement and Retention
                </Typography>
              </Link>
              {/* Add your content for user engagement and retention */}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Link href="/revenue-trends" underline="none">
                <Typography variant="h6" color="secondary">
                  Analyze Revenue and Profit Trends
                </Typography>
              </Link>
              {/* Add your content for revenue and profit trends */}
            </CardContent>
          </Card>
        </Grid>
        {/* Add a container for the bar chart */}
        <Grid item xs={12} style={{ marginLeft: 16 }}>
          <Paper elevation={3}>
            <ResponsiveBar
              data={data}
              keys={["userTraffic", "conversionRate", "revenue"]}
              indexBy="category"
              margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
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
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default AnalyticsReporting;
