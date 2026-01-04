import React from 'react';
import paw from '../../assets/paw.png';
import loginBg from '../../assets/listingsFormBg.webp';
import { FcGoogle } from 'react-icons/fc';
import paw2 from '../../assets/paw2.png';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/ContextProvider';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import Swal from 'sweetalert2';

const Login = () => {
  const { signInAuthUser, isLoading, setUser, googleLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen h-full bg-[#0c062e]">
        <header>
          <Navbar></Navbar>
        </header>
        <main className="flex-1 min-h-[80vh] h-full flex justify-center items-center">
          <h3>Loading...</h3>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    );
  }

  const handleSignInAuthUser = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInAuthUser(email, password)
      .then(result => {
        e.target.reset();
        setUser(result.user);
        Swal.fire({
          title: 'Login successfully',
          icon: 'success',
          draggable: true,
        });
        navigate(location.state ? location.state : '/');
      })
      .catch(err => {
        let message = '';

        if (err.code === 'auth/user-disabled') {
          message = 'Account disabled.';
        } else if (err.code === 'auth/user-not-found') {
          message = 'No account found. Please register your account.';
        } else if (err.code === 'auth/wrong-password') {
          message = 'Incorrect password.';
        } else if (err.code === 'auth/invalid-credential') {
          message = 'No account found. Please register account.';
        } else if (err.code === 'auth/network-request-failed') {
          message = 'Network error. Check your internet connection.';
        } else if (err.code === 'auth/internal-error') {
          message = 'Server error. Please try again.';
        } else {
          message = 'Something went wrong. Please try again.';
        }
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  const handleGoogleAuthUser = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        Swal.fire({
          title: 'Signed In successfully',
          icon: 'success',
          draggable: true,
        });
        navigate('/');
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
      style={{
        backgroundImage: `url(${loginBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-md w-full relative">
        {/* Header */}
        <div className="mb-8 text-center">
          <h3 className="text-base font-bold text-[#fb7b53] items-center gap-2 relative inline-block">
            Login Now
            <img
              className="w-6 h-6 absolute -top-3 -right-5"
              src={paw2}
              alt=""
            />
          </h3>
          <h2 className="text-3xl font-bold text-slate-950 mt-2">
            Welcome Back!
          </h2>
          <p className="text-gray-600 mt-2">
            Please login to access your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSignInAuthUser} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="rounded-lg p-3 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
            onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
            onBlur={e => (e.target.style.outline = 'none')}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-lg p-3 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
            onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
            onBlur={e => (e.target.style.outline = 'none')}
          />

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#fb7b53] text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-500 transition-all"
          >
            Login
          </button>

          {/* Google Login Button */}
          <button
            onClick={handleGoogleAuthUser}
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 text-slate-950 hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={24} /> Login with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-600 text-sm mt-6 text-center">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-[#fb7b53] font-semibold cursor-pointer hover:underline"
          >
            Register here
          </Link>
        </p>

        {/* Paw Decoration */}
        <img
          src={paw}
          alt=""
          className="w-8 h-8 absolute bottom-4 right-4 opacity-40"
        />
      </div>
    </div>
  );
};

export default Login;
