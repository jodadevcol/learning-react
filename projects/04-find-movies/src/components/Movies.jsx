import './Movies.css'
import { Poster } from './Poster'

/* eslint-disable react/prop-types */
function SuccessMovies({ movies = [] }) {
  return (
    <ul className='jd-list-movies'>
      {
        movies.map(movie => (
          <li key={movie.id} className='jd-list-movies--item'>
            <article className='jd-movie'>
              <Poster poster={movie.poster} altText={movie.title} />

              <div className='jd-movie--info'>
                <h2>{movie.title}</h2>

                <div className='jd-info--specf'>
                  <span className='jd-info--type'>{movie.type}</span>
                  <span className='jd-info--year'>{movie.year}</span>
                </div>
              </div>
            </article>
          </li>
        ))
      }
    </ul>
  )
}

function WrongMovies() {
  return (
    <>
      <div className='jd-movies--wrong'>
        <p>No hay peliculas a renderizar.</p>
      </div>
    </>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    <section className='jd-section'>
      <article className='jd-movies'>
        {
          hasMovies
            ? <SuccessMovies movies={movies} />
            : <WrongMovies />
        }
      </article>
    </section>
  )
}