import { Route } from 'wouter'
import './App.css'
import Header from './components/Header'
import Index from './pages/Index'
import Job from './pages/Job'

function App() {
  return (
    <div className="max-w-full overflow-x-hidden">
      <Header />

      <Route path="/" component={Index} />
      <Route path="/job/:jobId" component={Job} />
    </div>
  )
}

export default App
