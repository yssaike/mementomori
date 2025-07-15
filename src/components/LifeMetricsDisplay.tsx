import React from 'react';
import { Heart, Zap, Moon, Briefcase, Clock, Wind } from 'lucide-react';
import { LifeMetrics } from '../types';
import { formatNumber } from '../utils/calculations';

interface LifeMetricsDisplayProps {
  metrics: LifeMetrics;
}

export const LifeMetricsDisplay: React.FC<LifeMetricsDisplayProps> = ({ metrics }) => {
  const metricItems = [
    {
      icon: Clock,
      label: 'Days Lived',
      value: formatNumber(metrics.daysLived)
    },
    {
      icon: Zap,
      label: 'Days Remaining',
      value: formatNumber(metrics.daysRemaining)
    },
    {
      icon: Moon,
      label: 'Days Sleeping',
      value: formatNumber(metrics.daysSleeping)
    },
    {
      icon: Briefcase,
      label: 'Days Working',
      value: formatNumber(metrics.daysWorking)
    },
    {
      icon: Heart,
      label: 'Heartbeats',
      value: formatNumber(metrics.heartbeats)
    },
    {
      icon: Wind,
      label: 'Breaths Taken',
      value: formatNumber(metrics.breaths)
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metricItems.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:scale-105 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <IconComponent className="w-6 h-6 text-black" />
              <h3 className="text-gray-600 font-medium">{item.label}</h3>
            </div>
            <p className="text-2xl font-bold text-black">{item.value}</p>
          </div>
        );
      })}
    </div>
  );
};