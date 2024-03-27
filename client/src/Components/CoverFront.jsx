import React from 'react'
import './CoverFront.css'

function CoverFront() {
  return (
    <div className="copy-container">
      <h2>Cover page Material</h2>
      <h4>Front</h4>
      <div className="copy-card-small">
            <div className="copy-card-small-left">
                <h3>Paper</h3>
            </div>
            <div className="copy-card-small-right">
                <h3>Board</h3>
            </div>
      </div>
        <div className="copy-container-card">
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
            <div className="copy-card">
                <h3>01 Colour</h3>
            </div>
        </div>
    </div>
  )
}

export default CoverFront