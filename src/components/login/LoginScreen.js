import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // luego de loguearse redirecciona a '/marvel'
    // { replace: true } reemplaza la ruta anterior por '/marvel'
    navigate("/marvel", { replace: true });

    const action = {
      type: types.login,
      payload: { name: "Franco" },
    };

    // Despacha una accion de tipo login con la propiedad nombre

    dispatch(action);
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
