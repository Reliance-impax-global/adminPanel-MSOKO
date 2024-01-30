// import React, { useState } from 'react';
// import { Box, Button, TextField, Typography } from '@mui/material';
// import { Formik } from 'formik';
// import * as yup from 'yup';

// const fieldConfig = [
//   { field: 'id', headerName: 'ID', flex: 0.5 },
//   { field: 'productId', headerName: 'Product ID' },
//   { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
//   { field: 'price', headerName: 'Price', type: 'number', headerAlign: 'left', align: 'left' },
//   { field: 'description', headerName: 'Description', flex: 1 },
//   { field: 'origin', headerName: 'Origin', flex: 1 },
// ];

// const AddProducts = () => {
//   const [products, setProducts] = useState([]);

//   const handleFormSubmit = (values, { resetForm }) => {
//     console.log(values);
//     setProducts([...products, values]);
//     resetForm();
//   };

//   const checkoutSchema = yup.object().shape({
//     productId: yup.string().required('Product ID is required'),
//     name: yup.string().required('Name is required'),
//     price: yup.number().required('Price is required'),
//     description: yup.string().required('Description is required'),
//     origin: yup.string().required('Origin is required'),
//   });

//   return (
//     <Box m="20px">
//       <Typography variant="h4">Add Products</Typography>

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={{
//           productId: '',
//           name: '',
//           price: '',
//           description: '',
//           origin: '',
//         }}
//         validationSchema={checkoutSchema}
//       >
//         {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(2, minmax(0, 1fr))"
//               sx={{
//                 '& > div': { gridColumn: 'span 2' },
//               }}
//             >
//               {fieldConfig.map((field) => (
//                 <TextField
//                   key={field.field}
//                   fullWidth
//                   variant="filled"
//                   type={field.type || 'text'}
//                   label={field.headerName}
//                   onBlur={handleBlur}
//                   onChange={handleChange}
//                   value={values[field.field]}
//                   name={field.field}
//                   error={!!touched[field.field] && !!errors[field.field]}
//                   helperText={touched[field.field] && errors[field.field]}
//                 />
//               ))}
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="primary" variant="contained">
//                 Add Product
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>

//       <Box m="20px">
//         <Typography variant="h5">Products List</Typography>
//         {products.map((product, index) => (
//           <Box key={index} p="10px" mb="10px" border="1px solid #ddd">
//             <Typography variant="h6">Product ID: {product.productId}</Typography>
//             <Typography variant="body1">Name: {product.name}</Typography>
//             <Typography variant="body1">Price: {product.price}</Typography>
//             <Typography variant="body1">Description: {product.description}</Typography>
//             <Typography variant="body1">Origin: {product.origin}</Typography>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default AddProducts;
import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as yup from 'yup';

const AddProducts = () => {
  const checkoutSchema = yup.object().shape({
    productId: yup.string().required('Product ID is required'),
    name: yup.string().required('Name is required'),
    price: yup.number().required('Price is required'),
    description: yup.string().required('Description is required'),
    origin: yup.string().required('Origin is required'),
  });

  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    // Perform actions with the form data, e.g., send to the server
    resetForm();
  };

  return (
    <Box m="20px">
      <Typography variant="h4" gutterBottom>
        Add Products
      </Typography>

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          productId: '',
          name: '',
          price: '',
          description: '',
          origin: '',
        }}
        validationSchema={checkoutSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Product ID"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.productId}
              name="productId"
              error={!!touched.productId && !!errors.productId}
              helperText={touched.productId && errors.productId}
              mb={2}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Name"
              onBlur={handleBlur}               onChange={handleChange}
              value={values.name}
              name="name"
              error={!!touched.name && !!errors.name}
              helperText={touched.name && errors.name}
              mb={2}
            />
            <TextField
              fullWidth
              variant="filled"
              type="number"
              label="Price"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.price}
              name="price"
              error={!!touched.price && !!errors.price}
              helperText={touched.price && errors.price}
              mb={2}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Description"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.description}
              name="description"
              error={!!touched.description && !!errors.description}
              helperText={touched.description && errors.description}
              mb={2}
            />
            <TextField
              fullWidth
              variant="filled"
              type="text"
              label="Origin"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.origin}
              name="origin"
              error={!!touched.origin && !!errors.origin}
              helperText={touched.origin && errors.origin}
              mb={2}
            />
            <Button variant="contained" color="primary" type="submit">
              Add Product
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProducts;
