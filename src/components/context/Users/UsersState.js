
// Estado Global
import React, { useReducer } from "react";
import axiosClient from "../../../config/axios";

import UsersContext from "./UsersContext";
import UsersReducer from "./UsersReducer";

const UsersState = (props) => {

  // 1 -- Estado inicial
  const initialState = {
    user: {
      _id: null,
      username: null,
      email: null,
      rol: null,
    },
    authStatus: false,
  };

  // 2 -- Reducers
  const [globalState, dispatch] = useReducer(UsersReducer, initialState);

  // 3 -- Funciones API / conexión a reducers (dispatch)
  // REGISTRAR USUARIO
  const registerUser = async (dataForm) => {

    try {
      const res = await axiosClient.post("/api/users/create-user", dataForm);
      const token = res.data.data.token;

      dispatch({
        type: "CREAR_USUARIO_EXITOSAMENTE",
        payload: token,
      });

    } catch (error) {
      console.log(`Hubo un error al crear usuario: ${error}`);

    }
  }

  // INICIO DE SESIÓN
  const loginUser = async (dataForm) => {

    try {
      const res = await axiosClient.post("/api/auth/login", dataForm)
      const token = res.data.data.token;

      dispatch({
        type: "INICIO_SESION_EXITOSO",
        payload: token,
      });

    } catch (error) {
      console.log(`Hubo un error al inciar sesión: ${error}`);

    }
  }

  // VERIFICACIÓN DE SESIÓN - GET
  const tokenVerification = async () => {

    // Get de token
    const token = localStorage.getItem("token");

    // Verificación de existencia 
    if (!token) {
      console.log("Borrando token de los headers.");
      delete axiosClient.defaults.headers.common["x-auth-token"];
    }

    // Add token al header
    axiosClient.defaults.headers.common["x-auth-token"] = token;

    // Hacer la petición
    try {
      const res = await axiosClient.get("/api/auth/verifying-token");
      const currentUser = res.data.data.user;

      dispatch({
        type: "OBTENER_USUARIO_POR_TOKEN",
        payload: currentUser,
      });

    } catch (error) {
      console.log(`Hubo un error al verificar el token: ${error}`);

    }
  }

  // LOGOUT
  const logoutUser = async () => {

    dispatch({
      type: "CERRAR_SESION",
    });
  }

  // Retorno - envio de datos a los componentes
  return (
    <UsersContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        tokenVerification,
        logoutUser
      }}>
      {props.children}
    </UsersContext.Provider>
  )
}

export default UsersState;