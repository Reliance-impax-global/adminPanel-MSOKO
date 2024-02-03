import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { getDatabase, push, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

const AddProperty = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    const propertyId = generateRandomPropertyId();
    const formData = { ...values, propertyId };

    await sendFormDataToFirebase(formData);
    showSuccessAlert();
    resetForm();
  };

  const generateRandomPropertyId = () => {
    return Math.random().toString(36).substring(7);
  };

  const fieldConfigAddProperty = [
    { field: 'propertyId', headerName: 'Property ID', flex: 0.5 },
    { field: 'name', headerName: 'Property Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'price', headerName: 'Price', type: 'number', headerAlign: 'left', align: 'left' },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'origin', headerName: 'Origin', flex: 1 },
    { field: 'propertyOwnership', headerName: 'Property Ownership', flex: 1 },
    { field: 'location', headerName: 'Location', flex: 1 },
  ];

  const addPropertySchema = yup.object().shape({
    name: yup.string().required('Property Name is required'),
    price: yup.number().required('Price is required'),
    description: yup.string().required('Description is required'),
    origin: yup.string().required('Origin is required'),
    propertyOwnership: yup.string().required('Property Ownership is required'),
    location: yup.string().required('Location is required'),
  });

  const sendFormDataToFirebase = async (formData) => {
    const db = getDatabase();
    const propertiesRef = ref(db, 'properties');
    await push(propertiesRef, formData);
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Property added successfully.',
    });
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        Add Properties
      </Typography>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          propertyId: generateRandomPropertyId(),
          name: '',
          price: '',
          description: '',
          origin: '',
          propertyOwnership: '',
          location: '',
        }}
        validationSchema={addPropertySchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            >
              {fieldConfigAddProperty.map((field) => (
                <TextField color="info"
                  key={field.field}
                  fullWidth
                  variant="filled"
                  type={field.type || 'text'}
                  label={field.headerName}
                  multiline={field.field === 'description'}
                  rows={4}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values[field.field]}
                  name={field.field}
                  error={!!touched[field.field] && !!errors[field.field]}
                  helperText={touched[field.field] && errors[field.field]}
                  disabled={field.field === 'propertyId'}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Property
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProperty;
