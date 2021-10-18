export const sumItems = (cartItems) => {
  return ({
    itemCount: cartItems.reduce((total, prod) => {
      return total + prod.quantity
    }, 0),
    total: cartItems.reduce((total, prod) => {
      return (total + (prod.price * prod.quiantity))
    }, 0)
  })
}
const reducer = (globalState, action) => {

  switch (action.type) {
    case "SUMAR_PRODUCTO":
      if (!globalState.cartItems.find(item => item.id === action.payload.id)) {
        globalState.cartItems.push(
          {
            ...action.payload,
            quantity: 1,
          }
        )

        return (
          {
            ...globalState,
            cartItems: [...globalState.cartItems],
            ...sumItems(globalState.cartItems)
          }
        )
      }
    default:
      return globalState;
  }
}

export default reducer;