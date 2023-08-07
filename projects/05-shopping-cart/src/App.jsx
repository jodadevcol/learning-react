import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { Cart } from './components/Cart'

import { useFilters } from './hooks/useFilters'

import { IS_DEVELOPMENT } from './config'
import { products as InitialProducts } from './mockus/products.json'

import './App.css'
import { CartProvider } from './context/cart'

function App () {
  const [products] = useState(InitialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <CartProvider>
        <Header />

        <Cart />

        <main id='content'>
          <Products products={filteredProducts} />
        </main>

        {
          IS_DEVELOPMENT && <Footer />
        }
      </CartProvider>
    </>
  )
}

export default App
