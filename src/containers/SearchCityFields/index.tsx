import React from 'react';
import Input from './components/Input';
import Suggestions from './components/Suggestions';

const SearchCityField: React.FC = () => {
  return (
    <section aria-label="Search city">
      <Input />
      <Suggestions />
    </section>
  );
};

export default SearchCityField