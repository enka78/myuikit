const FrameworkSupport = () => (
  <section className="py-16 px-6 lg:px-16 bg-gray-50">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        Works With Your Framework
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Our components are designed to work seamlessly with popular JavaScript
        frameworks, giving you flexibility without compromise.
      </p>
    </div>
    <div className="flex justify-center gap-8 lg:gap-16 flex-wrap">
      <div className="flex flex-col items-center">
        <i className="fab fa-react text-5xl text-blue-500 mb-4"></i>
        <h3 className="text-xl font-semibold text-gray-900">React</h3>
      </div>
      <div className="flex flex-col items-center">
        <i className="fab fa-vuejs text-5xl text-green-500 mb-4"></i>
        <h3 className="text-xl font-semibold text-gray-900">Vue.js</h3>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold mb-4 text-black">N</div>
        <h3 className="text-xl font-semibold text-gray-900">Next.js</h3>
      </div>
      <div className="flex flex-col items-center">
        <i className="fab fa-angular text-5xl text-red-500 mb-4"></i>
        <h3 className="text-xl font-semibold text-gray-900">Angular</h3>
      </div>
      <div className="flex flex-col items-center">
        <i className="fab fa-js text-5xl text-yellow-500 mb-4"></i>
        <h3 className="text-xl font-semibold text-gray-900">Vanilla JS</h3>
      </div>
    </div>
  </section>
);

export default FrameworkSupport;
