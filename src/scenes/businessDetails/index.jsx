import React, { useState } from "react";
import {
  TextField,
  Button,
  FormControl,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import sendFormDataToFirebase from "./FirebaseSend";

const BusinessDetailsForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    taxIdentificationNumber: "",
    vrnNumber: "",
    address: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    taxIdentificationNumber: "",
    vrnNumber: "",
    fileUpload: "", // Error for file upload validation
  });

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData({
    ...formData,
    [name]: value,
  });

  // Reset the error message when the user starts typing
  setValidationErrors({
    ...validationErrors,
    [name]: "",
  });
};


  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Check if a file is selected
    if (!file) {
      setValidationErrors({
        ...validationErrors,
        fileUpload: "Please select a file.",
      });
      return;
    }

    // Check file type or other validation rules here
    // For example, you can check the file extension or size

    // If validation passes, you can proceed with the file upload
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation before submission
    if (validateForm()) {
      sendFormDataToFirebase(formData);
      console.log("Submitting form data to Firebase...");
      // Submit the form data to the backend
    }
  };

  const validateForm = () => {
    let isValid = true;
    const updatedValidationErrors = {
      taxIdentificationNumber: "",
      vrnNumber: "",
      fileUpload: "",
    };

    // Regular expressions for TIN and VRN validation
    const tinRegex = /^\d{9}$/;
    const vrnRegex = /^\d{11}$/;

    if (!tinRegex.test(formData.taxIdentificationNumber)) {
      updatedValidationErrors.taxIdentificationNumber =
        "Invalid Tax Identification Number (TIN). It should be a 9-digit number.";
      isValid = false;
    }

    if (formData.vrnNumber && !vrnRegex.test(formData.vrnNumber)) {
      updatedValidationErrors.vrnNumber =
        "Invalid VRN (Value Added Tax Registration Number). It should be an 11-digit number.";
      isValid = false;
    }

    // Check if file upload validation failed
    if (validationErrors.fileUpload) {
      updatedValidationErrors.fileUpload = validationErrors.fileUpload;
      isValid = false;
    }

    setValidationErrors(updatedValidationErrors);
    return isValid;
  };

  return (
    <Container>
      <Typography variant="h2" gutterBottom style={{ marginBottom: "16px" }}>
        Seller Business Details
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Business Name"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              required
              color="info"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Tax Identification Number (TIN)"
              name="taxIdentificationNumber"
              color="info"
              value={formData.taxIdentificationNumber}
              onChange={handleInputChange}
              required
              error={!!validationErrors.taxIdentificationNumber}
              helperText={validationErrors.taxIdentificationNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="VRN Number (Optional)"
              name="vrnNumber"
              color="info"
              value={formData.vrnNumber}
              onChange={handleInputChange}
              error={!!validationErrors.vrnNumber}
              helperText={validationErrors.vrnNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              color="info"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" style={{marginBottom:"16px"}}>
              Business License Document/TIN Certificate (Accepted formats: .pdf,
              .doc, .docx)
            </Typography>
            <input
              type="file"
              accept=".pdf, .doc, .docx"
              onChange={handleFileUpload}
            />
            {validationErrors.fileUpload && (
              <Typography variant="body2" color="error">
                {validationErrors.fileUpload}
              </Typography>
            )}
          </Grid>
        </Grid>
        <Box mt={2}>
          <Button variant="contained" color="info" type="submit">
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default BusinessDetailsForm;
