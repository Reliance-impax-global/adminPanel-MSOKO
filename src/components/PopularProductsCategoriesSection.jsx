import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const PopularProductsCategoriesSection = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    // history.push("/analytics"); // Redirect to the analytics section
    navigate("/analytics-reporting");
  };
  const popularProducts = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" },
    { id: 5, name: "Product E" },
  ];

  const popularCategories = [
    { id: 1, name: "Category X" },
    { id: 2, name: "Category Y" },
    { id: 3, name: "Category Z" },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom style={{ marginLeft: 16 }}>
        Track Popular Products and Categories
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} style={{ marginBottom: 16 }}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Typography variant="h6">Popular Products</Typography>
              <List>
                {popularProducts.map((product) => (
                  <ListItem key={product.id}>
                    <ListItemText primary={product.name} />
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      style={{ marginRight: 16 }}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      Delete
                    </Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card style={{ marginLeft: 16 }}>
            <CardContent>
              <Typography variant="h6">Popular Categories</Typography>
              <List>
                {popularCategories.map((category) => (
                  <ListItem key={category.id}>
                    <ListItemText primary={category.name} />
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      style={{ marginRight: 16 }}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" color="error" size="small">
                      Delete
                    </Button>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleGoBack}
          style={{ marginTop: 16, width: "75%", margin: "0  auto" }}
        >
          Go Back
        </Button>
      </Grid>
    </div>
  );
};

export default PopularProductsCategoriesSection;
