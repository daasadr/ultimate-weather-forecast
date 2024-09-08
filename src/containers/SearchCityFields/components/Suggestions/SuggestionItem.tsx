import React from 'react';

interface SuggestionItemProps {
  city: string;
}


const SuggestionItem: React.FC<SuggestionItemProps> = ({ city }) => {
  return (
    <li className="suggestion-item" role="option">{city}</li>
  );
};

export default SuggestionItem;