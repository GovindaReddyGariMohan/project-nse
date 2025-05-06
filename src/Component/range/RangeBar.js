import React from 'react';
import './RangeBar.css'; // Import the CSS file

const RangeBar = ({ labelLow, valueLow, labelHigh, valueHigh, currentValue }) => {
  // Calculate the position of the current value
  const range = valueHigh - valueLow;
  const currentPosition = range > 0 ? ((currentValue - valueLow) / range) * 100 : 0;
  const clampedPosition = Math.max(0, Math.min(100, currentPosition));

  return (
    <>
      <div className='range-bar-left-right-price'>
        <div className="left-info">
          <div className="label-low">{labelLow}</div>
          <div className="value-low">{valueLow}</div>
        </div>
        <div className="right-info">
          <div className="label-high">{labelHigh}</div>
          <div className="value-high">{valueHigh}</div>
        </div>
      </div>
      <div className="range-bar-container-column">

        <div className="track-container">
          <div className="track">
            <div
              className="current-value-marker"
              style={{ left: `calc(${clampedPosition}% - 8px)` }}
            >
              ▲
            </div>
          </div>
        </div>


      </div>
    </>

  );
};

export default RangeBar;