import { useCallback, useMemo, useRef, useState } from "react";
import { postMovies } from "../services/movies";

export function useMovies({ query, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const previewSearch = useRef(query);

  const getMovies = useCallback(async ({ query }) => {
    if (query === previewSearch.current) return;

    try {
      setLoading(true);
      setError(null);

      previewSearch.current = query;

      const newMovies = await postMovies({ query });
      setMovies(newMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const onSortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [movies, sort]);

  return { movies: onSortedMovies, getMovies, loading, error };
}
