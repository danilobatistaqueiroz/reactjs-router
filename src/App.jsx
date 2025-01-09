import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Products from './components/Products'
import Product from './components/Product'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Products/>} end/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/product/:id" element={<Product/>}/>
            <Route exact path="/contact" element={<Contact/>} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
