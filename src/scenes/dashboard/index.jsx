import {
  Box,
  Button,
  CircularProgress,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

import { ResponsivePie } from "@nivo/pie"; // Import the ResponsivePie component from @nivo/pie
// Replace this with your actual mostSearchedProduct data or define it
const mostSearchedProduct = {
  name: "Product A",
  searches: 5000, // Replace with the actual number of searches
  views: 8000, // Replace with the actual number of views
};

const pieChartData = [
  {
    id: "Searches",
    label: "Searches",
    value: mostSearchedProduct.searches,
  },
  {
    id: "Views",
    label: "Views",
    value: mostSearchedProduct.views,
  },
];

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // Calculate the summary of services
  const totalServices = 250; // Replace with your actual data
  const contactedServices = 120; // Replace with your actual data
  const completionPercentage = (contactedServices / totalServices) * 100;

  // Mock data for the product with the most searches and views
  const mostSearchedProduct = {
    name: "Product A",
    searches: 5000,
    views: 8000,
  };

  // Mock data for product listing
  const products = [
    { name: "Product A", searches: 5000, views: 8000 },
    { name: "Product B", searches: 3000, views: 6000 },
    { name: "Product C", searches: 2000, views: 4500 },
    // Add more products as needed
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }} // Flex direction based on screen size
      >
        <Header
          title="DASHBOARD"
          subtitle="Welcome to Sokoni Admin dashboard"
        />

        <Box
          mt={{ xs: "6px", md: "0" }}
          textAlign={{ xs: "center", md: "right" }}
        >
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              mb: { xs: "10px", md: "0" }, // Margin bottom based on screen size
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={{ xs: "1fr", md: "repeat(12, 1fr)" }}
        gap={{ xs: "20px", md: "20px" }}
        gridAutoRows="140px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn={{ xs: "span 12", md: "span 3" }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: "span 12", md: "span 3" }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: "span 12", md: "span 3" }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Seller & Buyer"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={{ xs: "span 12", md: "span 3" }}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={{ xs: "span 12", md: "span 8" }}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: "span 12", md: "span 4" }}
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* SUMMARY OF SERVICES */}
        <Box
          gridColumn={{ xs: "span 12", md: "span 4" }}
          gridRow={{ xs: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          padding="30px"
          borderRadius="10px"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "10px", color: colors.grey[100] }}
          >
            Summary of Services
          </Typography>
          <Typography
            variant="h3"
            fontWeight="bold"
            color={colors.greenAccent[500]}
          >
            {contactedServices} out of {totalServices}
          </Typography>
          <Box display="flex">
            <Typography
              style={{ marginTop: "10px" }}
              variant="h4"
              marginLeft=""
              color={colors.grey[100]}
            >
              {completionPercentage.toFixed(2)}% completion
            </Typography>
            <StatBox title="" subtitle="" progress="0.80" increase="+48%" />
          </Box>
          <Typography variant="h5" marginTop="14px" color={colors.grey[100]}>
            services have been contacted within the platform.
          </Typography>
        </Box>

        {/* MOST SEARCHED PRODUCT */}
        <Box
          gridColumn={{ xs: "span 12", md: "span 4" }}
          gridRow={{ xs: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          padding="30px"
          borderRadius="10px"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px", color: colors.grey[100] }}
          >
            Most Searched Product
          </Typography>
          <Typography variant="h6" color={colors.grey[100]}>
            Product Name: {mostSearchedProduct.name}
          </Typography>
          <Typography color={colors.grey[100]}>
            Searches: {mostSearchedProduct.searches}
          </Typography>
          <Typography color={colors.grey[100]}>
            Views: {mostSearchedProduct.views}
          </Typography>

          {/* Render the Nivo pie chart */}
          <Box mt="4px" height="160px">
            {" "}
            {/* Specify the height of the pie chart */}
            <ResponsivePie
              data={pieChartData}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={["#FF6384", "#36A2EB"]} // Customize the colors as needed
              // Add a tooltip to the pie chart
              // tooltip={(node) => (
              //   <div>
              //     <strong>{node.label}</strong>: {node.value}
              //   </div>
              // )}
            />
          </Box>
        </Box>

        {/* PRODUCT LISTING TABLE */}
        <Box
          gridColumn={{ xs: "span 12", md: "span 4" }}
          gridRow={{ xs: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          padding="30px"
          borderRadius="10px"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px", color: colors.grey[100] }}
          >
            Product Listing
          </Typography>
          <TableContainer>
            <Table sx={{ border: "1px solid " + colors.primary[500] }}>
              <TableHead>
                <TableRow>
                  <TableCell>Product Name</TableCell>
                  <TableCell align="right">Searches</TableCell>
                  <TableCell align="right">Views</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      color={colors.grey[100]}
                    >
                      {product.name}
                    </TableCell>
                    <TableCell align="right" color={colors.grey[100]}>
                      {product.searches}
                    </TableCell>
                    <TableCell align="right" color={colors.grey[100]}>
                      {product.views}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn={{ xs: "span 12", md: "span 4" }}
          gridRow={{ xs: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: "span 12", md: "span 4" }}
          gridRow={{ xs: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={{ xs: "span 12", md: "span 4" }}
          gridRow={{ xs: "span 2", md: "span 2" }}
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
