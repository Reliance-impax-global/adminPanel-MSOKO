import { Grid, MenuItem, TextField } from "@mui/material";
import React from "react";

const ServiceFields = ({
  formFeild,
  handleFormFeild,
  additionalField,
  handleAdditionalFieldChange,
  title,
  handleTitleChange,
  description,
  handleDescriptionChange,
  serviceType,
  handleServiceTypeChange,
}) => (
  <>
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
      <TextField
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
        required
        label="Service Title"
        variant="outlined"
        color="info"
        value={title}
        onChange={handleTitleChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        required
        multiline
        rows={4}
        label="Service Description"
        variant="outlined"
        color="info"
        value={description}
        onChange={handleDescriptionChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        required
        label="Time Requirement"
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
        label="Service Manager Name"
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
        label="How Many People in This Team"
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
        label="Delivery Charge to Local"
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
        label="Delivery Charge to Zonal"
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
        label="Delivery Charge to National"
        variant="outlined"
        color="info"
        value={formFeild}
        onChange={handleFormFeild}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        select
        fullWidth
        required
        label="Service Type"
        variant="outlined"
        value={serviceType}
        onChange={handleServiceTypeChange}
      >
        <MenuItem value="House Cleaning">House Cleaning</MenuItem>
        <MenuItem value="AC Repair">AC Repair</MenuItem>
        <MenuItem value="Bathroom Cleaning Service">
          Bathroom Cleaning Service
        </MenuItem>
      </TextField>
    </Grid>
  </>
);

export default ServiceFields;
