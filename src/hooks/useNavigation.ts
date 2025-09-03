// Кастомный хук для управления навигацией между пунктами меню
import { useState } from 'react'; // Импорт хука useState из React

// Тип для ключей меню - ограничиваем возможные значения
export type MenuKey = '1' | '2';

// Кастомный хук для управления состоянием навигации
export const useNavigation = (initialKey: MenuKey = '1') => {
  // Состояние для хранения выбранного ключа меню
  const [selectedKey, setSelectedKey] = useState<MenuKey>(initialKey);

  // Функция для обработки выбора пункта меню
  const handleSelect = (key: string) => {
    // Приводим строку к типу MenuKey для типобезопасности
    setSelectedKey(key as MenuKey);
  };

  // Возвращаем объект с текущим состоянием и функцией для его изменения
  return {
    selectedKey,        // Текущий выбранный ключ
    setSelectedKey: handleSelect, // Функция для изменения выбранного ключа
  };
};