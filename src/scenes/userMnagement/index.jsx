// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   TableContainer,
//   Table,
//   TableHead,
//   TableRow,
//   TableCell,
//   TableBody,
//   IconButton,
//   Tooltip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Button,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import BlockIcon from "@mui/icons-material/Block";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// import HistoryIcon from "@mui/icons-material/History";
// import UserActivityLog from "../../components/UserActivityLog";
// import { Link } from "react-router-dom";
// import ResourceDetails from "../../components/ResourceDetails";

// const UserManagement = () => {
//   const [users, setUsers] = useState([]); // Store user data
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [openActivityDialog, setOpenActivityDialog] = useState(false);
//   const [openResourceSection, setOpenResourceSection] = useState(false); // New state for resource section
//   const [openResourceModal, setOpenResourceModal] = useState(false); // State for the resource modal
//   const [selectedResource, setSelectedResource] = useState(null);

//   useEffect(() => {
//     const sampleUsers = [
//       {
//         id: 1,
//         username: "user1",
//         role: "user",
//         isActive: true,
//         isBanned: false,
//       },
//       {
//         id: 2,
//         username: "user2",
//         role: "admin",
//         isActive: true,
//         isBanned: true,
//       },
//       // ... more users
//     ];
//     setUsers(sampleUsers);
//   }, []);

//   const handleEditUser = (user) => {
//     setSelectedUser(user);
//     // Open user profile edit dialog
//   };

//   const handleBlockUser = (userId) => {
//     // Implement logic to block or suspend user
//   };

//   const handleViewActivity = (user) => {
//     setSelectedUser(user);
//     setOpenActivityDialog(true);
//   };

//   const handleActivityDialogClose = () => {
//     setOpenActivityDialog(false);
//   };

//   // Function to toggle the resource section
//   const toggleResourceSection = () => {
//     setOpenResourceSection(!openResourceSection);
//   };

//   // Function to handle opening the resource modal
// const handleOpenResourceModal = (resourceKey) => {
//   console.log("Opening modal for resource:", resourceKey);
//   setOpenResourceModal(true);
//   setSelectedResource(resourceKey);
// };

// const handleCloseResourceModal = () => {
//   console.log("Closing modal");
//   setOpenResourceModal(false);
//   setSelectedResource(null);
// };

// const handleSendResource = (userId, resource) => {
//   // Logic to send the resource to the user with the given userId
//   console.log(`Sending resource ${resource.title} to user with ID ${userId}`);
//   // Implement your resource sending logic here
// };

//   const resourceData = {
//     resource1: {
//       title: "Resource 1",
//       description: "Tips and Tricks for New Users",
//       content:
//         "This resource provides tips and tricks to help new users get started with our platform.",
//     },
//     resource2: {
//       title: "Resource 2",
//       description: "Frequently Asked Questions",
//       content: "Find answers to common questions in our FAQ section.",
//     },
//     resource3: {
//       title: "Resource 3",
//       description: "Video Tutorials for Getting Started",
//       content:
//         "Watch video tutorials that guide you through the process of getting started with our services.",
//     },
//     resource4: {
//       title: "Resource 4",
//       description: "User Guides and Manuals",
//       content:
//         "Access user guides and manuals to learn more about our platform's features and functionalities.",
//     },
//   };

//   return (
//     <Container>
//       <Typography variant="h2" gutterBottom>
//         User Management
//       </Typography>
//       {/* Toggle button for resource section */}
//       <Button 
//         variant="outlined"
//         color="info"
//         onClick={toggleResourceSection}
//         style={{ marginBottom: "1rem", color:'#4cceac' }}
//       >
//         {openResourceSection ? "Hide Resources" : "Show Resources"}
//       </Button>

