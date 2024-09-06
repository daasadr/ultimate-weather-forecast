import React from 'react';
import ForecastTable from './containers/ForecastTable';
import './App.scss';
import InputComponent from './containers/SearchCityFields/components/Input';
import Suggestions from './containers/SearchCityFields/components/Suggestions';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>Vítejte na stránce pro předpověď počasí</h1>
      </header>
      <main>
        <InputComponent/>
        <Suggestions/>
        <ForecastTable />
        

      </main>
    </div>
  );
};

export default App;