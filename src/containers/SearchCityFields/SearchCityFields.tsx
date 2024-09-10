import React, { useState, useTransition, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../GlobalContext/GlobalContext';
import InputComponent from './components/Input/InputComponent';
import Suggestions from './components/Suggestions/Suggestions';
import { searchCities } from '../../utils/citySearch';
import './SearchCityField.scss';

interface City {
  id: number;
  name: string;
  country: string;
}

const SearchCityField: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { setSelectedCityId } = useGlobalContext();

  const handleSearch = useCallback((term: string) => {
    startTransition(() => {
      const results = searchCities(term);
      setSuggestions(results.slice(0, 10));
      setIsSuggestionsOpen(results.length > 0);
    });
  }, []);

  useEffect(() => {
    if (searchTerm.length > 1) {
      handleSearch(searchTerm);
    } else {
      setSuggestions([]);
      setIsSuggestionsOpen(false);
    }
  }, [searchTerm, handleSearch]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (cityId: number) => {
    setSelectedCityId(cityId);
    setSearchTerm('');
    setSuggestions([]);
    setIsSuggestionsOpen(false);
  };

  return (
    <section className="search-city-field" aria-label="Search city">
      <InputComponent
        value={searchTerm}
        onChange={handleInputChange}
        onClear={() => {
          setSearchTerm('');
          setIsSuggestionsOpen(false);
        }}
        onSelect={(value: string) => {
          setSearchTerm(value);
          setIsSuggestionsOpen(false);
        }}
      />
      {isPending ? (
        <div>Vyhledávání...</div>
      ) : (
        <Suggestions
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      )}
    </section>
  );
};

export default SearchCityField;
