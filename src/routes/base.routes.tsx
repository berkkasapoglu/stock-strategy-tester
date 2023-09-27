import RootLayout from '../layouts/RootLayout';
import { IRoute, sidebarRoutes } from './sidebar.routes';

const baseRoutes: IRoute[] = [
  { element: <RootLayout />, children: [...sidebarRoutes] },
];

export default baseRoutes;
