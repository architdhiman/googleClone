import React, { useState, useRef, useEffect } from 'react';
import { Search, Camera, Mic, X } from 'lucide-react';
import { getSearchSuggestions } from '../utils/searchSuggestions';

interface SearchBarProps {
  onSearch: (query: string) => void;
  onImageSearch: () => void;
  onVoiceSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ 
  onSearch, 
  onImageSearch,
  onVoiceSearch 
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query) {
      const results = getSearchSuggestions(query);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleClear = () => {
    setQuery('');
    setSuggestions([]);
    inputRef.current?.focus();
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="relative max-w-[584px] w-full"
    >
      <div className={`flex items-center w-full bg-white rounded-full border 
        ${isFocused ? 'border-transparent shadow-search' : 'border-[#dfe1e5] hover:shadow-searchHover hover:border-transparent'}`}>
        <Search className="h-5 w-5 text-[#9aa0a6] ml-4" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full px-4 py-3 outline-none text-base"
          placeholder="Search Google or type a URL"
        />
        {query && (
          <X
            className="h-5 w-5 text-[#70757a] cursor-pointer mr-2"
            onClick={handleClear}
          />
        )}
        <div className="flex items-center space-x-2 px-4">
          <Mic 
            className="h-6 w-6 text-[#4285f4] cursor-pointer"
            onClick={onVoiceSearch}
          />
          <Camera 
            className="h-6 w-6 text-[#4285f4] cursor-pointer"
            onClick={onImageSearch}
          />
        </div>
      </div>
      
      {suggestions.length > 0 && isFocused && (
        <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {suggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(suggestion.text);
                onSearch(suggestion.text);
              }}
            >
              <div className="flex items-center">
                <Search className="h-4 w-4 text-gray-400 mr-3" />
                <div>
                  <div className="text-sm">{suggestion.text}</div>
                  {suggestion.subtitle && (
                    <div className="text-xs text-gray-500">{suggestion.subtitle}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </form>
  );
}