import { Table } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { config } from '../../constants';
import classes from './Report.module.scss';
import { REPORT_BUY_COLUMNS, REPORT_SELL_COLUMNS } from './config';
import { IReport } from './types/Report.types';

function Report() {
  const [actionReport, setActionReport] = useState<IReport[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(config.url + '/report');

      setActionReport(res.data);
    })();
  }, []);

  return (
    <div className={classes.container}>
      <Table
        className={classes.table}
        dataSource={actionReport.map((row, idx) => ({
          key: idx,
          ...row,
        }))}
        columns={REPORT_BUY_COLUMNS}
      ></Table>
      <Table
        className={classes.table}
        dataSource={actionReport.map((row, idx) => ({
          key: idx,
          ...row,
        }))}
        columns={REPORT_SELL_COLUMNS}
      ></Table>
    </div>
  );
}
export default Report;
