
// Estado Global
import React, { useReducer } from "react";

import axiosClient from "../../../config/axios"
import EquipContext from "./EquipContext";
import EquipReducer from "./EquipReducer";

const EquipState = (props) => {

  // 1 -- Estado inicial
  const initialState = {
    equipment: [],
  }

  // 2-- Reducers
  const [globalState, dispatch] = useReducer(EquipReducer, initialState);

  // 3 -- Funciones API / conexión a reducers (dispatch)
  const getAllEquipment = async () => {

    try {

      const res = await axiosClient.get("/api/equipment/get-all");

      const equipmentFromDB = res.data.data;

      console.log(equipmentFromDB);

      dispatch({
        type: "OBTENER_EQUIPOS",
        payload: equipmentFromDB,
      })

    } catch (error) {
      console.log(`Hubo un error al traer los equipos de la DB: ${error}`);
    }
  }

  // 4 -- Retorno - Envío de datos a los componentes
  return (
    <EquipContext.Provider
      value={{
        equipment: globalState.equipment,
        getAllEquipment,
      }}
    >
      {props.children}
    </EquipContext.Provider>
  )
}

export default EquipState