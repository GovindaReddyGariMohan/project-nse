import React, { useEffect, useState } from 'react';
import './StickyTable.css';
import { Link } from 'react-router';
import TrendingHigh from '../topTrendingHighLow/High';

const columns = [
  'Name', 'LTP', 'Change %', 'Volume',
  'Market Cap (Cr.)', 'PE Ratio', 'Industry PE', '52W High', '52W Low',
  '3M Returns', '1 Yr Returns', '3 Yr Returns', '5 Yr Returns',
  'PB Ratio', 'Dividend', 'ROE', 'ROCE', 'EPS', '50 DMA', '200 DMA', 'RSI'
];

const StickyTable = ({ equities }) => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(equities);

  useEffect(() => {
    const q = query.toLowerCase();
    setFiltered(
      equities.filter(company =>
        company?.data?.info?.companyName?.toLowerCase()?.includes(q) ||
        company?.symbol?.toLowerCase()?.includes(q)
      )
    );
  }, [query, equities]);

  return (
    <>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Search by company name or symbol"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '10px',
            marginBottom: '20px',
            fontSize: '16px',
          }}
        />
        {/* <ul>
          {filtered.map((company, idx) => (
            <li key={idx}>
              <strong>{company.symbol}</strong>: {company.name}
              
            </li>
          ))}
          {filtered.length === 0 && <li>No results found.</li>}
        </ul> */}
      </div>
      <div className='carosel-stock'>
        <TrendingHigh />
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className={idx === 0 ? 'sticky-left' : ''}>
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, rIdx) => (
              <tr key={rIdx}>
                {columns.map((col, cIdx) => {
                  let cellData = '';
                  let linkTo = null;

                  switch (col) {
                    case 'Name':
                      cellData = row.symbol || 'N/A';
                      linkTo = `/chart/${row._id}`;
                      break;
                    case 'LTP':
                      cellData = row.data?.priceInfo?.lastPrice ?? 'N/A';
                      break;
                    case 'Change %':
                      cellData = row.data?.priceInfo?.pChange ?? 'N/A';
                      break;
                    case 'Volume':
                      cellData = row.data?.securityInfo?.issuedSize ?? 'N/A';
                      break;
                    case 'Market Cap (Cr.)':
                      cellData = row.marketCapFormatted ?? 'N/A';
                      break;
                    case 'PE Ratio':
                      cellData = row.data?.metadata?.pdSymbolPe ?? 'N/A';
                      break;
                    case 'Industry PE':
                      cellData = row.data?.metadata?.pdSectorPe ?? 'N/A';
                      break;
                    case '52W High':
                      cellData = row.data?.priceInfo?.weekHighLow?.max ?? 'N/A';
                      break;
                    case '52W Low':
                      cellData = row.data?.priceInfo?.weekHighLow?.min ?? 'N/A';
                      break;
                    case '3M Returns':
                      cellData = row.data?.return?.threeMonth ?? 'N/A';
                      break;
                    case '1 Yr Returns':
                      cellData = row.oneYearReturn ?? 'N/A';
                      break;
                    case '3 Yr Returns':
                      cellData = row.data?.return?.threeYear ?? 'N/A';
                      break;
                    case '5 Yr Returns':
                      cellData = row.data?.return?.fiveYear ?? 'N/A';
                      break;
                    case 'PB Ratio':
                      cellData = row.data?.info?.pb ?? 'N/A';
                      break;
                    case 'Dividend':
                      cellData = row.data?.info?.dividendYield ?? 'N/A';
                      break;
                    case 'ROE':
                      cellData = row.data?.financials?.roe ?? 'N/A';
                      break;
                    case 'ROCE':
                      cellData = row.data?.financials?.roce ?? 'N/A';
                      break;
                    case 'EPS':
                      cellData = row.data?.financials?.eps ?? 'N/A';
                      break;
                    case '50 DMA':
                      cellData = row.data?.technical?.dma50 ?? 'N/A';
                      break;
                    case '200 DMA':
                      cellData = row.data?.technical?.dma200 ?? 'N/A';
                      break;
                    case 'RSI':
                      cellData = row.data?.technical?.rsi ?? 'N/A';
                      break;
                    default:
                      cellData = 'N/A';
                  }

                  return (
                    <td key={cIdx} className={cIdx === 0 ? 'sticky-left' : ''}>
                      {linkTo ? (
                        <Link key={row.symbol} to={linkTo}>{cellData}</Link>
                      ) : (
                        cellData
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </>
  );
};

export default StickyTable;