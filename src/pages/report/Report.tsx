import { Table } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { config } from '../../constants';
import classes from './Report.module.scss';
import { REPORT_BUY_COLUMNS, REPORT_SELL_COLUMNS } from './config';
import { IReport, ReportActionResponse } from './types/Report.types';

function Report() {
  const [actionReport, setActionReport] = useState<IReport[]>([]);
  const [newReport, setNewReport] = useState<
    { buy?: IReport; sell?: IReport }[]
  >([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(config.url + '/report');

      setActionReport(res.data);
    })();
  }, []);

  useEffect(() => {
    if (actionReport) {
      const newReport = actionReport.map((info) => {
        const matchedTickets = actionReport.filter(
          (currentInfo) => currentInfo.ticket === info.ticket
        );

        return {
          buy: matchedTickets.find(
            (ticket) => ticket.action === ReportActionResponse.Buy
          ),
          sell: matchedTickets.find(
            (ticket) => ticket.action === ReportActionResponse.Sell
          ),
        };
      });

      setNewReport(newReport);
    }
  }, [actionReport]);

  return (
    <>
      {newReport.map((row) => {
        return (
          <div>
            <span>{row.buy?.ticket} </span>
            <span>Buy Price: {row.buy?.price} </span>
            <span>Sell Price: {row.sell?.price} </span>
          </div>
        );
      })}
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
    </>
  );
}
export default Report;
