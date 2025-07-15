import React, { useState, useEffect } from 'react';
import { Quote, RotateCcw } from 'lucide-react';
import { getRandomQuote } from '../data/quotes';

export const QuoteDisplay: React.FC = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  const refreshQuote = () => {
    setQuote(getRandomQuote());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 30000); // Change quote every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700 relative overflow-hidden shadow-lg">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <Quote className="w-6 h-6 text-gray-400 flex-shrink-0" />
          <button
            onClick={refreshQuote}
            className="text-gray-500 hover:text-gray-300 transition-colors p-2 hover:bg-gray-700/50 rounded-lg"
            title="New quote"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
        
        <blockquote className="text-xl md:text-2xl font-light text-white leading-relaxed mb-4">
          "{quote.text}"
        </blockquote>
        
        <footer className="text-gray-400 font-medium">
          — {quote.author}
        </footer>
      </div>
    </div>
  );
};