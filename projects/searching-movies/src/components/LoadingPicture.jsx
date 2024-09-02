import { useState } from 'react'

// function SourceImage({src, alt}) {
//   return (
//     src === 'N/A' || src === '' ? (
//       <img className='h-full object-contain mx-auto' src='/placeholder-poster.webp' alt={alt} loading="lazy" />
//     ) : (
//       <img className='h-full object-contain mx-auto' src={src} alt={alt} loading="lazy" />
//     )
//   )
// }

// function LoadingSkeleton() {
//   return (
//     <div
//       className='absolute inset-0 flex items-center justify-center w-full max-w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-600
//     space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse
//     '
//     >
//       <svg className='w-10 h-10 text-gray-200 dark:text-gray-600' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 18'>
//         <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
//       </svg>
//     </div>
//   )
// }

// eslint-disable-next-line react/prop-types
export function LoadingPicture({ pathImage, altImage }) {
  const [isLoading, setIsLoading] = useState(true)
  const handleLoad = (event) => {
    const { target } = event

    if (!target) return

    setIsLoading(false)
    setTimeout(() => {
      target.classList.remove('opacity-0')
    }, 100)
  }

  return (
    <picture className='relative md:h-64 overflow-hidden'>
      {isLoading && (
        <div
          className='absolute inset-0 flex items-center justify-center w-full max-w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-600
    space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse 
    '
        >
          <svg className='w-full max-h-12 text-white/40' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 20 18'>
            <path d='M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z' />
          </svg>
        </div>
      )}

      <img
        className={`h-full object-contain mx-auto opacity-0 transition-opacity ${isLoading ? 'hidden' : ''}`}
        src={pathImage === 'N/A' || pathImage === '' ? '/placeholder-poster.webp' : pathImage}
        alt={altImage}
        onLoad={handleLoad}
      />
    </picture>
  )
}
