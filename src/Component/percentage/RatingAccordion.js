import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import './Accordion.css';
import BuySellRating from './BuySellrating';

const RatingAccordion = ({ PriceData,marketCap }) => {
  const [isOpen, setIsOpen] = useState(true); // Open by default

  return (
    <div className="accordion">
      <div className="accordion-item">
        <div className="accordion-label" onClick={() => setIsOpen(!isOpen)}>
          <span>Experts rating</span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen && (
          <div className="accordion-content">
            <BuySellRating buyCount={PriceData?.data?.preOpenMarket?.totalBuyQuantity} sellCount={PriceData?.data?.preOpenMarket?.totalSellQuantity} />
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div className="accordion-label" onClick={() => setIsOpen(!isOpen)}>
          <span>Fundamentals</span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen && (
          <div className="accordion-content market-details-content">
            <div>
              <b>Mkt Cap</b>
              <div>{marketCap}</div>
            </div>
            <div>
              <b>ROE</b>
              <div>NA</div>
            </div>
            <div>
              <b>P/E Ratio(TTM)</b>
              <div>{PriceData?.data?.metadata?.pdSymbolPe}</div>
            </div>
            <div>
              <b>Industry P/E</b>
              <div>{PriceData?.data?.metadata?.pdSectorPe}</div>
            </div>
            <div>
              <b>Book Value</b>
              <div>{PriceData?.data?.preOpenMarket?.totalTradedVolume}</div>
            </div>
            <div>
              <b>EPS(TTM)</b>
              <div>NA</div>
            </div>
            <div>
              <b>Div Yield</b>
              <div>NA</div>
            </div>
            <div>
              <b>Debt to Equity</b>
              <div>NA</div>
            </div>
            <div>
              <b>Face Value</b>
              <div>{PriceData?.data?.securityInfo?.faceValue}</div>
            </div>
            <div>
              <b>P/B Ratio</b>
              <div>NA</div>
            </div>
          </div>
        )}
      </div>
      <div className="accordion-item">
        <div className="accordion-label" onClick={() => setIsOpen(!isOpen)}>
          <span>About company</span>
          {isOpen ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {isOpen && (
          <div className="accordion-content market-details-content">
            <div>
              <b>Organisation</b>
              <div>{PriceData?.data?.info?.companyName}</div>
            </div>
            <div>
              <b>NSE symbol</b>
              <div>{PriceData?.data?.info?.symbol}</div>
            </div>
            <div>
              <b>Founded in </b>
              <div>NA</div>
            </div>
            <div>
              <b>Industry</b>
              <div>{PriceData?.data?.info?.industry}</div>
            </div>
            <div>
              <b>ISIN</b>
              <div>{PriceData?.data?.info?.isin}</div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingAccordion;
