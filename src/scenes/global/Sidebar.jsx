import { useContext, useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import AddHomeIcon from "@mui/icons-material/AddHome";
import image from "../../assets/user.jpg";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PaidIcon from "@mui/icons-material/Paid";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import Person4Icon from "@mui/icons-material/Person4";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import InventoryIcon from "@mui/icons-material/Inventory";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BusinessIcon from "@mui/icons-material/Business";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { UserAuthContext } from "../../AuthContext/AuthProvider";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { user } = useContext(UserAuthContext);
  return (
    <Box
      sx={{
        height: "100vh", // Make the container full height
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      {" "}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Make the container full height
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            {/* LOGO AND MENU ICON */}
            <MenuItem
              onClick={() => setIsCollapsed(!isCollapsed)}
              icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
              style={{
                margin: "10px 0 20px 0",
                color: colors.grey[100],
              }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMINIS
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )}
            </MenuItem>

            {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              {user ? (
                // Display user profile image if user is logged in
                user.photoURL ? (
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={user.photoURL}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                ) : (
                  // If user has no profile image, display a default user icon
                  <PersonOutlinedIcon style={{ fontSize: "100px", color: colors.grey[100] }} />
                )
              ) : (
                // Display a default user icon if no user is logged in
                <PersonOutlinedIcon style={{ fontSize: "100px", color: colors.grey[100] }} />
              )}
            </Box>
            <Box textAlign="center">
              <Typography 
                variant="h4"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ mt: "5px",mb:"20px" }}
              >
               Hi, {user ? user.displayName || "Guest User" : "Guest User"}
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                M-Soko Admin Panel
              </Typography>
            </Box>
          </Box>
        )}

            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
              {/* <Item
                title="Welcome"
                to="/"
                icon={<AddHomeIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
              <Item
                title="Dashboard"
                to="/dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
              <Item
                title="Manage Buyer & Seller"
                to="/team"
                icon={<StorefrontIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Products Management"
                to="/products"
                icon={<ProductionQuantityLimitsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Feedback and Reviews"
                to="/feedback-reviews"
                icon={<FeedbackIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Payments and Finance"
                to="/invoices"
                icon={<PaidIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Marketing and Promotions"
                to="/marketing-promotions"
                icon={<LocalConvenienceStoreIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Customer Support "
                to="/customer-support"
                icon={<SupportAgentIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Content Management "
                to="/content-management"
                icon={<ContentPasteGoIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Analytics and Reporting "
                to="/analytics-reporting"
                icon={<AnalyticsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Seller Management "
                to="/seller-management"
                icon={<Person4Icon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Order Management "
                to="/order-management"
                icon={<SubscriptionsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Product Management"
                to="/product-management"
                icon={<InventoryIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="User Management"
                to="/user-management"
                icon={<ManageAccountsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Bank Details"
                to="/bank-details"
                icon={<AccountBalanceIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Business Details"
                to="/business-details"
                icon={<BusinessIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Monitor Business Details"
                to="/monitor-business-details"
                icon={<LegendToggleIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="On Boarding Form"
                to="/onboaridng-form"
                icon={<DynamicFormIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Advertise Management"
                to="/advertising-management"
                icon={<AddBusinessIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Business Insights"
                to="/business-insights"
                icon={<CorporateFareIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Pages
              </Typography>
              <Item
                title="Add Services"
                to="/form"
                icon={<PersonOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Charts
              </Typography>
              <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </div>
    </Box>
  );
};

export default Sidebar;
