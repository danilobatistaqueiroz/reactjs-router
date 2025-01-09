import React from 'react'
import axios from 'axios'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import classes from './Product.module.css'
import header from './Header.module.css'
import Footer from './Footer'
import Loading from './Loading'

function Product() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  React.useEffect(()=>{
    async function getProducts(){
      try{
        setLoading(true)
        const r = await axios.get(`http://localhost:8000/products/${id}`)
        setProduct(r?.data)
      } catch (e) {
        setError("ocorreu um incoveniente ao listar os produtos")
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    getProducts()
  },[id])

  if(loading) return <Loading/>
  if(error) return <p style="color:red">{error}</p>
  if(product === null) return null

  return (
    <div style={{marginLeft:'20px',marginTop:'30px'}}>
      <NavLink className={header.linkButton+' '+header.hButton} onClick={() => navigate(-1)}>Voltar</NavLink>
      <NavLink className={header.linkButton+' '+header.hButton} to="/" end>Produtos</NavLink>
      <NavLink className={header.linkButton+' '+header.hButton} to="/contact">Contato</NavLink>
      <div style={{paddingTop:'10px'}}>
        <div style={{padding:'10px',display:'flex'}}>
          <img src={"/products/"+product.bigImage} className={classes.product}></img>
          <div style={{marginLeft:'20px',maxWidth:'300px'}}>
            <h2 style={{margin:'0 10px 0 0'}}>{product.title}</h2>
            <p className={classes.price}>R$ {product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Product