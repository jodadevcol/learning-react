import { useCallback, useContext } from 'react'
import { FiltersContext } from '../context/Filters'

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const updateJobsByFilters = useCallback(
    (jobs) => {
      return jobs.filter((job) => {
        return (
          (job.company
            .toLowerCase()
            .includes(filters.searchByPropertys.toLowerCase()) ||
            job.position
              .toLowerCase()
              .includes(filters.searchByPropertys.toLowerCase())) &&
          job.location
            .toLowerCase()
            .includes(filters.searchByLocation.toLowerCase()) &&
          (filters.fullTimeOnly ? job.contract === 'Full Time' : true)
        )
      })
    },
    [filters]
  )

  return { filters, setFilters, updateJobsByFilters }
}
