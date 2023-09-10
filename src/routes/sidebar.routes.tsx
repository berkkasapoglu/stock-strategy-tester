import Test from '../pages/test/Test';
import Report from '../pages/report/Report';

interface IRoute {
  path: string;
  element: React.ReactNode;
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
    path: 'test',
    pageTitle: 'Test',
    element: <Test />,
    children: [
      {
        title: 'test1',
        path: 'test1',
        pageTitle: 'Test1',
        element: <Test />,
      },
    ],
  },
];
