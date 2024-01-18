import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Tabs,
  Tab,
  Box,
  TextField,
  Button,
  TextareaAutosize,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import HomepageSection from "../../components/HomepageSection";
import ContentPagesSection from "../../components/ContentPagesSection";
import LegalDocumentsSection from "../../components/LegalDocumentsSection";

const ContentManagement = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // const [contentForReview, setContentForReview] = useState("");
  const [reviews, setReviews] = useState([
    {
      content: "This is the first review.",
      status: "Pending",
    },
    {
      content: "Another review for testing.",
      status: "Pending",
    },
  ]); // Store content reviews

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [contentForReview, setContentForReview] = useState(""); // State to store content for review

  const handleContentInputChange = (event) => {
    setContentForReview(event.target.value);
  };

  const handleSubmitReview = () => {
    // Create a new review object and add it to the reviews array
    const newReview = {
      content: contentForReview,
      status: "Pending", // Initially set as pending
    };
    setReviews([...reviews, newReview]);

    // Reset the input field after submission
    setContentForReview("");
  };

  const handleApproveReview = (index) => {
    // Update the status of the review to "Approved"
    const updatedReviews = [...reviews];
    updatedReviews[index].status = "Approved";
    setReviews(updatedReviews);
  };

  const handleRejectReview = (index) => {
    // Update the status of the review to "Rejected"
    const updatedReviews = [...reviews];
    updatedReviews[index].status = "Rejected";
    setReviews(updatedReviews);
  };

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalContent("");
    setModalOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Content Management</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" style={{ marginTop: "20px" }}>
        <Paper square>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="secondary"
          >
            <Tab label="Homepage" />
            <Tab label="Content Pages" />
            <Tab label="Legal Documents" />
            <Tab label="Content Review" />
          </Tabs>
        </Paper>
        <TabPanel value={selectedTab} index={0}>
          {/* Homepage Banners and Featured Products */}
          {/* Implement the banner and featured products management here */}
          <HomepageSection />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          {/* Content Pages Management */}
          {/* Implement the content pages management here */}
          <ContentPagesSection />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          {/* Legal Documents Management */}
          {/* Implement the legal documents management here */}
          <LegalDocumentsSection />
        </TabPanel>
        {/* Content Review Section */}
        <TabPanel value={selectedTab} index={3}>
          <TextField
            label="Content for Review"
            color="info"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            value={contentForReview}
            onChange={handleContentInputChange}
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={handleSubmitReview}
            style={{ marginTop: "10px" }}
          >
            Add Review
          </Button>

          {/* Display the list of reviews */}
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Content Reviews
          </Typography>
          <TableContainer component={Paper} style={{ marginTop: "10px" }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Content</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {reviews.map((review, index) => (
                  <TableRow key={index}>
                    <TableCell
                      onClick={() => openModal(review.content)}
                      style={{ cursor: "pointer" }}
                    >
                      {review.content}
                    </TableCell>
                    <TableCell>{review.status}</TableCell>
                    <TableCell>
                      {review.status === "Pending" && (
                        <div>
                          <Button
                            variant="outlined"
                            color="info"
                            onClick={() => handleApproveReview(index)}
                          >
                            Approve
                          </Button>
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => handleRejectReview(index)}
                            style={{ marginLeft: "10px" }}
                          >
                            Reject
                          </Button>
                        </div>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Dialog
            open={isModalOpen}
            onClose={closeModal}
            maxWidth="md" // Set the maximum width
            fullWidth
          >
            <DialogTitle>Review Content</DialogTitle>
            <DialogContent>
              <Typography>{modalContent}</Typography>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeModal} color="secondary">
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </TabPanel>
      </Container>
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

export default ContentManagement;

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Container,
//   Typography,
//   Paper,
//   Grid,
//   Button,
//   IconButton,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemSecondaryAction,
// } from "@material-ui/core";
// // import { Edit as EditIcon, Delete as DeleteIcon } from "@material-ui/icons";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(3),
//   },
//   section: {
//     marginBottom: theme.spacing(3),
//   },
//   title: {
//     marginBottom: theme.spacing(2),
//   },
//   listItem: {
//     paddingRight: theme.spacing(8),
//   },
// }));

// const ContentManagement = () => {
//   const classes = useStyles();

//   return (
//     <Container className={classes.root}>
//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Manage Homepage Banners and Featured Products
//         </Typography>
//         {/* Your content for managing banners and products */}
//       </Paper>

//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Create and Manage Content Pages
//         </Typography>
//         {/* Your content for managing content pages */}
//       </Paper>

//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Update Terms and Conditions, Privacy Policy, etc.
//         </Typography>
//         {/* Your content for updating terms and policies */}
//       </Paper>

//       <Paper elevation={3} className={classes.section}>
//         <Typography variant="h6" className={classes.title}>
//           Upload Documents
//         </Typography>
//         {/* Your content for uploading documents */}
//       </Paper>
//     </Container>
//   );
// };

// export default ContentManagement;
