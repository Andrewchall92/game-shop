import styled from "@emotion/styled";
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: " 0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          BORING GAME
        </Typography>
        <VideogameAssetIcon sx={{ display: { sm: "none", xs: "block" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <AccountBoxIcon
            onClick={(e) => {
              setOpen(true);
            }}
            color="action"
          />
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="action" />
          </Badge>

          {/* Profile Menu on click */}
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={(e) => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem href='/profile'>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
