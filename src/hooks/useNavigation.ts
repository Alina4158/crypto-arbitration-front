import { useState } from 'react';
import type {MenuKey} from '../types';

export const useNavigation = (initialKey: MenuKey = '1') => {
  const [selectedKey, setSelectedKey] = useState<MenuKey>(initialKey);

  const handleSelect = (key: string) => {
    setSelectedKey(key as MenuKey);
  };

  return {
    selectedKey,
    setSelectedKey: handleSelect,
  };
};