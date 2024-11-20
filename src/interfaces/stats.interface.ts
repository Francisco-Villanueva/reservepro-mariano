export type ServiceCounts = {
  [service: string]: number;
};

export type MonthlyData = {
  month: string;
} & ServiceCounts;

export interface ICustomerStat {
  month: string;
  count: number;
  fill: string;
}
