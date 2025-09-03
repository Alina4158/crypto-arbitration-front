import type {InterExchangeData, IntraExchangeData, MenuItem} from '../types';

export const interExchangeData: InterExchangeData[] = [
  { key: '1', currency: 'USD/RUB', rate: 95.50, change: '+1.2%' },
  { key: '2', currency: 'EUR/RUB', rate: 103.25, change: '-0.8%' },
  { key: '3', currency: 'CNY/RUB', rate: 13.15, change: '+0.5%' },
  { key: '4', currency: 'GBP/RUB', rate: 120.80, change: '+2.1%' },
  { key: '5', currency: 'JPY/RUB', rate: 0.63, change: '+0.3%' },
];

export const intraExchangeData: IntraExchangeData[] = [
  { key: '1', symbol: 'SBER', price: 285.40, volume: '1.2M' },
  { key: '2', symbol: 'GAZP', price: 176.85, volume: '890K' },
  { key: '3', symbol: 'LKOH', price: 6420.00, volume: '450K' },
  { key: '4', symbol: 'YNDX', price: 3850.50, volume: '320K' },
  { key: '5', symbol: 'ROSN', price: 564.20, volume: '680K' },
];

export const menuItems: MenuItem[] = [
  { key: '1', icon: '📊', label: 'Межбиржевые' },
  { key: '2', icon: '📈', label: 'Внутрибиржевые' },
];