import Jobs from '../components/jobs/Jobs'
import { FiltersProvider } from '../context/Filters'
import MainLayout from '../layout/MainLayout'

function Index() {
  return (
    <MainLayout>
      <FiltersProvider>
        <Jobs />
      </FiltersProvider>
    </MainLayout>
  )
}

export default Index
