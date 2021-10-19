
//
const reducer = (globalState, action) => {

  switch (action.type) {
    case "OBTENER_EQUIPOS":
      return {
        ...globalState,
        equipment: action.payload,
      }
    default:
      return globalState;
  }
}

export default reducer;