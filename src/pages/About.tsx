const About = () => {
  return (
    <div className="min-h-screen py-12 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About UIKit Components</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our mission is to empower developers with beautiful, accessible, and 
          performant UI components.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Our Story</h2>
          <p className="text-gray-700 mb-4">
            UIKit Components started in 2023 with a simple goal: to create a 
            comprehensive library of UI components that developers could use to 
            build beautiful applications faster.
          </p>
          <p className="text-gray-700">
            Today, we're used by over 50,000 developers worldwide and have 
            become one of the most popular open-source UI libraries on GitHub.
          </p>
        </div>
        
        <div className="bg-gray-100 rounded-xl p-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { value: '50K+', label: 'Developers' },
              { value: '120+', label: 'Components' },
              { value: '4.8★', label: 'Rating' },
              { value: '1.5M+', label: 'Downloads' },
              { value: '98%', label: 'Satisfaction' },
              { value: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="text-center">
              <div className="w-32 h-32 mx-auto bg-gray-200 rounded-full mb-4" />
              <h3 className="text-xl font-semibold">Team Member {i+1}</h3>
              <p className="text-gray-600 mb-2">Position</p>
              <div className="flex justify-center space-x-4">
                {['twitter', 'github', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-500 hover:text-primary">
                    <i className={`fab fa-${social} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-gray-700 mb-6 max-w-2xl">
          Contribute to our open-source project, share your feedback, 
          and help us build the best UI component library.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
            Contribute on GitHub
          </button>
          <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-indigo-50 transition">
            Join Discord Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;