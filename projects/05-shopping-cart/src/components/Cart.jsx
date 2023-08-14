import { useState } from 'react'
import { CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

import './Cart.css'
import { CartItem } from './CartItem'

export function Cart () {
  const { cart, addToCart, clearCart } = useCart()
  const [toggleCart, setToggleCart] = useState(false)

  const handleClickToggleCart = () => {
    setToggleCart(!toggleCart)
  }

  const handleClickClearCart = () => {
    clearCart()
  }

  return (
    <>
      <aside className='cart-shopping'>
        <button
          className={`cart-shopping--btn cart-shopping--${toggleCart ? 'open' : 'close'}`}
          onClick={handleClickToggleCart}
        >
          <CartIcon />
        </button>
      </aside>

      <aside className={`cart-shop ${toggleCart ? 'visible' : 'hidden'}`}>
        <div className={`cart-wrapper ${toggleCart ? 'opened' : 'closed'}`}>
          <div className={`cart-content ${toggleCart ? 'cart-open' : 'cart-close'}`}>
            <article className='cart-content--wrap'>
              <ul className='cart-content--list'>
                <li className='cart-content--item'>
                  {
                    cart.map(product => {
                      return (
                        <CartItem
                          key={product.id}
                          addToCart={() => addToCart(product)}
                          {...product}
                        />
                      )
                    })
                  }
                </li>
              </ul>

              <footer>
                <button onClick={handleClickClearCart}>
                  Clear to cart
                </button>
              </footer>
            </article>
          </div>
        </div>
      </aside>
    </>

  )
}
