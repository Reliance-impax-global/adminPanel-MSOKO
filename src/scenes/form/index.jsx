// import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
// import * as yup from "yup";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import Header from "../../components/Header";

// const Form = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const handleFormSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Box m="20px">
//       <Header title="CREATE SERVICES" subtitle="Create a New Service" />

//       <Formik
//         onSubmit={handleFormSubmit}
//         initialValues={initialValues}
//         validationSchema={checkoutSchema}
//       >
//         {({
//           values,
//           errors,
//           touched,
//           handleBlur,
//           handleChange,
//           handleSubmit,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Service Name"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.serviceName}
//                 name="serviceName"
//                 error={!!touched.serviceName && !!errors.serviceName}
//                 helperText={touched.serviceName && errors.serviceName}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Service Details"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.serviceDetails}
//                 name="serviceDetails"
//                 error={!!touched.serviceDetails && !!errors.serviceDetails}
//                 helperText={touched.serviceDetails && errors.serviceDetails}
//                 sx={{ gridColumn: "span 2" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Email"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 error={!!touched.email && !!errors.email}
//                 helperText={touched.email && errors.email}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Contact Number"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.contact}
//                 name="contact"
//                 error={!!touched.contact && !!errors.contact}
//                 helperText={touched.contact && errors.contact}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Price"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.price}
//                 name="price"
//                 error={!!touched.price && !!errors.price}
//                 helperText={touched.price && errors.price}
//                 sx={{ gridColumn: "span 4" }}
//               />
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Offer Price"
//                 onBlur={handleBlur}
//                 onChange={handleChange}
//                 value={values.offerPrice}
//                 name="offerPrice"
//                 error={!!touched.offerPrice && !!errors.offerPrice}
//                 helperText={touched.offerPrice && errors.offerPrice}
//                 sx={{ gridColumn: "span 4" }}
//               />
//             </Box>
//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Create New Service
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// const phoneRegExp =
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   serviceName: yup.string().required("required"),
//   serviceDetails: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   price: yup.string().required("required"),
//   offerPrice: yup.string().required("required"),
// });
// const initialValues = {
//   serviceName: "",
//   serviceDetails: "",
//   email: "",
//   contact: "",
//   price: "",
//   offerPrice: "",
// };

// export default Form;
















import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../AuthContext/AuthProvider";
import { getDatabase, off, onValue, push, ref, set } from 'firebase/database';
import Swal from "sweetalert2";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { user } = useContext(UserAuthContext);
  const [services, setServices] = useState([]);
  useEffect(() => {
    const db = getDatabase();
    const servicesRef = ref(db, 'services');

    // Listen for changes in the services data
    const onDataChange = (snapshot) => {
      const servicesData = [];

      snapshot.forEach((childSnapshot) => {
        const data = childSnapshot.val();
        servicesData.push(data);
      });

      setServices(servicesData);
    };

    // Attach the onDataChange event listener
    onValue(servicesRef, onDataChange);

    // Detach the event listener when the component unmounts
    return () => {
      off(servicesRef, onDataChange);
    };
  }, []); 

  
  const handleFormSubmit = (values, { resetForm }) => {
    console.log(values);
    sendFormDataToFirebase(values);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Service created successfully.',
    });
    resetForm();
  };

  const sendFormDataToFirebase = (formData) => {
    const db = getDatabase();
    const servicesRef = ref(db, 'services');
  
    // Generate a new child location with a unique key
    const newServiceRef = push(servicesRef);
  
    set(newServiceRef, formData)
      .then(() => {
        console.log('Form data sent to Realtime Database successfully');
      })
      .catch((error) => {
        console.error('Error updating Realtime Database:', error);
      });
  };
  

  return (
    <Box m="20px">
      <Header title="CREATE SERVICES" subtitle="Create a New Service" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={{
          serviceName: "",
          serviceDetails: "",
          contact: "",
          price: "",
          offerPrice: "",
          sellerName: user?.displayName || "",  
          sellerEmail: user?.email || "",       
        }}
        validationSchema={checkoutSchema}
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
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text" color="info"
                label="Seller Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sellerName}
                name="sellerName"
                error={!!touched.sellerName && !!errors.sellerName}
                helperText={touched.sellerName && errors.sellerName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text" 
                label="Seller Email" color="info"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.sellerEmail}
                defaultValue={values.sellerEmail}
                name="sellerEmail" 
                error={!!touched.sellerEmail && !!errors.sellerEmail}
                helperText={touched.sellerEmail && errors.sellerEmail}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text" color="info"
                label="Service Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.serviceName}
                defaultValue={values.serviceName}
                name="serviceName"
                error={!!touched.serviceName && !!errors.serviceName}
                helperText={touched.serviceName && errors.serviceName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled" color="info"
                type="text"
                label="Service Details"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.serviceDetails}
                name="serviceDetails"
                error={!!touched.serviceDetails && !!errors.serviceDetails}
                helperText={touched.serviceDetails && errors.serviceDetails}
                sx={{ gridColumn: "span 2" }}
              />
             
              <TextField
                fullWidth
                variant="filled" color="info"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled" color="info"
                type="text"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price" 
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled" color="info"
                type="text"
                label="Offer Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.offerPrice}
                name="offerPrice"
                error={!!touched.offerPrice && !!errors.offerPrice}
                helperText={touched.offerPrice && errors.offerPrice}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Service
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Box m="20px">
      <Header title="DISPLAY SERVICES" subtitle="List of Services" />

      <Box m="20px">
  <Header title="DISPLAY SERVICES" subtitle="List of Services" />

  {services.length > 0 && (
    <Box p="10px" mb="10px" border="1px solid #ddd">
      <Typography variant="h6">{services[0].serviceName}</Typography>
      <Typography variant="body1">Service Details: {services[0].serviceDetails}</Typography>
      <Typography variant="body1">Contact: {services[0].contact}</Typography>
      <Typography variant="body1">Price: {services[0].price}</Typography>
      <Typography variant="body1">Offer Price: {services[0].offerPrice}</Typography>
      {/* Additional fields as needed */}
    </Box>
  )}
</Box>
    </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  sellerName: yup.string().required("Seller name is required"),
  sellerEmail: yup.string().email("Invalid email").required("Seller email is required"),
  serviceName: yup.string().required("Service name is required"),
  serviceDetails: yup.string().required("Service details are required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Contact number is required"),
  price: yup.string().required("Price is required"),
  offerPrice: yup.string().required("Offer price is required"),
});

export default Form;
