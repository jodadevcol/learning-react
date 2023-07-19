const postMovies = async ({ query }) => {
  if (query === "") return;

  try {
    const respon = await fetch(
      `https://www.omdbapi.com/?apikey=b21c98f1&type=movie&s=${query}`
    );
    const jsonData = await respon.json();

    const movies = jsonData.Search;

    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      type: movie.Type,
      poster: movie.Poster === "N/A" ? null : movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error searching movies");
  }
};

export { postMovies };
