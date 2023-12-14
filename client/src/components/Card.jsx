import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { CardMedia, Checkbox } from "@mui/material";
import { FavoriteBorder, Favorite } from '@mui/icons-material';

// function generateRandomNumber() {
//   const randomNumber = Math.floor(Math.random() * 900000000) + 100000000;
//   return randomNumber.toString();
// }

export function ProductCard({ name, _id,  price, description, image, addToCart }) {
  // console.log(name, _id, price, description, image);
  return (
    <Box
      key={_id}
      className="flex-item"
      sx={{
        width: { sm: "70%", md: "30%" },
        maxWidth: { sm: "70%", md: "30%" },
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
        <CardMedia
          width="100%"
          component="img"
          image={image}
          alt="Paella dish"
        />
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2" sx={{display:{sm:"none", lg:"block"}, fontSize: '0.7rem'}}>
          {description}
        
        </Typography>
        
      </Box>
      <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}></Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
      <Button onClick={() => addToCart({ name, _id, price, description, quantity: 1, image })}>Add to cart</Button>
      </Box>
    </Box>
  );
};
