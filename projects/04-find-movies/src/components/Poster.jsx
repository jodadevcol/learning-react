/* eslint-disable react/prop-types */
export function Poster({ poster = null, altText = '' }) {
  return (
    poster
      ?
      <picture className='jd-movie--poster poster-picture'>
        <img src={poster} alt={`Movie poster of ${altText}`} />
      </picture>
      :
      <div className='jd-movie--poster poster-box'>
        <span>Sin poster disponible</span>
      </div>
  )
}