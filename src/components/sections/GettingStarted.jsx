const GettingStarted = ({ setActiveTab }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Hızlı Başlangıç</h2>
        <p className="text-lg mb-8">
          Aşağıdaki adımları izleyerek projene UIKit bileşenlerini
          ekleyebilirsin.
        </p>
        <ol className="text-left max-w-xl mx-auto space-y-4">
          <li>
            <span className="font-semibold">1. Paket Kurulumu:</span>
            <pre className="bg-gray-100 rounded p-2 mt-1">
              npm install @uikit/components
            </pre>
          </li>
          <li>
            <span className="font-semibold">2. Kullanım:</span>
            <pre className="bg-gray-100 rounded p-2 mt-1">
              import &#123; Button &#125; from '@uikit/components';
            </pre>
          </li>
        </ol>
        <button
          className="mt-8 bg-primary text-white px-8 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          onClick={() => setActiveTab && setActiveTab("documentation")}
        >
          Detaylı Dokümantasyon
        </button>
      </div>
    </section>
  );
};

export default GettingStarted;
