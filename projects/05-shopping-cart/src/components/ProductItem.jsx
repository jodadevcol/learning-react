import { AddToCartIcon } from './Icons'

export function ProductItem ({ title, price, thumbnail, actionClick }) {
  return (
    <article>
      <figure>
        <img src={thumbnail} alt={title} />
      </figure>

      <header>
        <h2>{title} - ${price}</h2>
        <div>
          <button onClick={actionClick}>
            <AddToCartIcon />
          </button>
        </div>
      </header>
    </article>
  )
}
