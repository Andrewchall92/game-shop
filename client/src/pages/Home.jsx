import React from "react";
import{ ProductCard } from "../components/Card";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import { Box, Stack } from "@mui/material";

const products = {
    name: "Call of Duty",
    price: "$59.99",
    category: "Multiplayer",
    description:
      "Call of Duty is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II. Over time, the series has seen games set in the midst of the Cold War, futuristic worlds, and outer space.",
    image:
      "https://plus.unsplash.com/premium_photo-1661947137018-87955a7e7123?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FsbCUyMG9mJTIwZHV0eXxlbnwwfHwwfHx8MA%3D%3D",
  }
;

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />

        <Box flex={4} p={2} className="main-display">
        
            <ProductCard
              name={products.name}
              price={products.price}
              description={products.description}
              image={products.image}
              category={products.category}/>
          
        </Box>

        {/* Rightbar component goes here */}
      </Stack>
    </Box>
  );
};

export default Home;
