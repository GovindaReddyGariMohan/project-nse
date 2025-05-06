import React from 'react';
import './BuySellRating.css';

const BuySellRating = ({ buyCount, sellCount }) => {
  const total = buyCount + sellCount;
  const buyPercentage = ((buyCount / total) * 100).toFixed(0);
  const sellPercentage = ((sellCount / total) * 100).toFixed(0);

  const isBuyDominant = buyCount > sellCount;

  return (
    <div className="rating-wrapper">
      <div
        className="percentage-circle"
        style={{ backgroundColor: isBuyDominant ? '#e6f5f1' : '#fce9e9', color: isBuyDominant ? '#00c292' : '#ff4d4d' }}
      >
        {isBuyDominant ? `${buyPercentage}%` : `${sellPercentage}%`}
      </div>

      <div className="bars-container">
        <Bar
          label="Buy"
          value={buyPercentage}
          color={isBuyDominant ? '#00c292' : '#ccc'}
        />
        <Bar
          label="Sell"
          value={sellPercentage}
          color={!isBuyDominant ? '#ff4d4d' : '#ccc'}
        />
      </div>
    </div>
  );
};

const Bar = ({ label, value, color }) => (
  <div className="bar-row">
    <div className="bar-label">{label}</div>
    <div className="bar-info">
      <span className="bar-value">{value}%</span>
      <div className="bar-track">
        <div
          className="bar-fill"
          style={{ width: `${value}%`, backgroundColor: color }}
        ></div>
      </div>
    </div>
  </div>
);

export default BuySellRating;
