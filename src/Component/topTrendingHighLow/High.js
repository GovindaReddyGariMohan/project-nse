import axios from "axios";
import React, { useEffect, useState } from "react";
import './trending.css'
import { Link } from "react-router";
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
    if (high.length >= 1) {
        return (
            <div className="trending-high">
            {
                high.map((value, index) => {
                    return (
                        <div key={`high-${index}`} className="trending-high-items">
                            <Link to={`/chart/${value.id}`}>{value?.symbol}</Link>
                            <div className="change-percentage">+ {value?.percentageChangeHigh}</div>
                        </div>
                    )
                })
            }
        </div>
        )
    } else {
       <div>Loading...</div>
    }

}

export default TrendingHigh;