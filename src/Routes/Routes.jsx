import { createBrowserRouter } from 'react-router';
import RootLayout from '../RootLayout/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
  },
  {
    path: '/pets',
    element: <RootLayout></RootLayout>,
  },
  {
    path: '/addListing',
    element: <RootLayout></RootLayout>,
  },
  {
    path: '/myListing',
    element: <RootLayout></RootLayout>,
  },
  {
    path: '/myOrders',
    element: <RootLayout></RootLayout>,
  },
]);

export default router;
