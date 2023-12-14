import { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import CartItem from './CartItem';
import Auth from '../utils/auth';
import { useStoreContext } from '../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../utils/actions';
import '../styles/Cart/style.css';




import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';




const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
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
      const cart = await idbPromise('cart', 'get');
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
    
    <Box sx={{
      backgroundColor: "#5c6bc0",
      width: "50%", 
      height: "70%",
      
    }}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {state.cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={product.name}
              secondary={product.description}
            />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $34.06
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2} style={{ width: "30%" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom> Home </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
        </Grid>
      </Grid>
    </Box>
   
  )
        }  
  
  export default Cart;


// <Grid container>
//             {payments.map((payment) => (
//               <React.Fragment key={payment.name}>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.name}</Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography gutterBottom>{payment.detail}</Typography>
//                 </Grid>
//               </React.Fragment>
//             ))}
//           </Grid>


//   <div className="cart">
//   <div className="close" onClick={toggleCart}>
//     [close]
//   </div>
//   <h2>Shopping Cart</h2>
//   {state.cart.length ? (
//     <div>
//       {state.cart.map((item) => (
//         <CartItem key={item._id} item={item} />
//       ))}

//       <div className="flex-row space-between">
//         <strong>Total: ${calculateTotal()}</strong>

  
//         {Auth.loggedIn() ? (
//           <button onClick={submitCheckout}>Checkout</button>
//         ) : (
//           <span>(log in to check out)</span>
//         )}
//       </div>
//     </div>
//   ) : (
//     <h3>
//       <span role="img" aria-label="shocked">
//         😱
//       </span>
//       You haven't added anything to your cart yet!
//     </h3>
//   )}
// </div>
// );