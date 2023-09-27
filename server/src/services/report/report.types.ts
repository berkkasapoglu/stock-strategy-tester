export enum ReportActionResponse {
  Buy,
  Sell,
}

export interface IReport {
  ticket: string;
  price: number;
  lot: number;
  date: Date;
  action: ReportActionResponse;
}
