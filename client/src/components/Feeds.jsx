import React from "react";
import { Box } from "@mui/material";
import { ProductCard } from "./Card";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import { useQuery } from "@apollo/client";


const Feeds = () => {
  const {loading, data , error} = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];
  console.log(products);
  console.log(error);
  return (
    <>
    <Box flex={4} p={2} className="main-display">
      {products.map((product) => (
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
    </Box>
    </>
  );
};

export default Feeds;
