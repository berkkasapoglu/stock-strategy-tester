import { Table } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { config } from '../../constants';
import classes from './Report.module.scss';
import { REPORT_BUY_COLUMNS } from './config';
import { IReport, ReportActionResponse } from './types/Report.types';

export interface IAction {
  buy?: IReport;
  sell?: IReport;
  ticket: string;
}

function Report() {
  const [rawReport, setRawReport] = useState<IReport[]>([]);
  const [actions, setActions] = useState<IAction[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(config.url + '/report');

      setRawReport(res.data);
    })();
  }, []);

  useEffect(() => {
    if (!rawReport) return;
    const actionReport: IAction[] = [];

    rawReport.forEach((rawItem) => {
      const isBuy = rawItem.action === ReportActionResponse.Buy;
      const isSell = rawItem.action === ReportActionResponse.Sell;
      if (!rawItem.lot || !rawItem.price) return;

      if (isBuy) {
        const item = actionReport.find(
          (item) => item.ticket === rawItem.ticket && !item.buy
        );

        if (item) return (item.buy = rawItem);

        actionReport.push({ ticket: rawItem.ticket, buy: rawItem });
      }

      if (isSell) {
        const item = actionReport.find(
          (item) => item.ticket === rawItem.ticket && !item.sell
        );

        if (item) return (item.sell = rawItem);

        actionReport.push({ ticket: rawItem.ticket, sell: rawItem });
      }
    });

    setActions(actionReport);
  }, [rawReport]);

  console.log(actions.length);

  return (
    <>
      <div className={classes.container}>
        <Table
          className={classes.table}
          dataSource={actions.map((row, idx) => ({
            key: idx,
            ...row,
          }))}
          columns={REPORT_BUY_COLUMNS}
        ></Table>
      </div>
    </>
  );
}
export default Report;
