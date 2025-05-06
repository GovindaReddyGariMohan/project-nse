import React from 'react';
import { Chart } from 'react-google-charts';

const PriceInfoLineChart = ({ PriceData }) => {
  if (!PriceData) return <div>Loading chart...</div>;

  const priceInfo = PriceData?.data?.priceInfo;

  const chartData = [
    ['Metric', 'Price', { role: 'tooltip', type: 'string' }],
    ['Open', priceInfo?.open, `Open: ₹${priceInfo?.open}`],
    ['Previous Close', priceInfo?.previousClose, `Previous Close: ₹${priceInfo?.previousClose}`],
    ['Last Price', priceInfo?.lastPrice, `Last Price: ₹${priceInfo?.lastPrice}`],
    ['Day Low', priceInfo?.intraDayHighLow?.min, `Day Low: ₹${priceInfo?.intraDayHighLow?.min}`],
    ['Day High', priceInfo?.intraDayHighLow?.max, `Day High: ₹${priceInfo?.intraDayHighLow?.max}`],
    // ['Close', priceInfo?.close, `Close: ₹${priceInfo?.close}`],
  ];

  const options = {
    curveType: 'function',
    legend: 'none',
    hAxis: { title: '' },
    vAxis: {
      textPosition: 'none',
      gridlines: { color: 'transparent' },
    },
    pointSize: 5,
    tooltip: { trigger: 'focus' },
    series: {
      0: { color: '#3f51b5', lineWidth: 3 },
    },
    chartArea: { width: '90%', height: '80%' }, // Makes chart area scale well
  };

  return (
    <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={chartData}
        options={options}
      />
    </div>
  );
};

export default PriceInfoLineChart;
