export interface AnalyticsKpi {
  title: string;
  value: string;
  change: string;
  isUp: boolean;
  period: string;
}

export interface ChartDataPoint {
  name: string;
  sales: number;
  revenue: number;
  bookings: number;
}
