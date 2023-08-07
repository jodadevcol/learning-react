import { useState } from 'react'
import { CartIcon } from './Icons'

import './Cart.css'

export function Cart () {
  const [toggleCart, setToggleCart] = useState(false)

  const handleClickCart = () => {
    setToggleCart(!toggleCart)
  }

  return (
    <>
      <aside className='cart-shopping'>
        <button
          className={`cart-shopping--btn cart-shopping--${toggleCart ? 'open' : 'close'}`}
          onClick={handleClickCart}
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
                  <div className='cart-item'>
                    <div className='cart-item--left'>
                      <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='Imagen del Macbook Pro' />
                    </div>

                    <div className='cart-item--right'>
                      <div className='cart-item-right--title'>
                        <span>MacBook Pro - $ <strong>1.340</strong></span>
                      </div>

                      <div className='cart-item-right--qty'>
                        <span>
                          Qty: 1
                        </span>
                        <button>+</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </aside>
    </>

  )
}
