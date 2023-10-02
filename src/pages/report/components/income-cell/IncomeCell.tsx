import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';

interface IProps {
  buyPrice: number;
  sellPrice: number;
  lot: number;
  variant: 'percentage' | 'value';
}

function IncomeCell({ buyPrice, sellPrice, lot, variant = 'value' }: IProps) {
  const incomeValue = (Math.abs(sellPrice) - buyPrice) * lot;
  const priceRatio = (Math.abs(sellPrice) - buyPrice) / buyPrice;

  const incomePercent = Math.abs(priceRatio * 100).toFixed(2);

  return (
    <Statistic
      value={variant === 'percentage' ? incomePercent : incomeValue.toFixed(2)}
      valueStyle={{
        color: priceRatio > 0 ? '#3f8600' : '#cf1322',
        fontSize: '1rem',
        fontWeight: '600',
      }}
      prefix={priceRatio > 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      suffix={variant === 'percentage' && '%'}
    />
  );
}

export default IncomeCell;
