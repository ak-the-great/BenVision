import React from 'react';
import PageSizeData from './Data';
import "./PageSize.css";

function PageSize({onSelect, selectedPageSizeId}) {

  return (
    <div className="container">
        <h2>Size of paper/envelop</h2>
        <div className="card-container">
            {PageSizeData.map((item,index) => {
            return (             
                <div
                className={`card ${selectedPageSizeId === item.id ? 'selected' : ''}`}
                key={item.id}
                onClick={() => onSelect(item.id)}>
                    <img src={item.image} alt='' />
                    <div className="text-content">
                            <h1>{item.size}</h1>
                            <p>{item.width} x {item.height}mm</p>
                    </div>         
                </div>
        );
      })}
      </div>
    </div>
  );
}

export default PageSize;
