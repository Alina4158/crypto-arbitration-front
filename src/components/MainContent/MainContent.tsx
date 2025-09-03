import React from 'react'; // Импорт библиотеки React для возможности создавать React-компоненты и использовать JSX
import { Layout } from 'antd'; // Импорт компонента Layout из библиотеки Ant Design
import type {MenuKey} from '../../types'; // Импорт типа MenuKey для типизации
// Импорт типа MenuKey для типизации
import InterExchangeTable from './Tables/InterExchangeTable'; // Импорт компонента таблицы межбиржевых операций
import IntraExchangeTable from './Tables/IntraExchangeTable'; // Импорт компонента таблицы внутрибиржевых операций

const { Content } = Layout; // Деструктуризация: выделяем компонент Content из Layout для удобства использования

// Интерфейс для пропсов компонента
interface CustomContentProps {
  selectedKey: MenuKey; // Выбранный ключ меню для отображения соответствующего контента
}

// Объявление функционального React-компонента CustomContent с типизацией React.FC
const CustomContent: React.FC<CustomContentProps> = ({ selectedKey }) => {
  // Функция для условного рендеринга контента в зависимости от выбранного пункта меню
  const renderContent = () => {
    // Switch-case для определения какой контент показывать
    switch (selectedKey) {
      case '1': // Если выбран первый пункт меню (Межбиржевые)
        return <InterExchangeTable />; // Отображаем таблицу межбиржевых операций
      case '2': // Если выбран второй пункт меню (Внутрибиржевые)
        return <IntraExchangeTable />; // Отображаем таблицу внутрибиржевых операций
      default: // Если ключ не распознан
        return (
          <div>
            <h1>Основное содержимое</h1> {/* Заголовок по умолчанию */}
            <p>Выберите пункт меню для отображения данных.</p> {/* Инструкция пользователю */}
          </div>
        );
    }
  };

  return (
    // Компонент Content с настройками стилей
    <Content
      style={{
        padding: 24,        // Внутренний отступ (padding) в 24 пикселя
        margin: 0,          // Отсутствие внешних отступов (margin)
        minHeight: 280,     // Минимальная высота области контента — 280 пикселей
        background: '#fff', // Фоновый цвет — белый
      }}
    >
      {renderContent()} {/* Вызов функции для отображения соответствующего контента */}
    </Content>
  );
};

export default CustomContent; // Экспорт компонента CustomContent по умолчанию для использования в других частях приложения