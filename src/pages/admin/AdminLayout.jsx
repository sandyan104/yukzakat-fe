// import * as React from 'react'
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { AppProvider } from "@toolpad/core/react-router-dom";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import { DashboardOutlined, RedeemOutlined } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import AxiosInstance from "../../utils/AxiosInstance";

const NAVIGATION = [
  {
    segment: "admin",
    title: "Dashboard",
    icon: <DashboardOutlined />,
  },
  {
    segment: "admin/zakat",
    title: "Zakat",
    icon: <RedeemOutlined />,
  },
];

const customTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

// function CustomAppTitle() {
// 	return (
// 		<Typography variant='h5' ml={2} my={0.7} color='white' fontWeight={300}>
// 			<b>Yuk</b>Zakat.id
// 		</Typography>
// 	);
// }

function Logout() {
  const navigate = useNavigate();
  const logoutUser = () => {
    AxiosInstance.post(`logout/`, {}).then(() => {
      localStorage.removeItem("Token");
      navigate("/admin/login");
    });
  };
  return (
    <Stack direction="row" spacing={2}>
      <Button onClick={logoutUser}>Logout</Button>
      <ThemeSwitcher />
    </Stack>
  );
}

function AdminLayout({ children }) {
  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={customTheme}
      branding={{
        logo: (
          <Typography variant="h5" ml={2} my={0.7} color="white" fontWeight={300}>
            <b>Yuk</b>Zakat.id
          </Typography>
        ),
        title: "",
      }}
    >
      <DashboardLayout
        slots={{
          // appTitle: CustomAppTitle,
          toolbarActions: Logout,
        }}
      >
        {children}
      </DashboardLayout>
    </AppProvider>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.object,
};

export default AdminLayout;
