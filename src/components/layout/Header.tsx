import { useState } from 'react';
import { 
  GithubOutlined, 
  MenuOutlined, 
  CloseOutlined,
  HomeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  TeamOutlined
} from '@ant-design/icons';

const Header = ({ activeTab, setActiveTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-3">
                UI
              </div>
              <span className="text-xl font-bold">UIKit Components</span>
            </div>
            
            <nav className="hidden md:ml-10 md:flex space-x-8">
              {['home', 'components', 'documentation', 'about'].map((tab) => (
                <div 
                  key={tab}
                  className={`cursor-pointer px-3 py-2 text-sm font-medium ${activeTab === tab ? 'text-primary' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center">
            <a href="https://github.com" className="text-gray-500 hover:text-gray-900 p-2">
              <GithubOutlined className="text-xl" />
            </a>
            
            <div className="md:hidden ml-4">
              <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100">
                {mobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['home', 'components', 'documentation', 'about'].map((tab) => (
                <div 
                  key={tab}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${activeTab === tab ? 'bg-indigo-50 text-primary' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;