import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

function ProductCard() {
  return (
    <Box
      className="flex-item"
      sx={{
        width: { sm: "100%", md: "30%" },
        maxWidth: { sm: "100%", md: "30%" },
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
         <CardMedia
            width="100%"
              component="img"

              image="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?cs=srgb&dl=pexels-svetozar-milashevich-1490908.jpg&fm=jpg"
              alt="Paella dish"
            />
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              Toothbrush               
            </Typography>
           
          </Grid>
          <Grid item={12}>
            <Typography gutterBottom variant="h5" component="div">
              $4.50
            </Typography>
          </Grid>
        </Grid>
        <Typography color="text.secondary" variant="body2">
          Pinstriped cornflower blue cotton blouse takes you on a walk to the
          park or just down the hall.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}></Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button>Add to cart</Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
