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
import DashboardLayout from '../Layout/Dashboard/DashboardLayout';
import DashboardHome from '../Pages/DashboardHome/DashboardHome';
import SuccessStories from '../Pages/SuccessStories/SuccessStories';

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
        path: '/blogs',
        element: <Blogs></Blogs>,
      },
      {
        path: '/story',
        element: <SuccessStories></SuccessStories>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },

      {
        path: '/listingsDetails/:id',
        loader: ({ params }) =>
          fetch(
            `https://paw-mart-server-smoky.vercel.app/listings/${params.id}`
          ),
        element: <ListingsDetails></ListingsDetails>,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/profile',
        element: (
          <PrivateRoutes>
            <ProfilePage></ProfilePage>
          </PrivateRoutes>
        ),
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
    path: '/dashboard',
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { index: true, element: <DashboardHome /> },
      { path: 'addListing', element: <AddListingsForm /> },
      { path: 'myListing', element: <MyListing /> },
      { path: 'myOrders', element: <MyOrders /> },
    ],
  },
  {
    path: '/*',
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
