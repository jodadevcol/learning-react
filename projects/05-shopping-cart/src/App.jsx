import { useState } from 'react'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'

import { useFilters } from './hooks/useFilters'

import { IS_DEVELOPMENT } from './config'
import { products as InitialProducts } from './mockus/products.json'

import './App.css'
import { Cart } from './components/Cart'

function App () {
  const [products] = useState(InitialProducts)
  const { filters, setFilters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header onChange={setFilters} />

      <Cart />

      <main id='content'>
        <Products products={filteredProducts} />
      </main>

      {
        IS_DEVELOPMENT && <Footer filters={filters} />
      }
    </>
  )
}

export default App
