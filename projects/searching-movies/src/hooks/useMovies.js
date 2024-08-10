import { useState } from 'react'
import { GETMovies } from '../services/movies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const newMovies = await GETMovies({ search })
    setMovies(newMovies)
  }

  return {
    movies,
    getMovies
  }
}