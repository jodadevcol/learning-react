import { useParams } from 'wouter'
import MainLayout from '../assets/layout/MainLayout'
import JobDetail from '../components/jobs/JobDetails'

function Job() {
  const params = useParams()
  const { jobId } = params

  return (
    <MainLayout>
      <h1 className="text-white">Job: {jobId}</h1>

      <JobDetail jobId={jobId} />
    </MainLayout>
  )
}

export default Job
