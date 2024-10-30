import { useContext } from "react";
import { SessionContext } from "../context/SesionProvider";

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("useSession debe ser usado dentro de un SessionProvider");
  }
  return context;
};
