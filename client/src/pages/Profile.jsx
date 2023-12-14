import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { TOGGLE_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import Auth from "../utils/auth";

const Profile = () => {
  const [state, dispatch] = useStoreContext();
  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART });
  };

  return (
    <Box>
      <Navbar toggleCart={toggleCart} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Container>

          {Auth.loggedIn() ? (
            <Box flex={4} p={2} className="main-display">
              <Typography variant="h4">Log in</Typography>
            </Box>


          ) : (



            <Box flex={4} p={2} className="main-display">
              <Typography variant="h4">Please Log In To View Profile</Typography>
              
            </Box>
          )}
        </Container>
      </Stack>
    </Box>
  );
};

export default Profile;
