import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router';

const StockCarousel = ({ high }) => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 8 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000}>
        {high && high.length > 0 ? high.map((value, index) => (
          <div
            key={`high-${value.id || index}`}
            style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '0 25px',
              minHeight: '100px',
              border: '1px solid gray',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Link to={`/chart/${value.id}`}>{value.symbol}</Link>
            <div style={{ color: 'green', fontWeight: 'bold',fontSize:'12px' }}>
              +{value.percentageChangeHigh}%
            </div>
          </div>
        )) : <div>No data</div>}
      </Carousel>
    </div>
  );
};

export default StockCarousel;
