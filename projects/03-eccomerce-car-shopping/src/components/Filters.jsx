import { useId, useState } from 'react'
import { useFilters } from '../hooks/useFilters'
import { CATEGORY_OPTIONS } from '../const/filters'

export function Filters() {
  const { setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const hanflerFilterChange = (event) => {
    const target = event.target

    if (target.type === 'range') {
      setMinPrice(target.value)
      setFilters((prevFilters) => ({ ...prevFilters, minPrice: Number(target.value) }))
    }

    if (target.type === 'select-one') {
      setFilters((prevFilters) => ({ ...prevFilters, category: target.value }))
    }
  }

  return (
    <section className='mt-5'>
      <div className='flex items-center justify-center gap-x-5 w-full max-w-[80%] mx-auto'>
        <div className='flex items-center justify-center gap-2 flex-grow w-full '>
          <label className='font-bold text-sm text-white/80' htmlFor={minPriceFilterId}>
            Price
          </label>
          <input type='range' id={minPriceFilterId} min='0' max='1000' onChange={hanflerFilterChange} />
          <span className='font-bold text-sm text-white/80'> ${minPrice}</span>
        </div>

        <div className='flex items-center justify-center gap-2 flex-grow w-full '>
          <label className='font-bold text-sm text-white/80' htmlFor={categoryFilterId}>
            Category
          </label>
          <select name='category' id={categoryFilterId} onChange={hanflerFilterChange}>
            {Object.entries(CATEGORY_OPTIONS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}
