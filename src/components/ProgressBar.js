import React from 'react';

const ProgressBar = ({ value, color }) => {
  return (
    <div className="relative w-full">
      {/* 0% and 100% labels */}
      <div className="flex justify-between text-gray-700 text-sm mb-1">
        <span>0%</span>
        <span>100%</span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-4 bg-gray-300 rounded-full">
        {/* Filled Progress */}
        <div
          className={`h-4 ${color} rounded-full`}
          style={{ width: `${value}%` }}
        ></div>

        {/* Circular Marker for the Pointer */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{ left: `${value}%` }}
        >
          {/* Larger White Circle */}
          <div className="w-6 h-6 bg-white border-2 border-current rounded-full flex justify-center items-center">
            <span className="text-black text-xs font-bold">{value}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
