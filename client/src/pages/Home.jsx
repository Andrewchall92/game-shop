import React, { useState } from "react";
import{ ProductCard } from "../components/Card";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { Rightbar } from "../components/Rightbar";
import { Sidebar } from "../components/Sidebar";
import { Box, Stack } from "@mui/material";
import HomeContent from "../components/Feeds";






const Home = () => {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomeContent />;
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

        <Box  flex={4} p={2} className="main-display" >{renderPage()}</Box>

       <Rightbar />
      </Stack>
    </Box>
  );
};

export default Home;

