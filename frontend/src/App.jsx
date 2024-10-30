import React from "react";
import { SessionProvider } from "./context/SesionProvider.jsx"; // Verifica la ruta y la implementación
import { useSession } from "./hooks/UseSession.jsx"; // Asegúrate de que este hook esté bien definido
import { Login } from "./components/login.jsx"; // Asegúrate de que este componente existe
import { Home } from "./components/home.jsx"; // Asegúrate de que este componente existe

const AppContent = () => {
  const { user, isLoading } = useSession(); // Asegúrate de que useSession funcione correctamente

  // Muestra un spinner mientras se carga la sesión
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  // Muestra Home si el usuario está autenticado, de lo contrario muestra Login
  return user ? <Home /> : <Login />;
};

const App = () => {
  return (
    <SessionProvider>
      <AppContent /> {/* AppContent se renderiza aquí */}
    </SessionProvider>
  );
};

export default App;
