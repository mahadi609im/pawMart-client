import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../context/ContextProvider';
import LoadingSpinner from '../Loading/LoadingSpinner';

const PrivateRoutes = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation(null);

  if (isLoading) {
    return (
      <div className="bg-[#0c062e]">
        <header className="containerCls">
          <Navbar></Navbar>
        </header>
        <LoadingSpinner></LoadingSpinner>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoutes;
