import React, { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Inicializar como true

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false); // Cambiar a false después de la verificación
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch("https://api.example.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Error de inicio de sesión");
      }

      const userData = await response.json();
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      throw error; // Aquí podrías manejar el error de otra manera si lo deseas
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <SessionContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
};
