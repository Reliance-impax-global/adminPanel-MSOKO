import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductForm from "../../components/ProductForm";
import CategoryForm from "../../components/CategoryForm";
import CategoryTable from "../../components/CategoryTable";
import ProductInventorySection from "../../components/ProductInventorySection";
const categories = [
  {
    id: 1,
    name: "Category 1",
    parentCategory: "Parent 1",
    description: "Description 1",
  },
  {
    id: 2,
    name: "Category 2",
    parentCategory: "Parent 2",
    description: "Description 2",
  },
  // ... Add more categories
];
// Create this component

const ProductManagement = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openCategoryDialog, setOpenCategoryDialog] = useState(false);
  const handleApprove = (productId) => {
    // Logic to handle the approve action for the product with productId
    console.log(`Product ${productId} approved`);
  };

  const handleDisapprove = (productId) => {
    // Logic to handle the disapprove action for the product with productId
    console.log(`Product ${productId} disapproved`);
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Electronics",
      price: 200,
      stock: "In Stock",
      alertThreshold: "99",
      reviews: ["review", "hey there hru"],
      rating: 8,
      discount: 10,
    },
    {
      id: 2,
      name: "Product 2",
      category: "Clothing",
      price: 50,
      stock: "In Stock",
      alertThreshold: "99",
      reviews: ["review", "hey there hru"],
      rating: 8,
      discount: 15,
    },
    // ... more products
  ];

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setOpenDialog(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleDeleteProduct = (productId) => {
    // Implement logic to delete the product
  };

  const handleDialogClose = () => {
    setSelectedProduct(null);
    setOpenDialog(false);
  };
  const handleCategoryDialogClose = () => {
    setOpenCategoryDialog(false);
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Product Management
      </Typography>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddProduct}
        style={{ marginBottom: "16px" }}
      >
        Add Product
      </Button>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() => setOpenCategoryDialog(true)}
        style={{ marginBottom: "16px", marginLeft: "16px" }}
      >
        Add Category
      </Button>

      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Category: {product.category}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: ${product.price}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Discount: {product.discount}%
                </Typography>
                <Button
                  onClick={() => handleEditProduct(product)}
                  startIcon={<EditIcon />}
                  color="info"
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteProduct(product.id)}
                  startIcon={<DeleteIcon />}
                  color="secondary"
                >
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* Category Table */}
      <CategoryTable categories={categories} />

      <ProductInventorySection
        products={products}
        onApprove={handleApprove}
        onDisapprove={handleDisapprove}
      />
      {/* Product Form Dialog */}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>
          {selectedProduct ? "Edit Product" : "Add Product"}
        </DialogTitle>
        <DialogContent>
          {/* Edit product Modal here */}
          <ProductForm
            selectedProduct={selectedProduct}
            onClose={handleDialogClose}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openCategoryDialog} onClose={handleCategoryDialogClose}>
        <DialogTitle>Add Category</DialogTitle>
        <DialogContent>
          <CategoryForm onClose={handleCategoryDialogClose} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCategoryDialogClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleCategoryDialogClose}
            color="info"
            variant="fill"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ProductManagement;
