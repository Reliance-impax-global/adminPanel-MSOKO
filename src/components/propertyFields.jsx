import React, { useState } from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Typography,
} from "@mui/material";

const PropertyFields = ({
  additionalField,
  handleAdditionalFieldChange,
  propertyCategory,
  handlePropertyCategoryChange,
  locality,
  handleLocalityChange,
  plotNumber,
  handlePlotNumberChange,
  propertyType,
  handlePropertyTypeChange,
  rooms,
  handleRoomsChange,
  bedroom,
  handleBedroomChange,
  bathroom,
  handleBathroomChange,
  kitchen,
  handleKitchenChange,
  storeroom,
  handleStoreroomChange,
  coveredArea,
  handleCoveredAreaChange,
  availability,
  handleAvailabilityChange,
  disclaimer,
  handleDisclaimerChange,
  propertyDescription,
  handlePropertyDescriptionChange,
  title,
  handleTitleChange,
  formFeild,
  handleFormFeild,
  loadAvailability,
  handleLoadAvailabilityChange,
  loadOfferedBy,
  handleLoadOfferedByChange,
  serviceDetails,
  newService,
  handleNewServiceChange,
  handleAddService,
  postedBy,
  handlePostedByChange,
  agentName,
  handleAgentNameChange,
  contactNumber,
  handleContactNumberChange,
}) => (
  <>
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
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="property-category-select">Category</InputLabel>
        <Select
          label="Category"
          color="info"
          variant="outlined"
          value={propertyCategory}
          onChange={handlePropertyCategoryChange}
        >
          <MenuItem value="Buy">Buy</MenuItem>
          <MenuItem value="Rent">Rent</MenuItem>
          <MenuItem value="PG">PG</MenuItem>
          <MenuItem value="Commercial">Commercial</MenuItem>
          <MenuItem value="Project">Project</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Locality/Landmark address"
        variant="outlined"
        value={locality}
        onChange={handleLocalityChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Plot number"
        variant="outlined"
        value={plotNumber}
        onChange={handlePlotNumberChange}
      />
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="property-type-select">Property Type</InputLabel>
        <Select
          label="Property Type"
          color="info"
          variant="outlined"
          value={propertyType}
          onChange={handlePropertyTypeChange}
        >
          <MenuItem value="Flat">Flat</MenuItem>
          <MenuItem value="Office">Office</MenuItem>
          <MenuItem value="House">House</MenuItem>
          <MenuItem value="Plot">Plot</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="rooms-select">Rooms</InputLabel>
        <Select
          label="Rooms"
          color="info"
          variant="outlined"
          value={rooms}
          onChange={handleRoomsChange}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="bedroom-select">Bedroom</InputLabel>
        <Select
          label="Bedroom"
          color="info"
          variant="outlined"
          value={bedroom}
          onChange={handleBedroomChange}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="bathroom-select">Bathroom</InputLabel>
        <Select
          label="Bathroom"
          color="info"
          variant="outlined"
          value={bathroom}
          onChange={handleBathroomChange}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="kitchen-select">Kitchen</InputLabel>
        <Select
          label="Kitchen"
          color="info"
          variant="outlined"
          value={kitchen}
          onChange={handleKitchenChange}
        >
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
          <MenuItem value="5">5</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="storeroom-select">Storeroom</InputLabel>
        <Select
          label="Storeroom"
          color="info"
          variant="outlined"
          value={storeroom}
          onChange={handleStoreroomChange}
        >
          <MenuItem value="0">0</MenuItem>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
          <MenuItem value="4">4</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Covered Area (sqft)"
        variant="outlined"
        value={coveredArea}
        onChange={handleCoveredAreaChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        required
        label="Water and Electricity Availability (Hours)"
        variant="outlined"
        value={availability}
        onChange={handleAvailabilityChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        label="Disclaimer"
        variant="outlined"
        multiline
        rows={4}
        value={disclaimer}
        onChange={handleDisclaimerChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        label="Property Description"
        variant="outlined"
        multiline
        rows={4}
        value={propertyDescription}
        onChange={handlePropertyDescriptionChange}
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
        required
        label="Your Selling Price(TZS)"
        variant="outlined"
        color="info"
        value={formFeild}
        onChange={handleFormFeild}
      />
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="load-availability-select">
          Load Availability
        </InputLabel>
        <Select
          label="Load Availability"
          color="info"
          variant="outlined"
          value={loadAvailability}
          onChange={handleLoadAvailabilityChange}
        >
          <MenuItem value="Yes">Yes</MenuItem>
          <MenuItem value="No">No</MenuItem>
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <FormControl fullWidth variant="outlined">
        <InputLabel htmlFor="load-offered-select">Load Offered By</InputLabel>
        <Select
          label="Load Offered By"
          color="info"
          variant="outlined"
          value={loadOfferedBy}
          onChange={handleLoadOfferedByChange}
        >
          <MenuItem value="India Bank">India Bank</MenuItem>
          <MenuItem value="Union Bank">Union Bank</MenuItem>
          <MenuItem value="Canada Bank">Canada Bank</MenuItem>
          <MenuItem value="Central Bank of USA">Central Bank of USA</MenuItem>
          <MenuItem value="Tanginia">Tanginia</MenuItem>
          {/* Add other options as needed */}
        </Select>
      </FormControl>
    </Grid>

    <Grid item xs={12}>
      <Typography variant="h6">Selected Service Details:</Typography>
      <ul>
        {serviceDetails.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        label="Service Details"
        variant="outlined"
        value={newService}
        onChange={handleNewServiceChange}
      />
    </Grid>
    <Grid item xs={12}>
      <Button variant="contained" color="info" onClick={handleAddService}>
        Add
      </Button>
    </Grid>

    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        label="Posted By"
        variant="outlined"
        value={postedBy}
        onChange={handlePostedByChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        label="Agent Name"
        variant="outlined"
        value={agentName}
        onChange={handleAgentNameChange}
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        color="info"
        label="Contact Number"
        variant="outlined"
        value={contactNumber}
        onChange={handleContactNumberChange}
      />
    </Grid>
    {/* ... Other property-specific fields */}
  </>
);

export default PropertyFields;
