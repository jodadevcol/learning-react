export function GETMovies ({ search }) {
  if (search === '') return

  return fetch(`https://www.omdbapi.com/?s=${search}&plot=full&apikey=8779ec10`)
    .then(response => response.json())
    .then(json => {
      const dataMovies = json.Search

      return dataMovies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster
      }))
    })
    .catch(error => {
      console.error('Error:', error) // -> local testing
      throw new Error('Error in the request')
    })
}