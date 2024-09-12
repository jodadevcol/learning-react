import JobsDate from '../mockup/dev-jobs.json'
// import NotJobsDate from '../mockup/not-dev-jobs.json'

const GETAllJobs = async () => {
  const { jobs = [] } = JobsDate

  if (!jobs) {
    throw new Error('Error fetching jobs')
  }

  return jobs.map((job) => {
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

    return {
      id,
      logo,
      company,
      postedAt,
      contract,
      position,
      location,
      logoBackground,
    }
  })
}

const GETJobById = async ({ id }) => {
  const { jobs = [] } = JobsDate

  if (!jobs) {
    throw new Error('Error fetching jobs')
  }

  return jobs.find((job) => job.id === Number(id))
}

export { GETAllJobs, GETJobById }
