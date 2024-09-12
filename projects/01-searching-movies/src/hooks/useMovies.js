import { useMemo } from 'react'
import { GETMovies } from '../services/movies'
import { useRef, useCallback, useState } from 'react'

export function useMovies ({ search, sorted }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const previusSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previusSearch.current) return

    try {
      setLoading(true)
      previusSearch.current = search


      const newMovies = await GETMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      console.error(error)
      throw new Error("Error fetching movies");
    } finally {
      setLoading(false)
    }

  }, [])

  const setSortedMovies = useMemo(() => {
    return sorted
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sorted, movies])


  return {
    movies: setSortedMovies,
    loading,
    getMovies
  }
}