import { useEffect, useState } from "react"
import { CAT_PREFIX_IMAGE, CAT_RANDOM_IMAGE, CAT_RANDOM_WORD } from "../const/const"

import "./Cat.css"

export const Cat = () => {
  const [phrase, setPhrase] = useState('No word')
  const [cat, setCat] = useState({ id: null, url: '' })

  useEffect(() => {
    async function getRandomFact() {
      const respon = await fetch(CAT_RANDOM_WORD)
      const dataJSON = await respon.json()
      const { fact } = dataJSON

      setPhrase(fact)

      const threeFirstWords = fact.split(' ', 3).join(' ')

      fetch(`${CAT_RANDOM_IMAGE}${threeFirstWords}?size=50&color=red&json=true`)
        .then(respon => respon.json())
        .then(data => {
          const { _id, url } = data
          const newCat = {
            id: _id,
            url: url
          }

          setCat(newCat)
        })
    }

    getRandomFact()
  }, [])

  return (
    <article className="jd-cat" data-cat={cat.id}>
      <header className="jd-cat--head">
        <p>{phrase}</p>
      </header>

      <picture className="jd-cat--picture">
        <img src={`${CAT_PREFIX_IMAGE}${cat.url}`} alt={`Image extracted using the firts three words for ${phrase}`} />
      </picture>
    </article>
  )
}