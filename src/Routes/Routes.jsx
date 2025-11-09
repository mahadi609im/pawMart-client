import { createBrowserRouter } from 'react-router';
import HomeLayout from '../RootLayout/HomeLayout';
import Home from '../Pages/HomePage/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
  {
    path: '/pets',
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: '/addListing',
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: '/myListing',
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: '/myOrders',
    element: <HomeLayout></HomeLayout>,
  },
]);

export default router;
