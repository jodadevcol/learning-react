import { useEffect } from "react"
import { useRef } from "react"
import { useState } from "react"

export function useSearchMovies () {
  const [search, setUpdateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstTime = useRef(true)

  useEffect(() => {
    if (isFirstTime.current) {
      isFirstTime.current = search === ''
      return
    }

    if (search === '') {
      setError('Please enter a movie name, serie or title')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('Contains numbers of movie name, serie or title')
      return
    }

    if (search.length < 3) {
      setError('The search must contain at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return {
    search,
    setUpdateSearch,
    error
  }
}