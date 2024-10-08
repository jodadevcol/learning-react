import { LoadingPicture } from './LoadingPicture'

/* eslint-disable react/prop-types */
function MoviesFound({ movies }) {
  return (
    <ul className='grid gap-x-5 gap-y-6' style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
      {movies.map((movie) => (
        <li key={movie.id} className=''>
          <article className='flex flex-col-reverse gap-3'>
            <header className='text-center'>
              <h2 className='text-sm font-semibold truncate'>{movie.title}</h2>

              <span className='mt-2 text-white/50'>{movie.year}</span>
            </header>

            <LoadingPicture pathImage={movie.poster} altImage={movie.title}></LoadingPicture>
          </article>
        </li>
      ))}
    </ul>
  )
}

function NoMoviesFound() {
  return (
    <div className='flex items-center justify-center'>
      <p className='font-semibold'>No movies to show you</p>
    </div>
  )
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return hasMovies ? <MoviesFound movies={movies} /> : <NoMoviesFound />
}
