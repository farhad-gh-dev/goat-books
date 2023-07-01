import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Skeleton from "@mui/material/Skeleton";

import { useUserProfile } from "@/features/profile";
import { Typography } from "@mui/material";
import { queryClient } from "@/libs/react-query";
import { clearToken } from "@/utils/storage";

export const ProfileDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const userQuery = useUserProfile({});

  const clickMenuHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenuHandler = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    clearToken();
    queryClient.invalidateQueries(["sign-in-status"]);
    closeMenuHandler();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {userQuery.isLoading ? (
        <>
          <Skeleton variant="circular" width={26} height={26} />
          <Skeleton variant="rectangular" width={110} height={26} />
        </>
      ) : (
        <Box>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={clickMenuHandler}
            startIcon={
              <KeyboardArrowDownIcon sx={{ opacity: "0.5", mb: 0.25 }} />
            }
            color={"inherit"}
            sx={{
              textTransform: "none",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Typography>{userQuery.data?.username}</Typography>
              <Typography variant="caption">{userQuery.data?.email}</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                alignSelf: "stretch",
              }}
            >
              <Avatar
                alt={userQuery.data?.username}
                src={userQuery.data?.profileImage}
                sx={{ width: 26, height: 26, marginLeft: "10px" }}
              />
            </Box>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={closeMenuHandler}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              "& .MuiPaper-root": {
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
                minWidth: "120px",
              },
              "& .MuiList-root": {
                padding: "4px 0",
              },
            }}
          >
            <MenuItem onClick={logoutHandler}>Logout</MenuItem>
          </Menu>
        </Box>
      )}
    </Box>
  );
};
