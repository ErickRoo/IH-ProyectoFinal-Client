// Estado Global
// Gestionar
// Conectar con BACKEND APIs (nuestros o de terceros)

import React, { useReducer } from "react";
// import axiosStripe from ""

import CartReducer from "./CartReducer";
import CartContext from "./CartContext";

const CartState = (props) => {

  // 1 -- Estado Inicial
  const initialState = {
    cartItems: [],
    itemCount: 0,
    total: 0
  }

  // 2 -- Reducer - Función de cambio autorizada
  const [globalState, dispatch] = useReducer(CartReducer, initialState);
  console.log(globalState);

  // 3 -- Funciones API / conexión a REDUCERs (dispatch)
  const addProduct = async (product) => {

    try {
      dispatch({

        type: "SUMAR_PRODUCTO",
        payload: product
      });

    } catch (error) {
      console.log(`Hubo un error al añadir producto al carrito: ${error}`);
    }
  }

  // 4 -- Retorno - envío de datos a los componentes
  return (
    <CartContext.Provider
      value={{
        cart: globalState,
        addProduct,
      }}>

      {props.children}

    </CartContext.Provider>
  )

}

export default CartState;
