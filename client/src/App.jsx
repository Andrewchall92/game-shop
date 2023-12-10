import { Outlet } from "react-router-dom";
import { theme } from "./assets/theme";
import { Box, Container, Stack, ThemeProvider } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Rightbar } from "./components/Rightbar";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import './index.css'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar />
             <Outlet />

            <Rightbar />
          </Stack>
        </Box>

      </ThemeProvider>
    </>
  );
}

export default App;
