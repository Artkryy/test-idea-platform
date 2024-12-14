import { FC } from 'react';

import './StopsFilter.scss';

interface IStopsFilterProps {
  selectedFilters: number[];
  setSelectedFilters: (filters: number[]) => void;
}

const stopsOptions = [
  { label: 'Без пересадок', value: 0 },
  { label: '1 пересадка', value: 1 },
  { label: '2 пересадки', value: 2 },
  { label: '3 пересадки', value: 3 },
];

export const StopsFilter: FC<IStopsFilterProps> = ({ selectedFilters, setSelectedFilters }) => {
  const handleCheckboxChange = (value: number) => {
    if (selectedFilters.includes(value)) {
      setSelectedFilters(selectedFilters.filter(filter => filter !== value));
    } else {
      setSelectedFilters([...selectedFilters, value]);
    }
  };

  const handleSelectAll = () => {
    if (selectedFilters.length === stopsOptions.length) {
      setSelectedFilters([]);
    } else {
      setSelectedFilters(stopsOptions.map(option => option.value));
    }
  };

  return (
    <div className="stops-filter">
      <span className='label'>Количество пересадок</span>
      <div className="checkbox-item">
        <input
          type="checkbox"
          checked={selectedFilters.length === stopsOptions.length}
          onChange={handleSelectAll}
        />
        <label>Все</label>
      </div>
      {stopsOptions.map(option => (
        <div key={option.value} className="checkbox-item">
          <input
            type="checkbox"
            checked={selectedFilters.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
          />
          <label>{option.label}</label>
        </div>
      ))}
    </div>
  );
};


