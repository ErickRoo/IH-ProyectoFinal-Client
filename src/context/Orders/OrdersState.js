import React, { useReducer } from "react";
import axiosClient from "../../config/axios";

import OrdersContext from "./OrdersContext";
import OrdersReducer from "./OrdersReducer";

const OrdersState = (props) => {

  // 1 -- Estado inicial
  const initialState = {
    order: {
      name: null,
      surname: null,
      email: null,
      startDate: null,
      endDate: null,
      phone: null,
      company: null,
      state: null,
      city: null,
      zip: null,
      message: null,
    }
  }

  // 2 -- Reducers
  const [globalState, dispatch] = useReducer(OrdersReducer, initialState);

  // 3 -- Funciones API / conexión a reducers (dispatch)
  // Crear orden de COMPRA/RENTA
  const createOrder = async (dataForm) => {

    try {
      const res = await axiosClient.post("/api/purchase-rent-order/create-purchase", dataForm);
      console.log(res);

    } catch (error) {
      console.log(`Hubo un error al crear la orden: ${error}`);
    }
  }

  // 4 -- Retorno - envío de datos a los componentes
  return (
    <OrdersContext.Provider
      value={{
        createOrder,
      }}
    >
      {props.children}
    </OrdersContext.Provider>
  )
}

export default OrdersState;