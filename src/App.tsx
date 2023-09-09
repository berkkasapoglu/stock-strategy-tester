import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { config } from './constants';
import { Table } from 'antd';

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
  const [actionReport, setActionReport] = useState<IReport[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(config.url + '/report');

      setActionReport(res.data);
    })();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        gap: 50,
      }}
    >
      <Table
        style={{ width: '100%' }}
        dataSource={actionReport.map((row, idx) => ({ key: idx, ...row }))}
        columns={[
          {
            title: 'Ticket',
            dataIndex: 'ticket',
            key: 'ticket',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Lot',
            dataIndex: 'lot',
            key: 'lot',
          },
        ]}
      ></Table>
      <Table
        style={{ width: '100%' }}
        dataSource={actionReport.map((row, idx) => ({ key: idx, ...row }))}
        columns={[
          {
            title: 'Ticket',
            dataIndex: 'ticket',
            key: 'ticket',
          },
          {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
          },
          {
            title: 'Lot',
            dataIndex: 'lot',
            key: 'lot',
          },
        ]}
      ></Table>
    </div>
  );
}

export default App;
