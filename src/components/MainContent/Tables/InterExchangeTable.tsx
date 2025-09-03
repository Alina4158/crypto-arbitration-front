import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type {InterExchangeData} from '../../../types';
import { interExchangeData } from '../../../data/mockData';

const columns: ColumnsType<InterExchangeData> = [
  {
    title: 'Валютная пара',
    dataIndex: 'currency',
    key: 'currency',
    width: '40%',
  },
  {
    title: 'Курс',
    dataIndex: 'rate',
    key: 'rate',
    width: '30%',
    render: (rate: number) => `${rate.toFixed(2)} ₽`,
    sorter: (a, b) => a.rate - b.rate,
  },
  {
    title: 'Изменение',
    dataIndex: 'change',
    key: 'change',
    width: '30%',
    render: (change: string) => (
      <span
        style={{
          color: change.startsWith('+') ? '#52c41a' : '#f5222d',
          fontWeight: 'bold'
        }}
      >
        {change}
      </span>
    ),
  },
];

const InterExchangeTable: React.FC = () => (
  <div>
    <h2 style={{ marginBottom: '20px', color: '#1890ff' }}>
      Межбиржевые операции
    </h2>
    <Table
      columns={columns}
      dataSource={interExchangeData}
      pagination={false}
      size="middle"
      bordered
      scroll={{ x: true }}
    />
  </div>
);

export default InterExchangeTable;