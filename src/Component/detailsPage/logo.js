const StockIcon = ({ symbol }) => {
    return (
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#e0e0e0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
      }}>
        {symbol.slice(0, 2).toUpperCase()}
      </div>
    );
  };
export default  StockIcon;