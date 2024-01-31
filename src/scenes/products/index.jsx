
import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import app from "../../firebase/firebaseConfig";
import { getDatabase, ref, get } from "firebase/database";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "productId", headerName: "Product ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "origin",
      headerName: "Origin",
      flex: 1,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(app);
        const productsRef = ref(db, "products");
        const snapshot = await get(productsRef);

        if (!snapshot.exists()) {
          console.error("No data found in Firebase");
          return;
        }

        const productsArray = [];
        snapshot.forEach((childSnapshot) => {
          const key = childSnapshot.key;
          const data = childSnapshot.val();
          productsArray.push({ id: productsArray.length + 1, ...data });
        });

        setProducts(productsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="List of All Products" />
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
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "300px",
            }}
          >
            <CircularProgress style={{ color: colors.primary[400] }} />
          </div>
        ) : (
          <DataGrid
            rows={products}
            columns={columns}
            components={{ Toolbar: GridToolbar }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Products;
