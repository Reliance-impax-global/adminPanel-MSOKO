
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../AuthContext/AuthProvider";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import Swal from "sweetalert2";
import { Box, CircularProgress, IconButton, useTheme } from "@mui/material";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { loader, user, userLogout } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show a warning before logging out
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms, perform logout
        userLogout();

        // Redirect to the login page after logout
        navigate('/');
      }
    });
  };

  const handleLoginLogout = () => {
    if (user) {
      handleLogout();
    } else {
      navigate('/');
    }
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" backgroundColor={theme.palette.primary[400]} borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
        </IconButton>

        <Link to="/notification">
          <IconButton title="notification">
            <NotificationsOutlinedIcon />
          </IconButton>
        </Link>

        <Link to="/security-and-privacy">
          <IconButton title="security-and-privacy">
            <SettingsOutlinedIcon />
          </IconButton>
        </Link>

        <IconButton onClick={handleLoginLogout}>
          {loader ? (
            <CircularProgress size={24} color="inherit" />
          ) : user ? (
            <ExitToAppOutlinedIcon title='logout' />
          ) : (
            'Login'
          )}
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
