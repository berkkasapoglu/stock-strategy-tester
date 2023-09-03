import { Router } from 'express';

import Paths from '@src/constants/Paths';
import ReportRoutes from './ReportRoutes';

const reportRouter = Router();

// Get all users
reportRouter.get(Paths.Report.Get, ReportRoutes.getAll);

// **** Export default **** //

export default reportRouter;
