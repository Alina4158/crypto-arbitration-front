import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/MainContent/MainContent';
import { useNavigation } from './hooks/useNavigation';
import './App.css';

const App: React.FC = () => {
  const { selectedKey, setSelectedKey } = useNavigation();

  return (
    <Layout style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Navbar />
      <Layout>
        <Sidebar
          selectedKey={selectedKey}
          onSelect={setSelectedKey}
        />
        <Content selectedKey={selectedKey} />
      </Layout>
    </Layout>
  );
};

export default App;