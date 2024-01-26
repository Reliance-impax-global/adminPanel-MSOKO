
import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { getDatabase, ref, onValue } from 'firebase/database';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Registrar ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Zip Code",
      flex: 1,
    },
  ];

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const sellerDetailsContractsRef = ref(db, 'sellerDetails&Contracts');

    const unsubscribe = onValue(sellerDetailsContractsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const contactsArray = Object.keys(data).map((key,index) => ({
          id: index + 1,
          registrarId: data[key].id,
          name: `${data[key].firstName} ${data[key].lastName}`,
          age: data[key].age,
          phoneNumber: data[key].phoneNumber,
          email: data[key].email,
          address: data[key].address,
          city: data[key].city,
          zipCode: data[key].zipCode,
        }));
        setContacts(contactsArray);
      } else {
        setContacts([]);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);


  return (
    <Box m="20px">
          <Header
            title="CONTACTS"
            subtitle="List of Contacts for Future Reference"
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
            {isLoading ? ( 
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress color="info" />
          </Box>
        ) : (
          <DataGrid rows={contacts} columns={columns} components={{ Toolbar: GridToolbar }} />
        )}
      </Box>
          </Box>
       
  );
};

export default Contacts;
