import { useState, createContext } from 'react'

// 1. Crear el contexto
export const CartContext = createContext()

// 2. Crear el provider del contexto
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addCart = (product) => {
    // verificar product
    const indexProductInCart = cart.findIndex(item => item.id === product.id)

    if (indexProductInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[indexProductInCart].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([])
  }

  const checkProductInCart = ({ product }) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addCart,
      clearCart,
      checkProductInCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
