import { createBrowserRouter } from 'react-router';
import Home from '../Pages/HomePage/Home';
import AddListingsForm from '../Components/AddListingsForm/AddListingsForm';
import ListingsDetails from '../Pages/ListingsDetails/ListingsDetails';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import RootLayout from '../Layout/RootLayout';
import PetSupplies from '../Pages/PetSupplies/PetSupplies';
import MyListing from '../Pages/MyListing/MyListing';
import MyOrders from '../Pages/MyOrders/MyOrders';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/pets',
        Component: PetSupplies,
      },
      {
        path: '/addListing',
        Component: AddListingsForm,
      },
      {
        path: '/myListing',
        element: <MyListing></MyListing>,
      },
      {
        path: '/myOrders',
        element: <MyOrders></MyOrders>,
      },
      {
        path: '/listingsDetails/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:3000/listings/${params.id}`),
        Component: ListingsDetails,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,
      },
    ],
  },
]);

export default router;
