// components/ShimmerVideoList.js
import React from 'react';

const Shimmer = () => {
  const ShimmerCard = () => (
    <div className="w-64 h-60 m-4 p-2 rounded-lg shadow-md animate-pulse">
      <div className="bg-gray-300 h-36 w-full rounded-lg mb-3"></div>
      <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center">
      {Array(12).fill(null).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default Shimmer;
