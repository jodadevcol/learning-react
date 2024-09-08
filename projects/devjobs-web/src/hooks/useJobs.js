import { useCallback, useState } from 'react'
import { GETAllJobs } from '../services/jobs'

export function useJobs() {
  const [jobs, setJobs] = useState([])

  const getJobs = useCallback(async () => {
    const newJobs = await GETAllJobs()

    setJobs(newJobs)
  }, [])

  return {
    jobs,
    getJobs,
    setJobs,
  }
}
