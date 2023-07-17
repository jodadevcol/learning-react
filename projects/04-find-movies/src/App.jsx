import './App.css'

import responMovies from './mocks/result-movies.json'
// import responNoMovies from './mocks/result-no-movies.json'

function App() {
  const movies = responMovies.Search
  const hasMovies = movies?.length > 0

  return (
    <>
      <header className='jd-head'>
        <h1 className='jd-head--title'>Movies</h1>

        <form className='jd-head--form'>
          <label htmlFor='search-movie'>
            {/* <span>Name movie</span> */}
            <input type='text' id='search-movie' placeholder='Iron man, Matrix,Star Wars... ' />
          </label>

          <button type='submit'><span>Find</span></button>
        </form>
      </header>

      <main>
        <section>
          {
            hasMovies
              ? (
                <ul>
                  {
                    movies.map(movie => (
                      <li key={movie.imdbID}>
                        <article>
                          <picture>
                            <img src={movie.Poster} alt={`Movie poster of ${movie.Title}`} />
                          </picture>

                          <div>
                            <h2>{movie.Title}</h2>

                            <div>
                              <span>{movie.Type}</span>
                              <span>{movie.Year}</span>
                            </div>
                          </div>
                        </article>
                      </li>
                    ))
                  }
                </ul>
              )
              : (
                <p>There aren´t movies</p>
              )
          }
        </section>
      </main>
    </>
  )
}

export default App
