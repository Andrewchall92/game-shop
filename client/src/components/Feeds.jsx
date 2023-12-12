import React from "react";
import {products} from "../utils/products";
import { Box } from "@mui/material";
import { ProductCard } from "./Card";

const Feeds = () => {
  return (
    <>
    <Box flex={4} p={2} className="main-display">
      {products.map((product) => (
        <ProductCard
          key={product.name}
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
