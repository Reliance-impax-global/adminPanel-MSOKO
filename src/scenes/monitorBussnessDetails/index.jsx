import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  makeStyles,
  CardContent,
  Card,
} from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import ReleaseForm from "../../components/ReleaseForm";
import RelasedInfoEdit from "../../components/RelasedInfoEdit";
import ServiceListing from "../../components/ServiceListing";
import ProductListing from "../../components/ProductListing";
import PropertyListing from "../../components/PropertyListing";

const MonitorBussnesse = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [approvalStatus, setApprovalStatus] = useState("");
  const [documentApprovalStatus, setDocumentApprovalStatus] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [editBankInfo, setEditBankInfo] = useState(false);
  const [editBusinessInfo, setEditBusinessInfo] = useState(false);

  // Demo document list with status and approval information
  const demoDocuments = [
    {
      name: "Demo Document 1.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 2.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 3.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 4.pdf",
      status: "Approved",
      approvalDate: "2023-09-12",
      approvalTime: "10:30 AM",
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 5.docx",
      status: "Rejected",
      approvalDate: "2023-09-13",
      approvalTime: "11:45 AM",
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 6.docx",
      status: "Rejected",
      approvalDate: "2023-09-13",
      approvalTime: "11:45 AM",
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 7.docx",
      status: "Rejected",
      approvalDate: "2023-09-13",
      approvalTime: "11:45 AM",
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 8.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 9.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 10.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 11.pdf",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
    {
      name: "Demo Document 12.doc",
      status: "Pending",
      approvalDate: null,
      approvalTime: null,
      bankInfo: {
        bankName: "AB Bank",
        accountNumber: "123456789",
        swiftCode: "DEMO123",
      },
      businessDetails: {
        businessName: "Tanzania Trade Center",
        tinNumber: "123456789",
        vrnNumber: "VRN123",
        address: "123 TN Street,Tanzania",
      },
    },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement file upload logic here, and add uploaded document to the documents list
      setDocuments([
        ...documents,
        { name: selectedFile.name, status: "Pending" },
      ]);
      setSelectedFile(null);
    } else {
      // Display an error message for no file selected
    }
  };

  const handleApprove = (documentName) => {
    // Find the document by name and update its status to "Approved"
    const updatedDocuments = documents.map((doc) => {
      if (doc.name === documentName) {
        return { ...doc, status: "Approved" };
      }
      return doc;
    });
    setDocuments(updatedDocuments);
    // Update approval status for the document
    setDocumentApprovalStatus({
      ...documentApprovalStatus,
      [documentName]: "Approved",
    });
  };

  const handleReject = (documentName) => {
    // Find the document by name and update its status to "Rejected"
    const updatedDocuments = documents.map((doc) => {
      if (doc.name === documentName) {
        return { ...doc, status: "Rejected" };
      }
      return doc;
    });
    setDocuments(updatedDocuments);
    // Update approval status for the document
    setDocumentApprovalStatus({
      ...documentApprovalStatus,
      [documentName]: "Rejected",
    });
  };
  // Filter out pending documents
  const approvedAndRejectedDocuments = demoDocuments.filter(
    (document) =>
      document.status === "Approved" || document.status === "Rejected"
  );

  //   bar chart data
  const chartData = [
    {
      status: "Approved",
      count: demoDocuments.filter((doc) => doc.status === "Approved").length,
    },
    {
      status: "Rejected",
      count: demoDocuments.filter((doc) => doc.status === "Rejected").length,
    },
  ];
  //  document details modal
  const handleDocumentClick = (document) => {
    setSelectedDocument(document);
    setModalOpen(true);
  };

  //  edit button for bank and business info

  const handleEditBankInfo = () => {
    setEditBankInfo(!editBankInfo);
  };

  const handleEditBusinessInfo = () => {
    setEditBusinessInfo(!editBusinessInfo);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Business Document Monitoring Dashboard(Admin)
      </Typography>
      {/* Relase form  */}
      <ReleaseForm />
      {/* relase form edit and demo data */}
      <RelasedInfoEdit />

      {/* Document Upload Section */}
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Document Upload
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <input type="file" onChange={handleFileChange} />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Document List Section */}
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Document List
        </Typography>
        <List>
          {demoDocuments
            .filter((document) => document.status === "Pending")
            .map((document, index) => (
              <ListItem
                key={index}
                style={{
                  marginBottom: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer", // Add cursor pointer to indicate clickability
                }}
              >
                <ListItemText
                  primary={document.name}
                  onClick={() => handleDocumentClick(document)}
                />
                {document.status === "Pending" && (
                  <>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleApprove(document.name)}
                      style={{ marginRight: "10px" }}
                    >
                      Approve
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleReject(document.name)}
                    >
                      Reject
                    </Button>
                  </>
                )}
                {document.status !== "Pending" && (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    style={{ marginLeft: "10px", fontWeight: "bold" }}
                  >
                    Status: {document.status}
                  </Typography>
                )}
              </ListItem>
            ))}
        </List>
      </Paper>

      {/* Bank info and business details into the modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            color: "black",
            width: "75%",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h5"
            align="center"
            style={{
              marginBottom: "20px",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {selectedDocument
              ? `Document Information for: ${selectedDocument.name}`
              : "Document Information"}
          </Typography>
          {selectedDocument && (
            <>
              {/* Bank Info */}
              <Typography variant="h6" style={{ marginBottom: "10px" }}>
                Bank Information
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditBankInfo()}
                  style={{ marginLeft: "10px" }}
                >
                  {editBankInfo ? "Save" : "Edit"}
                </Button>
              </Typography>
              <TableContainer
                component={Paper}
                style={{ marginBottom: "20px" }}
              >
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Bank Name</TableCell>
                      <TableCell>
                        {editBankInfo ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={selectedDocument.bankInfo.bankName}
                            onChange={(e) =>
                              (selectedDocument.bankInfo.bankName =
                                e.target.value)
                            }
                          />
                        ) : (
                          selectedDocument.bankInfo.bankName
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Account Number</TableCell>
                      <TableCell>
                        {editBankInfo ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={selectedDocument.bankInfo.accountNumber}
                            onChange={(e) =>
                              (selectedDocument.bankInfo.accountNumber =
                                e.target.value)
                            }
                          />
                        ) : (
                          selectedDocument.bankInfo.accountNumber
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Swift Code</TableCell>
                      <TableCell>
                        {editBankInfo ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={selectedDocument.bankInfo.swiftCode}
                            onChange={(e) =>
                              (selectedDocument.bankInfo.swiftCode =
                                e.target.value)
                            }
                          />
                        ) : (
                          selectedDocument.bankInfo.swiftCode
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              {/* Business Details */}
              <Typography variant="h6" style={{ marginBottom: "10px" }}>
                Business Details
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleEditBusinessInfo()}
                  style={{ marginLeft: "10px" }}
                >
                  {editBusinessInfo ? "Save" : "Edit"}
                </Button>
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Business Name</TableCell>
                      <TableCell>
                        {editBusinessInfo ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={
                              selectedDocument.businessDetails.businessName
                            }
                            onChange={(e) =>
                              (selectedDocument.businessDetails.businessName =
                                e.target.value)
                            }
                          />
                        ) : (
                          selectedDocument.businessDetails.businessName
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>TIN Number</TableCell>
                      <TableCell>
                        {editBusinessInfo ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={selectedDocument.businessDetails.tinNumber}
                            onChange={(e) =>
                              (selectedDocument.businessDetails.tinNumber =
                                e.target.value)
                            }
                          />
                        ) : (
                          selectedDocument.businessDetails.tinNumber
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>VRN Number</TableCell>
                      <TableCell>
                        {editBusinessInfo ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={selectedDocument.businessDetails.vrnNumber}
                            onChange={(e) =>
                              (selectedDocument.businessDetails.vrnNumber =
                                e.target.value)
                            }
                          />
                        ) : (
                          selectedDocument.businessDetails.vrnNumber
                        )}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Address</TableCell>
                      <TableCell>
                        {editBusinessInfo ? (
                          <TextField
                            variant="outlined"
                            fullWidth
                            value={selectedDocument.businessDetails.address}
                            onChange={(e) =>
                              (selectedDocument.businessDetails.address =
                                e.target.value)
                            }
                          />
                        ) : (
                          selectedDocument.businessDetails.address
                        )}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </>
          )}
          <div style={{ textAlign: "right", marginTop: "20px" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>

      {/* Approval Workflow Section */}
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Approval Workflow
        </Typography>
        <Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Document</TableCell>
                  <TableCell>Approval Status</TableCell>
                  <TableCell>Approval Date</TableCell>
                  <TableCell>Approval Time</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {approvedAndRejectedDocuments.map((document, index) => (
                  <TableRow key={index}>
                    <TableCell>{document.name}</TableCell>
                    <TableCell>{document.status}</TableCell>
                    <TableCell>{document.approvalDate}</TableCell>
                    <TableCell>{document.approvalTime}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
      {/* Service listing section */}
      <ServiceListing />
      {/* Product Lsiting Section */}
      <ProductListing />
      {/* Property Listing section */}
      <PropertyListing />
      {/* Bar Chart */}
      <div style={{ height: "300px" }}>
        <ResponsiveBar
          data={chartData}
          keys={["count"]}
          indexBy="status"
          margin={{ top: 30, right: 30, bottom: 50, left: 60 }}
          padding={0.7}
          colors={{ scheme: "set2" }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Count",
            legendPosition: "middle",
            legendOffset: -40,
          }}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.9]] }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 30,
              itemHeight: 30,
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
          tooltip={({ id, value }) => (
            <strong>
              {id}: {value}
            </strong>
          )}
        />
      </div>
    </Container>
  );
};

export default MonitorBussnesse;
