export interface LifeEvent {
  id: string;
  month: number;
  year: number;
  title: string;
  description?: string;
}

export interface LifeMetrics {
  daysLived: number;
  daysRemaining: number;
  daysSleeping: number;
  daysWorking: number;
  heartbeats: number;
  breaths: number;
}