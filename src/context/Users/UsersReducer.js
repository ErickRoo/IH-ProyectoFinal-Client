
const reducer = (globalState, action) => {

  switch (action.type) {

    case "INICIO_SESION_EXITOSO":
      localStorage.setItem("token", action.payload);
      return {
        ...globalState,
        authStatus: true,
      }

    case "CREAR_USUARIO_EXITOSAMENTE":
      localStorage.setItem("token", action.payload);
      return {
        ...globalState,
        authStatus: false,
      }

    case "OBTENER_USUARIO_POR_TOKEN":
      return {
        ...globalState,
        user: action.payload,
      }

    case "CERRAR_SESION":
      localStorage.removeItem("token");

      return {
        ...globalState,
        user: "",
        authStatus: "",
      }


    default:
      return globalState;
  }
}

export default reducer;