import React from 'react'; // Импорт библиотеки React для возможности создавать React-компоненты и использовать JSX
import { Layout, Menu } from 'antd'; // Импорт компонентов Layout и Menu из библиотеки Ant Design для построения интерфейса
import type {MenuKey} from '../../types'; // Импорт типа MenuKey для типизации
// Импорт типа MenuKey для типизации

const { Sider } = Layout; // Деструктуризация: выделяем компонент Sider из Layout для удобства использования в коде

// Интерфейс для пропсов компонента Sidebar
interface SidebarProps {
  selectedKey: MenuKey;           // Текущий выбранный ключ меню
  onSelect: (key: string) => void; // Функция-обработчик выбора пункта меню
}

// Объявление функционального React-компонента Sidebar с типизацией
const Sidebar: React.FC<SidebarProps> = ({ selectedKey, onSelect }) => {
  // Определение массива объектов, описывающих пункты меню для Sidebar
  const items = [
    {
      key: '1', // Уникальный ключ для первого пункта меню
      label: 'Межбиржевые', // Текстовая метка первого пункта меню
    },
    {
      key: '2', // Ключ второго пункта меню
      label: 'Внутрибиржевые', // Метка второго пункта меню
    },
  ];

  return (
    // Компонент Sider с шириной 200px и CSS классом для оформления
    <Sider width={200} className="site-layout-background">
      {/* Меню с вертикальной ориентацией (inline) */}
      <Menu
        mode="inline"                    // Вертикальная ориентация меню
        selectedKeys={[selectedKey]}     // Массив выбранных ключей для подсветки
        items={items}                    // Пункты меню из массива items
        onSelect={({ key }) => onSelect(key)} // Обработчик выбора пункта меню
      />
    </Sider>
  );
};

export default Sidebar; // Экспорт компонента Sidebar по умолчанию для использования в других частях приложения