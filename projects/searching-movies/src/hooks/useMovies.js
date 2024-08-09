import moviesResult from '../mockups/moviesResult.json'

export function useMovies () {
  const isMovies = moviesResult.Search

  const movies = isMovies.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    type: movie.Type,
    poster: movie.Poster
  }))

  return {
    movies
  }
}