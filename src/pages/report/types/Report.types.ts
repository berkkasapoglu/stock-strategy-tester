export enum ReportActionResponse {
  Buy = 'Buy',
  Sell = 'Sell',
}

export interface IReport {
  ticket: string;
  price: number;
  lot: number;
  date: Date;
  action: ReportActionResponse;
}
