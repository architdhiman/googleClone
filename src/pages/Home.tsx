import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { ImageSearch } from '../components/ImageSearch';
import { VoiceSearch } from '../components/VoiceSearch';
import { Grid } from 'lucide-react';

export const Home: React.FC = () => {
  const [showImageSearch, setShowImageSearch] = useState(false);
  const [showVoiceSearch, setShowVoiceSearch] = useState(false);

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:underline">About</a>
          <a href="#" className="text-sm text-gray-600 hover:underline">Store</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:underline">Gmail</a>
          <a href="#" className="text-sm text-gray-600 hover:underline">Images</a>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Grid className="h-6 w-6 text-gray-600" />
          </button>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
            Sign in
          </button>
        </div>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="mb-8">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google"
            className="h-24 w-auto"
          />
        </div>

        <div className="relative w-full max-w-[584px]">
          <SearchBar
            onSearch={handleSearch}
            onImageSearch={() => setShowImageSearch(true)}
            onVoiceSearch={() => setShowVoiceSearch(true)}
          />
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="px-4 py-2 bg-[#f8f9fa] text-sm text-gray-800 rounded hover:border-gray-300 border border-transparent">
            Google Search
          </button>
          <button className="px-4 py-2 bg-[#f8f9fa] text-sm text-gray-800 rounded hover:border-gray-300 border border-transparent">
            I'm Feeling Lucky
          </button>
        </div>
      </main>

      <footer className="bg-[#f2f2f2] text-sm text-gray-600">
        <div className="px-8 py-3 border-b border-gray-300">
          <span>United States</span>
        </div>
        <div className="px-8 py-3 flex justify-between">
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">How Search works</a>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>

      {showImageSearch && (
        <ImageSearch onClose={() => setShowImageSearch(false)} />
      )}
      
      {showVoiceSearch && (
        <VoiceSearch onClose={() => setShowVoiceSearch(false)} />
      )}
    </div>
  );
}