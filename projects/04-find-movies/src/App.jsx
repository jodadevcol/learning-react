import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useQuery } from './hooks/useQuery'

import './App.css'
import { Loading } from './components/Loading'

function App () {
  const [sort, setSort] = useState(false)
  const { query, setQuery, error } = useQuery()
  const { movies, getMovies, loading } = useMovies({ query, sort })

  const debounceGetMovies = useCallback(
    debounce(query => {
      getMovies({ query })
    }, 500)
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
          <label className='jd-form--label label-text' htmlFor='searchMovie'>
            <input className={`jd-form--input ${error ? 'error-input' : ''}`} type='text' name='searchMovie' id='searchMovie' placeholder='Iron man, Matrix,Star Wars... ' value={query} onChange={handleChange} />

            <div className={`jd-form--error ${error ? 'error-input' : ''}`}>
              {
                error && <p>{error}</p>
              }
            </div>
          </label>

          <button className='jd-form--btn btn-submit' type='submit'><span>Find</span></button>

          <div className='jd-form--box'>
            <label className='jd-form--label label-checkbox' htmlFor='sorted'>
              <span>Sort by <strong>title</strong></span>
              <input type='checkbox' name='sorted' id='sorted' checked={sort} onChange={handleSorted} />
            </label>
          </div>
        </form>
      </header>

      <main>
        {
          loading
            ? <Loading />
            : <Movies movies={movies} />
        }
      </main>
    </>
  )
}

export default App
