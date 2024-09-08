import React from 'react';

export interface GlobalContextType {
  selectedCityId: number | null;
  setSelectedCityId: React.Dispatch<React.SetStateAction<number | null>>;
}

const defaultValues: GlobalContextType = {
  selectedCityId: null,
  setSelectedCityId: () => {},
};

export const GlobalContext = React.createContext<GlobalContextType>(defaultValues);

export const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalContextProvider');
  }
  return context;
};