import React, { useState } from 'react';

const CurrencyConverter = () => {
  const exchangeRate = 86.59;
  const [dollar, setDollar] = useState('');
  const [rupee, setRupee] = useState('');

  const handleDollarChange = (e) => {
    const value = e.target.value;
    setDollar(value);
    setRupee((parseFloat(value) * exchangeRate).toFixed(2));
  };

  const handleRupeeChange = (e) => {
    const value = e.target.value;
    setRupee(value);
    setDollar((parseFloat(value) / exchangeRate).toFixed(2));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2><span style={{ backgroundColor: '#cce5ff', padding: '5px' }}>{exchangeRate}</span> Indian Rupee</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="number"
          placeholder="Enter dollars"
          value={dollar}
          onChange={handleDollarChange}
        />{" "}
        <strong>Dollar</strong>
      </div>

      <div>
        <input
          type="number"
          placeholder="Enter rupees"
          value={rupee}
          onChange={handleRupeeChange}
        />{" "}
        <strong>Rupee</strong>
      </div>
    </div>
  );
};

export default CurrencyConverter;
