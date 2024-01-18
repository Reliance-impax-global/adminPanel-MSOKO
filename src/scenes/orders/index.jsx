import React, { useState } from "react";
import {
  Container,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  FormControl,
  Select,
  MenuItem,
  Modal,
  Box,
  TextField,
  Divider,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Event } from "@mui/icons-material";
import { saveAs } from "file-saver";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import "pdfmake/build/vfs_fonts"; // Import font files



pdfMake.vfs = pdfFonts.pdfMake.vfs; // Set the virtual file system

// Now you can use pdfMake to generate PDFs


const OrderManagementPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "John Doe", status: "Processing" },
    { id: 2, customer: "Jane Smith", status: "Shipped" },
    // Add more order data here
  ]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isPayslipGenerated, setIsPayslipGenerated] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRefundFormOpen, setIsRefundFormOpen] = useState(false);
  const [isPayslipButtonsVisible, setIsPayslipButtonsVisible] = useState(false);

  const [isGenerateInvoiceVisible, setIsGenerateInvoiceVisible] =
    useState(false);
  // State for packing slip data
  const [packingSlipData, setPackingSlipData] = useState({
    invoiceNumber: "",
    billingAddress: "",
    invoiceDate: "",
    // Add more fields as needed
  });

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleCancelOrder = (orderId) => {
    // Implement cancellation logic here
  };

  const handleRefundOrder = (orderId) => {
    setSelectedOrderId(orderId);

    setIsRefundFormOpen(true);
  };
  const handleCloseRefundForm = () => {
    setSelectedOrderId(null);
    setIsRefundFormOpen(false);
  };
  const handleGenerateInvoice = (orderId) => {
    // Implement invoice generation logic here
  };

  const handleGeneratePackingSlip = (orderId) => {
    // Implement packing slip generation logic here
    // Set the packing slip data in the state
    setPackingSlipData({
      invoiceNumber: "INV123",
      billingAddress: "123 Main St, City, Country",
      invoiceDate: "2023-08-27",
      // Set other data
    });
    // Also, make the PDF and CSV buttons visible
    setIsPayslipButtonsVisible(true);
  };
  const handleViewDetails = (orderId) => {
    setSelectedOrderId(orderId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedOrderId(null);
    setIsModalOpen(false);
  };

  const generatePayslip = () => {
    const payslipContent = {
      // Define your payslip content for PDF generation
    };

    // Generate PDF
    const pdfDocGenerator = pdfMake.createPdf(payslipContent);
    pdfDocGenerator.download("Payslip.pdf");
    setIsPayslipGenerated(true);
  };

  const generateCsvPayslip = () => {
    const csvData = "Employee Name, Earnings, Deductions\nJohn Doe, 3000, 500";
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "Payslip.csv");
    setIsPayslipGenerated(true);
  };
  const generatePdfPayslip = ({ payslipData, packingSlipData }) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString();

    const docDefinition = {
      content: [
        // Company Logo and Information
        // {
        //   image: "https://example.com/company-logo.png", // URL to your company logo
        //   width: 100, // Adjust the width as needed
        //   alignment: "center",
        // },
        {
          text: "M Soko Admin",
          style: "companyName",
          alignment: "center",
        },
        {
          text: "123 Main Street, Orlando, USA",
          style: "companyAddress",
          alignment: "center",
        },
        // Spacer
        "\n\n",

        // Table
        {
          text: "Payslip Information",
          style: "header",
        },
        {
          text: `Generated on: ${formattedDate}`,
          alignment: "right",
          margin: [0, 0, 0, 5],
        },
        {
          table: {
            headerRows: 1,
            widths: ["auto", "*", "auto"],
            body: [
              ["Employee Name", "Earnings", "Deductions"],
              [payslipData.employeeName, "$3000", "$500"], // Example data
              // ... Add more rows ...
            ],
          },
          style: "tableStyle",
        },
        // Spacer
        "\n\n",
        {
          text: "Verified by: M Soko Admin", // Add demo text for the verified section
          alignment: "center",
          margin: [0, 0, 0, 10],
        },
      ],
      styles: {
        // ... Define other styles ...

        companyName: {
          fontSize: 14,
          bold: true,
          margin: [0, 5, 0, 0],
        },
        companyAddress: {
          fontSize: 12,
          margin: [0, 0, 0, 10],
        },
        tableStyle: {
          margin: [0, 10, 0, 0],
        },
        tableHeader: {
          bold: true,
          fontSize: 12,
          fillColor: "#CCCCCC",
        },
        header: {
          fontSize: 16,
          bold: true,
          margin: [0, 10, 0, 10],
        },
      },
      defaultStyle: {
        fontSize: 10,
      },
    };
    //  const payslipContent = {
    //    content: [
    //      { text: "Employee Name:", bold: true },
    //      { text: "John Doe", margin: [0, 0, 0, 10] },
    //      { text: "Basic Salary:", bold: true },
    //      { text: "3000", margin: [0, 0, 0, 10] },
    //      { text: "Allowances:", bold: true },
    //      { text: "500", margin: [0, 0, 0, 10] },
    //      // ... Other payslip content ...
    //      { text: "Packing Slip Information", style: "header" },
    //      { text: "Order ID:", bold: true },
    //      { text: selectedOrderId, margin: [0, 0, 0, 10] },
    //      { text: "Customer:", bold: true },
    //      { text: "John Doe", margin: [0, 0, 0, 10] },
    //      // ... Other packing slip content ...
    //    ],
    //    styles: {
    //      header: { fontSize: 18, bold: true, margin: [0, 10, 0, 5] },
    //    },
    //  };

    pdfMake.createPdf(docDefinition).download("Order_Payslip.pdf");
  };
  const payslipData = {
    employeeName: "John Doe",
    basicSalary: 5000,
    allowances: 1000,
    deductions: 500,
    netSalary: 5500,
  };
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Order Management
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>
                  <FormControl>
                    <Select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                    >
                      <MenuItem value="Processing">Processing</MenuItem>
                      <MenuItem value="Shipped">Shipped</MenuItem>
                      <MenuItem value="Delivered">Delivered</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
                <TableCell>
                  <Button
                    sx={{ marginRight: 2 }}
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleCancelOrder(order.id)}
                  >
                    Cancel Order
                  </Button>
                  <Button
                    variant="outlined"
                    color="neutral"
                    onClick={() => handleRefundOrder(order.id)}
                  >
                    Refund Order
                  </Button>
                  <Button
                    sx={{ marginLeft: 2, marginRight: 2 }}
                    variant="outlined"
                    color="success"
                    onClick={() => {
                      setIsGenerateInvoiceVisible(!isGenerateInvoiceVisible);
                    }}
                  >
                    Generate Invoice
                  </Button>
                  <Button
                    variant="outlined"
                    color="info"
                    onClick={() => {
                      setIsPayslipButtonsVisible(true); // Set the visibility of PDF and CSV buttons
                    }}
                  >
                    Generate Packing Slip
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleViewDetails(order.id)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Show "Generate PDF" and "Generate CSV" buttons when required */}
      {isPayslipButtonsVisible && (
        <>
          <Button
            variant="outlined"
            color="success"
            onClick={generateCsvPayslip}
            style={{ marginTop: "16px", marginRight: "16px" }}
          >
            Download CSV Payslip
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              // Generate and include packing slip data in PDF
              generatePdfPayslip({ payslipData, packingSlipData });
            }}
            style={{ marginTop: "16px", marginRight: "16px" }}
          >
            Download PDF Payslip
          </Button>
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setIsPayslipButtonsVisible(false);
              }}
            >
              Close
            </Button>
          </Box>
          <Box mt={2}>
            <TextField
              label="Employee Name"
              variant="outlined"
              color="info"
              fullWidth
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <TextField
              label="Basic Salary"
              variant="outlined"
              color="info"
              style={{ flex: 1, marginRight: "16px" }}
            />
            <TextField
              label="Allowances"
              variant="outlined"
              color="info"
              style={{ flex: 1, marginLeft: "16px" }}
            />
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <TextField
              label="Deductions"
              variant="outlined"
              color="info"
              style={{ flex: 1, marginRight: "16px" }}
            />
            <TextField
              label="Net Salary"
              variant="outlined"
              color="info"
              style={{ flex: 1, marginLeft: "16px" }}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Button
            style={{ marginTop: "16px" }}
            variant="contained"
            color="success"
            onClick={() => {
              // Implement packing slip generation
            }}
          >
            Generate Packing Slip
          </Button>
        </>
      )}
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Order Details for Order ID {selectedOrderId}
          </Typography>
          {/* Additional order details */}
          <Typography variant="subtitle1" gutterBottom>
            Customer: John Doe
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Status: Processing
          </Typography>
          {/* Add more order details here */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => {
              // Implement edit logic here
            }}
          >
            Edit
          </Button>
        </Box>
      </Modal>
      {/* Clickable area  */}

      {/* Generate Invoice design */}
      {isGenerateInvoiceVisible && (
        <Box mt={2} border={1} p={2} borderColor="primary.main">
          <Typography variant="h6" gutterBottom>
            Generate Invoice
          </Typography>
          <Divider />
          <Box mt={2}>
            <TextField
              label="Invoice Number"
              variant="outlined"
              color="info"
              fullWidth
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Billing Address"
              variant="outlined"
              color="info"
              fullWidth
            />
          </Box>
          <Box mt={2}>
            <TextField
              label="Invoice Date"
              type="date"
              variant="outlined"
              color="info"
              fullWidth
              InputLabelProps={{
                shrink: true,
                endAdornment: <Event color="info" />,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <Event color="info" /> {/* Make the icon colorful */}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          {/* Add more input fields as needed */}
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                setIsGenerateInvoiceVisible(false);
              }}
            >
              Close
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                // Implement invoice generation logic here
              }}
            >
              Generate Invoice
            </Button>
          </Box>
        </Box>
      )}
      {/* refund form */}
      <Box mt={3}>
        {isRefundFormOpen && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Refund Order for Order ID {selectedOrderId}
            </Typography>
            <Button
              variant="outlined"
              style={{ marginTop: "16px", marginBottom: "16px" }}
              color="info"
              onClick={handleCloseRefundForm} // Close the refund form
            >
              Close
            </Button>
            <form>
              <TextField
                label="Refund Amount"
                variant="outlined"
                color="info"
                fullWidth
                // Add necessary input props
              />
              {/* Add more form fields as needed */}
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                style={{ marginTop: "16px" }}
                onClick={(e) => {
                  e.preventDefault();
                  handleRefundOrder();
                }}
              >
                Refund
              </Button>
            </form>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default OrderManagementPage;
