// src/components/Cloud.js
import React from 'react';

const Cloud = ({ children }) => {
  return (
    <div className="relative inline-block">
      <div className="bg-white rounded-full p-4 shadow-lg">{children}</div>
    </div>
  );
};

export default Cloud;
