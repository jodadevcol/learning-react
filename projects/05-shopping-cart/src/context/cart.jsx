import { createContext, useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cartReducer'
import { CART_ACTION_TYPES } from '../const/global'

// 1. Crear el contexto
export const CartContext = createContext()

// 2. Crear el provider del contexto
export function CartProvider ({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: product
  })

  const removeFromCart = (product) => dispatch({
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: product
  })

  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
