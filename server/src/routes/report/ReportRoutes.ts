import HttpStatusCodes from '@src/constants/HttpStatusCodes';

import ReportService from '@src/services/ReportService';
import { IReq, IRes } from '../types/express/misc';

// **** Functions **** //

function getAll(_: IReq, res: IRes) {
  const report = ReportService.getReport();
  return res.status(HttpStatusCodes.OK).json({ report });
}

export default {
  getAll,
} as const;
