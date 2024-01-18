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
import { useNavigate } from "react-router-dom";

const UserEngagementRetentionSection = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    // history.push("/analytics"); // Redirect to the analytics section
    navigate("/analytics-reporting");
  };
  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ marginLeft: 16 }}>
        Monitor User Engagement and Retention
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Typography variant="h6">Engagement Metrics</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Total Users" secondary="2,500" />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Average Daily Active Users"
                    secondary="800"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Total Interactions"
                    secondary="12,000"
                  />
                </ListItem>
              </List>
              {/* <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: 16 }}
              >
                Edit
              </Button> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} style={{ marginBottom: 8 }}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Typography variant="h6">Retention Metrics</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="User Churn Rate" secondary="10%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="1st Week Retention" secondary="60%" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="1st Month Retention" secondary="40%" />
                </ListItem>
              </List>
              {/* <Button
                variant="outlined"
                color="secondary"
                style={{ marginTop: 16, marginRight: 8 }}
              >
                Edit
              </Button> */}
            </CardContent>
          </Card>
        </Grid>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleGoBack}
          style={{ marginTop: 16, width: "75%", margin: "0  auto" }}
        >
          Go Back
        </Button>
      </Grid>
    </div>
  );
};

export default UserEngagementRetentionSection;
