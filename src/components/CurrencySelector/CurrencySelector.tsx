import React, { useState } from 'react';

import './CurrencySelector.scss'

type Currency = 'RUB' | 'USD' | 'EUR';

export const CurrencySelector: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>('RUB');

  const handleCurrencyChange = (currency: Currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div className="currency-selector">
      <label className="label">ВАЛЮТА</label>
      <div className="radio-group">
        {(['RUB', 'USD', 'EUR'] as Currency[]).map((currency) => (
          <button
            key={currency}
            className={`radio-button ${selectedCurrency === currency ? 'selected' : ''}`}
            onClick={() => handleCurrencyChange(currency)}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  )
}
