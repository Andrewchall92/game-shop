import { Outlet } from "react-router-dom";
import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import { StoreProvider } from "./utils/GlobalState";
import { setContext } from '@apollo/client/link/context';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,

  createHttpLink,
} from '@apollo/client';
<<<<<<< HEAD
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';
=======
>>>>>>> 162fbdc1f54a91a92b43d7aea97e72a6732878bf


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link:  authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
<<<<<<< HEAD
            <StoreProvider>
          <ThemeProvider theme={theme}>
            <Outlet />
          </ThemeProvider>
            </StoreProvider>
=======
        <StoreProvider>
          <ThemeProvider theme={theme}>
            <Outlet />
          </ThemeProvider>
        </StoreProvider>
>>>>>>> 162fbdc1f54a91a92b43d7aea97e72a6732878bf
      </ApolloProvider>
    </>
  );
}
export default App;
