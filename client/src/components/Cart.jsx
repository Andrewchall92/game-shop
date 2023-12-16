import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "./CartItem";
import { useStoreContext } from "../utils/GlobalState";
import {
  ADD_MULTIPLE_TO_CART,
  REMOVE_FROM_CART,
} from "../utils/actions";
import "../styles/Cart/style.css";
import {
  Button,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Stack,
  Alert,
  Box,
  Grid
} from "@mui/material";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";


import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: "maroon",
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "10px"
};


const stripePromise = loadStripe("pk_test_51ONTIVHTFh8Wci3c6KmX3ltxyZAHhSTHFY12NMZwUeg6eHfDykwMEYyJvzIr979461JfVxXjBN0Ogl9dcSzcRjaa00X89U6v2w");

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (data) {
      console.log("This is data to Stripe :     "+data)
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise("cart", "get");
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

  function handleCheckout() {
    if(!state.cart.length){
      return handleOpen()
    }
    getCheckout({
      variables:{
        products: [...state.cart],
      }
    })
    console.log("This is handleCheckout"+[...state.cart])
   
  }
  console.log(state.cart);

  return (
    <Box
      sx={{
        backgroundColor: "black",
        width: "50%",
        height: "70%",
        overflow: "auto",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h6"
        color="white"
        sx={{ fontWeight: "bold" }}
        bottom
      >
        Order summary
      </Typography>
      <Divider />
      <List disablePadding>
        {state.cart.map((product) => (
          <Card key={product._id} sx={{ my: 4 }}>
            <Stack direction="row" spacing={1} justifyContent="space-evenly">
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={product.image}
              />
              <CardContent sx={{ width: "30%" }}>
                <Typography component="div" variant="h5">
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  fontSize="12px"
                  component="div"
                >
                  {product.description}
                </Typography>
              </CardContent>
              <CardContent sx={{ width: "30%" }}>
                <Button onClick={() => removeFromCart(product)}>Remove</Button>
              </CardContent>
            </Stack>
          </Card>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="subtitle1" color="white">
            Total $ : {calculateTotal()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2} style={{ width: "30%" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" color="white" bottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography bottom color="white">
            Name
          </Typography>
          <Typography bottom color="white">
            Address
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" bottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Button onClick={handleCheckout} variant="contained" color="primary">
            Pay Now
          </Button>
        </Grid>
      </Grid>
      <div>
     
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            No Item Has Been Selected
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            There is no item in your cart
          </Typography>
        </Box>
      </Modal>
    </div>
    </Box>
  );
};

export default Cart;
