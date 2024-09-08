'use client';
import React from 'react';
import { GlobalContext, GlobalContextType } from './GlobalContext';

interface GlobalContextProviderProps {
  children: React.ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalContextProviderProps> = ({ children }) => {
  const [selectedCityId, setSelectedCityId] = React.useState<number | null>(null);

  const value: GlobalContextType = {
    selectedCityId,
    setSelectedCityId,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};