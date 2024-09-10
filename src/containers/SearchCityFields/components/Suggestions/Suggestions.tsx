import React from 'react';
import SuggestionItem from './SuggestionItem';
import './Suggestions.scss';

interface City {
  id: number;
  name: string;
  country: string;
}
interface SuggestionsProps {
  suggestions: City[];
  onSuggestionClick: (cityId: number) => void;
}

const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
}) => {
  if (suggestions.length === 0) return null;

  return (
    <div className="suggestion-container">
      <ul className="suggestions-list" role="listbox" aria-label="Návrhy měst">
        {suggestions.map(city => (
          <SuggestionItem
            key={city.id}
            city={city}
            onClick={() => onSuggestionClick(city.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
