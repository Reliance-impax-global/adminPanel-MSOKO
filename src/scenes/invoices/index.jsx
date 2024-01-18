import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { Edit } from "@mui/icons-material";
import PaymentOverview from "../../components/PaymentOverview";
import FinancialManagement from "../../components/FinancialManagement";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <>
          <Typography color={colors.greenAccent[500]}>
            ${params.row.cost}
          </Typography>
          <Button
            variant="outlined"
            color="info"
            size="small"
            style={{ marginLeft: "16px" }}
            startIcon={<Edit />} // Add the Edit icon
            onClick={() => handleEditClick(params.row.id)} // Handle the edit action
          >
            Edit
          </Button>
        </>
      ),
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  // Handle the edit action
  const handleEditClick = (id) => {
    // Add your edit logic here
    console.log(`Editing row with ID ${id}`);
  };

  // Calculate total pending and received payments
  const totalPendingPayment = mockDataInvoices.reduce(
    (total, invoice) =>
      invoice.status === "Pending" ? total + invoice.cost : total,
    0
  );

  const totalReceivedPayment = mockDataInvoices.reduce(
    (total, invoice) =>
      invoice.status === "Received" ? total + invoice.cost : total,
    0
  );

  // Handle the edit action for the whole table
  const handleEditTableClick = () => {
    // Add your edit logic for the whole table here
    console.log("Editing the whole table");
  };

  return (
    <Box m="20px">
      <Header
        title="Payments and Finance"
        subtitle="List of all Transactions and Payment "
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataInvoices}
          columns={columns}
          components={{
            Toolbar: () => (
              <GridToolbar>
                <Button
                  variant="contained"
                  color="info"
                  startIcon={<Edit />} // Add the Edit icon
                  onClick={handleEditTableClick} // Handle the edit action for the whole table
                >
                  Edit Table
                </Button>
              </GridToolbar>
            ),
          }}
        />
      </Box>
      {/* Payment Overview Section */}
      <Box
        mt="20px"
        p="20px"
        backgroundColor={colors.blueAccent[200]}
        borderRadius="8px"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          variant="h2"
          style={{ fontWeight: "bold" }}
          color={colors.grey[900]}
        >
          Payment Overview
        </Typography>
        <Typography variant="h4" color={colors.grey[700]}>
          Total Pending Payment: $ 100000{totalPendingPayment.toFixed(2)}
        </Typography>
        <Typography variant="h4" color={colors.grey[700]}>
          Total Received Payment: $2000000{totalReceivedPayment.toFixed(2)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "16px" }}
          startIcon={<Edit />} // Add the Edit icon
          mt={6}
        >
          Edit
        </Button>
      </Box>
      {/* payment overview section */}
      <PaymentOverview />

      <FinancialManagement />
    </Box>
  );
};

export default Invoices;
