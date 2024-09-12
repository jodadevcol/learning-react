/* eslint-disable react/prop-types */

import { AddToCartIcon } from './Icon'

export function Products({ products }) {
  return (
    <section className='py-6'>
      <article>
        {/* style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }} */}
        <ul className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
          {products.map((product) => {
            return (
              <li key={product.id} className='w-full max-w-full'>
                <article className='group relative flex flex-col gap-y-3 justify-between bg-white rounded-md overflow-hidden p-4 h-full'>
                  <div>
                    <div className='flex items-center justify-center  w-fulllg:aspect-none group-hover:opacity-75 lg:h-80'>
                      <picture className='block h-fit max-h-full'>
                        <img className='h-full w-full lg:max-h-80 object-container object-center lg:h-full lg:w-full' src={product.image} alt={product.description} />
                      </picture>
                    </div>

                    <header className='mt-4 flex flex-col items-start text-left justify-between w-full max-w-full'>
                      <div className='text-sm font-bold text-gray-700'>
                        {/* <span aria-hidden='true' className='absolute inset-0' /> */}
                        <span>{product.title}</span>
                      </div>

                      <div>
                        <span className='mt-1 text-sm text-gray-500'>{product.price}</span>
                      </div>

                      <div className='w-full max-w-full'>
                        <p className='text-sm font-medium truncate text-gray-900'>{product.description}</p>
                      </div>
                    </header>
                  </div>

                  <button className='flex items-center justify-center bg-gray-400/20 py-2 px-8 w-full rounded-md cursor-pointer transition-colors hover:bg-gray-400 text-gray-600 hover:text-white/80'>
                    <AddToCartIcon></AddToCartIcon>
                    <span className='ml-2 font-medium text-sm '>Add to bag</span>
                  </button>
                </article>
              </li>
            )
          })}
        </ul>
      </article>
    </section>
  )
}
