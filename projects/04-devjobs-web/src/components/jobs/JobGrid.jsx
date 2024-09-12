import PropTypes from 'prop-types'
import { useState } from 'react'
import { jobs as DATA } from '../../mockup/dev-jobs.json'

import { useFilters } from '../../hooks/useFilters'
import JobCard from './JobCard'

function JobGridNotResults({ param }) {
  return (
    <div className="dark:bg-primary-300 col-span-3 flex flex-col items-center justify-center rounded-md bg-white px-7 py-8">
      <p className="dark:text-primary-100 text-2xl font-bold text-gray-700">
        No results found in{' '}
        <span className="font-bold">
          <em>{param.searchByPropertys || param.searchByLocation}</em>
        </span>
      </p>
      <p className="text-lg text-gray-500 dark:text-white">
        Try searching for jobs by typing the job title, company name, or
        location.
      </p>
    </div>
  )
}

JobGridNotResults.propTypes = {
  param: PropTypes.object.isRequired || PropTypes.string.isRequired,
}

function JobGridWithResult({ jobs = [] }) {
  return (
    <ul className="grid grid-cols-3 gap-x-8 gap-y-10">
      {jobs?.map((job) => {
        const {
          id,
          logo,
          company,
          postedAt,
          contract,
          position,
          location,
          logoBackground,
        } = job

        return (
          <li key={id} className="relative pt-6">
            <JobCard
              id={id}
              logo={logo}
              company={company}
              postedAt={postedAt}
              contract={contract}
              position={position}
              location={location}
              logoBackground={logoBackground}
            />
          </li>
        )
      })}
    </ul>
  )
}

JobGridWithResult.propTypes = {
  jobs: PropTypes.array.isRequired,
}

function JobGrid() {
  const [jobs] = useState(DATA)
  const { filters, updateJobsByFilters } = useFilters()
  const filteredJobs = updateJobsByFilters(jobs)

  return (
    <>
      {filteredJobs.length > 0 ? (
        <JobGridWithResult jobs={filteredJobs} />
      ) : (
        <JobGridNotResults param={filters} />
      )}
    </>
  )
}

export default JobGrid
