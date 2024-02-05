
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { getDatabase, push, ref, set } from 'firebase/database';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleFormSubmit = async (values, { resetForm }) => {
    const productId = generateRandomProductId();
    const formData = { ...values, productId, addedTime: new Date().toISOString() };

    // Upload image to Firebase Storage
    const imageUrl = await uploadProductImage(values.productImages, productId);

    // Include the image URL in the form data
    formData.productImages = imageUrl;

    // Send form data to Firebase Realtime Database
    await sendFormDataToFirebase(formData);

    // Show success alert and reset the form
    showSuccessAlert();
    resetForm();
  };

  const generateRandomProductId = () => {
    return uuidv4();
  };

  const fieldConfigAddProduct = [
    { field: 'productId', headerName: 'Product ID', flex: 0.5 },
    { field: 'productName', headerName: 'Product Name', flex: 1 },
    { field: 'price', headerName: 'Price', type: 'number', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 1 },
    { field: 'origin', headerName: 'Origin', flex: 1 },
    { field: 'brand', headerName: 'Brand', flex: 1 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'subcategory', headerName: 'Subcategory', flex: 1 },
    { field: 'sellerName', headerName: 'Seller Name', flex: 1 },
    {
      field: 'productImages',
      headerName: 'Product Images',
      flex: 1,
      type: 'file',
      accept: '.jpg, .jpeg, .png',
    },
    // { field: 'addedTime', headerName: 'Added Time', flex: 1, disabled: true },
    { field: 'availabilityDates', headerName: 'Availability Dates', flex: 1, type: 'date' },
    { field: 'specifications', headerName: 'Product Specifications', flex: 1 },
  ];

  const addProductSchema = yup.object().shape({
    productName: yup.string().required('Product Name is required'),
    price: yup.number().required('Price is required'),
    description: yup.string().required('Description is required'),
    origin: yup.string().required('Origin is required'),
    brand: yup.string().required('Brand is required'),
    quantity: yup.number().required('Quantity is required'),
    category: yup.string().required('Category is required'),
    subcategory: yup.string().required('Subcategory is required'),
    sellerName: yup.string().required('Seller Name is required'),
    productImages: yup
      .mixed()
      .required('Product Images are required')
      .test('fileType', 'Only jpg, jpeg, and png file types are allowed', (value) => {
        if (value) {
          return ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
        }
        return false;
      }),
    // addedTime: yup.date(),
    availabilityDates: yup.date().required('Availability Dates are required'),
    specifications: yup.string(),
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

  const uploadProductImage = async (imageFile, productId) => {
    const storage = getStorage();
    const storageRefPath = storageRef(storage, `product_images/${productId}`);

    // Upload image file to Firebase Storage
    await uploadBytes(storageRefPath, imageFile);

    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(storageRefPath);
    return downloadURL;
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
          productName: '',
          price: '',
          description: '',
          origin: '',
          brand: '',
          quantity: '',
          category: '',
          subcategory: '',
          sellerName: '',
          productImages: null,
          // addedTime: '', // Will be populated dynamically
          availabilityDates: '',
          specifications: '',
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
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
            >
              {fieldConfigAddProduct.map((field) => (
                <React.Fragment key={field.field}>
                  {field.type === 'file' ? (
                    <TextField
                      fullWidth  
                      variant="filled"
                      type="file"
                      label={field.headerName}
                      onBlur={handleBlur}
                      onChange={(event) => setFieldValue(field.field, event.currentTarget.files[0])}
                      error={!!touched[field.field] && !!errors[field.field]}
                      helperText={touched[field.field] && errors[field.field]}
                      inputProps={{ accept: field.accept }}
                    />
                  ) : (
                    <TextField
                      fullWidth
                      variant="filled"
                      type={field.type || 'text'}
                      label={field.headerName}
                      multiline={field.field === 'description' || field.field === 'specifications'}
                      rows={4} color="info"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values[field.field]}
                      name={field.field}
                      error={!!touched[field.field] && !!errors[field.field]}
                      helperText={touched[field.field] && errors[field.field]}
                      disabled={field.disabled || field.field === 'productId'}
                    />
                  )}
                </React.Fragment>
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


