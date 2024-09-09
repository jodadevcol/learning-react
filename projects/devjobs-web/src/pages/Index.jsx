import MainLayout from '../assets/layout/MainLayout'
import Jobs from '../components/jobs/Jobs'
import { FiltersProvider } from '../context/Filters'

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
