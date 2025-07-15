import React from 'react';
import { Target } from 'lucide-react';

interface LifeExpectancyInputProps {
  lifeExpectancy: number;
  onLifeExpectancyChange: (years: number) => void;
}

export const LifeExpectancyInput: React.FC<LifeExpectancyInputProps> = ({
  lifeExpectancy,
  onLifeExpectancyChange
}) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <Target className="w-5 h-5 text-gray-300" />
        <h2 className="text-lg font-medium text-white">Life Expectancy</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="1"
          max="120"
          value={lifeExpectancy}
          onChange={(e) => onLifeExpectancyChange(Number(e.target.value))}
          className="bg-gray-900/80 border border-gray-600 rounded-lg px-4 py-3 text-white text-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all w-24"
        />
        <span className="text-gray-400 text-lg font-light">years</span>
      </div>
    </div>
  );
};