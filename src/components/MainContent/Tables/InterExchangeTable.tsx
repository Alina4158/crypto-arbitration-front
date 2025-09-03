// Компонент таблицы межбиржевых операций
import React from 'react'; // Импорт React для создания компонента
import { Table } from 'antd'; // Импорт компонента Table из Ant Design
import type { ColumnsType } from 'antd/es/table'; // Импорт типа для конфигурации колонок
import type {InterExchangeData} from '../../../types'; // Импорт типа данных
// Импорт типа данных
import { interExchangeData } from '../../../data/mockData'; // Импорт тестовых данных

// Конфигурация колонок для таблицы межбиржевых операций
const columns: ColumnsType<InterExchangeData> = [
  {
    title: 'Валютная пара',    // Заголовок первой колонки
    dataIndex: 'currency',     // Поле из данных для отображения
    key: 'currency',           // Уникальный ключ колонки
  },
  {
    title: 'Курс',             // Заголовок второй колонки
    dataIndex: 'rate',         // Поле из данных для отображения
    key: 'rate',               // Уникальный ключ колонки
    // Функция для кастомного отображения значения курса
    render: (rate: number) => `${rate.toFixed(2)} ₽`, // Форматируем до 2 знаков + рубль
  },
  {
    title: 'Изменение',        // Заголовок третьей колонки
    dataIndex: 'change',       // Поле из данных для отображения
    key: 'change',             // Уникальный ключ колонки
    // Функция для кастомного отображения с цветовой индикацией
    render: (change: string) => (
      // Возвращаем span с условным цветом
      <span style={{
        // Зеленый цвет для положительных, красный для отрицательных изменений
        color: change.startsWith('+') ? '#52c41a' : '#f5222d'
      }}>
        {change} {/* Отображаем значение изменения */}
      </span>
    ),
  },
];

// Функциональный компонент таблицы межбиржевых операций
const InterExchangeTable: React.FC = () => (
  <div>
    {/* Заголовок таблицы */}
    <h2>Межбиржевые операции</h2>
    {/* Компонент таблицы Ant Design */}
    <Table
      columns={columns}              // Конфигурация колонок
      dataSource={interExchangeData} // Данные для отображения
      pagination={false}             // Отключение пагинации
      size="middle"                  // Средний размер строк таблицы
    />
  </div>
);

export default InterExchangeTable; // Экспорт компонента