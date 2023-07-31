import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products ({ products }) {
  return (
    <section>
      <ul className='products'>
        {
          products.slice(0, 10).map((product) => (
            <li className='products-item' key={product.id}>
              <article>
                <figure>
                  <img src={product.thumbnail} alt={product.title} />
                </figure>

                <header>
                  <h2>{product.title} - ${product.price}</h2>
                  <div>
                    <button>
                      <AddToCartIcon />
                    </button>
                  </div>
                </header>
              </article>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
