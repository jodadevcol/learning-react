import { useState } from 'react'
import { jobs as DATA } from '../../mockup/dev-jobs.json'

import { useFilters } from '../../hooks/useFilters'
import JobCard from './JobCard'
import JobFilter from './JobFilter'

function Jobs() {
  // const { jobs, getJobs } = useJobs()
  const [jobs] = useState(DATA)
  const { updateJobsByFilters } = useFilters()
  const filteredJobs = updateJobsByFilters(jobs)

  return (
    <section>
      <article className="-translate-y-10 pb-20">
        <header className="mb-20">
          <JobFilter />
        </header>

        <ul className="grid grid-cols-3 gap-x-8 gap-y-10">
          {filteredJobs &&
            filteredJobs?.map((job) => {
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
      </article>
    </section>
  )
}

export default Jobs
