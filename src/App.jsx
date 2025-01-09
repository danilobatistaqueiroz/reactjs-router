import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import Product from './components/Product'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>} end/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route exact path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
