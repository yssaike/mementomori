import React from 'react';
import { Calendar } from 'lucide-react';

interface AgeInputProps {
  age: number;
  onAgeChange: (age: number) => void;
}

export const AgeInput: React.FC<AgeInputProps> = ({ age, onAgeChange }) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-6 h-6 text-black" />
        <h2 className="text-xl font-semibold text-black">Your Current Age</h2>
      </div>
      
      <div className="flex items-center gap-4">
        <input
          type="number"
          min="0"
          max="120"
          value={age}
          onChange={(e) => onAgeChange(Number(e.target.value))}
          className="bg-white border border-gray-300 rounded-lg px-4 py-3 text-black text-lg font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all w-24"
          placeholder="25"
        />
        <span className="text-gray-600 text-lg">years old</span>
      </div>
    </div>
  );
};