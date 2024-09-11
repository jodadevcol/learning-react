import { useCallback, useState } from 'react'
import { GETAllJobs, GETJobById } from '../services/jobs'

export function useJobs() {
  const [jobs, setJobs] = useState([])

  const getJobs = useCallback(async () => {
    const newJobs = await GETAllJobs()

    setJobs(newJobs)
  }, [])

  const getJobById = useCallback(async ({ id }) => {
    return await GETJobById({ id })
  }, [])

  return {
    jobs,
    setJobs,
    getJobs,
    getJobById,
  }
}
