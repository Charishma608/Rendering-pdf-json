import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

// Semi-Circular Bar Component
const SemiCircularBar = ({ label, value, colorSegments, unit, subtitle }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div style={{ width: 100, height: 100 }}>
        <CircularProgressbarWithChildren
          value={value}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: colorSegments,
            trailColor: "#e6e6e6",
            rotation: 0.75,
            strokeLinecap: 'round',
          })}
        >
          <div className="text-lg font-bold">
            {value}
            {unit && <span className="text-xs">{unit}</span>}
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <p className="mt-2 text-sm font-bold">{label}</p>
      <p className={`text-xs ${subtitle === 'Optimal' ? 'text-green-600' : 'text-red-600'}`}>{subtitle}</p>
    </div>
  );
};

export default SemiCircularBar;
