
import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { getDatabase, ref, push, update, remove, get } from 'firebase/database';
import app from './../../firebase/firebaseConfig';
import Swal from "sweetalert2";

const SellerManagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedSeller, setSelectedSeller] = useState(null);
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [commissionRate, setCommissionRate] = useState(0);
  const [editedSellerCommission, setEditedSellerCommission] = useState(0);
  
  const [loading, setLoading] = useState(true);
  const [newSeller, setNewSeller] = useState({
    name: "",
    status: "Pending",
    commission: 0,
  });
  const database = getDatabase(app);

  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const sellersRef = ref(database, "sellers");
        const snapshot = await get(sellersRef);
        const sellersData = snapshot.val();

        if (sellersData) {
          const sellersArray = Object.keys(sellersData).map((key) => ({
            id: key,
            ...sellersData[key],
          }));
          setSellers(sellersArray);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); 
      }
    };

    fetchDataFromFirebase();
  }, []);

  const handleDialogClose = () => {
    setSelectedSeller(null);
    setOpenDialog(false);
  };

  const handleMonitorPerformance = (sellerId) => {
    // Implement logic to navigate to a page for monitoring performance and compliance
  };

  const handleCommissionAndPayment = () => {
    setPaymentDialogOpen(true);
  };

  const handlePaymentDialogClose = () => {
    setPaymentDialogOpen(false);
  };

  const handleEditSeller = (seller) => {
    setSelectedSeller(seller);
    setNewSeller(seller); 
    setOpenDialog(true);
  };

  const handleDeleteSeller = async (sellerId) => {
  
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const sellersRef = ref(database, `sellers/${sellerId}`);
        await remove(sellersRef);
        const updatedSellers = sellers.filter((seller) => seller.id !== sellerId);
        setSellers(updatedSellers);

       
        Swal.fire("Deleted!", "The seller has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting seller:", error);
     
        Swal.fire("Error", "An error occurred while deleting the seller.", "error");
      }
    }
  };

  const handleApproveSeller = async (sellerId) => {
   
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to approve this seller?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, approve it!",
    });

    if (result.isConfirmed) {
      try {
        const sellersRef = ref(database, `sellers/${sellerId}`);
        await update(sellersRef, { status: "Approved" });
        const updatedSellers = sellers.map((seller) =>
          seller.id === sellerId ? { ...seller, status: "Approved" } : seller
        );
        setSellers(updatedSellers);

        Swal.fire("Success", "Seller has been approved successfully.", "success");
      } catch (error) {
        console.error("Error approving seller:", error);
        
        Swal.fire("Error", "An error occurred while approving the seller.", "error");
      }
    }
  };
  const handleEditCommission = (seller) => {
    setEditedSellerCommission(seller.commission);
    setSelectedSeller(seller);
    setNewSeller(seller); 
    setOpenDialog(true);
  };

  const handleAddOrUpdateSeller = async () => {
    try {
      if (selectedSeller) {
     
        const sellerRef = ref(database, `sellers/${selectedSeller.id}`);
        await update(sellerRef, newSeller);
        const updatedSellers = sellers.map((seller) =>
          seller.id === selectedSeller.id ? { ...seller, ...newSeller } : seller
        );
        setSellers(updatedSellers);

      
        setNewSeller({ name: "", status: "Pending", commission: 0 });
        setSelectedSeller(null);
        setOpenDialog(false);

      
        Swal.fire("Success", "Changes have been saved successfully.", "success");
      } else {
        // Add new seller
        const sellersRef = ref(database, "sellers");
        const newSellerRef = await push(sellersRef, newSeller);
        setSellers([...sellers, { id: newSellerRef.key, ...newSeller }]);

       
        setNewSeller({ name: "", status: "Pending", commission: 0 });
        setOpenDialog(false);

        Swal.fire("Success", "Seller has been added successfully.", "success");
      }
    } catch (error) {
      console.error("Error adding/updating seller:", error);

    
      Swal.fire("Error", "An error occurred while saving changes.", "error");
    }
  };

  // const handleAddSeller = async () => {
  //   try {
  //     const sellersRef = ref(database, "sellers");
  //     const newSellerRef = await push(sellersRef, newSeller);

  //     setSellers([...sellers, { id: newSellerRef.key, ...newSeller }]);
  //     setNewSeller({ name: "", status: "Pending", commission: 0 });
  //     setOpenDialog(false);
  //   } catch (error) {
  //     console.error("Error adding seller:", error);
  //   }
  // };

  return (
    <div style={{ marginLeft: "16px" }}>
      <h1>Seller Management</h1>
      {loading ? ( 
         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
         <CircularProgress color="info" />
       </div>
      ) : (
      <TableContainer  component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Commission</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller) => (
              <TableRow key={seller.id}>
                <TableCell>{seller.id}</TableCell>
                <TableCell>{seller.name}</TableCell>
                <TableCell
                  style={{
                    color: seller.status === "Approved" ? "green" : "inherit",
                  }}
                >
                  {seller.status}
                </TableCell>
                <TableCell>{seller.commission}%</TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { xs: "center", md: "flex-start" },
                    gap: "16px",
                  }}
                >
                  <IconButton
                    onClick={() => handleEditSeller(seller)}
                    aria-label="Edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDeleteSeller(seller.id)}
                    aria-label="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", md: "row" },
                      alignItems: { xs: "center", md: "flex-start" },
                      gap: "3px",
                    }}
                  >
                    {seller.status === "Pending" && (
                      <Button
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleApproveSeller(seller.id)}
                      >
                        Approve
                      </Button>
                    )}
                    <Button
                      variant="outlined"
                      color="info"
                      style={{ marginLeft: "16px" }}
                      onClick={() => handleEditCommission(seller)}
                    >
                      Edit Commission
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ marginLeft: "16px" }}
                      onClick={() => handleMonitorPerformance(seller.id)}
                    >
                      Monitor Performance
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)}

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        style={{ marginTop: "16px" }}
        onClick={() => setOpenDialog(true)}
      >
        Add Seller
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCommissionAndPayment}
        style={{ marginTop: "16px", marginLeft: "16px" }}
      >
        Set Commission and Process Payment
      </Button>

      {/* Edit Seller Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>{selectedSeller ? "Edit Seller" : "Add Seller"}</DialogTitle>
        <DialogContent>
        
          <TextField
            label="Seller Name"
            style={{ marginTop: "16px" }}
            color="info"
            fullWidth
            value={newSeller.name}
            onChange={(e) =>
              setNewSeller({ ...newSeller, name: e.target.value })
            }
          />
          <TextField
            label="Commission Rate (%)"
            color="info"
            type="number"
            style={{ marginTop: "16px" }}
            value={newSeller.commission}
            onChange={(e) =>
              setNewSeller({
                ...newSeller,
                commission: parseFloat(e.target.value),
              })
            }
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleAddOrUpdateSeller} color="info">
            {selectedSeller ? "Save Changes" : "Add Seller"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Payment and Commission Dialog */}
      <Dialog open={paymentDialogOpen} onClose={handlePaymentDialogClose}>
        <DialogTitle>Payment Processing & Commission Rate</DialogTitle>
        <DialogContent>
          <TextField
            style={{ marginTop: "16px" }}
            label="Commission Rate (%)"
            type="number"
            value={commissionRate}
            onChange={(e) => setCommissionRate(e.target.value)}
            fullWidth
          />
          {/* Add more payment processing components here */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePaymentDialogClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handlePaymentDialogClose} color="info">
            Process Payment
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SellerManagement;
