import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/phrase'

export function useCatPhrase () {
  const [phrase, setPhrase] = useState()

  const refreshPhrase = () => {
    getRandomFact().then((newFact) => setPhrase(newFact))
  }

  useEffect(refreshPhrase, [])

  return { phrase, refreshPhrase }
}
