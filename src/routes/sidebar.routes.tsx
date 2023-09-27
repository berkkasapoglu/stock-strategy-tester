import Test from '../pages/test/Test';
import Report from '../pages/report/Report';
import { NonIndexRouteObject } from 'react-router-dom';

export interface IRoute extends NonIndexRouteObject {
  path?: string;
  title?: string;
  pageTitle?: string;
  children?: IRoute[];
}

export const sidebarRoutes: IRoute[] = [
  {
    title: 'Report',
    path: '',
    pageTitle: 'Report',
    element: <Report />,
  },
  {
    title: 'Test',
    pageTitle: 'Test12',
    path: 'test1',
    element: <Test />,
  },
];
