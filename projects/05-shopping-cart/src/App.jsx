import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'

import { useFilters } from './hooks/useFilters'

import { IS_DEVELOPMENT } from './config'
import { products as InitialProducts } from './mockus/products.json'

import './App.css'
import { CartProvider } from './context/cart'
import { Filters } from './components/Filters'

function App () {
  const [products] = useState(InitialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <CartProvider>
        <Header />

        <main id='content'>
          <div className='max-w-[90vw] mx-auto mt-16'>
            <Filters />
            <Products products={filteredProducts} />
          </div>
        </main>

        {
          IS_DEVELOPMENT && <Footer />
        }
      </CartProvider>
    </>
  )
}

export default App
