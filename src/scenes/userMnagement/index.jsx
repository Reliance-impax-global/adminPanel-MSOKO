import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import BlockIcon from "@mui/icons-material/Block";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import HistoryIcon from "@mui/icons-material/History";
import UserActivityLog from "../../components/UserActivityLog";
import { Link } from "react-router-dom";
import ResourceDetails from "../../components/ResourceDetails";

const UserManagement = () => {
  const [users, setUsers] = useState([]); // Store user data
  const [selectedUser, setSelectedUser] = useState(null);
  const [openActivityDialog, setOpenActivityDialog] = useState(false);
  const [openResourceSection, setOpenResourceSection] = useState(false); // New state for resource section
  const [openResourceModal, setOpenResourceModal] = useState(false); // State for the resource modal
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    const sampleUsers = [
      {
        id: 1,
        username: "user1",
        role: "user",
        isActive: true,
        isBanned: false,
      },
      {
        id: 2,
        username: "user2",
        role: "admin",
        isActive: true,
        isBanned: true,
      },
      // ... more users
    ];
    setUsers(sampleUsers);
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    // Open user profile edit dialog
  };

  const handleBlockUser = (userId) => {
    // Implement logic to block or suspend user
  };

  const handleViewActivity = (user) => {
    setSelectedUser(user);
    setOpenActivityDialog(true);
  };

  const handleActivityDialogClose = () => {
    setOpenActivityDialog(false);
  };

  // Function to toggle the resource section
  const toggleResourceSection = () => {
    setOpenResourceSection(!openResourceSection);
  };

  // Function to handle opening the resource modal
const handleOpenResourceModal = (resourceKey) => {
  console.log("Opening modal for resource:", resourceKey);
  setOpenResourceModal(true);
  setSelectedResource(resourceKey);
};

const handleCloseResourceModal = () => {
  console.log("Closing modal");
  setOpenResourceModal(false);
  setSelectedResource(null);
};

const handleSendResource = (userId, resource) => {
  // Logic to send the resource to the user with the given userId
  console.log(`Sending resource ${resource.title} to user with ID ${userId}`);
  // Implement your resource sending logic here
};

  const resourceData = {
    resource1: {
      title: "Resource 1",
      description: "Tips and Tricks for New Users",
      content:
        "This resource provides tips and tricks to help new users get started with our platform.",
    },
    resource2: {
      title: "Resource 2",
      description: "Frequently Asked Questions",
      content: "Find answers to common questions in our FAQ section.",
    },
    resource3: {
      title: "Resource 3",
      description: "Video Tutorials for Getting Started",
      content:
        "Watch video tutorials that guide you through the process of getting started with our services.",
    },
    resource4: {
      title: "Resource 4",
      description: "User Guides and Manuals",
      content:
        "Access user guides and manuals to learn more about our platform's features and functionalities.",
    },
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        User Management
      </Typography>
      {/* Toggle button for resource section */}
      <Button 
        variant="outlined"
        color="info"
        onClick={toggleResourceSection}
        style={{ marginBottom: "1rem", color:'#4cceac' }}
      >
        {openResourceSection ? "Hide Resources" : "Show Resources"}
      </Button>

      {/* Resource Links */}
      {openResourceSection && (
         <ul>
         <li>
           <Link
             component="button"
             onClick={() => handleOpenResourceModal("resource1")}
             style={{ cursor: "pointer", color: "#4cceac" }}
           >
             Resource 1
           </Link>{" "}
           - Tips and Tricks for New Users
         </li>
         <li>
           <Link
             component="button"
             onClick={() => handleOpenResourceModal("resource2")}
             style={{ cursor: "pointer", color: "#4cceac" }}
           >
             Resource 2
           </Link>{" "}
           - Frequently Asked Questions
         </li>
         <li>
           <Link
             component="button"
             onClick={() => handleOpenResourceModal("resource3")}
             style={{ cursor: "pointer", color: "#4cceac" }}
           >
             Resource 3
           </Link>{" "}
           - Video Tutorials for Getting Started
         </li>
         <li>
           <Link
             component="button"
             onClick={() => handleOpenResourceModal("resource4")}
             style={{ cursor: "pointer", color: "#4cceac" }}
           >
             Resource 4
           </Link>{" "}
           - User Guides and Manuals
         </li>
       </ul>
      )}

      {/* Resource Modal */}
      {selectedResource && (
        <ResourceDetails
          open={openResourceModal}
          onClose={handleCloseResourceModal}
          resource={resourceData[selectedResource]}
          users={users} // Provide the users array as a prop
          onSendResource={handleSendResource} // Pass your send resource function here
        />
      )}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {user.isBanned
                    ? "Banned"
                    : user.isActive
                    ? "Active"
                    : "Inactive"}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => handleEditUser(user)}
                    aria-label="Edit"
                  >
                    <EditIcon />
                  </IconButton>
                  {user.isBanned ? (
                    <Tooltip title="Unblock">
                      <IconButton
                        onClick={() => handleBlockUser(user.id)}
                        color="secondary"
                      >
                        <AccountCircleIcon />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Block">
                      <IconButton
                        onClick={() => handleBlockUser(user.id)}
                        color="secondary"
                      >
                        <BlockIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  <IconButton
                    onClick={() => handleViewActivity(user)}
                    aria-label="View Activity"
                  >
                    <IconButton
                      onClick={() => handleViewActivity(user)}
                      aria-label="View Activity"
                    >
                      <HistoryIcon />
                    </IconButton>
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* User Activity Dialog */}
      <Dialog
        open={openActivityDialog}
        onClose={handleActivityDialogClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>User Activity Log</DialogTitle>
        <DialogContent>
          <UserActivityLog user={selectedUser} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleActivityDialogClose} color="info">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserManagement;
