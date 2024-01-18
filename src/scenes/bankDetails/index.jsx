import React, { useState } from "react";
import { TextField, Button, Container, Typography, Grid } from "@mui/material";

const BankDetailsForm = () => {
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [swiftCode, setSwiftCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here (e.g., send data to the server)
    // You can access bankName, accountNumber, and swiftCode to perform actions.
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
