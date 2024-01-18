import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import PropertyFields from "./propertyFields";
import ProductFields from "./ProductFields";
import ServiceFields from "./ServiceFields";

const ReleaseForm = () => {
  const [category, setCategory] = useState("Product");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [additionalField, setAdditionalField] = useState("");
  const [serviceType, setServiceType] = useState(""); // New state for service type
  const [formFeild, setFormField] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [brand, setBrand] = useState("");
  const [hsn, setHsn] = useState("");
  const [country, setCountry] = useState("");
  const [categories, setCategories] = useState("");
  const [stock, setStock] = useState("");
  const [stockAvailable, setStockAvailable] = useState("");
  const [packageWeight, setPackageWeight] = useState("");
  const [packageDimensions, setPackageDimensions] = useState("");
  const [taxCode, setTaxCode] = useState("");
  const [manufactureDetails, setManufactureDetails] = useState("");
  const [packerDetails, setPackerDetails] = useState("");
  const [importerDetails, setImporterDetails] = useState("");
  const [salesPackage, setSalesPackage] = useState("");
  const [keyword, setKeyword] = useState("");

  // State variables for property fields
  const [propertyCategory, setPropertyCategory] = useState("");
  const [locality, setLocality] = useState("");
  const [plotNumber, setPlotNumber] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [rooms, setRooms] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [storeroom, setStoreroom] = useState("");
  const [coveredArea, setCoveredArea] = useState("");
  const [availability, setAvailability] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [loadAvailability, setLoadAvailability] = useState("");
  const [loadOfferedBy, setLoadOfferedBy] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [agentName, setAgentName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const initialServiceDetails = ["Laundry Service", "Visitor Parking"];
  const [serviceDetails, setServiceDetails] = useState(initialServiceDetails);
  const [newService, setNewService] = useState("");

  const handleSubcategoryChange = (event) => {
    setSubcategory(event.target.value);
  };

  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

  const handleHsnChange = (event) => {
    setHsn(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission here
    console.log("Category:", category);
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Additional Field:", additionalField);
    console.log("Service Type:", serviceType);
    console.log("Subcategory:", subcategory);
    console.log("Brand:", brand);
    console.log("HSN:", hsn);
    console.log("Country:", country);
    // Reset the form fields
    setCategory("");
    setTitle("");
    setDescription("");
    setAdditionalField("");
    setServiceType("");
    setSubcategory("");
    setBrand("");
    setHsn("");
    setCountry("");
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleCategoriesChange = (event) => {
    setCategories(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAdditionalFieldChange = (event) => {
    setAdditionalField(event.target.value);
  };

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleFormFeild = () => {
    console.log("Make All the state for SKU ID and rest of the form field");
  };
  const handleStockChange = (event) => {
    setStock(event.target.value);
  };
  const handleStockAvailableChange = (event) => {
    setStockAvailable(event.target.value);
  };

  const handlePackageWeightChange = (event) => {
    setPackageWeight(event.target.value);
  };

  const handlePackageDimensionsChange = (event) => {
    setPackageDimensions(event.target.value);
  };

  const handleTaxCodeChange = (event) => {
    setTaxCode(event.target.value);
  };

  const handleManufactureDetailsChange = (event) => {
    setManufactureDetails(event.target.value);
  };

  const handlePackerDetailsChange = (event) => {
    setPackerDetails(event.target.value);
  };

  const handleImporterDetailsChange = (event) => {
    setImporterDetails(event.target.value);
  };

  const handleSalesPackageChange = (event) => {
    setSalesPackage(event.target.value);
  };

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value);
  };

  // Functions to handle property field changes
  const handlePropertyCategoryChange = (event) => {
    setPropertyCategory(event.target.value);
  };

  const handleLocalityChange = (event) => {
    setLocality(event.target.value);
  };

  const handlePlotNumberChange = (event) => {
    setPlotNumber(event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
  };

  const handleRoomsChange = (event) => {
    setRooms(event.target.value);
  };

  const handleBedroomChange = (event) => {
    setBedroom(event.target.value);
  };

  const handleBathroomChange = (event) => {
    setBathroom(event.target.value);
  };

  const handleKitchenChange = (event) => {
    setKitchen(event.target.value);
  };

  const handleStoreroomChange = (event) => {
    setStoreroom(event.target.value);
  };

  const handleCoveredAreaChange = (event) => {
    setCoveredArea(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleDisclaimerChange = (event) => {
    setDisclaimer(event.target.value);
  };

  const handlePropertyDescriptionChange = (event) => {
    setPropertyDescription(event.target.value);
  };

  const handleLoadAvailabilityChange = (event) => {
    setLoadAvailability(event.target.value);
  };

  const handleLoadOfferedByChange = (event) => {
    setLoadOfferedBy(event.target.value);
  };

  const handlePostedByChange = (event) => {
    setPostedBy(event.target.value);
  };

  const handleAgentNameChange = (event) => {
    setAgentName(event.target.value);
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
  };

  const handleNewServiceChange = (event) => {
    setNewService(event.target.value);
  };

  const handleAddService = () => {
    if (newService.trim() !== "") {
      setServiceDetails([...serviceDetails, newService]);
      setNewService(""); // Clear the input field after adding
    }
  };

  // Define the conditional fields for the "Service" category

  // passing paramter for ServiceFeilds
  const serviceFieldsProps = {
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
  };

  // passing paramter for ProductFeilds
  const productFieldsProps = {
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
    importerDetails,
    handleImporterDetailsChange,
    salesPackage,
    handleSalesPackageChange,
  };

  // passing paramter for PropertyFeilds
  const propertyFieldsProps = {
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
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Release Form
      </Typography>

      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                select color="info"
                fullWidth
                required
                label="Category"
                variant="outlined"
                value={category}
                onChange={handleCategoryChange}
              >
                <MenuItem value="Product">Product</MenuItem>
                <MenuItem value="Service">Service</MenuItem>
                <MenuItem value="Property">Property</MenuItem>
              </TextField>
            </Grid>
            {/* <Grid item xs={12}>
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
                multiline
                rows={4}
                label="Description"
                variant="outlined"
                color="info"
                value={description}
                onChange={handleDescriptionChange}
              />
            </Grid> */}
            {category === "Service" && (
              <ServiceFields {...serviceFieldsProps} />
            )}
            {category === "Product" && (
              <ProductFields {...productFieldsProps} />
            )}
            {category === "Property" && (
              <PropertyFields {...propertyFieldsProps} />
            )}
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="info" fullWidth>
                Release
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ReleaseForm;
