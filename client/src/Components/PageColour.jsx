import React, { useState } from 'react';
import './PageColour.css';

function PageColour({ onSelect, selectedColor }) {
  const [colors] = useState(['white', 'custom']); // Define available colors

  return (
    <div className="colour-container">
      <h2>Colour of paper/envelop</h2>
      <div className="colour-card-container">
        {colors.map((color, index) => (
          <div
            className={`colour-card ${selectedColor === color ? 'selected' : ''}`}
            key={index}
            onClick={() => onSelect(color)}
          >
            <div className={`colour-box-${color}`}></div>
            <div className="colour-text-content">
              <p>White</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PageColour;
