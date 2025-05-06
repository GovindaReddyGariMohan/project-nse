import React from 'react';
import RangeBar from './RangeBar'; // Adjust the import path if needed

function RangeBarDetails({PriceData}) {
  const todayLow = PriceData?.data?.priceInfo?.intraDayHighLow?.min;
  const todayHigh = PriceData?.data?.priceInfo?.intraDayHighLow?.max;
  const currentPriceToday = PriceData?.data?.priceInfo?.intraDayHighLow?.value;

  const week52Low = PriceData?.data?.priceInfo?.weekHighLow?.min;
  const week52High = PriceData?.data?.priceInfo?.weekHighLow?.max;
  const currentPrice52Week = PriceData?.data?.priceInfo?.weekHighLow?.value;

  return (
    <div>
      
      <RangeBar
        labelLow="Today's Low"
        valueLow={todayLow}
        labelHigh="Today's High"
        valueHigh={todayHigh}
        currentValue={currentPriceToday}
      />

      <RangeBar
        labelLow="52 Week Low"
        valueLow={week52Low}
        labelHigh="52 Week High"
        valueHigh={week52High}
        currentValue={currentPrice52Week}
      />
    </div>
  );
}

export default RangeBarDetails;