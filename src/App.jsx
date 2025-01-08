import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Produtos from './components/Products'
import Produto from './components/Product'
import Contato from './components/Contact'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Produtos/>} end/>
        <Route path="/products" element={<Produtos/>}/>
        <Route path="/product/:id" element={<Produto/>}/>
        <Route exact path="/contact" element={<Contato/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
