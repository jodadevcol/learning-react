import { useFilters } from '../../hooks/useFilters.js'
import { LocationIcon, SearchIcon } from '../Icons.jsx'

function JobFilter() {
  const { setFilters } = useFilters()

  const handleSubmit = (event) => {
    event.preventDefault()
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
    <div className="rounded-md bg-white dark:bg-primary-300">
      <form
        onSubmit={handleSubmit}
        className="relative flex h-20 max-h-20 items-center justify-between overflow-hidden">
        <div className="max-w-[500px] flex-auto flex-grow px-8 py-4">
          <div className="flex items-center justify-start gap-x-4">
            <span className="max-w-6 text-primary-100">
              <SearchIcon className="h-full w-full max-w-full" />
            </span>
            <label htmlFor="search-by-propertys" className="w-full">
              <input
                className="w-full appearance-none border-none bg-transparent text-base text-primary-300 caret-primary-100 outline-none placeholder:text-primary-300 dark:text-white dark:placeholder:text-white/50"
                type="text"
                name="search-by-propertys"
                id="search-by-propertys"
                onChange={handleChangePropertys}
                placeholder="Filter by title, companies, expertise..."
              />
            </label>
          </div>
        </div>
        <div className="h-full min-h-max w-[1px] bg-secondary-300/20"></div>
        <div className="w-full max-w-[300px] px-6 py-4">
          <label htmlFor="search-by-location">
            <div className="flex items-center justify-start gap-x-4">
              <span className="max-w-5 text-primary-100">
                <LocationIcon className="h-full w-full max-w-full" />
              </span>
              <input
                className="w-full appearance-none border-none bg-transparent text-base text-primary-300 caret-primary-100 outline-none placeholder:text-primary-300 dark:text-white dark:placeholder:text-white/50"
                type="text"
                name="search-by-location"
                id="search-by-location"
                onChange={handleChangeLocation}
                placeholder="Filter by location..."
              />
            </div>
          </label>
        </div>
        <div className="h-full min-h-max w-[1px] bg-secondary-300/20"></div>
        <div className="flex max-w-[345px] items-center justify-end gap-x-6 px-6 py-4">
          <label
            htmlFor="full-time-only"
            className="ml-4 flex items-center gap-x-4">
            <div className="relative h-6 w-6 overflow-hidden rounded-sm">
              <input
                className="peer/full-time h-full w-full cursor-pointer appearance-none border-none outline-none"
                type="checkbox"
                name="full-time-only"
                onChange={handleChangeFullTimeOnly}
                id="full-time-only"
              />
              <span className="pointer-events-none absolute inset-0 bg-primary-300/10 bg-center bg-no-repeat after:block after:h-full after:w-full after:bg-[url('./assets/icons/check.svg')] after:bg-[length:12px_10px] after:bg-center after:bg-no-repeat after:opacity-0 peer-checked/full-time:bg-primary-100 peer-checked/full-time:after:opacity-100 dark:bg-white/10"></span>
            </div>
            <span className="darktext-white whitespace-nowrap text-base font-bold capitalize text-primary-300 dark:text-white">
              Full time only
            </span>
          </label>

          <button
            type="submit"
            className="w-full max-w-[124px] rounded-md bg-primary-100 px-5 py-3 lg:px-10">
            <span className="text-base font-bold capitalize text-white">
              Search
            </span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default JobFilter
