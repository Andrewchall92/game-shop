import React, { useState } from "react";
import{ ProductCard } from "../components/Card";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { Rightbar } from "../components/Rightbar";
import { Sidebar } from "../components/Sidebar";
import { Box, Stack } from "@mui/material";
import Feeds from "../components/Feeds";
import Coupons from "../components/Coupons"; 
import Favorite from "../components/Favorite";
import Cart from "../components/Cart";





const Home = () => {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Feeds />;
      case 'Favorite':
        return <Favorite />;
        case 'Coupons':
        return <Coupons />;
      case 'Setting':
        return <Setting />;
      // default:
      //   return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Box>
      <Navbar  />
      <Cart />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar currentPage={currentPage} handlePageChange={handlePageChange} />

        <Box  flex={4} p={2} className="main-display" >{renderPage()}</Box>

       <Rightbar />
      </Stack>
    </Box>
  );
};

export default Home;

