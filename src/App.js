import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
// import Visual from './Component/Home/Visual';
// import Content from './Component/Home/Content';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Content_MT from './Component/Home/Content_MT';
import Home from './pages/Home';
import Footer from './pages/Footer';
import DarkModeProvider from './Context/DarkModeContext';
import Brand from './pages/Brand';
import Root from './pages/Root';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import ErrorPage from './pages/ErrorPage';
import MoblieHome from './pages/Moblie/MoblieHome';
import MoblieRoot from './pages/Moblie/MoblieRoot';
import Subpage from './pages/Subpage';
import Customer from './pages/Customer';
import MoblieBrand from './pages/Moblie/MoblieBrand';

function App() {
  let router = null;

  if (isMobile) {
    router = createBrowserRouter(
      [{
        path: '/',
        element: <MoblieRoot />,
        errorElement: <ErrorPage />,
        children: [
          {
            index: true, element: <MoblieHome />,
          },
          { path: '/mobliebrand', element: <MoblieBrand /> },
          // {
          //     path: '/', element: <MoblieHome/>
          // },
        ]
      }]
    )
  } else {
    router = createBrowserRouter([{
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, path: '/', element: <Home />
        },
        {
          path: '/customer', element: <Customer />
        },
        {
          path: '/brand', element: <Brand />
        },
        {
          path: '/brand/:subpageID', element: <Subpage />
        },
        // {
        //     path: '/product', element: <Sublist/>
        // },

      ]
    }])
  }



  return (
    <RouterProvider router={router} />
  );
}

export default App;
