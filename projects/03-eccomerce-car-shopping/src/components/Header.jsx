import { Filters } from './Filters'

export function Header() {
  return (
    <header>
      <h1 className='font-bold text-3xl text-white'>Shopping cart 🛒</h1>

      <Filters />
    </header>
  )
}
