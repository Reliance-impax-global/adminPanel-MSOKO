import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  useMediaQueryDialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Dialog,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Table,
  TableContainer,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProducts, mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useState } from "react";

const demoIssuesData = [
  {
    id: 1,
    title: "Payment Dispute",
    description: "User A claims they did not receive payment for a service.",
    status: "Open",
    createdAt: "2023-09-20T10:00:00Z",
    createdBy: "User A",
  },
  {
    id: 2,
    title: "Product Return Request",
    description: "User B requests a return for a defective product.",
    status: "Open",
    createdAt: "2023-09-19T15:30:00Z",
    createdBy: "User B",
  },
  {
    id: 3,
    title: "User Account Access Issue",
    description: "User C is unable to access their account.",
    status: "Open",
    createdAt: "2023-09-18T14:45:00Z",
    createdBy: "User C",
  },
  {
    id: 4,
    title: "Service Quality Complaint",
    description: "User D complains about the quality of a service received.",
    status: "Closed",
    createdAt: "2023-09-17T09:20:00Z",
    createdBy: "User D",
  },
];

// Define demo levels data
const demoLevelsData = [
  {
    id: 1,
    title: "Level 1",
    description: "Basic access level",
    status: "Active",
    createdAt: "2023-09-20T10:00:00Z",
    createdBy: "Admin A",
  },
  {
    id: 2,
    title: "Level 2",
    description: "Advanced access level",
    status: "Active",
    createdAt: "2023-09-19T15:30:00Z",
    createdBy: "Admin B",
  },
  {
    id: 3,
    title: "Level 3",
    description: "Expert access level",
    status: "Inactive",
    createdAt: "2023-09-18T14:45:00Z",
    createdBy: "Admin C",
  },
  {
    id: 4,
    title: "Level 4",
    description: "Premium access level",
    status: "Active",
    createdAt: "2023-09-17T09:20:00Z",
    createdBy: "Admin D",
  },
];

const Reviews = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile devices
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));
  // State to manage the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [issuesModalOpen, setIssuesModalOpen] = useState(false);
  const [issuesData, setIssuesData] = useState([]);
  const [levelsData, setLevelsData] = useState([]); // Initialize the levels data state

  const handleReviewClick = (params) => {
    setSelectedReview(params.row.review);
    setSelectedRating(params.row.rating);
    setSelectedName(params.row.name);
    setSelectedReviewId(params.row.id); // Set the review ID
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedReview(null);
    setSelectedRating(null);
    setSelectedName(null);
    setSelectedReviewId(null);
  };
  const handleOpenIssuesModal = () => {
    // Fetch or generate the actual issues data
    // Replace with your data retrieval logic

    // Update the state to store the fetched issues data
    setIssuesData(demoIssuesData);
    // Set the demo levels data when opening the issues modal
    setLevelsData(demoLevelsData);

    // Open the issues modal
    setIssuesModalOpen(true);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "rating",
      headerName: "Rating",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   flex: 1,
    // },
    {
      field: "review",
      headerName: "Review",
      flex: 1,
      renderCell: (params) => (
        <Typography
          style={{ cursor: "pointer" }}
          onClick={() => handleReviewClick(params)}
        >
          {params.value}
        </Typography>
      ),
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: ({ row: { action } }) => {
        return (
          <Box
          width={isMobile ? "270%" : isTablet ? "130%": isLg ? '100%': '60%'} // Adjust width based on device
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              action === "delete"
                ? colors.greenAccent[600]
                : // : action === "manager"
                  // ? colors.greenAccent[700]
                  colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {action === "delete" && <DeleteIcon />}
            {/* {action === "manager" && <SecurityOutlinedIcon />}
            {action === "user" && <LockOpenOutlinedIcon />} */}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {action}
            </Typography>
            {/* <Dialog
              open={modalOpen}
              onClose={handleCloseModal}
              BackdropProps={{
                classes: {
                  root: "blurred-backdrop", // Apply a custom class
                },
              }}
            >
              <DialogTitle>Review Details</DialogTitle>
              <DialogContent>
                <Typography>{selectedReview}</Typography>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModal} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog> */}
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="Feedback and Reviews"
        subtitle="Managing the Feedback and Reviews"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataProducts}
          columns={columns}
          components={{
            NoRowsOverlay: isMobile ? MobileNoRowsOverlay : null,
          }}
        />
      </Box>
      {/* Edit Modal */}
      <Dialog
        open={modalOpen}
        onClose={handleCloseModal}
        maxWidth="md" // Set the maximum width to 'md' (medium) for 75% width
        fullWidth
      >
        <DialogTitle>Edit Review</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Review Details</Typography>
          {selectedReview && (
            <div>
              <Typography>
                ID: {selectedReviewId} {/* Display the review ID */}
              </Typography>
              <Typography>Rating: {selectedRating}</Typography>
              <Typography>Name: {selectedName}</Typography>
              <Typography>Review: {selectedReview}</Typography>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="info">
            Close
          </Button>
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Button to open Issues and Disputes modal */}
      <div
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: theme.palette.error.main,
            color: theme.palette.common.white,
          }}
          onClick={handleOpenIssuesModal}
        >
          Tools to Address Issues and Disputes
        </Button>
      </div>

      {/* Issues Modal */}
      <Dialog
        open={issuesModalOpen}
        onClose={() => setIssuesModalOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Tools to Address Issues and Disputes</DialogTitle>
        <DialogContent>
          <Box>
            <Typography variant="h6">Issues</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {issuesData.map((issue) => (
                    <TableRow key={issue.id}>
                      <TableCell>{issue.id}</TableCell>
                      <TableCell>{issue.title}</TableCell>
                      <TableCell>{issue.description}</TableCell>
                      <TableCell>{issue.status}</TableCell>
                      <TableCell>
                        {issue.status === "Closed" ? (
                          <>
                            {" "}
                            <p color="info">Issue Solved</p>
                          </>
                        ) : (
                          <>
                            <Button
                              style={{ marginRight: "16px" }}
                              variant="contained"
                              color="primary"
                            >
                              Edit
                            </Button>
                            <Button variant="contained" color="error">
                              Resolve
                            </Button>
                          </>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          <Box mt="16px">
            <Typography variant="h6">Levels</Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Created At</TableCell>
                    <TableCell>Created By</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {levelsData.map((level) => (
                    <TableRow key={level.id}>
                      <TableCell>{level.id}</TableCell>
                      <TableCell>{level.title}</TableCell>
                      <TableCell>{level.description}</TableCell>
                      <TableCell>{level.status}</TableCell>
                      <TableCell>{level.createdAt}</TableCell>
                      <TableCell>{level.createdBy}</TableCell>
                      <TableCell>
                        <Button
                          style={{ marginRight: "16px" }}
                          variant="contained"
                          color="primary"
                        >
                          Edit
                        </Button>
                        <Button variant="contained" color="error">
                          Resolve
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIssuesModalOpen(false)} color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
const MobileNoRowsOverlay = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Typography>No rows</Typography>
    </div>
  );
};
export default Reviews;
