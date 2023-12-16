import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Divider,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Modal,
  Badge,
} from "@mui/material";
import React, { useState } from "react";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import Cart from "./Cart";
import { useStoreContext } from "../utils/GlobalState";


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



function showLogin() {
  if (Auth.loggedIn()) {
    return (
      <MenuItem>
        <a href="/" onClick={() => Auth.logout()}>
          Logout
        </a>
      </MenuItem>
    );
  } else {
    return (
      <div>
        <MenuItem>
          <Link to="/signup">Sign Up</Link>
        </MenuItem>

        <MenuItem>
          <Link to="/login">Login</Link>
        </MenuItem>
      </div>
    );
  }
}


export const Navbar = ({ toggleCart, cart }) => {
  const [open, setOpenAccount] = useState(false);
  const [openModal, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [state, dispatch] = useStoreContext();
  
  return (
    
    <AppBar position="sticky" color="primary">
      <StyledToolbar>
        <Typography
          variant="h5"
          component="a"
          href="/"
          style={{
            fontFamily: "Staatliches",
            fontWeight: "bold",
          }}
          id="branding"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          BORING GAME SHOP
        </Typography>
        <VideogameAssetIcon sx={{ display: { sm: "none", xs: "block" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>

        {Auth.loggedIn() ? (
          <Badge color="success" badgeContent=" " variant="dot">
          <AccountBoxIcon
            onClick={() => {
              setOpenAccount(true);
            }}
            color="action"
          />
        </Badge>
        ) :(
          <AccountBoxIcon
            onClick={() => {
              setOpenAccount(true);
              
            }}
            color="action"
          />
        )}
        

          
          <Badge badgeContent={parseInt(state.cart.length)} color="error">
            <ShoppingCartIcon color='action' onClick={handleOpen} />
          </Badge>
          <Modal
            open={openModal}
            onClose={handleClose}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Cart />
          </Modal>

          <Menu
            id="profile-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => setOpenAccount(false)}
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
              <Link to="./profile">My account</Link>
            </MenuItem>
            <Divider />
            {showLogin()}
          </Menu>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};
