import React, { useState, useEffect } from 'react';
import { Skull } from 'lucide-react';
import { AgeInput } from './components/AgeInput';
import { LifeExpectancyInput } from './components/LifeExpectancyInput';
import { LifeMetricsDisplay } from './components/LifeMetricsDisplay';
import { QuoteDisplay } from './components/QuoteDisplay';
import { LifeGrid } from './components/LifeGrid';
import { calculateLifeMetrics } from './utils/calculations';
import { LifeEvent } from './types';

function App() {
  const [age, setAge] = useState<number>(25);
  const [lifeExpectancy, setLifeExpectancy] = useState<number>(80);
  const [events, setEvents] = useState<LifeEvent[]>([]);

  const metrics = calculateLifeMetrics(age, lifeExpectancy);

  const handleAddEvent = (event: LifeEvent) => {
    setEvents(prev => [...prev, event]);
  };

  // Load events from localStorage on mount
  useEffect(() => {
    const savedEvents = localStorage.getItem('memento-mori-events');
    if (savedEvents) {
      try {
        setEvents(JSON.parse(savedEvents));
      } catch (error) {
        console.error('Failed to load events from localStorage:', error);
      }
    }
  }, []);

  // Save events to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem('memento-mori-events', JSON.stringify(events));
  }, [events]);

  return (
    <div className="min-h-screen bg-gray-900 relative font-sans">
      {/* Dark sophisticated background pattern */}
      <div className="absolute inset-0">
        {/* Base dark pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-100"></div>
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/30 to-gray-700/20"></div>
        
        {/* Radial gradient for depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.6)_100%)]"></div>
        
        {/* Subtle dark texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence baseFrequency=%220.9%22 numOctaves=%221%22 stitchTiles=%22stitch%22/%3E%3CfeColorMatrix type=%22saturate%22 values=%220%22/%3E%3C/filter%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.03%22/%3E%3C/svg%3E')] opacity-60"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Skull className="w-10 h-10 text-gray-300" />
            <h1 className="text-4xl md:text-6xl font-light text-white tracking-wide">
              Memento Mori
            </h1>
            <Skull className="w-10 h-10 text-gray-300" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            A contemplation of life's finite nature. Visualize your journey through time 
            and reflect on how you choose to spend your precious moments.
          </p>
        </header>

        {/* Quote Section */}
        <div className="mb-12">
          <QuoteDisplay />
        </div>

        {/* Input Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AgeInput age={age} onAgeChange={setAge} />
          <LifeExpectancyInput 
            lifeExpectancy={lifeExpectancy} 
            onLifeExpectancyChange={setLifeExpectancy} 
          />
        </div>

        {/* Life Metrics */}
        <div className="mb-12">
          <h2 className="text-3xl font-medium text-white mb-8 text-center tracking-wide">
            Your Life in Numbers
          </h2>
          <LifeMetricsDisplay metrics={metrics} />
        </div>

        {/* Life Grid Visualization */}
        <div className="mb-12">
          <LifeGrid
            currentAge={age}
            lifeExpectancy={lifeExpectancy}
            events={events}
            onAddEvent={handleAddEvent}
          />
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 mt-16 pt-8 border-t border-gray-700">
          <p className="mb-2 font-light">
            "The goal isn't to live forever, but to create something that will."
          </p>
          <p className="text-sm font-light">
            Use this time wisely. Every moment is a gift.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;