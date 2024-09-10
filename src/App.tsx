import React from 'react';
import ForecastTable from './containers/ForecastTable';
import SearchCityField from './containers/SearchCityFields';
import './App.scss';


const App: React.FC = () => {
  return (
    <div className="app-container">
      <header>
        <h1 className='main-tittle'>Vítejte na stránce pro předpověď počasí</h1>
      </header>
      <main className='content-wrapper'>
        <SearchCityField/>
        <ForecastTable />
        

      </main>
    </div>
  );
};

export default App;