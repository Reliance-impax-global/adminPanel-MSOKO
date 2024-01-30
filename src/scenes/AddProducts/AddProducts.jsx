
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { getDatabase, push, ref, set } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    const productId = generateRandomProductId();
    const formData = { ...values, productId };

    await sendFormDataToFirebase(formData);
    showSuccessAlert();
    resetForm();
  };

  const generateRandomProductId = () => {
    return Math.random().toString(36).substring(7);
  };

  const fieldConfigAddProduct = [
    { field: 'productId', headerName: 'Product ID', flex: 0.5 },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'price', headerName: 'Price', type: 'number', headerAlign: 'left', align: 'left' },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'origin', headerName: 'Origin', flex: 1 },
  ];

  const addProductSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    price: yup.number().required('Price is required'),
    description: yup.string().required('Description is required'),
    origin: yup.string().required('Origin is required'),
  });

  const sendFormDataToFirebase = async (formData) => {
    const db = getDatabase();
    const productsRef = ref(db, 'products');
    await push(productsRef, formData);
  };

  const showSuccessAlert = () => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Product added successfully.',
    });
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        Add Products
      </Typography>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          productId: generateRandomProductId(),
          name: '',
          price: '',
          description: '',
          origin: '',
        }}
        validationSchema={addProductSchema}
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
              {fieldConfigAddProduct.map((field) => (
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
                  disabled={field.field === 'productId'}
                />
              ))}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProduct;
