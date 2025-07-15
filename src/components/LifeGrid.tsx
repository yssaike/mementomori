import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface LifeGridProps {
  currentAge: number;
  lifeExpectancy: number;
  events: any[];
  onAddEvent: (event: any) => void;
}

export const LifeGrid: React.FC<LifeGridProps> = ({
  currentAge,
  lifeExpectancy,
}) => {
  const [hoveredYear, setHoveredYear] = useState<number | null>(null);

  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - Math.floor(currentAge);
  const maxAge = 90;
  const totalYears = maxAge;

  const getBoxColor = (yearIndex: number) => {
    const age = yearIndex;
    
    if (age < currentAge) return 'bg-gray-600'; // Past years
    if (age === Math.floor(currentAge)) return 'bg-white'; // Current year
    return 'bg-gray-800 hover:bg-gray-700'; // Future years
  };

  const renderDecade = (startAge: number) => {
    const years = Array.from({ length: 10 }, (_, i) => startAge + i);

    return (
      <div key={startAge} className="flex-shrink-0">
        <h3 className="text-xs font-medium text-gray-400 mb-2 text-center">
          {startAge}-{startAge + 9}
        </h3>
        <div className="grid grid-cols-10 gap-px">
          {years.map((yearIndex) => {
            if (yearIndex >= totalYears) return null;
            
            const calendarYear = birthYear + yearIndex;
            
            return (
              <div
                key={yearIndex}
                className={`
                  w-3 h-3 cursor-pointer transition-all duration-200 
                  ${getBoxColor(yearIndex)}
                  ${hoveredYear === yearIndex ? 'scale-125 z-10 relative' : ''}
                `}
                onMouseEnter={() => setHoveredYear(yearIndex)}
                onMouseLeave={() => setHoveredYear(null)}
                title={`Age ${yearIndex} • Year ${calendarYear}`}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-gray-300" />
          <h2 className="text-lg font-medium text-white">Your Life in Years</h2>
        </div>
        <div className="text-xs text-gray-500 font-light">
          Each box = 1 year • Birth year: {birthYear} • Total: {totalYears} years
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-600 rounded-sm"></div>
          <span className="text-gray-400 font-light">Past Years</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-white rounded-sm"></div>
          <span className="text-gray-400 font-light">Current Year</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
          <span className="text-gray-400 font-light">Future Years</span>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: Math.ceil(totalYears / 10) }, (_, i) => renderDecade(i * 10))}
      </div>

      {hoveredYear !== null && (
        <div className="fixed top-4 right-4 bg-gray-900/95 backdrop-blur-sm text-white p-3 rounded-lg border border-gray-600 z-20 shadow-xl">
          <div className="text-sm font-medium">
            Age: {hoveredYear} years
          </div>
          <div className="text-xs text-gray-400 mt-1 font-light">
            Year: {birthYear + hoveredYear}
          </div>
        </div>
      )}
    </div>
  );
};