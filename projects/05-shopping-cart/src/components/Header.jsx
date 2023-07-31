import { Filters } from './Filters.jsx'

import './Header.css'

export function Header ({ onChange }) {
  return (
    <header className='shop-hero'>
      <h1 className='shop-hero--title'>Shopping Cart</h1>

      <Filters onChange={onChange} />
    </header>
  )
}
