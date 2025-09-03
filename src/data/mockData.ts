// Файл с тестовыми данными для таблиц
import type {InterExchangeData, IntraExchangeData} from '../types'; // Импорт типов данных
// Импорт типов данных

// Массив тестовых данных для таблицы межбиржевых операций
export const interExchangeData: InterExchangeData[] = [
  // Данные для доллара США к рублю
  { key: '1', currency: 'USD/RUB', rate: 95.50, change: '+1.2%' },
  // Данные для евро к рублю
  { key: '2', currency: 'EUR/RUB', rate: 103.25, change: '-0.8%' },
  // Данные для китайского юаня к рублю
  { key: '3', currency: 'CNY/RUB', rate: 13.15, change: '+0.5%' },
  // Данные для британского фунта к рублю
  { key: '4', currency: 'GBP/RUB', rate: 120.80, change: '+2.1%' },
];

// Массив тестовых данных для таблицы внутрибиржевых операций
export const intraExchangeData: IntraExchangeData[] = [
  // Данные для акций Сбербанка
  { key: '1', symbol: 'SBER', price: 285.40, volume: '1.2M' },
  // Данные для акций Газпрома
  { key: '2', symbol: 'GAZP', price: 176.85, volume: '890K' },
  // Данные для акций Лукойла
  { key: '3', symbol: 'LKOH', price: 6420.00, volume: '450K' },
  // Данные для акций Яндекса
  { key: '4', symbol: 'YNDX', price: 3850.50, volume: '320K' },
];