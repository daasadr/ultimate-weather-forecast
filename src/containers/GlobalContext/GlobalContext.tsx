import React from 'react';

export interface GlobalContextType {
  selectedCityId: number | null;
  setSelectedCityId: React.Dispatch<React.SetStateAction<number | null>>;
}


export const GlobalContext =
  React.createContext<GlobalContextType | null>(null);

export const useGlobalContext = () => {
  const context = React.useContext(GlobalContext);
  if (context === null) {
    throw new Error(
      'GlobalContextProvider není dostupný',
    );
  }
  return context;
};
