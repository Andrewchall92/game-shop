import { Outlet } from 'react-router-dom';
import {theme} from './assets/theme';
import { ThemeProvider } from '@mui/material';
import {Navbar} from './components/Navbar';
import {Rightbar} from './components/Rightbar';
import {Sidebar} from './components/Sidebar';
import {Feed} from './components/Feed';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
      <Outlet />
  
    </ThemeProvider>
  
    </>
  )
}

export default App;


