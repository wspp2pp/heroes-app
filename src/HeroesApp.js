import { useEffect, useReducer } from "react";
import { AuthContext } from "./auth/authContext";
import { authReducer } from "./auth/authReducer";
import { AppRouter } from "./components/routers/AppRouter";

const init = () => {
  // valor inicial { logged: false }, si hay usuario guardado, lo retorno
  return JSON.parse(localStorage.getItem("user")) || { logged: false };
};

export const HeroesApp = () => {
  // Toma el user y el dispath de authReducer, proporcionando un valor inicial

  const [user, dispatch] = useReducer(authReducer, {}, init);

  // Si no hay usuario, salgo, sino agrego el usuario al locarstorage

  useEffect(() => {
    if (!user) return;
    // Si el usuario esta logeado, lo guardo en memoria
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    // .Provider provee a sus hijos su información
    <AuthContext.Provider
      value={{
        user,
        dispatch,
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  );
};
