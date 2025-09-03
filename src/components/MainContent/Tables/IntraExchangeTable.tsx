// Компонент таблицы внутрибиржевых операций
import React from 'react'; // Импорт React для создания компонента
import { Table } from 'antd'; // Импорт компонента Table из Ant Design
import type { ColumnsType } from 'antd/es/table'; // Импорт типа для конфигурации колонок
import type {IntraExchangeData} from '../../../types'; // Импорт типа данных
// Импорт типа данных
import { intraExchangeData } from '../../../data/mockData'; // Импорт тестовых данных

// Конфигурация колонок для таблицы внутрибиржевых операций
const columns: ColumnsType<IntraExchangeData> = [
  {
    title: 'Тикер',           // Заголовок первой колонки
    dataIndex: 'symbol',      // Поле из данных для отображения
    key: 'symbol',            // Уникальный ключ колонки
  },
  {
    title: 'Цена',            // Заголовок второй колонки
    dataIndex: 'price',       // Поле из данных для отображения
    key: 'price',             // Уникальный ключ колонки
    // Функция для кастомного отображения цены
    render: (price: number) => `${price.toFixed(2)} ₽`, // Форматируем до 2 знаков + рубль
  },
  {
    title: 'Объем',           // Заголовок третьей колонки
    dataIndex: 'volume',      // Поле из данных для отображения
    key: 'volume',            // Уникальный ключ колонки
  },
];

// Функциональный компонент таблицы внутрибиржевых операций
const IntraExchangeTable: React.FC = () => (
  <div>
    {/* Заголовок таблицы */}
    <h2>Внутрибиржевые операции</h2>
    {/* Компонент таблицы Ant Design */}
    <Table
      columns={columns}             // Конфигурация колонок
      dataSource={intraExchangeData} // Данные для отображения
      pagination={false}            // Отключение пагинации
      size="middle"                 // Средний размер строк таблицы
    />
  </div>
);

export default IntraExchangeTable; // Экспорт компонента