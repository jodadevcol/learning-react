export function CartItem ({ title, price, thumbnail, quantity, addToCart }) {
  return (
    <div className='cart-item'>
      <div className='cart-item--left'>
        <img src={thumbnail} alt={title} />
      </div>

      <div className='cart-item--right'>
        <div className='cart-item-right--title'>
          <span>{title} - $ <strong>{price}</strong></span>
        </div>

        <div className='cart-item-right--qty'>
          <span>
            Qty: {quantity}
          </span>
          <button onClick={addToCart}>+</button>
        </div>
      </div>
    </div>
  )
}
