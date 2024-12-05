import React from 'react';
import { Search, TrendingUp, User } from 'lucide-react';

interface Suggestion {
  id: number;
  type: 'trending' | 'person' | 'media';
  text: string;
  subtitle?: string;
  icon?: string;
}

interface SearchSuggestionsProps {
  suggestions: Suggestion[];
  onSelect: (suggestion: string) => void;
}

export const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({
  suggestions,
  onSelect,
}) => {
  const getIcon = (type: string, icon?: string) => {
    if (type === 'person') return <User className="h-4 w-4 text-gray-400" />;
    if (type === 'trending' || icon === 'trending') return <TrendingUp className="h-4 w-4 text-gray-400" />;
    return <Search className="h-4 w-4 text-gray-400" />;
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-white mt-1 rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="px-4 py-3 hover:bg-gray-100 cursor-pointer"
          onClick={() => onSelect(suggestion.text)}
        >
          <div className="flex items-center">
            <span className="mr-3">{getIcon(suggestion.type, suggestion.icon)}</span>
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
  );
}