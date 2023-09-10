import { Space, Layout, Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { Header, Content } from 'antd/es/layout/layout';
import {
  useNavigate,
  Outlet,
  matchRoutes,
  useLocation,
} from 'react-router-dom';
import { sidebarRoutes } from '../routes/sidebar.routes';
import classes from './RootLayout.module.scss';
import Title from 'antd/es/typography/Title';
import baseRoutes from '../routes/base.routes';

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const onClick: MenuProps['onClick'] = (e) => {
    const url = sidebarRoutes[parseInt(e.key)].path;
    navigate(url);
  };

  const getTitle = () => {
    const matchedRoutes = matchRoutes(baseRoutes, location.pathname);

    if (!matchedRoutes) return;

    const mathcedRoute = matchedRoutes.find(
      (match) => match.pathname === location.pathname
    );

    return mathcedRoute?.route.pageTitle;
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Layout hasSider className={classes.container}>
          <Sider>
            <Menu
              mode="inline"
              onClick={onClick}
              defaultSelectedKeys={['0']}
              items={sidebarRoutes.map((route, idx) => {
                return {
                  key: idx,
                  label: route.title,
                };
              })}
            />
          </Sider>
          <Content className={classes.content}>
            <Title className={classes.pageTitle}>{getTitle()}</Title>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Space>
  );
}
export default RootLayout;
