import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const RelasedInfoEdit = () => {
  const [selectedCategory, setSelectedCategory] = useState("Product");

  // Sample data for products, services, and properties
  const releases = {
    Product: [
      {
        title: "Bag - School Bag",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Bag",
        subcategory: "School Bag",
        brand: "Niko",
        imageUpload: "school-bag.jpg",
        stock: 100,
        stockAvailableForBuyers: "Yes",
        packageWeight: "1.5 kg",
        packageDimensions: "30cm x 20cm x 40cm",
        hsnCode: "GST_18",
        taxCode: "GST_18",
        countryDetails: "India",
        manufacturerDetails: "ABC Manufacturing Co.",
        packerDetails: "XYZ Packing Co.",
        importerDetails: "Imported by XYZ Imports",
        salesPackage: "1 School Bag",
        keywords: "school bag, backpack, student bag",
      },
      {
        title: "Book - Mystery Novel",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "Book",
        subcategory: "Mystery Novel",
        brand: "BookWorld",
        imageUpload: "mystery-novel.jpg",
        stock: 50,
        stockAvailableForBuyers: "Yes",
        packageWeight: "0.5 kg",
        packageDimensions: "15cm x 3cm x 22cm",
        hsnCode: "GST_12",
        taxCode: "GST_12",
        countryDetails: "India",
        manufacturerDetails: "BookWorld Publications",
        packerDetails: "BookWorld Packing Co.",
        importerDetails: "Imported by BookWorld Imports",
        salesPackage: "1 Mystery Novel",
        keywords: "mystery novel, fiction, suspense",
      },
      // Add more product entries as needed
    ],

    Service: [
      {
        title: "Service Release 1",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        sellerSkuId: "SKU123456",
        listingStatus: "Active",
        mrp: "$49.99",
        sellingPrice: "$39.99",
        serviceTitle: "House Cleaning Service",
        serviceDescription: "Get your home cleaned by professionals.",
        timeRequirement: "2 hours",
        serviceManagerName: "John Doe",
        teamSize: "4",
        deliveryChargeLocal: "$10",
        deliveryChargeZonal: "$20",
        deliveryChargeNational: "$30",
        serviceType: "House Cleaning",
      },
    ],

    Property: [
      {
        title: "Property Release 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        // Updated property fields
        category: "Buy",
        locality: "Sample Locality",
        plotNumber: "123",
        propertyType: "Flat",
        rooms: "2BHK",
        bedroom: "2",
        bathroom: "2",
        kitchen: "1",
        storeroom: "1",
        coveredArea: "1200 sqft",
        availability: "24 Hours",
        disclaimer: "Sample Disclaimer",
        propertyDescription: "Sample Property Description",
        loadAvailability: "Yes",
        loadOfferedBy: "India Bank",
        postedBy: "John Doe",
        agentName: "Agent Smith",
        contactNumber: "1234567890",
      },
      {
        title: "Property Release 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category: "Rent",
        locality: "Sample Locality 2",
        plotNumber: "456",
        propertyType: "House",
        rooms: "3BHK",
        bedroom: "3",
        bathroom: "2",
        kitchen: "1",
        storeroom: "0",
        coveredArea: "1800 sqft",
        availability: "12 Hours",
        disclaimer: "Sample Disclaimer 2",
        propertyDescription: "Sample Property Description 2",
        loadAvailability: "No",
        loadOfferedBy: "Central Bank of USA",
        postedBy: "Jane Smith",
        agentName: "Agent Johnson",
        contactNumber: "9876543210",
      },
      // Add more property releases here
    ],
  };

  const categoryOptions = ["Product", "Service", "Property"];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      {/* Category Select */}
      <Grid container spacing={2}>
        {categoryOptions.map((category) => (
          <Grid item key={category}>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Display Releases */}
      <Typography
        variant="h4"
        style={{
          marginBottom: "16px",
          marginTop: "32px",
          fontSize: "24px",
          color: "#ff5722", // Change the text color
        }}
      >
        {selectedCategory} Releases
      </Typography>
      {releases[selectedCategory].map((release, index) => (
        <Card
          key={index}
          variant="outlined"
          style={{
            marginBottom: "16px",
            padding: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",

            borderLeft: "4px solid #ff5722",
          }}
        >
          <CardContent>
            <Typography
              style={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                marginBottom: "8px",
                color: "seconadry",
              }}
            >
              {release.title}
            </Typography>
            <Typography style={{ fontSize: "1rem", color: "seconadry" }}>
              {release.description}
            </Typography>
            {/* Conditionally Render Fields Based on Category */}

            {selectedCategory === "Product" && (
              <>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "16px",
                    marginBottom: "8px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "secondary",
                  }}
                >
                  Product Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        htmlFor="category-select"
                        style={{ color: "secondary" }}
                      >
                        Category
                      </InputLabel>
                      <Select
                        label="Category"
                        value={release.category}
                        disabled
                      >
                        <MenuItem value="Bag">Bag</MenuItem>
                        <MenuItem value="Book">Book</MenuItem>
                        <MenuItem value="Pen">Pen</MenuItem>
                        <MenuItem value="Phone">Phone</MenuItem>
                        <MenuItem value="Laptop">Laptop</MenuItem>
                        <MenuItem value="Jewelry">Jewelry</MenuItem>
                        <MenuItem value="Electronics">Electronics</MenuItem>
                        <MenuItem value="Home Furniture">
                          Home Furniture
                        </MenuItem>
                        <MenuItem value="Home and Kitchen Appliances">
                          Home and Kitchen Appliances
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  {/* Render Subcategory based on Category */}
                  {release.category === "Bag" ? (
                    <Grid item xs={6}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel
                          htmlFor="subcategory-select"
                          style={{ color: "secondary" }}
                        >
                          Subcategory
                        </InputLabel>
                        <Select
                          label="Subcategory"
                          value={release.subcategory}
                          disabled
                        >
                          {/* Add subcategory options here */}
                          <MenuItem value="School Bag">School Bag</MenuItem>
                          <MenuItem value="Tool Bag">Tool Bag</MenuItem>
                          <MenuItem value="Bucket Bag">Bucket Bag</MenuItem>
                          <MenuItem value="Funny Pack">Funny Pack</MenuItem>
                          <MenuItem value="Wallet">Wallet</MenuItem>
                          <MenuItem value="Medical Bag">Medical Bag</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  ) : (
                    <>
                      {" "}
                      <Grid item xs={6}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel
                            htmlFor="subcategory-select"
                            style={{ color: "secondary" }}
                          >
                            Subcategory
                          </InputLabel>
                          <Select
                            label="Subcategory"
                            value={release.subcategory}
                            disabled
                          >
                            {/* Add subcategory options here */}
                            <MenuItem value="School Bag">School Bag</MenuItem>
                            
                          </Select>
                        </FormControl>
                      </Grid>
                    </>
                  )}
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        htmlFor="brand-select"
                        style={{ color: "secondary" }}
                      >
                        Brand
                      </InputLabel>
                      <Select label="Brand" value={release.brand} disabled>
                        {/* Add brand options here */}
                        <MenuItem value="Niko">Niko</MenuItem>
                        <MenuItem value="Gucchi">Gucchi</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Image Upload"
                      variant="outlined"
                      value={release.imageUpload}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Stock"
                      variant="outlined"
                      value={release.stock}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Stock Available For Buyers"
                      variant="outlined"
                      value={release.stockAvailableForBuyers}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Package Weight"
                      variant="outlined"
                      value={release.packageWeight}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Package Dimensions"
                      variant="outlined"
                      value={release.packageDimensions}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="HSN Code"
                      variant="outlined"
                      value={release.hsnCode}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Tax Code"
                      variant="outlined"
                      value={release.taxCode}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel color="info"
                        htmlFor="countryDetails-select"
                        style={{ color: "secondary" }}
                      >
                        Country Details
                      </InputLabel>
                      <Select
                        label="Country Details"
                        value={release.countryDetails}
                        disabled
                      >
                        {/* Add country options here */}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Manufacturer Details"
                      variant="outlined"
                      value={release.manufacturerDetails}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Packer Details"
                      variant="outlined"
                      value={release.packerDetails}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Importer Details"
                      variant="outlined"
                      value={release.importerDetails}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Sales Package"
                      variant="outlined"
                      value={release.salesPackage}
                      disabled
                      InputProps={{
                        style: {
                          color: "secondary", // Text color
                          borderColor: "secondary", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "secondary", // Label color
                        },
                      }}
                    />
                  </Grid>
                  {/* Add more product fields here */}
                </Grid>
              </>
            )}

            {/* Service Fields */}
            {selectedCategory === "Service" && (
              <>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "16px",
                    marginBottom: "8px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "seconadry",
                  }}
                >
                  Service Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Seller SKU ID"
                      variant="outlined"
                      value={release.sellerSkuId}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Listing Status"
                      variant="outlined"
                      value={release.listingStatus}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    >
                      <MenuItem value="Active">Active</MenuItem>
                      <MenuItem value="Inactive">Inactive</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="MRP"
                      variant="outlined"
                      value={release.mrp}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Selling Price"
                      variant="outlined"
                      value={release.sellingPrice}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service Title"
                      variant="outlined"
                      value={release.serviceTitle}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service Description"
                      variant="outlined"
                      multiline
                      rows={4}
                      value={release.serviceDescription}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Time Requirement"
                      variant="outlined"
                      value={release.timeRequirement}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Service Manager Name"
                      variant="outlined"
                      value={release.serviceManagerName}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Team Size"
                      variant="outlined"
                      value={release.teamSize}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Delivery Charge to Local"
                      variant="outlined"
                      value={release.deliveryChargeLocal}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Delivery Charge to Zonal"
                      variant="outlined"
                      value={release.deliveryChargeZonal}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Delivery Charge to National"
                      variant="outlined"
                      value={release.deliveryChargeNational}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      select
                      fullWidth
                      label="Service Type"
                      variant="outlined"
                      value={release.serviceType}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    >
                      <MenuItem value="House Cleaning">House Cleaning</MenuItem>
                      <MenuItem value="AC Repair">AC Repair</MenuItem>
                      <MenuItem value="Bathroom Cleaning">
                        Bathroom Cleaning
                      </MenuItem>
                      {/* Add other service types here */}
                    </TextField>
                  </Grid>
                </Grid>
              </>
            )}

            {/* ... (Other Category Fields) */}

            {/* Property Fields */}
            {selectedCategory === "Property" && (
              <>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "16px",
                    marginBottom: "8px",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    color: "seconadry",
                  }}
                >
                  Property Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        htmlFor="category-select"
                        style={{ color: "seconadry" }}
                      >
                        Category
                      </InputLabel>
                      <Select
                        label="Category"
                        InputProps={{
                          style: {
                            color: "seconadry", // Text color
                            borderColor: "seconadry", // Outline color
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            color: "seconadry", // Label color
                          },
                        }}
                        value={release.category}
                        disabled
                      >
                        <MenuItem value="Buy">Buy</MenuItem>
                        <MenuItem value="Rent">Rent</MenuItem>
                        <MenuItem value="PG">PG</MenuItem>
                        <MenuItem value="Commercial">Commercial</MenuItem>
                        <MenuItem value="Project">Project</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Locality / Landmark Address"
                      variant="outlined"
                      value={release.locality}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Plot Number"
                      variant="outlined"
                      value={release.plotNumber}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel
                        htmlFor="propertyType-select"
                        style={{ color: "seconadry" }}
                      >
                        Property Type
                      </InputLabel>
                      <Select
                        label="Property Type"
                        value={release.propertyType}
                        disabled
                      >
                        <MenuItem style={{ color: "seconadry" }} value="Flat">
                          Flat
                        </MenuItem>
                        <MenuItem style={{ color: "seconadry" }} value="Office">
                          Office
                        </MenuItem>
                        <MenuItem style={{ color: "seconadry" }} value="House">
                          House
                        </MenuItem>
                        <MenuItem style={{ color: "seconadry" }} value="Plot">
                          Plot
                        </MenuItem>
                        <MenuItem style={{ color: "seconadry" }} value="Other">
                          Other
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Posted by"
                      variant="outlined"
                      value={release.postedBy}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Agent Name"
                      variant="outlined"
                      value={release.agentName}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      variant="outlined"
                      value={release.contactNumber}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      label="Offered Bank"
                      variant="outlined"
                      value={release.loadOfferedBy}
                      disabled
                      InputProps={{
                        style: {
                          color: "seconadry", // Text color
                          borderColor: "seconadry", // Outline color
                        },
                      }}
                      InputLabelProps={{
                        style: {
                          color: "seconadry", // Label color
                        },
                      }}
                    />
                  </Grid>
                  {/* Add other property fields here */}
                </Grid>
              </>
            )}

            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "16px", backgroundColor: "#ff5722" }}
            >
              Edit
            </Button>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default RelasedInfoEdit;
