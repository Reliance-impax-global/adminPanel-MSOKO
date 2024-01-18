import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";

const PaymentOverview = () => {
  const [payments, setPayments] = useState([
    {
      id: 1,
      date: "2023-09-15",
      amount: 500,
    },
    {
      id: 2,
      date: "2023-09-08",
      amount: 300,
    },
  ]);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);

  const handleEditClick = (payment) => {
    setSelectedPayment(payment);
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (payment) => {
    const updatedPayments = payments.filter((p) => p.id !== payment.id);
    setPayments(updatedPayments);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  // Calculate total outstanding payment
  const totalOutstandingPayment = payments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  // Calculate next payment
  const nextPayment = payments.length > 0 ? payments[0] : null;

  // Calculate last payment
  const lastPayment =
    payments.length > 0 ? payments[payments.length - 1] : null;

  return (
    <Box mt={3}>
      <Typography variant="h3" color="secondary">
        Payment Overview
      </Typography>
      <TableContainer component={Paper} mt={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment, index) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.date}</TableCell>
                <TableCell>${payment.amount}</TableCell>
                <TableCell>
                  {index === 0 ? "Next Payment" : ""}
                  {index === payments.length - 1 ? "Last Payment" : ""}
                  {index !== 0 && index !== payments.length - 1
                    ? "Outstanding"
                    : ""}
                </TableCell>
                <TableCell>
                  <IconButton
                    color="secondary"
                    onClick={() => handleEditClick(payment)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteClick(payment)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Payment Dialog */}
      <Dialog open={isEditDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit Payment</DialogTitle>
        <DialogContent style={{ margin: "16px" }}>
          {/* Add form fields for editing payment here */}
          {/* For example: */}
          <TextField
            style={{ margin: "16px" }}
            label="Date"
            defaultValue={selectedPayment?.date}
          />
          <TextField
            style={{ margin: "16px" }}
            label="Amount"
            defaultValue={selectedPayment?.amount}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleEditDialogClose} color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Payment Summary */}
      <Box mt={3}>
        <Typography variant="h2">Payment Summary</Typography>
        <Typography variant="body1">
          Total OutStanding Payments: ${totalOutstandingPayment.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: "16px" }}
          startIcon={<Edit />} // Add the Edit icon
          mt={6}
        >
          Edit
        </Button>
        {/* <Typography variant="body1">
          Total Received Payment: $
          {(totalOutstandingPayment - nextPayment.amount).toFixed(2)}
        </Typography> */}
      </Box>
    </Box>
  );
};

export default PaymentOverview;
