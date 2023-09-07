import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ReportService from '@src/services/report/ReportService';
import { IReq, IRes } from '../types/express/misc';

async function getAll(_: IReq, res: IRes) {
  const report = await ReportService.getReport();

  return res.status(HttpStatusCodes.OK).json(report);
}

export default {
  getAll,
} as const;
