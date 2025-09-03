// Файл с определением всех типов данных приложения

// Интерфейс для данных межбиржевых операций
export interface InterExchangeData {
  key: string;      // Уникальный ключ строки для Ant Design Table
  currency: string; // Название валютной пары (например, "USD/RUB")
  rate: number;     // Курс валюты в рублях
  change: string;   // Процентное изменение курса (например, "+1.2%")
}

// Интерфейс для данных внутрибиржевых операций
export interface IntraExchangeData {
  key: string;    // Уникальный ключ строки для Ant Design Table
  symbol: string; // Тикер акции (например, "SBER")
  price: number;  // Цена акции в рублях
  volume: string; // Объем торгов (например, "1.2M")
}

// Тип для ключей пунктов меню
export type MenuKey = '1' | '2';