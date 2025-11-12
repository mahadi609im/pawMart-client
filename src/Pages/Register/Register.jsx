import React from 'react';
import paw from '../../assets/paw.png';
import paw2 from '../../assets/paw2.png';
import loginBg from '../../assets/listingsFormBg.webp';
import { FcGoogle } from 'react-icons/fc';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/ContextProvider';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Register = () => {
  const {
    setUser,
    googleLogin,
    isLoading,
    registerAuthCreate,
    updateUserProfile,
  } = useContext(AuthContext);
  const [error, setError] = useState(null);

  const navigate = useNavigate(null);

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

  const handleRegisterAuthCreate = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexUpper = /^(?=.*[A-Z]).+$/;
    const regexLower = /^(?=.*[a-z]).+$/;

    if (password.length < 6) {
      toast.error('Password must-be 6 character or longer');
      return;
    }

    if (!regexUpper.test(password)) {
      toast.error('Use at least one upperCase letter');
      return;
    }

    if (!regexLower.test(password)) {
      toast.error('Use at least one lowerCase letter');
      return;
    }

    registerAuthCreate(email, password)
      .then(result => {
        const user = result.user;

        // ✅ Step 2: Update profile (name & photo)
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            toast.success('Registration successful!');
            e.target.reset();
            navigate('/');
          })
          .catch(error => {
            console.error('Profile update error:', error);
            toast.error('Profile update failed.');
          });
      })
      .catch(err => {
        let message = '';

        if (err.code === 'auth/email-already-in-use') {
          message = 'Email already in use.';
        } else if (err.code === 'auth/invalid-email') {
          message = 'Invalid email address.';
        } else if (err.code === 'auth/operation-not-allowed') {
          message = 'Account type not allowed.';
        } else if (err.code === 'auth/weak-password') {
          message = 'Weak password. Min 6 chars.';
        } else if (err.code === 'auth/missing-password') {
          message = 'Enter your password.';
        } else if (err.code === 'auth/missing-email') {
          message = 'Enter your email.';
        } else if (err.code === 'auth/internal-error') {
          message = 'Server error. Try again.';
        } else if (err.code === 'auth/network-request-failed') {
          message = 'Network error. Check connection.';
        } else if (err.code === 'auth/too-many-requests') {
          message = 'Too many tries. Wait a bit.';
        } else {
          message = 'Something went wrong.';
        }

        setError(message);
        toast.error(error);
      });
  };

  const handleGoogleAuthUser = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        navigate('/');
      })
      .catch(error => {
        setError(error.message);
        toast.error(error.message);
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
            Registration
            <img
              className="w-6 h-6 absolute -top-3 -right-5"
              src={paw2}
              alt=""
            />
          </h3>
          <h2 className="text-3xl font-bold text-slate-950 mt-2">
            Create Account
          </h2>
          <p className="text-gray-600 mt-2">
            Sign up to start adding pets or products
          </p>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleRegisterAuthCreate}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="rounded-lg p-3 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
            onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
            onBlur={e => (e.target.style.outline = 'none')}
          />
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
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            className="rounded-lg p-3 bg-[#fb7a5331] text-slate-950 border-none focus:outline-none"
            onFocus={e => (e.target.style.outline = '1px dashed #fb7b53')}
            onBlur={e => (e.target.style.outline = 'none')}
          />

          {/* Register Button */}
          <button
            type="submit"
            className="bg-[#fb7b53] text-white font-medium px-6 py-3 rounded-lg hover:bg-orange-500 transition-all"
          >
            Register
          </button>

          {/* Google Login Button */}
          <button
            type="button"
            onClick={handleGoogleAuthUser}
            className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 text-slate-950 hover:bg-gray-100 transition-all"
          >
            <FcGoogle size={24} /> Sign up with Google
          </button>
        </form>

        {/* Footer */}
        <p className="text-gray-600 text-sm mt-6 text-center">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-[#fb7b53] font-semibold cursor-pointer hover:underline"
          >
            Login here
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

export default Register;
