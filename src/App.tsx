import React from 'react';
import { Home } from './pages/Home';
import { ImageSearchPage } from './pages/ImageSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<ImageSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;