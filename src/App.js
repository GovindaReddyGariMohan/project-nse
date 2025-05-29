import React, { useEffect, useState } from 'react';
import StickyTable from './Component/table/StickyTable';
import axios from 'axios';
import { Routes, Route } from 'react-router';
import Stockdetailspage from './Component/detailsPage/stockDetails';



function App() {
  const [equities, setEquities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEquities = async () => {
      try {
        const response = await axios.get('https://nse-api-zltc.onrender.com/api/equities'); // Correct endpoint
        setEquities(response.data);
      } catch (error) {
        console.error('Error fetching equities:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchEquities();
  }, []);
  
  
  return (
    <div className="App" style={{ padding: '1rem' }}>
     
        <Routes>
          <Route path="/" element={ <StickyTable equities={equities}/>} />
          <Route path="/chart/:id" element={<Stockdetailspage/>} />
        </Routes>
   
    </div>
  );
}

export default App;
