import './App.css'
import { Products } from './components/Products'
import { products as MOCK_PRODUCTS } from '../mocks/products.json'
import { Header } from './components/Header'
import { useState } from 'react'

function App() {
  const [products] = useState(MOCK_PRODUCTS)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const updatedFilterProducts = (products) => {
    return products.filter((product) => {
      return product.price >= filters.minPrice && (filters.category === 'all' || product.category === filters.category)
    })
  }

  const filteredProducts = updatedFilterProducts(products)

  console.log(filteredProducts)

  return (
    <>
      <Header></Header>

      <main>
        <Products products={filteredProducts}></Products>
      </main>
    </>
  )
}

export default App
