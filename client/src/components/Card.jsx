import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { CardMedia, Checkbox, Box, Stack, Container } from "@mui/material";
import { FavoriteBorder, Favorite, ExpandMore } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import { CardHeader } from '@mui/material';

export function ProductCard({ name, _id, price, description, image, addToCart }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }

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
            <CardHeader gutterBottom variant="h5" component="div">
              {name}
            </CardHeader>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              {price}
            </Typography>
          </Grid>
        </Grid>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Typography color="text.secondary" variant="body2" sx={{ display: { sm: "none", lg: "block" }, fontSize: '0.7rem' }}>
            {description}
          </Typography>
        </Collapse>
      </Box>
      <Divider variant="middle" />

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </Stack>

      <Box sx={{ m: 2 }}></Box>
      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Stack justifyContent='space-evenly'>
          <Button onClick={() => addToCart({ name, _id, price, description, quantity: 1, image })}> Add to cart </Button>
          <Button onClick={() => { window.location = `/products/${_id}` }}> View this product </Button>
        </Stack>
      </Box>
    </Box>
  );
};
