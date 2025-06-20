const HeroSection = ({ setActiveTab }) => {
  return (
    <section className="py-16 text-center bg-gradient-to-r from-primary to-secondary">
      <h1 className="text-5xl font-bold mb-4 text-white drop-shadow">
        Welcome to UIKit Components
      </h1>
      <p className="text-xl mb-8 text-white/90">
        Modern, reusable, ve kolay entegre edilebilen UI bileşenleri.
      </p>
      <button
        className="bg-white text-primary font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        onClick={() => setActiveTab && setActiveTab("components")}
      >
        Bileşenleri Keşfet
      </button>
    </section>
  );
};

export default HeroSection;
