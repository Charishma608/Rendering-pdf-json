import React from 'react';

const EmotionBar = ({ emotion, value }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <span className="text-sm capitalize">{emotion}</span>
        <span className="text-sm">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="h-3 bg-blue-500 rounded-full"
          style={{ width: value }}
        ></div>
      </div>
    </div>
  );
};

export default EmotionBar;
