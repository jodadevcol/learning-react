import { createContext, useState } from 'react'
import { FILTER_CATEGORY } from '../const/global'

// 1. Crear el conexto
export const FiltersContext = createContext()

// 2. Crear el provider, para proveer el contexto
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: FILTER_CATEGORY.ALL,
    minPrice: 0
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
