import React from "react";
import { useSession } from "../hooks/UseSession.jsx";

export const Home = () => {
  const { user, logout } = useSession();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            ¡Bienvenido, {user?.name}!
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