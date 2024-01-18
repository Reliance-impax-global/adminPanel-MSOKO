

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import app from "../../firebase/firebaseConfig";




const db = getFirestore(app);
const inquiriesCollection = collection(db, "inquiries");

const CustomerSupport = () => {
  const [ticket, setTicket] = useState("");
  const [assignedStaff, setAssignedStaff] = useState("");
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editedTicket, setEditedTicket] = useState("");

  const handleTicketChange = (event) => {
    setTicket(event.target.value);
  };

  const handleAssignedStaffChange = (event) => {
    setAssignedStaff(event.target.value);
  };

  const submitTicket = async () => {
    try {
      const newInquiry = {
        content: ticket,
        assignedStaff,
        status: "Pending",
      };

      // Add the new inquiry to Firebase
      const docRef = await addDoc(inquiriesCollection, newInquiry);

      // Update local state with the new inquiry
      setInquiries([...inquiries, { id: docRef.id, ...newInquiry }]);
      setTicket("");
      setAssignedStaff("");
    } catch (error) {
      console.error("Error submitting ticket:", error);
    }
  };

  const resolveInquiry = async (index) => {
    try {
      const updatedInquiries = [...inquiries];
      const inquiryToUpdate = updatedInquiries[index];

      // Update the status of the resolved inquiry in Firebase
      await updateDoc(doc(db, "inquiries", inquiryToUpdate.id), {
        status: "Resolved",
      });

      // Update local state with the resolved inquiry
      updatedInquiries[index].status = "Resolved";
      setInquiries(updatedInquiries);
    } catch (error) {
      console.error("Error resolving inquiry:", error);
    }
  };

  const openEditModal = (inquiry) => {
    setSelectedInquiry(inquiry);
    setEditedTicket(inquiry.content);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedInquiry(null);
    setEditedTicket("");
    setEditModalOpen(false);
  };

  const submitEdit = async () => {
    try {
      const editedInquiry = selectedInquiry;
      editedInquiry.content = editedTicket;

      // Update the content of the edited inquiry in Firebase
      await updateDoc(doc(db, "inquiries", editedInquiry.id), {
        content: editedTicket,
      });

      // Update local state with the edited inquiry
      const updatedInquiries = inquiries.map((inquiry) =>
        inquiry.id === editedInquiry.id ? editedInquiry : inquiry
      );
      setInquiries(updatedInquiries);

      // Close the edit modal
      closeEditModal();
    } catch (error) {
      console.error("Error editing inquiry:", error);
    }
  };

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const querySnapshot = await getDocs(inquiriesCollection);
        const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setInquiries(data);
      } catch (error) {
        console.error("Error fetching inquiries:", error);
      }
    };

    fetchInquiries();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Customer Support</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <TextField
            color="info"
            label="Customer Inquiry or Complaint"
            value={ticket}
            onChange={handleTicketChange}
            multiline
            rows={4}
            variant="outlined"
          />
          <FormControl color="info" variant="outlined">
            <InputLabel id="assigned-staff-label">Assign Staff</InputLabel>
            <Select
              labelId="assigned-staff-label"
              color="info"
              id="assigned-staff"
              value={assignedStaff}
              onChange={handleAssignedStaffChange}
              label="Assign Staff"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="staff1">Staff 1</MenuItem>
              <MenuItem value="staff2">Staff 2</MenuItem>
              <MenuItem value="staff3">Staff 3</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="secondary" onClick={submitTicket}>
            Submit Ticket
          </Button>
        </Box>
        <Typography variant="h6" mt={4}>
          Customer Inquiries
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Inquiry</TableCell>
                <TableCell>Assigned Staff</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {inquiries.map((inquiry, index) => (
                <TableRow key={index}>
                  <TableCell>{inquiry.content}</TableCell>
                  <TableCell>{inquiry.assignedStaff}</TableCell>
                  <TableCell>{inquiry.status}</TableCell>
                  <TableCell>
                    {inquiry.status === "Pending" && (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: { xs: "column", md: "row" },
                          alignItems: { xs: "center", md: "flex-start" },
                          gap: "16px",
                          }}
                          >
                          <Button
                          variant="outlined"
                          color="info"
                          onClick={() => resolveInquiry(index)}
                          sx={{ marginBottom: { xs: "8px", md: "0" } }}
                          >
                          Resolve
                          </Button>
                          <Button
                          variant="outlined"
                          color="secondary"
                          onClick={() => openEditModal(inquiry)}
                          >
                          Edit
                          </Button>
                          </Box>
                          )}
                          </TableCell>
                          </TableRow>
                          ))}
                          </TableBody>
                          </Table>
                          </TableContainer>
                          {/* Inquiry Details Modal */}
                          <Dialog
                                 open={isEditModalOpen}
                                 onClose={closeEditModal}
                                 maxWidth="md"
                                 fullWidth
                               >
                          <DialogTitle>Inquiry Details</DialogTitle>
                          <DialogContent>
                          {selectedInquiry && (
                          <TextField
                          label="Inquiry"
                          value={editedTicket}
                          multiline
                          rows={4}
                          variant="outlined"
                          color="info"
                          style={{ marginTop: "10px" }}
                          fullWidth
                          onChange={(e) => setEditedTicket(e.target.value)}
                          />
                          )}
                          </DialogContent>
                          <DialogActions>
                          <Button onClick={closeEditModal} color="warning">
                          Close
                          </Button>
                          <Button onClick={submitEdit} color="success">
                          Save Changes
                          </Button>
                          </DialogActions>
                          </Dialog>
                          </CardContent>
                          </Card>
                          );
                          };
                          
                          export default CustomerSupport;
