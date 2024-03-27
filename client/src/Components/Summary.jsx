
import React from 'react';
import PageSizeData from './Data';
import "./Summary.css";

function Summary({ selectedPageSizeId, selectedColor}) {
  const selectedPageSize = PageSizeData.find(item => item.id === selectedPageSizeId);
//   const selectedColor = colors.find(item => item.id === selectedColorId);

  return (
    <div className="summary">
      {selectedPageSize && (
        <div className='summary-container'>
            <div className="summary-size">
                <h2>Selected Size</h2>
                <p>Size: {selectedPageSize.size}</p>
                <p>Dimensions: {selectedPageSize.width} x {selectedPageSize.height}mm</p>
            </div>
            {/* <div className="summary-size">
                <h2>Selected Size</h2>
                <p>Size: {selectedPageSize.size}</p>
                <p>Dimensions: {selectedPageSize.width} x {selectedPageSize.height}mm</p>
            </div> */}
            {selectedColor && (

            <div className="summary-color">
            <h2>Selected Color</h2>
            <p>Color: {selectedColor}</p>
            {/* Add other color details if necessary */}
          </div>
            )}
          
        </div>
      )}
    </div>
  );
}

export default Summary;
