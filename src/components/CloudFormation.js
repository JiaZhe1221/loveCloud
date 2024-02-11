import React, { useState, useRef, useEffect } from 'react';
import { quotesData } from './quotes';

const CloudFormation = ({ onChangeBackground }) => {
  const [clouds, setClouds] = useState([]);
  const [currentQuote, setCurrentQuote] = useState('');
  const [cloudCount, setCloudCount] = useState(0);
  const [clickedCloudIndex, setClickedCloudIndex] = useState(null);
  const newestCloudRef = useRef(null);

  useEffect(() => {
    // Auto click the newest cloud when it is added
    if (newestCloudRef.current) {
      newestCloudRef.current.click();
    }
  }, [clouds]);

  const addCloud = () => {
    if (cloudCount < quotesData.length) {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      const randomQuote = quotesData[randomIndex];

      const newCloud = {
        index: cloudCount + 1,
        quote: randomQuote,
      };

      setClouds([...clouds, newCloud]);
      setCloudCount(cloudCount + 1);
      onChangeBackground();
    }
  };

  const handleCloudClick = (cloud) => {
    setCurrentQuote(cloud.quote);
    setClickedCloudIndex(cloud.index);
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
        onClick={addCloud}
        disabled={cloudCount >= quotesData.length}
      >
        Add Cloud
      </button>
      <div className='overflow-x-auto max-w-screen-lg mx-auto p-4'>
        <div className="flex space-x-4 mb-4 mt-6">
          {clouds.map((cloud) => (
            <div
              key={cloud.index}
              ref={cloud.index === cloudCount ? newestCloudRef : null}
              className="text-2xl mb-4 cursor-pointer"
              onClick={() => handleCloudClick(cloud)}
            >
              ☁️
            </div>
          ))}
        </div>
      </div>
      {currentQuote && (
        <div className="flex items-center space-x-2 justify-center">
          <span className="text-xl">{clickedCloudIndex}.</span>
          <p className="text-xl">{currentQuote}</p>
        </div>
      )}
    </div>
  );
};

export default CloudFormation;
