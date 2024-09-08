import { useFilters } from '../../hooks/useFilters.js'

function JobFilter() {
  const { setFilters } = useFilters()

  const handleSubmit = (event) => {
    event.preventDefault()

    // const newJobsFiltered = filteredJobs(jobs)
    // console.log(newJobsFiltered)
  }

  const handleChangeFullTimeOnly = (event) => {
    const { target } = event

    if (!target) return
    setFilters((prevFilters) => ({
      ...prevFilters,
      fullTimeOnly: target.checked,
    }))
  }

  const handleChangeLocation = (event) => {
    const { target } = event

    if (!target) return
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchByLocation: target.value,
    }))
  }

  const handleChangePropertys = (event) => {
    const { target } = event

    if (!target) return
    setFilters((prevFilters) => ({
      ...prevFilters,
      searchByPropertys: target.value,
    }))
  }

  return (
    <div className="dark:bg-primary-300 bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex min-h-20 items-center justify-between">
        <div>
          <label htmlFor="search-by-propertys">
            <input
              type="text"
              name="search-by-propertys"
              id="search-by-propertys"
              onChange={handleChangePropertys}
              placeholder="Filter by title, companies, expertise..."
            />
          </label>
        </div>
        <div>
          <label htmlFor="search-by-location">
            <input
              type="text"
              name="search-by-location"
              id="search-by-location"
              onChange={handleChangeLocation}
              placeholder="Filter by location..."
            />
          </label>
        </div>
        <div>
          <label htmlFor="full-time-only">
            <input
              type="checkbox"
              name="full-time-only"
              onChange={handleChangeFullTimeOnly}
              id="full-time-only"
            />
            <span>Full time only</span>
          </label>

          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  )
}

export default JobFilter
