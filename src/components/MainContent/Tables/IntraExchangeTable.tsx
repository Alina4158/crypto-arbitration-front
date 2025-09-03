import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type {IntraExchangeData} from '../../../types';
import { intraExchangeData } from '../../../data/mockData';

const columns: ColumnsType<IntraExchangeData> = [
  {
    title: 'Тикер',
    dataIndex: 'symbol',
    key: 'symbol',
    width: '30%',
    render: (symbol: string) => (
      <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
        {symbol}
      </span>
    ),
  },
  {
    title: 'Цена',
    dataIndex: 'price',
    key: 'price',
    width: '35%',
    render: (price: number) => `${price.toFixed(2)} ₽`,
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Объем торгов',
    dataIndex: 'volume',
    key: 'volume',
    width: '35%',
    render: (volume: string) => (
      <span style={{ color: '#666' }}>{volume}</span>
    ),
  },
];

const IntraExchangeTable: React.FC = () => (
  <div>
    <h2 style={{ marginBottom: '20px', color: '#1890ff' }}>
      Внутрибиржевые операции
    </h2>
    <Table
      columns={columns}
      dataSource={intraExchangeData}
      pagination={false}
      size="middle"
      bordered
      scroll={{ x: true }}
    />
  </div>
);

export default IntraExchangeTable;