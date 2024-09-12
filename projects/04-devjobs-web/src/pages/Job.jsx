import { useEffect, useState } from 'react'
import { useParams } from 'wouter'
import JobDetail from '../components/jobs/JobDetails'
import { useJobs } from '../hooks/useJobs'
import MainLayout from '../layout/MainLayout'

function Job() {
  const { jobId } = useParams()
  const { getJobById } = useJobs()
  const [jobDetail, setJobDetail] = useState()

  useEffect(() => {
    const fetchJob = async () => {
      const job = await getJobById({ id: jobId })
      setJobDetail(job)
    }

    fetchJob()
  }, [getJobById, jobId])

  return (
    <MainLayout>
      <section className="relative -mt-10">
        {jobDetail && <JobDetail job={jobDetail} />}
      </section>
    </MainLayout>
  )
}

export default Job
