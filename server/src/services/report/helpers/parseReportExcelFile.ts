import { enumKeys } from '@src/util/misc';
import xlsx from 'xlsx';
import {
  DEFAULT_CHANNEL,
  DESCRIPTION_STRING_PARTS,
  DescriptionExtractedKeys,
  REPORT_DATE_FORMAT,
  REPORT_STOCK_ACTIONS,
  TABLE_ENTRY_ROW,
} from './config';
import moment from 'moment';
import { IReport, ReportActionResponse } from '../report.types';

export const parseReportExcelFile = async () => {
  const workbook = xlsx.readFile(
    'E:/works/side-projects/stock-strategy-tester/server/src/services/report/inputs/example.xls'
  );
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];

  const rawData = xlsx.utils.sheet_to_json<string[]>(worksheet, {
    header: 1,
  });
  const tableRows = rawData.slice(TABLE_ENTRY_ROW);

  const rows = tableRows.filter((row) => {
    const channel = row[2];
    return channel === DEFAULT_CHANNEL;
  });

  const report: IReport[] = rows.map((row) => {
    const description = row[7];
    const date = row[0];
    const { price, lot, ticket, action } = parseDescription(description);

    return {
      ticket,
      price: Math.abs(parseFloat(price || '')),
      lot: parseInt(lot || ''),
      date: moment(date, REPORT_DATE_FORMAT).toDate(),
      action,
    };
  });

  return report;
};

const parseDescription = (description: string) => {
  const ticket = description.split(' ')[0];
  const action = description.includes(REPORT_STOCK_ACTIONS.buy)
    ? ReportActionResponse.Buy
    : ReportActionResponse.Sell;

  const parsedDescription: {
    price?: string;
    lot?: string;
    ticket: string;
    action: ReportActionResponse;
  } = {
    ticket,
    action,
  };

  const keys = enumKeys(DESCRIPTION_STRING_PARTS);
  for (let item of keys) {
    const value = extractValueFromDescription(description, item);

    parsedDescription[item] = value;
  }

  return parsedDescription;
};

const extractValueFromDescription = (
  description: string,
  key: DescriptionExtractedKeys
) => {
  const startIndex = description.indexOf(DESCRIPTION_STRING_PARTS[key]);
  const value = description.slice(startIndex).split(' ')[1];

  return value;
};

parseReportExcelFile();
