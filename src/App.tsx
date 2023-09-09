import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import classes from './App.module.css';
import Report from './pages/report/Report';
import Title from 'antd/es/typography/Title';

export enum ReportActionResponse {
  Buy = 'Buy',
  Sell = 'Sell',
}

export interface IReport {
  ticket: string;
  price: number;
  lot: number;
  date: Date;
  action: ReportActionResponse;
}

function App() {
  return (
    <>
      <Layout hasSider className={classes.container}>
        <Sider>Sider</Sider>
        <Content className={classes.content}>
          <Title className={classes.pageTitle}>Design</Title>
          <Report />
        </Content>
      </Layout>
    </>
  );
}

export default App;
