import { useState, useEffect } from 'react';
import * as echarts from 'echarts';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Components from './pages/Components';
import Documentation from './pages/Documentation';
import About from './pages/About';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [copiedStates, setCopiedStates] = useState({});

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedStates({...copiedStates, [id]: true});
    setTimeout(() => setCopiedStates({...copiedStates, [id]: false}), 2000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <Home setActiveTab={setActiveTab} />;
      case 'components': return <Components />;
      case 'documentation': return <Documentation />;
      case 'about': return <About />;
      default: return <div>Page not found</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default App;