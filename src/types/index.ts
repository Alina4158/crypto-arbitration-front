// Типы данных для таблиц
export interface InterExchangeData {
  key: string;
  currency: string;
  rate: number;
  change: string;
}

export interface IntraExchangeData {
  key: string;
  symbol: string;
  price: number;
  volume: string;
}

// Типы для навигации
export interface MenuItem {
  key: string;
  icon: string;
  label: string;
}

export type MenuKey = '1' | '2' | '3';