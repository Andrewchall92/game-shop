import { Outlet } from "react-router-dom";
import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import './index.css'


const client = new ApolloClient({
  link:  '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
    <ApolloProvider client={client}>

      <ThemeProvider theme={theme}>
        <Outlet />
      </ThemeProvider>

    </ApolloProvider>
    </>
  );
}

export default App;
