import { useState } from 'react'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { useFilters } from './hooks/useFilters'

import { products as MOCK_PRODUCTS } from '../mocks/products.json'
import './App.css'

function App() {
  const [products] = useState(MOCK_PRODUCTS)
  const { updatedFilterProducts } = useFilters()
  const filteredProducts = updatedFilterProducts(products)

  return (
    <>
      <Header />

      <main>
        <Products products={filteredProducts}></Products>
      </main>
    </>
  )
}

export default App
