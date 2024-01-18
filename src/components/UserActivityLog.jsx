import React from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

const UserActivityLog = ({ user }) => {
  // Fetch user activity data based on the user or any other logic
  const userActivityData = [
    { timestamp: "2023-08-01 10:00 AM", action: "Logged in" },
    { timestamp: "2023-08-02 03:00 PM", action: "Viewed dashboard" },
    // ... more activity data
  ];

  return (
    <List>
      {userActivityData.map((activity, index) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText
              primary={activity.action}
              secondary={activity.timestamp}
            />
          </ListItem>
          {index < userActivityData.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default UserActivityLog;
