import React, { useEffect, useState } from 'react';

const StockNews = ({ companyName }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(companyName + ' stock')}&hl=en-IN&gl=IN&ceid=IN:en`;
      try {
        const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`);
        const data = await response.json();
        setNewsItems(data.items);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [companyName]);

  return (
    <div>
      <h2>Latest News for {companyName}</h2>
      <ul>
        {newsItems?.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
            {/* <p>{new Date(item.pubDate).toLocaleString()}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockNews;
