import React from 'react';
import Report from './components/Report';

const data = {
  "Reading": {
    "overall": 88,
    "speed": "67",
    "accuracy": "39",
    "pauses": 7
  },
  "mocktotalk": {
    "overall": 42,
    "speed": "37",
    "emotion": {
      "joy": "20%",
      "sad": "50%",
      "neutral": "20%",
      "fear": "20%",
      "happy": "20%"
    },
    "pauses": 7
  }
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Report data={data} />
    </div>
  );
}

export default App;
