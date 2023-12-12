import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

const itemData = {
  item1: {
    image:'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-REVEAL-FULL-TOUT.jpg'
  },
  item2: {
    image:
    "https://i.pinimg.com/originals/34/bc/27/34bc279164f64029353d3958c1416c88.jpg"
},item3: {
    image:
    "https://cdn1.epicgames.com/57dfd95548214a138218e56cd9e5b9d8/offer/EGS_Back4Blood_TurtleRockStudios_S2-1200x1600-0cd4ac84bb5491a81aa6ebfcbea9dfbf.jpg"
}
};

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { sm: "none", md: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6">Shop ours Deals</Typography>
        <ImageList sx={{ width: 370, height: 450 }} cols={3} rowHeight={160}>
          <ImageListItem >
            <img
              src={itemData.item1.image}          
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src={itemData.item2.image}          
            />
          </ImageListItem>
          <ImageListItem >
            <img
              src={itemData.item3.image}          
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};
