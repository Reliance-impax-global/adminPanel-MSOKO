import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SalesReportsSection = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleGenerateReport = () => {
    // Logic to generate sales report based on selected dates and category
    // You can implement your own logic here
  };

  const handleGoBack = () => {
    navigate("/analytics-reporting");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Generate Sales Reports
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" style={{ marginBottom: 16 }}>
                    Select Date Range and Category
                  </Typography>
                  <form>
                    <FormControl fullWidth style={{ marginBottom: 16 }}>
                      <InputLabel color="info">Category</InputLabel>
                      <Select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                      >
                        <MenuItem value="Category A">Property</MenuItem>
                        <MenuItem value="Category B">Service</MenuItem>
                        <MenuItem value="Category C">Product</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      label="Start Date"
                      type="date"
                      color="info"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ marginBottom: 16 }}
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                    <TextField
                      label="End Date"
                      type="date"
                      color="info"
                      fullWidth
                      InputLabelProps={{
                        shrink: true,
                      }}
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleGenerateReport}
                      style={{ marginTop: 16 }}
                    >
                      Generate Report
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={handleGoBack}
                      style={{ marginTop: 16, marginLeft: 16 }}
                    >
                      Go Back
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesReportsSection;
