import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';
import Contact from "./pages/Contact";
import Review from "./pages/Review";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/reviews',
        element: <Review />
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/orderHistory',
        element: <OrderHistory />
      },
      {
        path: '/products/:id',
        element: <Detail />
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
