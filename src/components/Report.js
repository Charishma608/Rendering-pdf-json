import React from 'react';
import ProgressBar from './ProgressBar';
import SemiCircularBar from './SemiCircularBar';

const Report = ({ data }) => {
  return (
    <div className="p-6 bg-white w-1/2 mx-auto shadow-md rounded-lg">
  
      <h1 className="text-2xl font-bold mb-6 text-center">Directorate of Technical Education</h1>
      <hr className="border-black mb-6" />

      {/* Reading Section */}
      <h2 className="text-lg font-bold text-black mb-4">Reading</h2>

      {/* Overall Reading Section */}
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <h3>Overall Reading</h3>
        <div className="flex justify-between items-center">
          <div className="w-4/5 relative">
            <ProgressBar value={68} color="bg-green-500" />
          </div>
          <span className="ml-4 px-3 py-1 bg-green-500 text-white rounded-md font-bold">Good</span>
        </div>
      </div>

      {/* Speed and Accuracy */}
      <div className="flex justify-around mb-6">
        <SemiCircularBar
          label="Speed"
          value={67} // 67 WPM
          unit="WPM"
          colorSegments={`#ff4c4c 15%, #4caf50 70%, #ff4c4c 15%`} 
          subtitle="Optimal"
        />
        <SemiCircularBar
          label="Accuracy"
          value={39} // 39% Accuracy
          colorSegments={`#ff4c4c 39%, #2196F3 30%, #4caf50 30%`} 
          subtitle="Low"
        />
      </div>

      
      <h3 className="text-lg font-bold text-black mb-4">Pauses</h3>
      <div className="relative mb-6">
        <div className="flex justify-between">
          <span className="text-xs text-green-600">Optimal</span>
          <span className="text-xs text-blue-600">Good</span>
          <span className="text-xs text-orange-600">Fair</span>
          <span className="text-xs text-red-600">Needs Attention</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-1 relative">
          <div className="flex">
            <div className="bg-green-500 h-4 rounded-l-full" style={{ width: '25%' }}></div>
            <div className="bg-blue-500 h-4" style={{ width: '25%' }}></div>
            <div className="bg-orange-500 h-4" style={{ width: '25%' }}></div>
            <div className="bg-red-500 h-4 rounded-r-full" style={{ width: '25%' }}></div>
          </div>
          
          <div
            className="absolute w-6 h-6 bg-white border-2 border-gray-400 rounded-full"
            style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} // Aligning with the line
          />
        </div>
      </div>

      {/* Mock to Talk Section */}
      <h2 className="text-lg font-bold text-black mt-8 mb-4">Mock to Talk</h2>
      <div className="bg-blue-100 p-4 rounded-lg mb-6">
        <h3 className="font-bold mb-2">Overall Mock Score</h3>
        <div className="flex justify-between items-center">
          <div className="w-4/5 relative">
            <ProgressBar value={42} color="bg-blue-500" />
          </div>
          <span className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-md font-bold">Optimal</span>
        </div>
      </div>

      {/* Emotions Section */}
      <div className="flex justify-between mb-6">
        <div className="w-1/2 flex justify-left">
          <SemiCircularBar
            label="Speed"
            value={37} // 37%
            colorSegments={`#4caf50 37%, #ff4c4c 63%`} 
            subtitle="Low"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <h3 className="text-md font-bold mb-2">Emotions during Interview</h3>
          <div className="flex justify-start mb-4">
            <div className="flex flex-col items-center p-2 w-20 bg-white border border-gray-300 rounded-lg shadow mr-0">
              <p className="text-sm">20%</p>
              <div className="flex items-center">
                <p className="text-lg mr-2">😊</p>
                <p className="text-sm">Joy</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-2 w-20 bg-white border border-gray-300 rounded-lg shadow mr-0">
              <p className="text-sm">50%</p>
              <div className="flex items-center">
                <p className="text-lg mr-2">😟</p>
                <p className="text-sm">Sad</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-2 w-20 bg-white border border-gray-300 rounded-lg shadow mr-0">
              <p className="text-sm">20%</p>
              <div className="flex items-center">
                <p className="text-lg mr-2">😐</p>
                <p className="text-sm">Neutral</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-2 w-20 bg-white border border-gray-300 rounded-lg shadow mr-0">
              <p className="text-sm">20%</p>
              <div className="flex items-center">
                <p className="text-lg mr-2">😨</p>
                <p className="text-sm">Fear</p>
              </div>
            </div>
            <div className="flex flex-col items-center p-2 w-20 bg-white border border-gray-300 rounded-lg shadow mr-0">
              <p className="text-sm">20%</p>
              <div className="flex items-center">
                <p className="text-lg mr-2">😊</p>
                <p className="text-sm">Happy</p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
      
<h3 className="text-lg font-bold text-black mb-4">Pauses</h3>
<div className="relative mb-6">
  <div className="flex justify-between">
    <span className="text-xs text-green-600">Optimal</span>
    <span className="text-xs text-blue-600">Good</span>
    <span className="text-xs text-orange-600">Fair</span>
    <span className="text-xs text-red-600">Needs Attention</span>
  </div>
  <div className="w-full bg-gray-200 rounded-full h-4 mt-1 relative">
    <div className="flex">
      <div className="bg-green-500 h-4 rounded-l-full" style={{ width: '25%' }}></div>
      <div className="bg-blue-500 h-4" style={{ width: '25%' }}></div>
      <div className="bg-orange-500 h-4" style={{ width: '25%' }}></div>
      <div className="bg-red-500 h-4 rounded-r-full" style={{ width: '25%' }}></div>
    </div>
    
    <div
      className="absolute w-6 h-6 bg-white border-2 border-gray-400 rounded-full"
      style={{ left: '85%', top: '50%', transform: 'translate(-50%, -50%)' }} // Aligning with the line
    />
  </div>
</div>
  <hr className="border-black mb-6" />
  


<div className="flex justify-between items-center mb-6">
  <div className="flex-grow text-center">
    <p className="text-sm text-gray-600">Powered by CCC and WLS.AI</p>
  </div>
  <span className="text-sm text-gray-600">Page 2</span>
</div>


    </div>
  );
};

export default Report;
