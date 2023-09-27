import { Layout, Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Content } from 'antd/es/layout/layout';
import {
  useNavigate,
  Outlet,
  matchRoutes,
  useLocation,
} from 'react-router-dom';
import { IRoute, sidebarRoutes } from '../routes/sidebar.routes';
import classes from './RootLayout.module.scss';
import Title from 'antd/es/typography/Title';
import baseRoutes from '../routes/base.routes';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

const getSidebarRoutes = (routes: IRoute[]): MenuItemType[] => {
  const sidebarRoutes = routes.map((route) => {
    return {
      key: route.path || '',
      label: route.title,
      children: route.children && getSidebarRoutes(route.children),
    };
  });

  return sidebarRoutes;
};

const sidebarItems = getSidebarRoutes(sidebarRoutes);

function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = ({ keyPath }) => {
    const path = keyPath.reverse().join('/');

    navigate(path);
  };

  const getTitle = () => {
    const matchedRoutes = matchRoutes(baseRoutes, location);

    if (!matchedRoutes) return;

    return matchedRoutes.slice(-1)[0].route.title;
  };

  return (
    <Layout>
      <Layout hasSider className={classes.container}>
        <Sider breakpoint="lg" collapsedWidth="0">
          <div className={classes['demo-logo-vertical']} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['']}
            onClick={onClick}
            items={sidebarItems}
          />
        </Sider>
        <Content className={classes.content}>
          <Title className={classes.pageTitle}>{getTitle()}</Title>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
export default RootLayout;