//       {/* Resource Links */}
//       {openResourceSection && (
//          <ul>
//          <li>
//            <Link
//              component="button"
//              onClick={() => handleOpenResourceModal("resource1")}
//              style={{ cursor: "pointer", color: "#4cceac" }}
//            >
//              Resource 1
//            </Link>{" "}
//            - Tips and Tricks for New Users
//          </li>
//          <li>
//            <Link
//              component="button"
//              onClick={() => handleOpenResourceModal("resource2")}
//              style={{ cursor: "pointer", color: "#4cceac" }}
//            >
//              Resource 2
//            </Link>{" "}
//            - Frequently Asked Questions
//          </li>
//          <li>
//            <Link
//              component="button"
//              onClick={() => handleOpenResourceModal("resource3")}
//              style={{ cursor: "pointer", color: "#4cceac" }}
//            >
//              Resource 3
//            </Link>{" "}
//            - Video Tutorials for Getting Started
//          </li>
//          <li>
//            <Link
//              component="button"
//              onClick={() => handleOpenResourceModal("resource4")}
//              style={{ cursor: "pointer", color: "#4cceac" }}
//            >
//              Resource 4
//            </Link>{" "}
//            - User Guides and Manuals
//          </li>
//        </ul>
//       )}

//       {/* Resource Modal */}
//       {selectedResource && (
//         <ResourceDetails
//           open={openResourceModal}
//           onClose={handleCloseResourceModal}
//           resource={resourceData[selectedResource]}
//           users={users} // Provide the users array as a prop
//           onSendResource={handleSendResource} // Pass your send resource function here
//         />
//       )}
//       <TableContainer>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Username</TableCell>
//               <TableCell>Role</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell>Action</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user) => (
//               <TableRow key={user.id}>
//                 <TableCell>{user.username}</TableCell>
//                 <TableCell>{user.role}</TableCell>
//                 <TableCell>
//                   {user.isBanned
//                     ? "Banned"
//                     : user.isActive
//                     ? "Active"
//                     : "Inactive"}
//                 </TableCell>
//                 <TableCell>
//                   <IconButton
//                     onClick={() => handleEditUser(user)}
//                     aria-label="Edit"
//                   >
//                     <EditIcon />
//                   </IconButton>
//                   {user.isBanned ? (
//                     <Tooltip title="Unblock">
//                       <IconButton
//                         onClick={() => handleBlockUser(user.id)}
//                         color="secondary"
//                       >
//                         <AccountCircleIcon />
//                       </IconButton>
//                     </Tooltip>
//                   ) : (
//                     <Tooltip title="Block">
//                       <IconButton
//                         onClick={() => handleBlockUser(user.id)}
//                         color="secondary"
//                       >
//                         <BlockIcon />
//                       </IconButton>
//                     </Tooltip>
//                   )}
//                   <IconButton
//                     onClick={() => handleViewActivity(user)}
//                     aria-label="View Activity"
//                   >
//                     <IconButton
//                       onClick={() => handleViewActivity(user)}
//                       aria-label="View Activity"
//                     >
//                       <HistoryIcon />
//                     </IconButton>
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* User Activity Dialog */}
//       <Dialog
//         open={openActivityDialog}
//         onClose={handleActivityDialogClose}
//         maxWidth="md"
//         fullWidth
//       >
//         <DialogTitle>User Activity Log</DialogTitle>
//         <DialogContent>
//           <UserActivityLog user={selectedUser} />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleActivityDialogClose} color="info">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Container>
//   );
// };

