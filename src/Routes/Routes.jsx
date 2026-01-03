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
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import PrivateRoutes from '../Components/Private/PrivateRoutes';
import CategoryFiltered from '../Pages/CategoryFiltered/CategoryFiltered';
import LoadingSpinner from '../Components/Loading/LoadingSpinner';
import Contact from '../Pages/Contact/Contact';
import ProfilePage from '../Pages/Profile/Profile';
import Blogs from '../Pages/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
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
        element: (
          <PrivateRoutes>
            <AddListingsForm></AddListingsForm>
          </PrivateRoutes>
        ),
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/myListing',
        element: (
          <PrivateRoutes>
            <MyListing></MyListing>
          </PrivateRoutes>
        ),
      },
      {
        path: '/myOrders',
        element: (
          <PrivateRoutes>
            <MyOrders></MyOrders>
          </PrivateRoutes>
        ),
      },
      {
        path: '/listingsDetails/:id',
        loader: ({ params }) =>
          fetch(
            `https://paw-mart-server-smoky.vercel.app/listings/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <ListingsDetails></ListingsDetails>
          </PrivateRoutes>
        ),
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/profile',
        Component: ProfilePage,
      },
      {
        path: '/register',
        Component: Register,
      },
      {
        path: '/category-filtered-product/:categoryName',
        element: <CategoryFiltered></CategoryFiltered>,
      },
    ],
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
