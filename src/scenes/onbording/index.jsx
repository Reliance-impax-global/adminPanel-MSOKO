
import React, {  useState } from "react";
import {
  Button,
  TextField,
  Container,
  Grid,
  Typography,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { getDatabase, push, ref } from 'firebase/database';
import Swal from "sweetalert2";

import { Visibility, VisibilityOff } from "@mui/icons-material";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  category: "",
  phoneNumber: "",
  age: "",
  address: "",
  city: "",
  zipCode: "",
};

const OnboardingForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
 
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!values.firstName) newErrors.firstName = "First Name is required";
    if (!values.lastName) newErrors.lastName = "Last Name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (!values.password) newErrors.password = "Password is required";
    if (!values.category) newErrors.category = "Category is required";
    if (!values.phoneNumber) newErrors.phoneNumber = "Phone Number is required";
    if (!values.age) newErrors.age = "Age is required";
    if (!values.address) newErrors.address = "Address is required";
    if (!values.city) newErrors.city = "City is required";
    if (!values.zipCode) newErrors.zipCode = "Zip Code is required";

    if (Object.keys(newErrors).length === 0) {
      const id = uuidv4();
      const formData = { ...values, id };

      const db = getDatabase();
      const sellerDetailsContractsRef = ref(db, 'sellerDetails&Contracts');
      push(sellerDetailsContractsRef, formData)
        .then(() => {
          console.log('Form data sent to Realtime Database successfully');
          setSubmitted(true);
          Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: 'Form submitted successfully.',
          });
          resetForm();
        })
        .catch((error) => {
          console.error('Error updating Realtime Database:', error);
        });
    } else {
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setSubmitted(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom style={{ marginBottom: "20px" }}>
        Onboarding Form For Seller
      </Typography>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: "20px" }}
        >
          Onboarding Form (Register Yourself)
        </Typography>
        {submitted ? (
          <Typography variant="h6" align="center">
            Thank you for submitting the form!
          </Typography>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="First Name"
                  name="firstName"
                  color="info"
                  value={values.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  color="info"
                  value={values.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  name="email"
                  color="info"
                  value={values.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  name="password"
                  color="info"
                  value={values.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          edge="end"
                          onClick={handleTogglePasswordVisibility}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl color="info" fullWidth error={!!errors.category}>
                  <InputLabel>Category</InputLabel>
                  <Select color="info"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                  >
                    <MenuItem value="">Select a category</MenuItem>
                    <MenuItem value="Property">Property</MenuItem>
                    <MenuItem value="Service">Service</MenuItem>
                    <MenuItem value="Product">Product</MenuItem>
                  </Select>
                  {errors.category && (
                    <Typography variant="caption" color="error">
                      {errors.category}
                    </Typography>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phoneNumber"
                  color="info"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  error={!!errors.phoneNumber}
                  helperText={errors.phoneNumber}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Age"
                  name="age"
                  color="info"
                  value={values.age}
                  onChange={handleChange}
                  error={!!errors.age}
                  helperText={errors.age}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Address"
                  name="address"
                  color="info"
                  value={values.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="City"
                  name="city"
                  color="info"
                  value={values.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Zip Code"
                  name="zipCode"
                  color="info"
                  value={values.zipCode}
                  onChange={handleChange}
                  error={!!errors.zipCode}
                  helperText={errors.zipCode}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="info"
                  fullWidth
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Paper>
    </Container>
  );
};

export default OnboardingForm;
