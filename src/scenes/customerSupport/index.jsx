

import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
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
import { getDatabase, ref, push, update, remove, get } from "firebase/database";
import app from "../../firebase/firebaseConfig";

const db = getDatabase(app);
const inquiriesRef = ref(db, "inquiries");

const MySwal = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});

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
  const resolveInquiry = async (id) => {
    try {
      // Update the status of the resolved inquiry in the Realtime Database
      update(ref(db, `inquiries/${id}`), { status: "Resolved" });

      // Update local state with the resolved inquiry
      const updatedInquiries = inquiries.map((inquiry) =>
        inquiry.id === id ? { ...inquiry, status: "Resolved" } : inquiry
      );
      setInquiries(updatedInquiries);
    } catch (error) {
      console.error("Error resolving inquiry:", error);
    }
  };
  const submitTicket = async () => {
    try {
      const newInquiry = {
        content: ticket,
        assignedStaff,
        status: "Pending",
      };

      const newInquiryRef = push(inquiriesRef);
      update(newInquiryRef, newInquiry);

      setInquiries([...inquiries, { id: newInquiryRef.key, ...newInquiry }]);
      setTicket("");
      setAssignedStaff("");

      MySwal.fire('Success!', 'The inquiry has been submitted.', 'success');
    } catch (error) {
      console.error("Error submitting ticket:", error);
    }
  };

  const deleteInquiry = async (id) => {
    try {
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (result.isConfirmed) {
        await remove(ref(db, `inquiries/${id}`));

        const updatedInquiries = inquiries.filter((inquiry) => inquiry.id !== id);
        setInquiries(updatedInquiries);

        MySwal.fire('Deleted!', 'The inquiry has been deleted.', 'success');
      }
    } catch (error) {
      console.error('Error deleting inquiry:', error);
    }
  };

  const submitEdit = async () => {
    try {
      const editedInquiry = selectedInquiry;
      editedInquiry.content = editedTicket;

      await update(ref(db, `inquiries/${editedInquiry.id}`), {
        content: editedTicket,
      });

      const updatedInquiries = inquiries.map((inquiry) =>
        inquiry.id === editedInquiry.id ? editedInquiry : inquiry
      );
      setInquiries(updatedInquiries);

      MySwal.fire('Success!', 'The inquiry has been edited.', 'success');

      closeEditModal();
    } catch (error) {
      console.error("Error editing inquiry:", error);
    }
  };

  const fetchInquiries = async () => {
    try {
      const dataSnapshot = await get(inquiriesRef);
      const data = [];
      dataSnapshot.forEach((childSnapshot) => {
        data.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      setInquiries(data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

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
              {inquiries.map((inquiry) => (
                <TableRow key={inquiry.id}>
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
                          onClick={() => resolveInquiry(inquiry.id)}
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
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => deleteInquiry(inquiry.id)}
                        >
                          Delete
                        </Button>
                      </Box>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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
