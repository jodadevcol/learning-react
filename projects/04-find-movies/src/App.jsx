import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it';

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'

import './App.css'

function App() {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies } = useMovies({ query, sort })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
    }, 300)
    , [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ query })

    // FORMULARIOS NO CONTROLADOS (NO CONTROLADOS POR REACT)
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // const { searchMovie } = fields

    // console.log(searchMovie);
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return

    setQuery(newQuery)
    debounceGetMovies(newQuery)
  }

  const handleSorted = () => { setSort(!sort) }

  return (
    <>
      <header className='jd-head'>
        <h1 className='jd-head--title'>Movies</h1>

        <form className='jd-head--form' onSubmit={handleSubmit}>
          <label htmlFor='searchMovie'>
            {/* <span>Name movie</span> */}
            <input type='text' name='searchMovie' id='searchMovie' placeholder='Iron man, Matrix,Star Wars... ' value={query} onChange={handleChange} />
          </label>

          <label htmlFor='sorted'>
            {/* <span>Name movie</span> */}
            <input type='checkbox' name='sorted' id='sorted' checked={sort} onChange={handleSorted} />
          </label>

          <button type='submit'><span>Find</span></button>

          {
            error && <p>{error}</p>
          }
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </>
  )
}

export default App
