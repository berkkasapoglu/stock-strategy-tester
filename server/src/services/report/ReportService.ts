import { parseReportExcelFile } from './helpers/parseReportExcelFile';

const getReport = () => {
  const report = parseReportExcelFile();

  return report;
};

export default {
  getReport,
} as const;
