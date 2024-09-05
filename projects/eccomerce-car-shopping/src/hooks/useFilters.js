import { useContext } from 'react'
import { FilterContext } from '../context/FilterContext'

export function useFilters() {
  const { filters, setFilters } = useContext(FilterContext)

  const updatedFilterProducts = (products) => {
    return products.filter((product) => {
      return product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
    })
  }

  return {
    filters,
    updatedFilterProducts,
    setFilters
  }
}
