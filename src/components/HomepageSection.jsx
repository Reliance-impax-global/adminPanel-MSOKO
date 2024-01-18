import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const HomepageSection = () => {
  const featuredProducts = [
    {
      id: 1,
      title: "Product 1",
      description: "Description for Product 1",
    },
    {
      id: 2,
      title: "Product 2",
      description: "Description for Product 2",
    },
    // Add more products here
  ];

  // Create a custom theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1976D2", // Adjust this color to your preference
      },
      secondary: {
        main: "#F50057", // Adjust this color to your preference
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Typography variant="h4" gutterBottom>
          Homepage Banners and Featured Products
        </Typography>
        <Grid container spacing={3}>
          {/* Banners */}
          <Grid item xs={12}>
            {/* Implement your banner management UI here */}
            {/* For example, you can use Card components for banners */}
            <Card>
              <CardContent>{/* Your banner content */}</CardContent>
              <CardActions>
                <Button size="small">Edit Banner</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Featured Products */}
          {featuredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography>{product.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Edit Product</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default HomepageSection;
