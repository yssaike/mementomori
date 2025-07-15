import { LifeMetrics } from '../types';

export const calculateLifeMetrics = (age: number, lifeExpectancy: number): LifeMetrics => {
  const daysInYear = 365.25;
  const daysLived = Math.floor(age * daysInYear);
  const daysRemaining = Math.floor((lifeExpectancy - age) * daysInYear);
  
  // Sleep: 8 hours per day
  const daysSleeping = Math.floor(daysLived / 3);
  
  // Work: 8 hours per day, 5 days a week, starting at age 20
  const workingYears = Math.max(0, age - 20);
  const workingDays = workingYears * 52 * 5; // 52 weeks * 5 days
  const daysWorking = Math.floor(workingDays / 3); // 8 hours = 1/3 of day
  
  // Heartbeats: average 70 BPM
  const heartbeats = Math.floor(daysLived * 24 * 60 * 70);
  
  // Breaths: average 15 per minute
  const breaths = Math.floor(daysLived * 24 * 60 * 15);
  
  return {
    daysLived,
    daysRemaining,
    daysSleeping,
    daysWorking,
    heartbeats,
    breaths
  };
};

export const getMonthFromAge = (ageInYears: number): number => {
  return Math.floor(ageInYears * 12);
};

export const getAgeFromMonth = (month: number): { years: number; months: number } => {
  const years = Math.floor(month / 12);
  const months = month % 12;
  return { years, months };
};

export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat().format(num);
};