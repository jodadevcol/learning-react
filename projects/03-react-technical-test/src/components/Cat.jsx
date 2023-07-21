import { useCat } from '../hooks/useCat'
import { useCatPhrase } from '../hooks/useCatPhrase'

import './Cat.css'

export const Cat = () => {
  const { phrase, refreshPhrase } = useCatPhrase()
  const { id, url } = useCat({ phrase })

  const handleClick = () => {
    refreshPhrase()
  }

  return (
    <article className='jd-cat' data-cat={id}>
      <header className='jd-cat--head'>
        <p>{phrase}</p>
      </header>

      <picture className='jd-cat--picture'>
        <img src={url} alt={`Image extracted using the firts three words for ${phrase}`} />
      </picture>

      <div className='jd-cat--actions'>
        <button className='btn-actions--new' onClick={handleClick}>New phrase cat</button>
      </div>
    </article>
  )
}
