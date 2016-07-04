import React from 'react';
import requireAuth from './requireAuth';

const Resources = () => {
  return (
    <div>
      <ul>
        <li>Loaf of bread</li>
        <li>Milk</li>
        <li>Cream Cheese</li>
      </ul>
    </div>
  );
};

export default requireAuth(Resources);