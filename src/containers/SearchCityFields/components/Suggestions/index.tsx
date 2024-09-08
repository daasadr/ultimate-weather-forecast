import React from 'react';
import SuggestionItem from './SuggestionItem';
import './Suggestions.scss';

const Suggestions: React.FC = () => {
  return (
    <ul className="suggestions-list" role="listbox" aria-label="Návrhy měst">
      <SuggestionItem city="Praha" />
      <SuggestionItem city="Brno" />
      <SuggestionItem city="Ostrava" />
    </ul>
  );
};

export default Suggestions;