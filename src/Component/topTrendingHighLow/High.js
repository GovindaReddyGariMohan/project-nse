import axios from "axios";
import React, { useEffect, useState } from "react";
import './trending.css'
import StockCarousel from "../carosel/Carosel";

const TrendingHigh = () => {
    const [high, setHigh] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTrendingHigh = async () => {
            try {
                const response = await axios.get('https://nse-api-zltc.onrender.com/api/trending-stocks'); // Correct endpoint
                setHigh(response.data);
            } catch (error) {
                console.error('Error fetching equities:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchTrendingHigh();
    }, []);

    return (
        <div className="trending-high">
            <StockCarousel high={high} />
        </div>
    )


}

export default TrendingHigh;