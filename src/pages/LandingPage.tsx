export const LandingPage = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">Movemos el mundo</h1>
      <p className="text-xl text-gray-600 mb-8">
        Soluciones logísticas integrales para empresas exigentes. (Nadie sospechará nada).
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
        <div className="p-6 bg-white shadow rounded">✈️ Aéreo</div>
        <div className="p-6 bg-white shadow rounded">🚛 Terrestre</div>
        <div className="p-6 bg-white shadow rounded">🚢 Marítimo</div>
      </div>
    </div>
  );
};