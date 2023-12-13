import React from "react";
import { useEffect } from 'react';
import { Box } from "@mui/material";
import { ProductCard } from "./Card";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import { useStoreContext } from '../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../utils/actions';
import { idbPromise } from '../utils/helpers';


const Feeds = () => {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const {loading, data , error} = useQuery(QUERY_ALL_PRODUCTS);

  // const products = data?.products || [];
  // console.log(products);
  // console.log(error);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <>
    <Box flex={4} p={2} className="main-display">
      {state.products.length ? (
    <div>
      {filterProducts().map((product) => (
        <ProductCard
          key={product._id}
          id={product._id}
          name={product.name}
          price={product.price}
          description={product.description}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  ) : (
    <h3>You haven't added any products yet!</h3>
  )}
    {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </Box>
    </>
  );
}

export default Feeds;
