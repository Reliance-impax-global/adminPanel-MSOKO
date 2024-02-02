// import React, { useState } from "react";
// import { TextField, Button, Container, Typography, Grid } from "@mui/material";

// const BankDetailsForm = () => {
//   const [bankName, setBankName] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");
//   const [swiftCode, setSwiftCode] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Handle form submission logic here (e.g., send data to the server)
//     // You can access bankName, accountNumber, and swiftCode to perform actions.
//   };

//   return (
//     <Container>
//       <Typography variant="h2">Seller Bank Details</Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2} style={{ marginTop: "16px" }}>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               label="Bank Name"
//               variant="outlined"
//               color="info"
//               value={bankName}
//               onChange={(e) => setBankName(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               label="Account Number"
//               variant="outlined"
//               color="info"
//               value={accountNumber}
//               onChange={(e) => setAccountNumber(e.target.value)}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               required
//               fullWidth
//               label="Swift Code"
//               variant="outlined"
//               color="info"
//               value={swiftCode}
//               onChange={(e) => setSwiftCode(e.target.value)}
//             />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           variant="contained"
//           color="info"
//           style={{ marginTop: "16px" }}
//         >
//           Save
//         </Button>
//       </form>
//     </Container>
//   );
// };

// export default BankDetailsForm;
import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getDatabase, ref, push, set } from "firebase/database";
import app from "../../firebase/firebaseConfig"; // Import your Firebase configuration

const MySwal = withReactContent(Swal);

const BankDetailsForm = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [swiftCode, setSwiftCode] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!bankName.trim()) {
      errors.bankName = "Bank Name is required";
    }

    if (!accountNumber.trim()) {
      errors.accountNumber = "Account Number is required";
    }

    if (!swiftCode.trim()) {
      errors.swiftCode = "Swift Code is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate the form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Get a reference to the Firebase Realtime Database
    const db = getDatabase(app);
    const bankDetailsRef = ref(db, "bankDetails");

    // Create a new entry in the "bankDetails" node with push()
    const newBankDetailsRef = push(bankDetailsRef);

    // Set the data for the new entry
    await set(newBankDetailsRef, {
      bankName,
      accountNumber,
      swiftCode,
    });

    // Show a success alert
    MySwal.fire({
      icon: "success",
      title: "Bank details saved successfully!",
    });

    // Reset the form and form errors
    setBankName("");
    setAccountNumber("");
    setSwiftCode("");
    setFormErrors({});
  };

  return (
    <Container>
      <Typography variant="h2">Seller Bank Details</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} style={{ marginTop: "16px" }}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Bank Name"
              variant="outlined"
              color="info"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              error={formErrors.bankName ? true : false}
              helperText={formErrors.bankName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Account Number"
              variant="outlined"
              color="info"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              error={formErrors.accountNumber ? true : false}
              helperText={formErrors.accountNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Swift Code"
              variant="outlined"
              color="info"
              value={swiftCode}
              onChange={(e) => setSwiftCode(e.target.value)}
              error={formErrors.swiftCode ? true : false}
              helperText={formErrors.swiftCode}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          color="info"
          style={{ marginTop: "16px" }}
        >
          Save
        </Button>
      </form>
    </Container>
  );
};

export default BankDetailsForm;
