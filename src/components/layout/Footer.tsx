const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-3">
                UI
              </div>
              <span className="text-xl font-bold">UIKit Components</span>
            </div>
            <p className="text-gray-300 mb-4">
              Open-source UI components for modern web frameworks.
            </p>
            <div className="flex space-x-4">
              {['github', 'twitter', 'discord'].map((social) => (
                <a key={social} href="#" className="text-gray-400 hover:text-white">
                  <i className={`fab fa-${social} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {['Resources', 'Community', 'Legal'].map((section) => (
            <div key={section}>
              <h3 className="text-lg font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {section} Link {i+1}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">© 2025 UIKit Components. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-300">Supported by:</span>
            {['visa', 'mastercard', 'paypal'].map((payment) => (
              <i key={payment} className={`fab fa-cc-${payment} text-2xl text-gray-300`}></i>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;