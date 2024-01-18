import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  IconButton,
  Button,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const CategoryTable = ({ categories }) => {
  const [selectedPromotion, setSelectedPromotion] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (promotion) => {
    setSelectedPromotion(promotion);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPromotion(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <TableContainer component={Paper} style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category Name</TableCell>
              <TableCell>Parent Category</TableCell>
              <TableCell>Pricing</TableCell>
              <TableCell>Discounts</TableCell>
              <TableCell>Promotions</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow key={category.id}>
                <TableCell>{category.name}</TableCell>
                <TableCell>{category.parentCategory}</TableCell>
                <TableCell>
                  <IconButton aria-label="pricing">
                    <MonetizationOnIcon color="info" />
                  </IconButton>
                  100
                </TableCell>
                <TableCell>
                  <IconButton aria-label="discounts">
                    <LocalOfferIcon color="info" />
                  </IconButton>
                  5%
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() => handleOpenModal(category.promotion)}
                  >
                    View Promotions
                  </Button>
                </TableCell>
                <TableCell>{category.description}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit">
                    <EditIcon color="info" />
                  </IconButton>
                  <IconButton aria-label="delete">
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* Modal for viewing promotions */}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h4" gutterBottom>
            View Promotion
          </Typography>

          <Box>
            {/* Promotion details */}
            <Typography variant="subtitle1" gutterBottom>
              Promotion Name: ABC
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Discount: 5%
            </Typography>
            {/* Edit and New Promotion buttons */}
            <Box mt={2}>
              <Button
                style={{ marginRight: "16px" }}
                variant="outlined"
                color="info"
                onClick={() => {
                  // Handle edit promotion logic here
                }}
              >
                Edit Promotion
              </Button>
              <Button
                variant="outlined"
                color="success"
                onClick={() => {
                  // Handle creating new promotion logic here
                }}
              >
                New Promotion
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default CategoryTable;
