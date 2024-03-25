import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';


import './App.css';
import Home from './pages/Home';
import Brand from './pages/Brand';
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Subpage from './pages/Subpage';
import EventPages from './pages/EventPages';
import Customer from './pages/Customer';


import MoblieHome from './pages/Moblie/MoblieHome';
import MoblieRoot from './pages/Moblie/MoblieRoot';
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
          path: '/event', element: <EventPages/>
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
