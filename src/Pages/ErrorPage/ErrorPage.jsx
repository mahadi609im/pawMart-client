import React from 'react';
import appNot from '../../assets/AppNot.png';
import pawBg from '../../assets/paw2.png';
import { Link } from 'react-router'; // updated from react-router-dom
import { FaHome } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="relative overflow-hidden bg-[#fff8f6] min-h-screen flex flex-col justify-center items-center py-20 px-4">
      {/* Background Paw Pattern */}
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage: `url(${pawBg})`,
          backgroundSize: '110px',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-lg">
        {/* Image */}
        <img
          src={appNot}
          alt="App Not Found"
          className="w-1/2 object-contain rounded-2xl"
        />

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#fb7b53] mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-4">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Go Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#fb7b53] hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full transition-all"
        >
          <FaHome /> Go Back Home
        </Link>
      </div>

      {/* Decorative Paw Images */}
      <img
        src={pawBg}
        alt="paw"
        className="w-16 h-16 absolute bottom-4 right-4 opacity-10 rotate-12"
      />
      <img
        src={pawBg}
        alt="paw"
        className="w-20 h-20 absolute top-10 left-10 opacity-10 rotate-12"
      />
    </div>
  );
};

export default ErrorPage;
