import { Link, Outlet } from "react-router-dom";

export const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans">
      {/* Navbar de "Empresa Aburrida" */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">📦 Global Logistics</span>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-600">Inicio</Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Portal Empleados
          </Link>
        </div>
      </nav>

      {/* Contenido de la página */}
      <main className="flex-grow max-w-4xl mx-auto p-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4 text-sm">
        © 2024 Global Logistics - Envíos seguros
      </footer>
    </div>
  );
};