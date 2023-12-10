import styled from "@emotion/styled";
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

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
gap:"20px"
}));

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          
          GAME OVER
        </Typography>
        <VideogameAssetIcon sx={{ display: { sm: "none", xs: "block" } }} />
        <Search>
          
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
         
          <Badge badgeContent={4} color="error">
            <NotificationsIcon color="action" />
          </Badge>

          <Badge badgeContent={4} color="error">
            <AccountBoxIcon color="action" />
          </Badge>


        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
