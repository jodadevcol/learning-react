import { useParams } from 'wouter'
import MainLayout from '../assets/layout/MainLayout'

function Job() {
  const params = useParams()
  const { jobId } = params

  return (
    <MainLayout>
      <h1 className="text-white">Job: {jobId}</h1>
    </MainLayout>
  )
}

export default Job
