const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Öne Çıkan Özellikler
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Hızlı ve Hafif</h3>
            <p>
              Performans odaklı, modern web için optimize edilmiş bileşenler.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold mb-2">
              Kolay Özelleştirilebilir
            </h3>
            <p>Tailwind ile kolayca stil verin, kendi temanızı oluşturun.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow text-center">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold mb-2">Entegre Edilebilir</h3>
            <p>React, Vue, Next.js gibi popüler frameworklerle uyumlu.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
