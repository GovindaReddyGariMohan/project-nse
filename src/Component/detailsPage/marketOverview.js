import React, { useState } from "react";
import RangeBarDetails from "../range/rangebarDetails";
import StockNews from "../news/StockNews";

import './details.css'
import RatingAccordion from "../percentage/RatingAccordion";


const Marketoverview = ({ PriceData, marketCap }) => {
    const [className, setClassname] = useState('Overview')

    return (
        <>
            <div className="market-overview">
                <h3 onClick={() => setClassname('Overview')} className={className === 'Overview' ? 'h-color' : ''}>Overview</h3>
                <h3 onClick={() => setClassname('News')} className={className === 'News' ? 'h-color' : ''}>News</h3>
            </div>
            <div>
                <div className={className === 'Overview' ? 'Overview' : 'hide-details'}>
                    <div className="stock-performance">
                        <h4>Performance</h4>
                        <RangeBarDetails PriceData={PriceData} />
                        <div className="rangebar-price-details">
                            <div>
                                <b>Open</b>
                                <div>{PriceData?.data?.priceInfo?.open}</div>
                            </div>
                            <div>
                                <b>Prev.Close</b>
                                <div>{PriceData?.data?.priceInfo?.previousClose}</div>
                            </div>
                            <div>
                                <b>Volume</b>
                                <div>{PriceData?.data?.securityInfo?.issuedSize}</div>
                            </div>
                            <div>
                                <b>Lower circuit</b>
                                <div>{PriceData?.data?.priceInfo?.lowerCP}</div>
                            </div>
                            <div>
                                <b>Upper circuit</b>
                                <div>{PriceData?.data?.priceInfo?.upperCP}</div>
                            </div>
                        </div>
                    </div>
                    {/* <Dashboard PriceData={PriceData} /> */}

                    <RatingAccordion PriceData={PriceData} marketCap={marketCap} />
                </div>
                <div className={className === 'News' ? 'Overview' : 'hide-details'}>
                    <StockNews companyName={PriceData?.data?.info?.companyName} />
                </div>
            </div>
        </>
    )
}
export default Marketoverview;