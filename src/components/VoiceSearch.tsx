import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface VoiceSearchProps {
  onClose: () => void;
}

export const VoiceSearch: React.FC<VoiceSearchProps> = ({ onClose }) => {
  const [isListening, setIsListening] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsListening(prev => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#202124] bg-opacity-95 flex items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
      >
        <X className="h-6 w-6" />
      </button>
      
      <div className="text-center">
        <h2 className="text-2xl text-gray-200 mb-12">Listening...</h2>
        
        <div className={`w-24 h-24 rounded-full bg-white mx-auto flex items-center justify-center transition-opacity duration-500 ${isListening ? 'opacity-100' : 'opacity-50'}`}>
          <div className="w-12 h-12 rounded-full bg-[#ea4335]" />
        </div>
      </div>
    </div>
  );
}