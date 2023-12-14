import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import CartItem from "./CartItem";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/GlobalState";
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART, REMOVE_FROM_CART } from "../utils/actions";
import "../styles/Cart/style.css";
import { Button, Divider, Card, CardContent, CardMedia, IconButton, Typography, Stack } from "@mui/material";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";


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

  const removeFromCart = (item) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id,
    });
    idbPromise("cart", "delete", { ...item });
  };

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
          <Card  sx={{ my: 4}}> {/* Add margin (my) to create spacing */}
            <Stack direction='row' spacing={1} justifyContent="space-evenly">
              <CardMedia
                component="img"
                sx={{ width: 150 }}
                image={product.image}
              />
              <CardContent sx={{ width: '30%' }}>
                <Typography component="primary"  variant="h5">
                  {product.name}
                </Typography>
                <Typography variant="secondary" color="text.secondary" fontSize='3%' component="div">
                  {product.description}
                </Typography>
              </CardContent>
              <CardContent sx={{ width: '30%' }}>
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
          <Typography variant="h6" color="white" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom color="white">
            Name
          </Typography>
          <Typography gutterBottom color="white">
            Address
          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Button >Pay Now</Button>
        </Grid>
      </Grid>
      </Box>
  );
};

export default Cart;




