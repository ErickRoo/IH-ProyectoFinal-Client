
// Estado Global
import React, { useReducer } from "react";

import axiosClient from "../../config/axios"
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
  // OBTENER equipos
  const getAllEquipment = async () => {

    try {

      const res = await axiosClient.get("/api/equipment/get-all");

      const equipmentFromDB = res.data.data;

      dispatch({
        type: "OBTENER_EQUIPOS",
        payload: equipmentFromDB,
      })

    } catch (error) {
      console.log(`Hubo un error al traer los equipos de la DB: ${error}`);
    }
  }

  //CREAR equipo
  const createEquipment = async (dataForm) => {

    try {
      const res = await axiosClient.post("/api/equipment/create-equipment", dataForm);
      console.log(res);
      return getAllEquipment();

    } catch (error) {
      console.log(`Hubo un error al crear un equipo: ${error}`);

    }
  }

  // EDITAR equipo
  const editEquipment = async (dataForm) => {

    try {
      await axiosClient.put("/api/equipment/edit-equipment", dataForm)
    } catch (error) {
      console.log(`Hubo un error al editar el producto: ${error}`);
    }
  }

  // BORRAR equipo
  const deleteEquipment = async (id) => {
    console.log(id);
    try {
      await axiosClient.delete("/api/equipment/delete-equipment", {
        data: id
      });
      getAllEquipment();
    } catch (error) {
      console.log(`Hubo un error al borrar producto: ${error}`);
    }
  }

  // 4 -- Retorno - Envío de datos a los componentes
  return (
    <EquipContext.Provider
      value={{
        equipment: globalState.equipment,
        getAllEquipment,
        createEquipment,
        editEquipment,
        deleteEquipment,
      }}
    >
      {props.children}
    </EquipContext.Provider>
  )
}

export default EquipState