// import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

// import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataTeam } from "../../data/mockData";
// import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
// import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
// import Header from "../../components/Header";

// const Team = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check for mobile devices
//   const isTablet = useMediaQuery(theme.breakpoints.down("md"));
//   const isLg = useMediaQuery(theme.breakpoints.down("lg"));
//   const columns = [
//     { field: "id", headerName: "ID" },
//     {
//       field: "name",
//       headerName: "Name",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "age",
//       headerName: "Age",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "phone",
//       headerName: "Phone Number",
//       flex: 1,
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       flex: 1,
//     },
//     {
//       field: "accessLevel",
//       headerName: "Access Level",
//       flex: 1,
//       renderCell: ({ row: { access } }) => {
//         return (
//           <Box
//             width={isMobile ? "270%" : isTablet ? "130%": isLg ? '100%': '60%'} // Adjust width based on device
//             m="0 auto"
//             p="5px"
//             display="flex"
//             justifyContent="center"
//             alignItems="center" // Center text vertically
//             backgroundColor={
//               access === "admin"
//                 ? colors.greenAccent[600]
//                 : access === "manager"
//                 ? colors.greenAccent[700]
//                 : colors.greenAccent[700]
//             }
//             borderRadius="4px"
//             sx={{
//               fontSize: isMobile ? "14px" : "inherit", // Adjust font size for smaller screens
//             }}
//           >
//             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
//             {access === "manager" && <SecurityOutlinedIcon />}
//             {access === "user" && <LockOpenOutlinedIcon />}
//             <Typography color={colors.grey[100]} sx={{ ml: isMobile ? "5px" : "8px" }}>
//               {access}
//             </Typography>
//           </Box>
//         );
//       },
//     },
//   ];

//   return (
//     <Box m="20px">
//       <Header title="Buyer & Seller Details" subtitle="Managing the Buyers and Sellers" />
//       <Box
//         m="40px 0 0 0"
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//           "& .MuiDataGrid-footerContainer": {
//             borderTop: "none",
//             backgroundColor: colors.blueAccent[700],
//           },
//           "& .MuiCheckbox-root": {
//             color: `${colors.greenAccent[200]} !important`,
//           },
//         }}
//       >
//         <DataGrid
//           checkboxSelection
//           rows={mockDataTeam}
//           columns={columns}
//           components={{
//             NoRowsOverlay: isMobile ? MobileNoRowsOverlay : null,
//           }}
//         />
//       </Box>
//     </Box>
//   );
// };

// const MobileNoRowsOverlay = () => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "10px",
//       }}
//     >
//       <Typography>No rows</Typography>
//     </div>
//   );
// };

// export default Team;

import { useEffect, useState } from "react";
import { Box, Typography, useTheme, useMediaQuery, CircularProgress } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../components/Header";

// Import Firebase modules correctly
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from "firebase/database";
import app from "../../firebase/firebaseConfig";
const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isLg = useMediaQuery(theme.breakpoints.down("lg"));

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getDatabase(app);
    const sellerDetailsRef = ref(db, "sellerDetails&Contracts");

    const handleDataChange = (snapshot) => {
      const dataFromFirebase = snapshot.val();
      const formattedData = Object.keys(dataFromFirebase).map((id) => ({
        id,
        ...dataFromFirebase[id],
        accessLevel: "admin",
      }));

      setData(formattedData);
      setLoading(false);
    };

    onValue(sellerDetailsRef, handleDataChange);

    // Clean up the listener when the component unmounts
    return () => {
      off(sellerDetailsRef, "value", handleDataChange);
    };
  }, []); 
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "fullName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      renderCell: (params) => (
        <div>
          {params.row.firstName} {params.row.lastName}
        </div>
      ),
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phoneNumber", // Corrected field name
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      renderCell: () => {
        return (
          <Box
          width={isMobile ? "270%" : isTablet ? "130%" : isLg ? '100%' : '60%'}
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          backgroundColor={colors.greenAccent[600]} // Set access level as "admin"
          borderRadius="4px"
          sx={{
            fontSize: isMobile ? "14px" : "inherit",
          }}
        >
          <AdminPanelSettingsOutlinedIcon />
          <Typography color={colors.grey[100]} sx={{ ml: isMobile ? "5px" : "8px" }}>
            Admin
          </Typography>
        </Box>
        // {
          //       field: "accessLevel",
          //       headerName: "Access Level",
          //       flex: 1,
          //       renderCell: ({ row: { access } }) => {
          //         return (
          //           <Box
          //             width={isMobile ? "270%" : isTablet ? "130%": isLg ? '100%': '60%'} // Adjust width based on device
          //             m="0 auto"
          //             p="5px"
          //             display="flex"
          //             justifyContent="center"
          //             alignItems="center" // Center text vertically
          //             backgroundColor={
          //               access === "admin"
          //                 ? colors.greenAccent[600]
          //                 : access === "manager"
          //                 ? colors.greenAccent[700]
          //                 : colors.greenAccent[700]
          //             }
          //             borderRadius="4px"
          //             sx={{
          //               fontSize: isMobile ? "14px" : "inherit", // Adjust font size for smaller screens
          //             }}
          //           >
          //             {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          //             {access === "manager" && <SecurityOutlinedIcon />}
          //             {access === "user" && <LockOpenOutlinedIcon />}
          //             <Typography color={colors.grey[100]} sx={{ ml: isMobile ? "5px" : "8px" }}>
          //               {access}
          //             </Typography>
          //           </Box>
          //         );
          //       },
          //     },
          // use this code after creating dynamic admin system
        );
      },
    },
  ];

  if (loading) {
    return (
      <Box m="20px" textAlign="center">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box m="20px">
      <Header title="Buyer & Seller Details" subtitle="Managing the Buyers and Sellers" />
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
          }

        }}
      >
        <DataGrid
          checkboxSelection
          rows={data}
          columns={columns}
          components={{
            NoRowsOverlay: isMobile ? MobileNoRowsOverlay : null,
          }}
        />
      </Box>
    </Box>
  );
};

const MobileNoRowsOverlay = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
      }}
    >
      <Typography>No rows</Typography>
    </div>
  );
};

export default Team;

