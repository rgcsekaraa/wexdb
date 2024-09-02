import React, { useState, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const debounceTimeout = useRef<number | undefined>(undefined);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    debounceSearch(value);
  };

  const debounceSearch = (query: string) => {
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = window.setTimeout(() => {
      onSearch(query);
    }, 300); // 300ms debounce time
  };

  const clearSearch = () => {
    setQuery('');
    onSearch(''); // Trigger search with an empty string
  };

  return (
    <div className="flex justify-center py-4">
      <div className="relative w-full sm:w-1/2">
        <input
          type="text"
          value={query}
          placeholder="Search workouts..."
          className="w-full p-4 pl-10 border border-yellow-300 rounded bg-black text-white focus:outline-none focus:border-yellow-500"
          onChange={handleSearch}
          aria-label="Search workouts"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-300" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-yellow-300 focus:outline-none"
            aria-label="Clear search"
          >
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
