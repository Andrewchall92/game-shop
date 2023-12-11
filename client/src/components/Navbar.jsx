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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

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
  const [openNoti, setOpenNoti] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" id='branding' sx={{ display: { xs: "none", sm: "block" } }}>
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
            <NotificationsIcon color="action" onClick={(e) => {
              setOpenNoti(true)}} />
          </Badge>

          <Badge badgeContent={1} color="error">
            <ShoppingCartIcon color="action" />
          </Badge>
          {/* Profile Menu on click */}
          <Menu
            id="Noti-Menu"
            aria-labelledby="demo-positioned-button"
            open={openNoti}
            onClose={(e) => setOpenNoti(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem href='/profile'>Notification #1</MenuItem>
            <MenuItem > Notification #2 </MenuItem>
            <MenuItem > Notification #3 </MenuItem>
          </Menu>

          <Menu
            id="profile-menu"
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
            <MenuItem>
            <Link
            to='./profile'
            > 
            My account
            </Link>
           </MenuItem>
            <MenuItem>
            <Link
            to="/login"
            >Sign In
            </Link> </MenuItem>
            
          
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
