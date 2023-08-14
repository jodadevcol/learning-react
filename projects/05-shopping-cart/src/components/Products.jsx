import { useCart } from '../hooks/useCart'
import { ProductItem } from './ProductItem'
import './Products.css'

export function Products ({ products }) {
  const { addToCart } = useCart()

  // const checkProductInCart = ({ id }) => {
  //   return cart.some(item => item.id === id)
  // }

  return (
    <section>
      <ul className='products'>
        {
          products.slice(0, 10).map((product) => {
            // const isProductInCart = checkProductInCart({ product })

            return (
              <li className='products-item' key={product.id}>
                <ProductItem
                  title={product.title}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  actionClick={() => addToCart(product)}
                />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
