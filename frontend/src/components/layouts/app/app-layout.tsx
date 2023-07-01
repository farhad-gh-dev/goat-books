import { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import LogoImage from "@/assets/logo-dark-64.png";

import { ProfileDropdown } from "./profile-dropdown";
import { Sidebar } from "./sidebar";

const drawerWidth = 240;

const CompanyLogo = styled.img`
  width: 45px;

  @media only screen and (max-width: 600px) {
    width: 35px;
  }
`;

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid",
          borderColor: "lightgrey",
        }}
      >
        <Toolbar
          sx={{
            padding: { xs: "0 10px", sm: "0 16px" },
            justifyContent: "space-between",
            height: "75px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: { xs: "8px", sm: "12px" },
              }}
            >
              <CompanyLogo src={LogoImage} alt={"goat books"} />
              <Typography
                variant="h6"
                sx={{ display: { xs: "none", sm: "unset" } }}
              >
                Goat Quotes
              </Typography>
            </Box>
          </Box>
          <ProfileDropdown />
        </Toolbar>
      </AppBar>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ display: "flex" }}>
          <Sidebar
            isMobileMenuOpen={mobileOpen}
            onCloseMobileMenu={handleDrawerToggle}
          />
          <Box
            component="main"
            sx={{
              height: `calc(100vh - 75px)`,
              flexGrow: 1,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar sx={{ height: "75px" }} />
            <Box
              sx={{
                height: "100%",
                padding: { xs: "20px 16px", sm: "24px 32px" },
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