// export default UserManagement;
import React, { useState, useEffect, useContext } from 'react';
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
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import BlockIcon from '@mui/icons-material/Block';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HistoryIcon from '@mui/icons-material/History';
import UserActivityLog from '../../components/UserActivityLog';
import { Link } from 'react-router-dom';
import ResourceDetails from '../../components/ResourceDetails';
import { getDatabase, ref, onValue, update, get } from 'firebase/database';
import { UserAuthContext } from '../../AuthContext/AuthProvider';
import app from '../../firebase/firebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(app);
const UserManagement = () => {
  const { user, updateUserProfile } = useContext(UserAuthContext);

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openActivityDialog, setOpenActivityDialog] = useState(false);
  const [openResourceSection, setOpenResourceSection] = useState(false);
  const [openResourceModal, setOpenResourceModal] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    console.log("Users:", users);
    // ... rest of the useEffect code
  }, [users]);

  const fetchUsers = async () => {
    try {
      const db = getDatabase(app);
      const usersRef = ref(db, 'users');
      const usersSnapshot = await get(usersRef);
  
      if (usersSnapshot.exists()) {
        const userData = usersSnapshot.val();
        const userList = Object.keys(userData).map((userId) => ({
          uid: userId,
          ...userData[userId],
        }));
  
        console.log('Fetched users:', userList);  // Log the fetched users
  
        setUsers(userList);
      } else {
        // Handle case when there are no users in the database
        console.log('No users found.');
        setUsers([]);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  useEffect(() => {
    // Fetch users when the component mounts
    fetchUsers();

    // Also, fetch users when the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, () => {
      fetchUsers();
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);



  const handleEditUser = (selectedUser) => {
    // Implement logic to edit user profile
    console.log('Editing user:', selectedUser);
  };

  const handleBlockUser = (userId) => {
    // Implement logic to block or suspend user
    console.log('Blocking user with ID:', userId);
  };

  const handleViewActivity = (user) => {
    setSelectedUser(user);
    setOpenActivityDialog(true);
  };

  const handleActivityDialogClose = () => {
    setOpenActivityDialog(false);
  };

  const toggleResourceSection = () => {
    setOpenResourceSection(!openResourceSection);
  };

  const handleOpenResourceModal = (resourceKey) => {
    console.log('Opening modal for resource:', resourceKey);
    setOpenResourceModal(true);
    setSelectedResource(resourceKey);
  };

  const handleCloseResourceModal = () => {
    console.log('Closing modal');
    setOpenResourceModal(false);
    setSelectedResource(null);
  };

  const handleSendResource = (userId, resource) => {
    // Logic to send the resource to the user with the given userId
    console.log(`Sending resource ${resource.title} to user with ID ${userId}`);
    // Implement your resource sending logic here

    // For demonstration purposes, let's update a user property in the database
    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    update(userRef, { sentResource: resource.title });
  };

  const resourceData = {
    resource1: {
      title: 'Resource 1',
      description: 'Tips and Tricks for New Users',
      content:
        'This resource provides tips and tricks to help new users get started with our platform.',
    },
    resource2: {
      title: 'Resource 2',
      description: 'Frequently Asked Questions',
      content: 'Find answers to common questions in our FAQ section.',
    },
    resource3: {
      title: 'Resource 3',
      description: 'Video Tutorials for Getting Started',
      content:
        'Watch video tutorials that guide you through the process of getting started with our services.',
    },
    resource4: {
      title: 'Resource 4',
      description: 'User Guides and Manuals',
      content:
        'Access user guides and manuals to learn more about our platform\'s features and functionalities.',
    },
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        User Management
      </Typography>

      <Button
        variant="outlined"
        color="info"
        onClick={toggleResourceSection}
        style={{ marginBottom: '1rem', color: '#4cceac' }}
      >
        {openResourceSection ? 'Hide Resources' : 'Show Resources'}
      </Button>

      {openResourceSection && (
        <ul>
          {Object.keys(resourceData).map((resourceKey) => (
            <li key={resourceKey}>
              <Link
                component="button"
                onClick={() => handleOpenResourceModal(resourceKey)}
                style={{ cursor: 'pointer', color: '#4cceac' }}
              >
                {resourceData[resourceKey].title}
              </Link>{' '}
              - {resourceData[resourceKey].description}
            </li>
          ))}
        </ul>
      )}

      {selectedResource && (
        <ResourceDetails
          open={openResourceModal}
          onClose={handleCloseResourceModal}
          resource={resourceData[selectedResource]}
          users={users}
          onSendResource={handleSendResource}
        />
      )}

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.uid}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  {user.isBanned
                    ? 'Banned'
                    : user.isActive
                    ? 'Active'
                    : 'Inactive'}
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
                        onClick={() => handleBlockUser(user.uid)}
                        color="secondary"
                      >
                        <AccountCircleIcon />
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Block">
                      <IconButton
                        onClick={() => handleBlockUser(user.uid)}
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
                    <HistoryIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
          <Button onClick={handleActivityDialogClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserManagement;
