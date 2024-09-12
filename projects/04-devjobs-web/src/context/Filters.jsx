import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

const FiltersContext = createContext()

const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    searchByPropertys: '',
    searchByLocation: '',
    fullTimeOnly: false,
  })

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  )
}

FiltersProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export { FiltersContext, FiltersProvider }
