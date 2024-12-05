export const getTrendingSearches = () => [
  { id: 1, type: 'trending', text: 'x empire episode youtube code', icon: 'trending' },
  { id: 2, type: 'person', text: 'Farooq Abdullah', subtitle: 'Former Minister of New and Renewable Energy Govt of India' },
  { id: 3, type: 'trending', text: 'bengaluru man acid attack', icon: 'trending' },
  { id: 4, type: 'trending', text: 'china stimulus package', icon: 'trending' },
  { id: 5, type: 'media', text: 'Emily in Paris', subtitle: 'Comedy-drama series' },
  { id: 6, type: 'trending', text: 'aurora borealis northern lights', icon: 'trending' },
  { id: 7, type: 'trending', text: 'videos', icon: 'trending' },
  { id: 8, type: 'person', text: 'Gurpatwant Singh Pannun', subtitle: 'Advocate' },
  { id: 9, type: 'trending', text: 'air india flight trichy airport', icon: 'trending' },
  { id: 10, type: 'trending', text: 'iran cyber attack israel', icon: 'trending' }
];

export const getSearchSuggestions = (query: string) => {
  const suggestions = getTrendingSearches();
  return suggestions.filter(suggestion => 
    suggestion.text.toLowerCase().includes(query.toLowerCase())
  );
};