import { FC } from 'react';

import { CurrencySelector } from '../CurrencySelector';
import { StopsFilter } from '../StopOptions';

import './SortingPanel.scss'

interface ISortingPanelProps {
  selectedFilters: number[];
  setSelectedFilters: (filters: number[]) => void;
}

export const SortingPanel: FC<ISortingPanelProps> = ({ selectedFilters, setSelectedFilters }) => {
  return (
    <div className='sorting'>
      <CurrencySelector />
      <StopsFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
    </div>
  );
};
