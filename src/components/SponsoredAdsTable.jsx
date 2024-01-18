import React, { useState } from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  IconButton,
  Paper,
  Chip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StopIcon from "@mui/icons-material/Stop";
import Tooltip from "@mui/material/Tooltip";

const SponsoredAdsTable = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      category: "Property",
      title: "Luxury Apartment",
      price: 2000,
      duration: 120, // Duration in seconds
      remainingTime: 120, // Remaining time in seconds
      status: "premium",
    },
    {
      id: 1,
      category: "Property",
      title: "Luxury Apartment",
      price: 2000,
      duration: 120, // Duration in seconds
      remainingTime: 120, // Remaining time in seconds
      status: "premium",
    },
    {
      id: 2,
      category: "Service",
      title: "House Cleaning",
      price: 100,
      duration: 60,
      remainingTime: 60,
      status: "standard",
    },
    {
      id: 3,
      category: "Product",
      title: "Smartphone",
      price: 800,
      duration: 180,
      remainingTime: 180,
      status: "premium",
    },
  ]);

  const handleDeleteAd = (id) => {
    // Remove the ad with the specified ID from the list
    setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
  };

  const handleStopAd = (id) => {
    // Stop the ad with the specified ID
    const updatedAds = ads.map((ad) => {
      if (ad.id === id) {
        return {
          ...ad,
          remainingTime: 0,
        };
      }
      return ad;
    });
    setAds(updatedAds);
  };

  // Function to update the remaining time for each ad
  const updateRemainingTime = () => {
    const updatedAds = ads.map((ad) => {
      if (ad.remainingTime > 0) {
        return {
          ...ad,
          remainingTime: ad.remainingTime - 1,
        };
      }
      return ad;
    });
    setAds(updatedAds);
  };

  // Start the timer when the component mounts
  React.useEffect(() => {
    const timer = setInterval(updateRemainingTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Sponsored Ads Management</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Category</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Remaining Time (minutes)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ads.map((ad) => (
                <TableRow key={ad.id}>
                  <TableCell>{ad.category}</TableCell>
                  <TableCell>{ad.title}</TableCell>
                  <TableCell>${ad.price}</TableCell>
                  <TableCell>{Math.floor(ad.remainingTime / 60)}</TableCell>
                  <TableCell>
                    {ad.status === "premium" ? (
                      <Chip label="Premium" color="secondary" />
                    ) : (
                      "Standard"
                    )}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteAd(ad.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {ad.remainingTime > 0 && (
                      <Tooltip title="Stop" arrow>
                        <IconButton
                          color="secondary"
                          onClick={() => handleStopAd(ad.id)}
                        >
                          <StopIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default SponsoredAdsTable;
