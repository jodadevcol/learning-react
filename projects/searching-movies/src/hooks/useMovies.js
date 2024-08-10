import { useState } from 'react'
import { GETMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const getMovies = async () => {
    try {
      setLoading(true)

      const newMovies = await GETMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      console.error(error)
      throw new Error("Error fetching movies");
    } finally {
      setLoading(false)
    }
  }

  return {
    movies,
    loading,
    getMovies
  }
}