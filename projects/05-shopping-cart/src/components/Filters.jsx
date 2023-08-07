import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // HUELE MAL
    // se esta pasando por las props la funcion
    // nativa de react a un componente hijo
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='shop-filters'>
      <div className='shop-filters--filter'>
        <label htmlFor={minPriceFilterId}>
          Price
          <input type='range' name={minPriceFilterId} id={minPriceFilterId} min='0' max='2000' value={filters.minPrice} onChange={handleChangeMinPrice} />
        </label>

        <span>${filters.minPrice}</span>
      </div>

      <div className='shop-filters--filter'>
        <label htmlFor={categoryFilterId}>
          Category

          <select name={categoryFilterId} id={categoryFilterId} onChange={handleChangeCategory}>
            <option value='all'>All</option>
            <option value='laptops'>Laptops</option>
            <option value='smartphones'>Smartphones</option>
          </select>
        </label>
      </div>
    </section>
  )
}
