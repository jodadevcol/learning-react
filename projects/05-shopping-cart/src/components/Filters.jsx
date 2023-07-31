import { useId, useState } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)

    onChange(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    // HUELE MAL
    // se esta pasando por las props la funcion
    // nativa de react a un componente hijo
    onChange(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='shop-filters'>
      <div className='shop-filters--filter'>
        <label htmlFor={minPriceFilterId}>
          Price
          <input type='range' name={minPriceFilterId} id={minPriceFilterId} min='0' max='2000' onChange={handleChangeMinPrice} />
        </label>

        <span>${minPrice}</span>
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
