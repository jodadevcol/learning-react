import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearchMovies } from './hooks/useSearchMovies'
import './App.css'
import { Loading } from './components/Loading'
import { useState } from 'react'

function App () {
  const [sorted, setSorted] = useState(false)
  const { search, setUpdateSearch, error } = useSearchMovies()
  const { movies, loading, getMovies } = useMovies({ search, sorted })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleChange = (event) => {
    setUpdateSearch(event.target.value)
  }

  const handleSorted = () => {
    setSorted(!sorted)
  }

  return (
    <main>
      <header>
        <h1 className='mt-3 mb-5'>Searching Movies</h1>

        <form className='flex flex-wrap gap-x-5 gap-y-2 items-center justify-center w-full max-w-96'
          onSubmit={handleSubmit}>
          <div className='flex-grow flex items-center justify-start h-8' >
            <label className='mr-2' htmlFor="input-movies">
              <span>Search</span>
            </label>

            <input
              onChange={handleChange}
              className={`w-full h-full px-2 py-1 mr-2 truncate ${error ? 'border-red-500' : 'border-gray-300'} border rounded`}
              name="input-movies"
              id='input-movies'
              type="text"
              placeholder='Avengers, Matrix, Increibles, Start Wars'
            />
          </div>

          <div className='flex items-center justify-start h-8' >
            <label className='mr-2' htmlFor="input-order">
              <span>Order by title</span>
            </label>

            <input
              name="input-order"
              id='input-order'
              type="checkbox"
              onChange={handleSorted}
              checked={sorted}
            />
          </div>

          <button className='px-4 py-1'>Search</button>
          {
            error && <div className='text-red-500 text-xs font-semibold'>{error}</div>
          }
        </form>
      </header>

      <section className='w-full'>
        {
          loading
            ? <Loading />
            : <Movies movies={movies} />
        }
      </section>
    </main>
  )
}

export default App
