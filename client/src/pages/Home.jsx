import React, { useState } from "react";
import{ ProductCard } from "../components/Card";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { Rightbar } from "../components/Rightbar";
import { Sidebar } from "../components/Sidebar";
import { Box, Stack } from "@mui/material";






const Home = () => {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      // case 'Favorite':
      //   return <Favorite />;
      //   case 'Favorite':
      //   return <Coupon />;
      // case 'Setting':
      //   return <Setting />;
      // default:
      //   return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Box>
      <Navbar  />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar currentPage={currentPage} handlePageChange={handlePageChange} />

        <Box flex={4} p={2} className="main-display">
        
        
        {products.map((product) => ( 
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              category={product.category}/>
        ))}
        </Box>

       <Rightbar />
      </Stack>
    </Box>
  );
};

export default Home;

