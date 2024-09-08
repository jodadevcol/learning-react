import './App.css'
import Header from './components/Header'
import Jobs from './components/jobs/Jobs'
import { FiltersProvider } from './context/Filters'

function App() {
  return (
    <div className="max-w-full">
      <Header />

      <main>
        <div className="container-layout">
          <FiltersProvider>
            <Jobs />
          </FiltersProvider>
        </div>
      </main>
    </div>
  )
}

export default App
