import React from 'react';
import InputComponent from './components/Input';
import Suggestions from './components/Suggestions';
import './SearchCityField.scss';

const SearchCityField: React.FC = () => {
  return (
    <section className="search-city-field" aria-label="Search city">
      <InputComponent />
      <Suggestions />
    </section>
  );
};

export default SearchCityField;