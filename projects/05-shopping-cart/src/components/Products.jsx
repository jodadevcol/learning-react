import { useCart } from '../hooks/useCart'
import { AddToCartIcon, RemoveCart } from './Icons'
import './Products.css'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkProductInCart = ({ id }) => {
    return cart.some(item => item.id === id)
  }

  return (
    <section>
      <ul className='products'>
        {
          products.slice(0, 10).map((product) => {
            const isProductInCart = checkProductInCart({ product })

            return (
              <li className='products-item' key={product.id}>
                <article>
                  <figure>
                    <img src={product.thumbnail} alt={product.title} />
                  </figure>

                  <header>
                    <h2>{product.title} - ${product.price}</h2>
                    <div>
                      <button onClick={() => {
                        isProductInCart
                          ? removeFromCart(product)
                          : addToCart(product)
                      }}
                      >
                        {
                          isProductInCart
                            ? <RemoveCart />
                            : <AddToCartIcon />
                        }
                      </button>
                    </div>
                  </header>
                </article>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
