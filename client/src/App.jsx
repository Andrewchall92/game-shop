import { Outlet } from "react-router-dom";
import { theme } from "./assets/theme";
import { ThemeProvider } from "@mui/material";
import './index.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


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
          <ThemeProvider theme={theme}>
            <Outlet />
          </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default App;
