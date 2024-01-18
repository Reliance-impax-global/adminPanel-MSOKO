import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../components/Header";

const Notification = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="CREATE NOTIFICATION" subtitle="Send Notification to User and Sellers" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
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
                type="text"
                label="Order Status"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.orderStatus}
                name="orderStatus"
                error={!!touched.orderStatus && !!errors.orderStatus}
                helperText={touched.orderStatus && errors.orderStatus}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Order Updates"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.orderUpdates}
                name="orderUpdates"
                error={!!touched.orderUpdates && !!errors.orderUpdates}
                helperText={touched.orderUpdates && errors.orderUpdates}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Buyer Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Buyer Contact Number"
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
                variant="filled"
                type="text"
                label="Promotion"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.promotion}
                name="promotion"
                error={!!touched.promotion && !!errors.promotion}
                helperText={touched.promotion && errors.promotion}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
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
                Notify Everyone
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  orderStatus: yup.string().required("required"),
  orderUpdates: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  promotion: yup.string().required("required"),
  offerPrice: yup.string().required("required"),
});
const initialValues = {
  orderStatus: "",
  orderUpdates: "",
  email: "",
  contact: "",
  promotion: "",
  offerPrice: "",
};

export default Notification;
