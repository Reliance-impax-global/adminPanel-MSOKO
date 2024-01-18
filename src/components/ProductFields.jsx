import {
  FormControl,
  Grid,
  InputLabel,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { MenuItem } from "react-pro-sidebar";

const ProductFields = ({
  categories,
  handleCategoriesChange,
  subcategory,
  handleSubcategoryChange,
  brand,
  handleBrandChange,
  handleStockChange,
  handleStockAvailableChange,
  handlePackageWeightChange,
  handlePackageDimensionsChange,
  handleHsnChange,
  handleCountryChange,
  handleManufactureDetailsChange,
  handlePackerDetailsChange,
  title,
  handleTitleChange,
  formFeild,
  handleFormFeild,
  hsn,
  country,
  manufactureDetails,
  packerDetails,
  stock,
  stockAvailable,
  packageWeight,
  packageDimensions,
  keyword,
  handleKeywordChange,
  additionalField,
  handleAdditionalFieldChange,
  handleImporterDetailsChange,
  importerDetails,
  salesPackage,
  handleSalesPackageChange,
}) => (
  <>
    <Grid item xs={12}>
      <TextField
        select
        fullWidth
        required
        label="Category"
        color="info"
        variant="outlined"
        value={categories}
        onChange={handleCategoriesChange}
      >
        <MenuItem value="Bag">Bag</MenuItem>
        <MenuItem value="Book">Book</MenuItem>
        <MenuItem value="Pen">Pen</MenuItem>
        <MenuItem value="Phone">Phone</MenuItem>
        <MenuItem value="Laptop">Laptop</MenuItem>
        <MenuItem value="Jewelry">Jewelry</MenuItem>
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Home Furniture">Home Furniture</MenuItem>
        <MenuItem value="Home and Kitchen Appliances">
          Home and Kitchen Appliances
        </MenuItem>
      </TextField>
    </Grid>
    {/* Subcategory dropdown */}
    {categories && (
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel color="info" htmlFor="subcategory-select">Subcategory</InputLabel>
          <Select
            label="Subcategory"
            color="info"
            value={subcategory}
            onChange={handleSubcategoryChange}
            inputProps={{
              name: "subcategory",
              id: "subcategory-select",
            }}
          >
            {categories === "Bag" && (
              <>
                <MenuItem value="Schoolbag">Schoolbag</MenuItem>
                <MenuItem value="Tooly bag">Tooly bag</MenuItem>
                <MenuItem value="Bucket Bag">Bucket Bag</MenuItem>
                <MenuItem value="Funny Pack">Funny Pack</MenuItem>
                <MenuItem value="Wallet">Wallet</MenuItem>
                <MenuItem value="Medical Bag">Medical Bag</MenuItem>
              </>
            )}
            {/* Add other subcategories for different categories */}
          </Select>
        </FormControl>
      </Grid>
    )}
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel color="info" htmlFor="brand-select">Brand</InputLabel>
        <Select 
          label="Brand"
          color="info"
          value={brand}
          onChange={handleBrandChange}
          inputProps={{
            name: "brand",
            id: "brand-select",
          }}
        >
          <MenuItem value="Niko">Niko</MenuItem>
          <MenuItem value="Gucchi">Gucchi</MenuItem>
          {/* ... Other brand options */}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Image Upload Field"
        variant="outlined"
        type="file"
        // You can add an onChange handler to handle image uploads
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        required
        label="Seller SKU ID"
        variant="outlined"
        color="info"
        value={formFeild}
        onChange={handleFormFeild}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField color="info"
        select
        fullWidth
        required
        label="Listing Status"
        variant="outlined"
        value={additionalField}
        onChange={handleAdditionalFieldChange}
      >
        <MenuItem value="Active">Active</MenuItem>
        <MenuItem value="Inactive">Inactive</MenuItem>
      </TextField>
    </Grid>
    <Grid item xs={12}>
      <TextField 
        fullWidth
        required
        label="MRP"
        variant="outlined"
        color="info"
        value={formFeild}
        onChange={handleFormFeild}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        required
        label="Your Selling Price"
        variant="outlined"
        color="info"
        value={formFeild}
        onChange={handleFormFeild}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Stock"
        variant="outlined"
        value={stock}
        onChange={handleStockChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Stock Available for Buyers"
        variant="outlined"
        value={stockAvailable}
        onChange={handleStockAvailableChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Package Weight (kg)"
        variant="outlined"
        value={packageWeight}
        onChange={handlePackageWeightChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Package Weight (cm)"
        variant="outlined"
        value={packageDimensions}
        onChange={handlePackageDimensionsChange}
      />
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel color="info" htmlFor="hsn-select">HSN</InputLabel>
        <Select
          label="HSN"
          color="info"
          value={hsn}
          onChange={handleHsnChange}
          inputProps={{
            name: "hsn",
            id: "hsn-select",
          }}
        >
          <MenuItem value="GST_5">GST_5</MenuItem>
          <MenuItem value="GST_12">GST_12</MenuItem>
          <MenuItem value="GST_0">GST_0</MenuItem>
          <MenuItem value="GST_3">GST_3</MenuItem>
          <MenuItem value="GST_28">GST_28</MenuItem>
          <MenuItem value="GST_18">GST_18</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel color="info" htmlFor="country-select">Country Details</InputLabel>
        <Select
          label="Country Details"
          color="info"
          value={country}
          onChange={handleCountryChange}
          inputProps={{
            name: "country",
            id: "country-select",
          }}
        >
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="Canada">Canada</MenuItem>
          <MenuItem value="Bangladesh">Bangladesh</MenuItem>
          <MenuItem value="China">China</MenuItem>
          <MenuItem value="India">India</MenuItem>
          <MenuItem value="Australia">Australia</MenuItem>
          {/* ... Other country options */}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Manufacture Details"
        variant="outlined"
        value={manufactureDetails}
        onChange={handleManufactureDetailsChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Packer Details"
        variant="outlined"
        value={packerDetails}
        onChange={handlePackerDetailsChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        required
        label="Title"
        variant="outlined"
        color="info"
        value={title}
        onChange={handleTitleChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Importer Details"
        variant="outlined"
        value={importerDetails}
        onChange={handleImporterDetailsChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Sales Package"
        variant="outlined"
        value={salesPackage}
        onChange={handleSalesPackageChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Keyword"
        variant="outlined"
        value={keyword}
        onChange={handleKeywordChange}
      />
    </Grid>
    {/* ... Other product-specific fields */}
    {/* ... Other product-specific fields */}
  </>
);

export default ProductFields;
