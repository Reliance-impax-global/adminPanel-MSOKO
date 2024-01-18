import React, { useState } from "react";
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
} from "@mui/material";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  category: "", // Added category field
};

const OnboardingForm = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    const newErrors = {};
    if (!values.firstName) newErrors.firstName = "First Name is required";
    if (!values.lastName) newErrors.lastName = "Last Name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (!values.password) newErrors.password = "Password is required";
    if (!values.category) newErrors.category = "Category is required";

    if (Object.keys(newErrors).length === 0) {
      // Submit the form data
      console.log("Form submitted:", values);
      setSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom style={{ marginBottom: "20px" }}>
        On Boarding Form For Seller
      </Typography>
      <Paper elevation={3} style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          align="center"
          style={{ marginBottom: "20px" }}
        >
          Onboarding Form(Register Yourself)
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
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={!!errors.category}>
                  <InputLabel>Category</InputLabel>
                  <Select
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
