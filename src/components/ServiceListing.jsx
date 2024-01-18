import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Rating,
} from "@mui/material";

const ServiceListing = () => {
  const [filter, setFilter] = useState("active"); // Initialize filter state

  // Sample data for service listings with descriptions for reviews
  const serviceListings = [
    {
      title: "Service Listing 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sellerName: "John Doe",
      reviewDescription: "Excellent service with great communication.",
      sellerType: "Service Seller",
      price: "3000",
      status: "active",
    },
    {
      title: "Service Listing 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sellerName: "John Doe",
      reviewDescription: "Excellent service with great communication.",
      sellerType: "Service Seller",
      price: "3000",
      status: "active",
    },
    {
      title: "Service Listing 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sellerName: "John Doe",
      reviewDescription: "Excellent service with great communication.",
      sellerType: "Service Seller",
      price: "3000",
      status: "active",
    },
    {
      title: "Service Listing 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sellerName: "Jane Smith",
      reviewDescription: "Good service, but could improve response time.",
      sellerType: "Product Seller",
      price: "3000",
      status: "ready_to_activate",
    },
    {
      title: "Service Listing 2",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      sellerName: "Jane Smith",
      reviewDescription: "Good service, but could improve response time.",
      sellerType: "Product Seller",
      price: "3000",
      status: "ready_to_activate",
    },
    {
      title: "Service Listing 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      sellerName: "Alice Johnson",
      reviewDescription: "Outstanding service. Highly recommended.",
      sellerType: "Property Seller",
      price: "3000",
      status: "blocked",
    },
    {
      title: "Service Listing 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      sellerName: "Alice Johnson",
      reviewDescription: "Outstanding service. Highly recommended.",
      sellerType: "Property Seller",
      price: "3000",
      status: "blocked",
    },
    {
      title: "Service Listing 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      sellerName: "Alice Johnson",
      reviewDescription: "Outstanding service. Highly recommended.",
      sellerType: "Property Seller",
      price: "3000",
      status: "blocked",
    },
    {
      title: "Service Listing 3",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      sellerName: "Alice Johnson",
      reviewDescription: "Outstanding service. Highly recommended.",
      sellerType: "Property Seller",
      price: "3000",
      status: "blocked",
    },
    {
      title: "Service Listing 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sellerName: "Bob Wilson",
      reviewDescription: "Top-notch service. No complaints whatsoever.",
      sellerType: "Product Seller",
      price: "3000",
      status: "inactive",
    },
    {
      title: "Service Listing 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sellerName: "Bob Wilson",
      reviewDescription: "Top-notch service. No complaints whatsoever.",
      sellerType: "Product Seller",
      price: "3000",
      status: "inactive",
    },
    {
      title: "Service Listing 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sellerName: "Bob Wilson",
      reviewDescription: "Top-notch service. No complaints whatsoever.",
      sellerType: "Product Seller",
      price: "3000",
      status: "inactive",
    },
    {
      title: "Service Listing 4",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      sellerName: "Bob Wilson",
      reviewDescription: "Top-notch service. No complaints whatsoever.",
      sellerType: "Product Seller",
      price: "3000",
      status: "inactive",
    },
    {
      title: "Service Listing 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sellerName: "Eve Brown",
      reviewDescription: "Archived listing. No longer available.",
      sellerType: "Service Seller",
      price: "3000",
      status: "archived",
    },
    {
      title: "Service Listing 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sellerName: "Eve Brown",
      reviewDescription: "Archived listing. No longer available.",
      sellerType: "Service Seller",
      price: "3000",
      status: "archived",
    },
    {
      title: "Service Listing 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sellerName: "Eve Brown",
      reviewDescription: "Archived listing. No longer available.",
      sellerType: "Service Seller",
      price: "3000",
      status: "archived",
    },
    {
      title: "Service Listing 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sellerName: "Eve Brown",
      reviewDescription: "Archived listing. No longer available.",
      sellerType: "Service Seller",
      price: "3000",
      status: "archived",
    },
    {
      title: "Service Listing 5",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      sellerName: "Eve Brown",
      reviewDescription: "Archived listing. No longer available.",
      sellerType: "Service Seller",
      price: "3000",
      status: "archived",
    },
  ];

  const handleAddSeller = () => {
    // Implement the logic for adding a new seller here
    console.log("Add Seller clicked");
  };

  const handleUpdateSeller = () => {
    // Implement the logic for updating the seller here
    console.log("Update Seller clicked");
  };

  const handleBanSeller = () => {
    // Implement the logic for banning the seller here
    console.log("Ban Seller clicked");
  };

  return (
    <Container>
      <Typography variant="h4" style={{ marginTop: "32px" }}>
        Service Listings
      </Typography>

      {/* Buttons to filter listings */}
      <div style={{ marginTop: "16px" }}>
        <Button
          variant={filter === "active" ? "contained" : "outlined"}
          color="warning"
          style={{ marginRight: "8px", fontSize: "1rem" }}
          onClick={() => setFilter("active")}
        >
          Active Listings
        </Button>
        <Button
          variant={filter === "ready_to_activate" ? "contained" : "outlined"}
          color="info"
          style={{ marginRight: "8px", fontSize: "1rem" }}
          onClick={() => setFilter("ready_to_activate")}
        >
          Ready to Activate
        </Button>
        <Button
          variant={filter === "blocked" ? "contained" : "outlined"}
          color="secondary"
          style={{ marginRight: "8px", fontSize: "1rem" }}
          onClick={() => setFilter("blocked")}
        >
          Blocked Listings
        </Button>
        <Button
          variant={filter === "inactive" ? "contained" : "outlined"}
          color="warning"
          style={{ marginRight: "8px", fontSize: "1rem" }}
          onClick={() => setFilter("inactive")}
        >
          Inactive Listings
        </Button>
        <Button
          variant={filter === "archived" ? "contained" : "outlined"}
          color="info"
          style={{ marginRight: "8px", fontSize: "1rem" }}
          onClick={() => setFilter("archived")}
        >
          Archived Listings
        </Button>
      </div>

      {/* Table to display listings */}
      <TableContainer component={Paper} style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Seller Name</TableCell>
              <TableCell>Review Description</TableCell>
              <TableCell>Seller Type</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceListings
              .filter(
                (listing) => filter === "all" || listing.status === filter
              )
              .map((listing, index) => (
                <TableRow key={index}>
                  <TableCell>{listing.title}</TableCell>
                  <TableCell>{listing.description}</TableCell>
                  <TableCell>{listing.sellerName}</TableCell>
                  <TableCell>{listing.reviewDescription}</TableCell>
                  <TableCell>{listing.sellerType}</TableCell>
                  <TableCell>TZS{listing.price}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        marginRight: "8px",
                        marginBottom: "5px",
                        fontSize: "0.7rem",
                      }}
                      onClick={handleAddSeller}
                    >
                      Edit Seller
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginRight: "8px", fontSize: "0.7rem" }}
                      onClick={handleUpdateSeller}
                    >
                      Update Seller
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      style={{ marginTop: "5px", fontSize: "0.7rem" }}
                      onClick={handleBanSeller}
                    >
                      Ban Seller
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ServiceListing;
