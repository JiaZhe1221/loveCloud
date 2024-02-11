// src/App.js
import React, { useState } from 'react';
import CloudFormation from './components/CloudFormation';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ADD8E6'); // Initial background color

  const changeBackgroundColor = () => {
    const generateLightColor = () => {
      const randomChannel = () => Math.floor(Math.random() * 100 + 155); // Generating a value between 155 and 255 for a lighter color
      const randomColor = `rgb(${randomChannel()}, ${randomChannel()}, ${randomChannel()})`;
      return randomColor;
    };

    const lightColor = generateLightColor();
    setBackgroundColor(lightColor);
  };

  return (
    <div className="App min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">Love in the Clouds</h1>
        <CloudFormation onChangeBackground={changeBackgroundColor} />
      </div>
    </div>
  );
}

export default App;
