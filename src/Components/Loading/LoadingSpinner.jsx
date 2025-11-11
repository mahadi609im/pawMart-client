import React from 'react';
import paw2 from '../../assets/paw2.png';

const LoadingSpinner = () => {
  return (
    <main className="flex-1 min-h-[80vh] h-full flex flex-col justify-center items-center relative">
      {/* Paw icon animation */}
      <div className="relative flex justify-center items-center w-28 h-28">
        {/* Spinner (background ring) */}
        <div className="absolute w-24 h-24 border-4 border-[#fb7b53] border-t-transparent rounded-full animate-spin"></div>

        {/* Paw image (on top of spinner) */}
        <img
          src={paw2}
          alt="Loading paw"
          className="w-16 h-16 animate-pulse opacity-90 relative z-10"
        />
      </div>

      {/* Text animation */}
      <h3 className="mt-6 text-2xl font-bold text-[#fb7b53] tracking-wide animate-bounce">
        PawMart Loading...
      </h3>

      {/* Optional small text shimmer */}
      <p className="mt-2 text-gray-500 text-sm animate-pulse">
        Preparing your pet world 🐶🐾
      </p>
    </main>
  );
};

export default LoadingSpinner;
