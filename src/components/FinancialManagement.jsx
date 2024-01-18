import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  DialogActions,
  DialogContent,
  DialogTitle,
  Dialog,
} from "@mui/material";
// Mock financial data with payment issues and descriptions
const mockFinancialData = [
  {
    id: 1,
    name: "Transaction 1",
    amount: 100,
    issueResolved: false,
    issueDescription: "Incorrect billing amount",
  },
  {
    id: 2,
    name: "Transaction 2",
    amount: 200,
    issueResolved: true,
    issueDescription: null, // Resolved issue, so no description needed
  },
  {
    id: 3,
    name: "Transaction 3",
    amount: 150,
    issueResolved: false,
    issueDescription: "Payment not received",
  },
  {
    id: 4,
    name: "Transaction 4",
    amount: 300,
    issueResolved: false,
    issueDescription: "Late payment",
  },
  {
    id: 5,
    name: "Transaction 5",
    amount: 250,
    issueResolved: true,
    issueDescription: null, // Resolved issue, so no description needed
  },
  {
    id: 6,
    name: "Transaction 6",
    amount: 175,
    issueResolved: false,
    issueDescription: "Billing address mismatch",
  },
  {
    id: 7,
    name: "Transaction 7",
    amount: 220,
    issueResolved: false,
    issueDescription: "Duplicate payment",
  },
  // Add more transactions as needed
];
const FinancialManagement = () => {
  const theme = useTheme();
  const [transactions, setTransactions] = useState(mockFinancialData);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isEditDialogOpen, setEditDialogOpen] = useState(false);

  // Function to resolve a payment issue
  const resolveIssue = (transactionId) => {
    const updatedTransactions = transactions.map((transaction) => {
      if (transaction.id === transactionId) {
        return { ...transaction, issueResolved: true };
      }
      return transaction;
    });
    setTransactions(updatedTransactions);
  };

  // Function to create a demo payment issue
  const createDemoPaymentIssue = () => {
    const newTransaction = {
      id: transactions.length + 1,
      name: "Demo Transaction",
      amount: 300,
      issueResolved: false,
      issueDescription: "New issue description", // Add a description for the demo issue
    };

    // Add the new transaction to the beginning of the list
    setTransactions([newTransaction, ...transactions]);
  };

  // Function to open the edit dialog
  const openEditDialog = (transaction) => {
    setSelectedTransaction(transaction);
    setEditDialogOpen(true);
  };

  // Function to close the edit dialog
  const closeEditDialog = () => {
    setEditDialogOpen(false);
    setSelectedTransaction(null);
  };
  return (
    <Box m="20px">
      <Typography variant="h2">Financial Management</Typography>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Issue</TableCell>
              <TableCell>Issue Description</TableCell> {/* New column */}
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>
                  {transaction.issueResolved ? "Resolved" : "Unresolved"}
                </TableCell>
                <TableCell
                  style={{ cursor: "pointer" }}
                  onClick={() => openEditDialog(transaction)}
                >
                  {transaction.issueDescription || "-"}
                </TableCell>{" "}
                {/* Display description or "-" if none */}
                <TableCell>
                  {!transaction.issueResolved && (
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => resolveIssue(transaction.id)}
                    >
                      Resolve Issue
                    </Button>
                  )}
                  {/* Add edit and other actions here */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Edit Dialog */}
      <Dialog
        open={isEditDialogOpen}
        onClose={closeEditDialog}
        maxWidth="md" // Set the maximum width to 'md' (medium)
        fullWidth
      >
        <DialogTitle>Edit Transaction</DialogTitle>
        <DialogContent>
          <Typography variant="h6">Transaction Details</Typography>
          {selectedTransaction && (
            <div>
              <p>ID: {selectedTransaction.id}</p>
              <p>Name: {selectedTransaction.name}</p>
              <p>Amount: ${selectedTransaction.amount}</p>
              <p>
                Issue:{" "}
                {selectedTransaction.issueResolved ? "Resolved" : "Unresolved"}
              </p>
              <p>Description:{selectedTransaction.issueDescription || "-"}</p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEditDialog} color="info">
            Close
          </Button>
          <Button variant="contained" color="secondary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default FinancialManagement;
