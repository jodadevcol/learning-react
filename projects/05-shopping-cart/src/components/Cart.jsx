import { useState } from 'react'
import { CartIcon } from './Icons'

import './Cart.css'

export function Cart () {
  const [toggleCart, setToggleCart] = useState(false)

  const handleClickCart = () => {
    setToggleCart(!toggleCart)
  }

  return (
    <aside className='cart-shop'>
      <div className={`cart-wrapper ${toggleCart ? 'opened' : 'closed'}`}>
        <div className='cart-shopping'>
          <button
            className={`cart-shopping--btn cart-shopping--${toggleCart ? 'open' : 'close'}`}
            onClick={handleClickCart}
          >
            <CartIcon />
          </button>
        </div>

        <div className={`cart-content ${toggleCart ? 'cart-open' : 'cart-close'}`}>
          <article className='cart-content--wrap'>
            <ul className='cart-content--list'>
              <li className='cart-content--item'>
                <div>
                  <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='Imagen del Macbook Pro' />

                  <div>
                    <span>MacBook Pro - $ <strong>1.340</strong></span>
                  </div>

                  <footer>
                    <span>
                      Cantidad: 1
                    </span>
                    <button>+</button>
                  </footer>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </aside>
  )
}
