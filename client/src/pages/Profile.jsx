import React, { useEffect } from "react";
import { Box, Stack, Typography, Container, Card, CardHeader, CardContent } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { TOGGLE_CART } from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";
import Auth from "../utils/auth";
import { useLazyQuery } from '@apollo/client';
import { QUERY_USER } from "../utils/queries";

const Profile = () => {
  const [state, dispatch] = useStoreContext();
  const [getUser, { loading, data }] = useLazyQuery(QUERY_USER);

  useEffect(() => {
    if (Auth.loggedIn()) {
      getUser({ variables: { email: Auth.getProfile().data.email } });
    }
  }, [getUser]);

  const toggleCart = () => {
    dispatch({ type: TOGGLE_CART });
  };

  return (
    <Box>
      <Navbar toggleCart={toggleCart} />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Container>
          {Auth.loggedIn() ? (
            <Container flex={4} p={2} className="main-display">
              <Card>
                <CardHeader title="My Profile" />
                <CardContent>
                  {loading ? (
                    <Typography variant="h5">Loading...</Typography>
                  ) : (
                    <>
                      <Typography variant="h5">Email: {data?.user?.email}</Typography>
                      <Typography variant="h5">First Name: {data?.user?.firstName}</Typography>
                      <Typography variant="h5">Last Name: {data?.user?.lastName}</Typography>
                      <Typography variant="h5">Address: {data?.user?.address}</Typography>
                      <Typography variant="h5">City: {data?.user?.city}</Typography>
                    </>
                  )}
                </CardContent>
              </Card>
            </Container>
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
