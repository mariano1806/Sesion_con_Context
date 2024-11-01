import React, { useState, useEffect } from "react";
import { useSession } from "../hooks/UseSession";

export const Home = () => {
  const { user, logout } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos una carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
        <div className="text-white text-2xl">
          <svg
            className="animate-spin -ml-1 mr-3 h-10 w-10 text-white inline-block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Cargando...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ¡Bienvenido, {user?.username}!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Has iniciado sesión correctamente.
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={logout}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};
