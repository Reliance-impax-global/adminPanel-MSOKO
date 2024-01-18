import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Rating,
} from "@mui/material";

const ProductInventorySection = ({ products, onApprove, onDisapprove }) => {
  return (
    <section style={{ marginTop: "32px" }}>
      <Typography variant="h5" gutterBottom>
        Product Inventory Monitoring
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: "16px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell>Current Stock</TableCell>
              <TableCell>Alert Threshold</TableCell>
              <TableCell>Reviews</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>{product.alertThreshold}</TableCell>
                <TableCell>
                  {/* Display reviews for the product */}
                  <ul>
                    {product.reviews.map((review, index) => (
                      <li key={index}>{review}</li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell>
                  {/* Display rating for the product */}
                  <Rating value={product.rating} readOnly />
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => onApprove(product.id)}
                    style={{
                      backgroundColor: "green",
                      color: "white",
                      marginRight: "16px",
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => onDisapprove(product.id)}
                    style={{ backgroundColor: "red", color: "white" }}
                  >
                    Disapprove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default ProductInventorySection;
