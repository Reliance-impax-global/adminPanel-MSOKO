import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ResourceDetails = ({
  open,
  onClose,
  resource,
  users,
  onSendResource,
}) => {
  const [selectedUser, setSelectedUser] = useState(""); // State to store the selected user

  const handleSendResource = () => {
    if (selectedUser && resource) {
      // Send the resource to the selected user (you can implement this logic)
      onSendResource(selectedUser, resource);
    }
    onClose(); // Close the modal after sending
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{resource.title}</DialogTitle>
      <DialogContent>
        <h3>{resource.description}</h3>
        <p>{resource.content}</p>

        {/* User selection dropdown */}
        <FormControl fullWidth>
          <InputLabel>Select User</InputLabel>
          <Select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            {users.map((user) => (
              <MenuItem key={user.id} value={user.id} color="info">
                {user.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Close
        </Button>
        <Button onClick={handleSendResource} color="info">
          Send Resource
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResourceDetails;
