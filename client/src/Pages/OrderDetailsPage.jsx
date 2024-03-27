import React from 'react'
import { useState } from 'react'
import PageSize from '../Components/PageSize'
import PageColour from '../Components/PageColour'
import PageCopy from '../Components/PageCopy'
import "./OrderDetailsPage.css"
import CoverFront from '../Components/CoverFront'
import CoverBack from '../Components/CoverBack'
import Binding from '../Components/Binding'
import Stapling from '../Components/Stapling'
import Padding from '../Components/Padding'
import PaperType from '../Components/PaperType'
import Folding from '../Components/Folding'
import Summary from '../Components/Summary'

function OrderDetailsPage() {

  const [selectedPageSizeId, setSelectedPageSizeId] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectedPageSize = (id) => {
    setSelectedPageSizeId(id);
  };

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='grid-container'>
      <div className="grid-summary">
        <Summary selectedPageSizeId={selectedPageSizeId} />
      </div>
        <div className="grid-one">
        <PageSize onSelect={handleSelectedPageSize} selectedPageSizeId={selectedPageSizeId} />
          <div className="grid-column">
          <PageColour onSelect={handleSelectedColor} selectedColor={selectedColor} />
              <PageCopy />
          </div>
          <CoverFront />
          <CoverBack />
        </div>
        <div className="grid-two">
          <Binding/> 
          <div className="grid-column"> 
              <Padding />
              <PaperType />
          </div>
          <div className="grid-column">
              <Stapling/>             
              <Folding/>
          </div>
        </div>
    </div>
  )
}

export default OrderDetailsPage