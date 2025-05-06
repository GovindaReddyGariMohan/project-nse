import React, { useEffect, useState } from "react";
// import MyGoogleLineCharts from "../chart/reactChart";
import { Link, useParams } from "react-router";
import axios from "axios";
import PriceInfoLineChart from "../chart/reactChart";
import Marketoverview from "./marketOverview";
import { IoMdArrowRoundBack } from "react-icons/io";

// import BuySellPieChart from "../chart/piChart";




const Stockdetailspage = () => {
    const { id } = useParams()
    const [PriceData, setPriceData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [marketCap, setMarketCap] = useState([])
    // const [error, setError] = useState(null);
    console.log(id)
    useEffect(() => {
        const fetchId = async () => {
            try {
                const res = await axios.get(`https://nse-api-zltc.onrender.com/api/equities/${id}`);
                setPriceData(res.data.item);
                setMarketCap(res.data.marketCapFormatted)
                setLoading(false)
            } catch (err) {
                console.error('❌ Error fetching ID:', err);
            }
        };

        fetchId();
    }, [id]);

    // if (loading) {
    //     return <div>Loading items...</div>;
    // }

    return (
        <div className="stock-details-page">
            <div className="details-page-navbar">
                <div className="nav-content">
                    <Link to='/'>
                        <IoMdArrowRoundBack />
                    </Link>
                    <div>{PriceData?.data?.info?.companyName}</div>
                    <div>{PriceData?.data?.preOpenMarket?.lastUpdateTime}</div>
                    <div className="lastprice-details">Lastprice :{PriceData?.data?.priceInfo?.lastPrice}₹</div>
                </div>
            </div>

            <PriceInfoLineChart PriceData={PriceData} />
            <Marketoverview PriceData={PriceData} marketCap={marketCap} />
            {/* <div>
                <BuySellPieChart PriceData={PriceData}/>
            </div> */}
        </div>
    )
}

export default Stockdetailspage;