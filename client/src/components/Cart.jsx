import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "./CartItem";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from "../utils/actions";
import "../styles/Cart/style.css";
import { Button, Divider } from "@mui/material";

import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const Cart = () => {
  const theme = useTheme();

  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
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

  function submitCheckout() {
    getCheckout({
      variables: {
        products: [...state.cart],
      },
    });
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
        gutterBottom
      >
        Order summary
      </Typography>
      <Divider />
      <List disablePadding>
        {state.cart.map((product) => (
          <ListItem
            key={product.name}
            className="singleCartProduct"
            sx={{ py: 3, px: 1 }}
          >
            <div style={{ width: "50%" }}>
              <Typography color="white" sx={{ fontSize: "120%" }}>
                {product.name}
              </Typography>
              <Typography color="white">{product.description}</Typography>
            </div>
            <Typography sx={{ fontSize: "120%" }} color="white">
              {product.price}
            </Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <Typography variant="subtitle1" color="white">
            {calculateTotal()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2} style={{ width: "30%" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" color="white" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom color="white">
            Name
          </Typography>
          <Typography gutterBottom color="white">
            {" "}
            Address{" "}
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Button>
            
              Pay Now
           
          </Button>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Cart;
