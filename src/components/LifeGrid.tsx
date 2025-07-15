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
    
    if (age < currentAge) return 'bg-gray-500'; // Past years
    if (age === Math.floor(currentAge)) return 'bg-gray-800'; // Current year
    return 'bg-gray-200 hover:bg-gray-300'; // Future years
  };

  const renderDecade = (startAge: number) => {
    const years = Array.from({ length: 10 }, (_, i) => startAge + i);

    return (
      <div key={startAge} className="flex-shrink-0">
        <h3 className="text-xs font-medium text-black mb-2 text-center">
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
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-5 h-5 text-black" />
          <h2 className="text-xl font-semibold text-black">Your Life in Years</h2>
        </div>
        <div className="text-xs text-gray-500">
          Each box = 1 year • Birth year: {birthYear} • Total: {totalYears} years
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-3 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-500 rounded-sm"></div>
          <span className="text-gray-600">Past Years</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-800 rounded-sm"></div>
          <span className="text-gray-600">Current Year</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-gray-200 rounded-sm"></div>
          <span className="text-gray-600">Future Years</span>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {Array.from({ length: Math.ceil(totalYears / 10) }, (_, i) => renderDecade(i * 10))}
      </div>

      {hoveredYear !== null && (
        <div className="fixed top-4 right-4 bg-black text-white p-3 rounded-lg border border-gray-600 z-20">
          <div className="text-sm font-medium">
            Age: {hoveredYear} years
          </div>
          <div className="text-xs text-gray-300 mt-1">
            Year: {birthYear + hoveredYear}
          </div>
        </div>
      )}
    </div>
  );
};