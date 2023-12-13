import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import {TOGGLE_CART} from "../utils/actions";
import { useStoreContext } from "../utils/GlobalState";

const Profile = () => {
    const [ state, dispatch] = useStoreContext();
    const toggleCart = () => {
        dispatch({ type: TOGGLE_CART });
    };
    

    return (
        <Box>
            <Navbar toggleCart={toggleCart} />
            <Stack direction="row" spacing={2} justifyContent="space-between">
               
                <Box flex={4} p={2} className="main-display">
                    <Typography variant="h4">Profile</Typography>
                </Box>
            </Stack>
        </Box>
    );
};


export default Profile;