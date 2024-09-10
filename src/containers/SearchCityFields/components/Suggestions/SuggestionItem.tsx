import React from 'react';

interface City {
    id: number;
    name: string;
    country: string;
}

interface SuggestionItemProps {
  city: City;
  onClick: () => void;
}


const SuggestionItem: React.FC<SuggestionItemProps> = ({ city, onClick }) => {
  return (
    <li className="suggestion-item" role="option" onClick={onClick}>
        {city.name}, {city.country}
    </li>
  );
};

export default SuggestionItem;