
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
  CircularProgress,
  colors,
} from "@mui/material";
import { getDatabase, ref, push, update, remove, onValue } from "firebase/database";
import Swal from "sweetalert2";
import app from "../../firebase/firebaseConfig";

const db = getDatabase(app);
const adsRef = ref(db, "ads");

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
  const [loading, setLoading] = useState(true);

  const fetchDataFromRealtimeDatabase = async () => {
    try {
      const dbRef = ref(db, "ads");
      
      onValue(dbRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = Object.keys(snapshot.val()).map((key) => ({
            id: key,
            ...snapshot.val()[key],
          }));
          setAds(data);
         
        }
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchDataFromRealtimeDatabase();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAd({ ...ad, [name]: value });
  };

  const handleAddAd = async () => {
    try {
      if (isEditing) {
        // If in editing mode, update the existing ad
        await update(ref(db, `ads/${ad.id}`), ad);

        const updatedAds = ads.map((a) => (a.id === ad.id ? { ...a, ...ad } : a));
        setAds(updatedAds);
        setAd(initialAd);
        setIsEditing(false);

        Swal.fire('Success!', 'The ad has been updated.', 'success');
      } else {
        // If in adding mode, add a new ad
        const newAdRef = await push(adsRef);
        await update(newAdRef, ad);

        setAds([...ads, { id: newAdRef.key, ...ad }]);
        setAd(initialAd);

        Swal.fire('Success!', 'The ad has been added.', 'success');
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
        await remove(ref(db, `ads/${id}`));

        const updatedAds = ads.filter((a) => a.id !== id);
        setAds(updatedAds);

        Swal.fire('Deleted!', 'The ad has been deleted.', 'success');
      }
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleApproveAd = async (id) => {
    try {
      await update(ref(db, `ads/${id}`), { isApproved: true });

      const updatedAds = ads.map((a) => (a.id === id ? { ...a, isApproved: true } : a));
      setAds(updatedAds);

      Swal.fire('Success!', 'The ad has been approved.', 'success');
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
      {loading ? (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "300px" }}>
    <CircularProgress style={{ color: 'red' }} />
  </div>
) : (
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
        </Paper>)}
      </Container>
    </div>
  );
};

export default Advertisment;
