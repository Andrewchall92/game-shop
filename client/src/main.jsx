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
import Review from "./pages/Review";
import Profile from './pages/Profile.jsx';
import SingleProductPage from './pages/SingleProduct.jsx';


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
        path: '/reviews',
        element: <Review />
      },
      {
        path: '/success',
        element: <Success />
      },
      {
        path: '/history',
        element: <OrderHistory />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/products/:id',
        element: <SingleProductPage />
      },
      {
        path: '*',
        element: <NoMatch />
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
