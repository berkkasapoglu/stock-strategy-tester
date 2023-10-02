import { ColumnType } from 'antd/es/table';
import { IAction } from '../Report';
import IncomeCell from '../components/income-cell/IncomeCell';

export const REPORT_BUY_COLUMNS: ColumnType<IAction>[] = [
  {
    title: 'Ticket',
    dataIndex: 'ticket',
    key: 'ticket',
  },
  {
    title: 'Buy',
    dataIndex: ['buy', 'price'],
    key: 'buy',
  },
  {
    title: 'Sell',
    dataIndex: ['sell', 'price'],
    key: 'sell',
  },
  {
    title: 'Income',
    key: 'income',
    render: (_, record) => {
      const buyPrice = record.buy?.price;
      const sellPrice = record.sell?.price;

      if (buyPrice && sellPrice) {
        return (
          <IncomeCell
            buyPrice={buyPrice}
            sellPrice={sellPrice}
            variant="percentage"
          />
        );
      }

      return '-';
    },
  },
  {
    title: 'Income (TRY)',
    key: 'income',
    render: (_, record) => {
      const buyPrice = record.buy?.price;
      const sellPrice = record.sell?.price;

      if (buyPrice && sellPrice) {
        return (
          <IncomeCell
            buyPrice={buyPrice}
            sellPrice={sellPrice}
            variant="value"
            lot={record.buy?.lot}
          />
        );
      }

      return '-';
    },
  },
  {
    title: 'Lot',
    dataIndex: ['buy', 'lot'],
    key: 'lot',
  },
];
