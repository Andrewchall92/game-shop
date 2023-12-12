import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from "@mui/material";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SettingsIcon from '@mui/icons-material/Settings';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export const Sidebar = ({currentPage, handlePageChange}) => {
  return (
    <Box
      
      flex={1}
      p={2}
      sx={{ display: { sm: "none", md: "block" } }}
    >
        <Box position="fixed">

     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" onClick={ ()=> handlePageChange('Home')}>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>

            <ListItemButton component="a"onClick={ ()=> handlePageChange('Favorite')}>
              <ListItemIcon>
                <StarRateIcon/>
              </ListItemIcon>
              <ListItemText primary="Favorite" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>

            <ListItemButton component="a" onClick={ ()=> handlePageChange('Coupons')}>
              <ListItemIcon>
                <LocalOfferIcon/>
              </ListItemIcon>
              <ListItemText primary="Coupons" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/setting">
              <ListItemIcon>
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="/contact">
              <ListItemIcon>
                <ContactMailIcon/>
              </ListItemIcon>
              <ListItemText primary="Contact us" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <Brightness2Icon/>
              </ListItemIcon>
              <Switch />            </ListItemButton>
          </ListItem>

        </List>
        </Box>
    </Box>
  );
};
