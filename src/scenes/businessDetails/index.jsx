
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, set, push } from "firebase/database";


const MySwal = withReactContent(Swal);

const BusinessDetailsForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    taxIdentificationNumber: "",
    vrnNumber: "",
    address: "",
    documentURL: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    taxIdentificationNumber: "",
    vrnNumber: "",
    fileUpload: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
  
    if (!file) {
      setValidationErrors({
        ...validationErrors,
        fileUpload: "Please select a file.",
      });
      return;
    }
  
    const allowedFileTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedFileTypes.includes(file.type)) {
      setValidationErrors({
        ...validationErrors,
        fileUpload: "Invalid file type. Accepted formats: .pdf, .doc, .docx",
      });
      return;
    }
  
    const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
    if (file.size > maxSizeInBytes) {
      setValidationErrors({
        ...validationErrors,
        fileUpload: "File size exceeds the limit (5 MB).",
      });
      return;
    }
  
    const storage = getStorage();
    const storageReference = storageRef(storage, `documents/${file.name}`);
    await uploadBytes(storageReference, file);
  
    const downloadURL = await getDownloadURL(storageReference);
  
    setFormData({
      ...formData,
      documentURL: downloadURL,
    });
  };
  

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      const database = getDatabase();
      const businessDetailsRef = dbRef(database, 'businessDetails');
  
      // Generate a new unique key using push
      const newBusinessDetailsRef = push(businessDetailsRef);
  
      // Set data at the new location
      await set(newBusinessDetailsRef, formData)
        .then(() => {
          // Reset the form data to clear the fields
          setFormData({
            businessName: "",
            taxIdentificationNumber: "",
            vrnNumber: "",
            address: "",
            documentURL: "",
          });
  
          // Display success message
          MySwal.fire({
            icon: "success",
            title: "Form Submitted!",
            text: "Your data has been successfully submitted.",
          });
        })
        .catch((error) => {
          console.error("Error submitting form data:", error);
          // Optionally handle the error here
        });
    }
  };
  

  const validateForm = () => {
    let isValid = true;
    const updatedValidationErrors = {
      taxIdentificationNumber: "",
      vrnNumber: "",
      fileUpload: "",
    };

    const tinRegex = /^\d{9}$/;
    const vrnRegex = /^\d{11}$/;

    if (!tinRegex.test(formData.taxIdentificationNumber)) {
      updatedValidationErrors.taxIdentificationNumber = "Invalid Tax Identification Number (TIN). It should be a 9-digit number.";
      isValid = false;
    }

    if (formData.vrnNumber && !vrnRegex.test(formData.vrnNumber)) {
      updatedValidationErrors.vrnNumber = "Invalid VRN (Value Added Tax Registration Number). It should be an 11-digit number.";
      isValid = false;
    }

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
            <Typography variant="body2" style={{ marginBottom: "16px" }}>
              Business License Document/TIN Certificate (Accepted formats: .pdf, .doc, .docx)
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
