import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { Menu, Grid, Settings } from 'lucide-react';

interface ImageResult {
  url: string;
  title: string;
  source: string;
}

export const ImageSearchPage: React.FC = () => {
  const [results] = useState<ImageResult[]>([
    {
      url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
      title: 'Mountain Landscape',
      source: 'unsplash.com'
    },
    {
      url: 'https://images.unsplash.com/photo-1682687221038-404670f09439',
      title: 'Ocean Sunset',
      source: 'unsplash.com'
    },
    // Add more mock results as needed
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200">
        <div className="flex items-center px-6 py-2">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-8 mr-8"
          />
          <div className="flex-grow max-w-[692px]">
            <SearchBar
              onSearch={() => {}}
              onImageSearch={() => {}}
            />
          </div>
          <div className="flex items-center ml-4 space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Grid className="h-6 w-6 text-gray-600" />
            </button>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Sign in
            </button>
          </div>
        </div>

        <nav className="flex px-6 space-x-8">
          <a href="#" className="flex items-center px-2 py-3 border-b-4 border-blue-500 text-blue-500">
            <span className="mr-2">Images</span>
          </a>
          <a href="#" className="flex items-center px-2 py-3 text-gray-600 hover:text-black">
            <span>All</span>
          </a>
          <a href="#" className="flex items-center px-2 py-3 text-gray-600 hover:text-black">
            <span>Maps</span>
          </a>
          <a href="#" className="flex items-center px-2 py-3 text-gray-600 hover:text-black">
            <span>News</span>
          </a>
        </nav>
      </header>

      <main className="flex-grow p-6">
        <div className="grid grid-cols-4 gap-4">
          {results.map((result, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={result.url}
                  alt={result.title}
                  className="w-full h-48 object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-2">
                <p className="text-sm text-blue-600 hover:underline">{result.title}</p>
                <p className="text-xs text-gray-600">{result.source}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}