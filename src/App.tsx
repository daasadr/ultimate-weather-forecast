import React from 'react';
import ForecastTable from './containers/ForecastTable/ForecastTable';
import SearchCityField from './containers/SearchCityFields/SearchCityFields';
import { GlobalContextProvider } from './containers/GlobalContext/GlobalContextProvider';
import './App.scss';

const App: React.FC = () => {
  return (
    <GlobalContextProvider>
      <div className="app-container">
        <header>
          <h1 className="main-tittle">
            Vítejte na stránce pro předpověď počasí
          </h1>
        </header>
        <main className="content-wrapper">
          <SearchCityField />
          <ForecastTable />
        </main>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
