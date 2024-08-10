import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearchMovies } from './hooks/useSearchMovies'
import './App.css'



function App () {
  const { search, setUpdateSearch, error } = useSearchMovies()
  const { movies, getMovies } = useMovies({ search })

  const hanldeSubmit = (event) => {
    event.preventDefault()

    getMovies()
  }

  const hanldeChange = (event) => {
    setUpdateSearch(event.target.value)
  }

  return (
    <main>
      <header>
        <h1 className='mt-3 mb-5'>Searching Movies</h1>

        <form className='flex flex-wrap gap-x-5 gap-y-2 items-center justify-center w-full max-w-96'
          onSubmit={hanldeSubmit}>
          <div className='flex-grow flex items-center justify-start h-8' >
            <label className='mr-2' htmlFor="input-movies">
              <span>Search</span>
            </label>

            <input
              onChange={hanldeChange}
              className={`w-full h-full px-2 py-1 truncate ${error ? 'border-red-500' : 'border-gray-300'} border rounded`}
              name="input-movies"
              id='input-movies'
              type="text"
              placeholder='Avengers, Matrix, Increibles, Start Wars'
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
          <Movies movies={movies} />
        }
      </section>
    </main>
  )
}

export default App
