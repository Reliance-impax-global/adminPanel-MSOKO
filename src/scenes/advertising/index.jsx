

import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
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
const adsCollection = collection(db, "ads");

const initialAd = {
  name: "",
  description: "",
  listingDate: "",
  listingPrice: "",
  finalPrice: "",
  time: "",
  isApproved: false,
};

const Advertisment = () => {
  const [ads, setAds] = useState([]);
  const [ad, setAd] = useState(initialAd);
  const [isEditing, setIsEditing] = useState(false);

  const fetchDataFromFirestore = async () => {
    try {
      const querySnapshot = await getDocs(adsCollection);
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAds(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAd({ ...ad, [name]: value });
  };

  const handleAddAd = async () => {
    try {
      if (isEditing) {
        // If in editing mode, update the existing ad
        const adRefToUpdate = doc(db, "ads", ad.id);
        await updateDoc(adRefToUpdate, ad);

        const updatedAds = ads.map((a) =>
          a.id === ad.id ? { ...a, ...ad } : a
        );
        setAds(updatedAds);
        setAd(initialAd);
        setIsEditing(false);
      } else {
        // If in adding mode, add a new ad
        const docRef = await addDoc(adsCollection, ad);
        setAds([...ads, { id: docRef.id, ...ad }]);
        setAd(initialAd);
      }
    } catch (error) {
      console.error("Error updating/adding document:", error);
    }
  };

  const handleEditAd = (ad) => {
    setAd(ad);
    setIsEditing(true);
  };

  const handleDeleteAd = async (id) => {
    try {
      const adRefToDelete = doc(db, "ads", id);
      await deleteDoc(adRefToDelete);
      const updatedAds = ads.filter((a) => a.id !== id);
      setAds(updatedAds);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleApproveAd = async (id) => {
    try {
      const adRefToApprove = doc(db, "ads", id);
      await updateDoc(adRefToApprove, { isApproved: true });
      const updatedAds = ads.map((a) =>
        a.id === id ? { ...a, isApproved: true } : a
      );
      setAds(updatedAds);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div>
      <AppBar position="static" style={{ margin: "16px", marginRight: "16px" }}>
        <Toolbar>
          <Typography variant="h2">Ad Management System</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginBottom: "20px" }}>
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography variant="h5">Create Ad</Typography>
          <form>
            <TextField
              label="Name"
              name="name"
              color="info"
              value={ad.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              color="info"
              value={ad.description}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Listing Date"
              name="listingDate"
              type="date"
              color="info"
              value={ad.listingDate}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Listing Price"
              name="listingPrice"
              color="info"
              value={ad.listingPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Final Price"
              name="finalPrice"
              color="info"
              value={ad.finalPrice}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Time"
              name="time"
              type="time"
              color="info"
              value={ad.time}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="info" onClick={handleAddAd}>
              {isEditing ? "Update Ad" : "Add Ad"}
            </Button>
          </form>
        </Paper>
        <Paper
          elevation={3}
          style={{ padding: "20px", marginTop: "20px", marginBottom: "20px" }}
        >
          <Typography variant="h5">Ad List</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Listing Date</TableCell>
                  <TableCell>Listing Price</TableCell>
                  <TableCell>Final Price</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ads.map((ad) => (
                  <TableRow key={ad.id}>
                    <TableCell>{ad.name}</TableCell>
                    <TableCell>{ad.description}</TableCell>
                    <TableCell>{ad.listingDate}</TableCell>
                    <TableCell>{ad.listingPrice}</TableCell>
                    <TableCell>{ad.finalPrice}</TableCell>
                    <TableCell>{ad.time}</TableCell>
                    <TableCell>
                      {!ad.isApproved ? "Not Approved" : "Approved"}
                    </TableCell>
                    <TableCell>
                      <Button
                        style={{ marginRight: "16px" }}
                        variant="outlined"
                        color="info"
                        onClick={() => handleEditAd(ad)}
                      >
                        Edit
                      </Button>
                      <Button
                        style={{ marginRight: "16px" }}
                        variant="outlined"
                        color="secondary"
                        onClick={() => handleDeleteAd(ad.id)}
                      >
                        Delete
                      </Button>
                      {!ad.isApproved && (
                        <Button
                          variant="outlined"
                          color="success"
                          onClick={() => handleApproveAd(ad.id)}
                        >
                          Approve
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
};

export default Advertisment;
