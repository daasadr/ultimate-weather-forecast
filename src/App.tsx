import React from 'react';
import ForecastTable from './containers/ForecastTable';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <h1>Vítejte na stránce pro předpověď počasí</h1>
      </header>
      <main>
        <ForecastTable />
      </main>
    </div>
  );
};

export default App;