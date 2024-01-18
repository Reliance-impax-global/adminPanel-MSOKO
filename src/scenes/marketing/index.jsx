import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Popover,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import SponsoredAdsTable from "../../components/SponsoredAdsTable";
import EmailIcon from "@mui/icons-material/Email"; // Import EmailIcon
import EmailMarketingOptions from "../../components/EmailMarketingOptions";
import { Formik } from "formik";
import * as yup from "yup";

const MarketingPromotions = () => {
  const [showForm, setShowForm] = useState(false);
  const [showCampaignForm, setShowCampaignForm] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [staffUsers, setStaffUsers] = useState(110);
  const [newUsers, setNewUsers] = useState(10);
  const [emailMarketingPopover, setEmailMarketingPopover] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [campaignData, setCampaignData] = useState({
    status: "",
    impressions: "",
    clicks: "",
    ctr: "",
    cpm: "",
    cpc: "",
    date: "",
    spent: "",
    duration: 0, // Campaign duration in minutes
  });

  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Summer Sale",
      status: "Active",
      impressions: 10000,
      clicks: 500,
      ctr: "5%",
      cpm: "$10",
      cpc: "$0.20",
      date: "2023-08-15",
      spent: "$1000",
      duration: 120, // 2 hours
    },
    // Add more campaign data as needed
  ]);

  const handleFormOpen = () => {
    setIsFormOpen(true);
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = (values) => {
    console.log(values);
    // Add logic to send notifications here
    handleFormClose(); // Close the form after submitting
  };

  const phoneRegExp =
    /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

  const notificationSchema = yup.object().shape({
    orderStatus: yup.string().required("Order Status is required"),
    orderUpdates: yup.string().required("Order Updates is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    contact: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Contact is required"),
    promotion: yup.string().required("Promotion is required"),
    offerPrice: yup.string().required("Offer Price is required"),
  });

  const initialValues = {
    orderStatus: "",
    orderUpdates: "",
    email: "",
    contact: "",
    promotion: "",
    offerPrice: "",
  };

  const handleEmailMarketingClick = (event) => {
    setEmailMarketingPopover(event.currentTarget);
  };

  const handleEmailMarketingClose = () => {
    setEmailMarketingPopover(null);
  };

  const handleOptionClick = (option) => {
    // Handle the selected email marketing option
    setSelectedOption(option);
    setEmailMarketingPopover(null); // Close the popover
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const toggleCampaignFormVisibility = () => {
    setShowCampaignForm(!showCampaignForm);
  };

  const handleCouponCodeChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscountPercentage(event.target.value);
  };

  const submitCouponForm = () => {
    // Code to submit the coupon form
    console.log("Coupon Code:", couponCode);
    console.log("Discount Percentage:", discountPercentage);
  };

  const managePromotionalCampaigns = () => {
    toggleCampaignFormVisibility();
  };

  const manageAds = () => {
    // Code to manage ads
    // You can add logic to start/stop campaigns, calculate top-performing ad, and delete campaigns
    // Example logic:
    // - Calculate the top-performing ad based on clicks, impressions, CTR, etc.
    // - Set a fixed duration for campaigns (in minutes)
    // - Allow users to delete campaigns
    // - Allow users to stop a running campaign
  };

  const integrateEmailMarketing = () => {
    // Code to trigger email marketing
  };

  const createNotificationSystem = () => {
    // Code to create a notification
  };

  const handleFieldChange = (field, value) => {
    setCampaignData({
      ...campaignData,
      [field]: value,
    });
  };

  const submitCampaignForm = () => {
    // Code to submit the campaign form
    console.log("Campaign Data:", campaignData);
    // Add logic to save or process the campaign data
  };

  useEffect(() => {
    // Update the top-performing ad when campaigns change
    // Example: Calculate the top-performing ad based on clicks
    let topAd = campaigns[0];
    for (const campaign of campaigns) {
      if (campaign.clicks > topAd.clicks) {
        topAd = campaign;
      }
    }
    // Here, you can use the 'topAd' data for display or further processing
  }, [campaigns]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Marketing and Promotions</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          {/* Cool Design for Managing Promotional Campaigns */}
          <div
            style={{
              backgroundColor: "#007bff",
              borderRadius: "8px",
              padding: "16px",
              textAlign: "center",
              color: "#fff",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            onClick={managePromotionalCampaigns}
          >
            <Typography variant="h6" style={{ marginBottom: "8px" }}>
              Managing Promotional Campaigns
            </Typography>
            <Typography>
              Attract users and boost engagement with our exciting campaigns!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "12px" }}
            >
              Manage Campaigns
            </Button>
          </div>
          {/* Campaign Creation Form */}
          {showCampaignForm && (
            <div>
              <TextField
                label="Campaign Status"
                color="info"
                variant="outlined"
                fullWidth
                margin="normal"
                value={campaignData.status}
                onChange={(e) => handleFieldChange("status", e.target.value)}
              />
              <TextField
                label="Impressions"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.impressions}
                onChange={(e) =>
                  handleFieldChange("impressions", e.target.value)
                }
              />
              <TextField
                label="Clicks"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.clicks}
                onChange={(e) => handleFieldChange("clicks", e.target.value)}
              />
              <TextField
                label="CTR (Click-Through Rate)"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.ctr}
                onChange={(e) => handleFieldChange("ctr", e.target.value)}
              />
              <TextField
                label="CPM (Cost Per Mille)"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.cpm}
                onChange={(e) => handleFieldChange("cpm", e.target.value)}
              />
              <TextField
                label="CPC (Cost Per Click)"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.cpc}
                onChange={(e) => handleFieldChange("cpc", e.target.value)}
              />
              <TextField
                label="Date"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                type="date"
                value={campaignData.date}
                onChange={(e) => handleFieldChange("date", e.target.value)}
              />
              <TextField
                label="Spent"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                value={campaignData.spent}
                onChange={(e) => handleFieldChange("spent", e.target.value)}
              />
              <TextField
                label="Campaign Duration (minutes)"
                variant="outlined"
                color="info"
                fullWidth
                margin="normal"
                type="number"
                value={campaignData.duration}
                onChange={(e) => handleFieldChange("duration", e.target.value)}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={submitCampaignForm}
              >
                Create Campaign
              </Button>
            </div>
          )}
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={toggleFormVisibility}
                fullWidth
              >
                {showForm ? "Cancel" : "Manage Coupon Codes and Discounts"}
              </Button>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleEmailMarketingClick}
                fullWidth
              >
                Integrate Email Marketing
              </Button>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFormOpen}
                fullWidth
              >
                Create Notification System
              </Button>
            </Grid>
          </Grid>
          {showForm && (
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <TextField
                label="Coupon Code"
                color="info"
                value={couponCode}
                onChange={handleCouponCodeChange}
                variant="outlined"
              />
              <TextField
                label="Discount Percentage"
                color="info"
                value={discountPercentage}
                onChange={handleDiscountChange}
                variant="outlined"
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={submitCouponForm}
              >
                Create Coupon
              </Button>
            </Box>
          )}
          {/* <Button variant="contained" color="primary" onClick={manageAds}>
            Manage Ads within Categories
          </Button> */}
        

          {/* Email Marketing form */}

          <EmailMarketingOptions
            open={Boolean(emailMarketingPopover)}
            anchorEl={emailMarketingPopover}
            onClose={handleEmailMarketingClose}
            handleOptionClick={handleOptionClick}
          />
          {/* Display the selected option */}
          {selectedOption && (
            <Typography variant="body1">
              Selected Option: {selectedOption}
            </Typography>
          )}
         
          {/* Notification Form */}
          {/* Notification Form */}
          <Popover
            open={isFormOpen}
            onClose={handleFormClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            sx={{ width: "75%", maxWidth: "75vw" }} // Set the width to 75% of the viewport width
          >
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={notificationSchema}
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
                  <List>
                    <ListItem>
                      <ListItemText primary="Create Notification" />
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Order Status"
                        fullWidth
                        variant="outlined"
                        color="info"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.orderStatus}
                        name="orderStatus"
                        error={touched.orderStatus && errors.orderStatus}
                        helperText={touched.orderStatus && errors.orderStatus}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Order Updates"
                        fullWidth
                        variant="outlined"
                        color="info"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.orderUpdates}
                        name="orderUpdates"
                        error={touched.orderUpdates && errors.orderUpdates}
                        helperText={touched.orderUpdates && errors.orderUpdates}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Buyer Email"
                        color="info"
                        fullWidth
                        variant="outlined"
                        type="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="email"
                        error={touched.email && errors.email}
                        helperText={touched.email && errors.email}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Buyer Contact Number"
                        color="info"
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.contact}
                        name="contact"
                        error={touched.contact && errors.contact}
                        helperText={touched.contact && errors.contact}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Promotion"
                        color="info"
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.promotion}
                        name="promotion"
                        error={touched.promotion && errors.promotion}
                        helperText={touched.promotion && errors.promotion}
                      />
                    </ListItem>
                    <ListItem>
                      <TextField
                        label="Offer Price"
                        color="info"
                        fullWidth
                        variant="outlined"
                        type="text"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.offerPrice}
                        name="offerPrice"
                        error={touched.offerPrice && errors.offerPrice}
                        helperText={touched.offerPrice && errors.offerPrice}
                      />
                    </ListItem>
                    <ListItem>
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                        fullWidth
                      >
                        Send Notification
                      </Button>
                    </ListItem>
                  </List>
                </form>
              )}
            </Formik>
          </Popover>
        </Box>

        {/* finish create notofication section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <Typography style={{ fontSize: "28px" }}>
            Staff Users: {staffUsers}
          </Typography>
          <Typography style={{ fontSize: "28px" }}>
            New Users: {newUsers}
          </Typography>
        </Box>
        {/* Campaign Table */}
        <TableContainer component={Paper}>
          <Typography variant="h5">Campaign Management</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Campaign Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Impressions</TableCell>
                <TableCell>Clicks</TableCell>
                <TableCell>CTR</TableCell>
                <TableCell>CPM</TableCell>
                <TableCell>CPC</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Spent</TableCell>
                <TableCell>Duration (minutes)</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {campaigns.map((campaign) => (
                <TableRow key={campaign.id}>
                  <TableCell>{campaign.name}</TableCell>
                  <TableCell>{campaign.status}</TableCell>
                  <TableCell>{campaign.impressions}</TableCell>
                  <TableCell>{campaign.clicks}</TableCell>
                  <TableCell>{campaign.ctr}</TableCell>
                  <TableCell>{campaign.cpm}</TableCell>
                  <TableCell>{campaign.cpc}</TableCell>
                  <TableCell>{campaign.date}</TableCell>
                  <TableCell>{campaign.spent}</TableCell>
                  <TableCell>{campaign.duration}</TableCell>
                  <TableCell>
              <Box  sx={{
      display: 'flex',
      flexDirection: { xs: 'column', lg: 'row' },
      gap: { xs: '8px', lg: '16px' },
      justifyContent: { xs: 'center', lg: 'flex-start' },
    }}>
              <Button
                      variant="outlined"
                      color="warning"
                      style={{ marginRight: "16px" }}
                    >
                      Boast
                    </Button>
                    <Button
                      variant="outlined"
                      color="info" 
                      style={{ marginRight: "16px" }}
                    >
                      Edit
                    </Button>
                    <Button variant="outlined" color="secondary">
                      Delete
                    </Button>
              </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <SponsoredAdsTable />
    </Card>
  );
};

export default MarketingPromotions;
