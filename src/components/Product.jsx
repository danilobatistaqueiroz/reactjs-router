import classes from './Product.module.css'
import header from './Header.module.css'
import { NavLink, useParams } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import Footer from './Footer'

function Product() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);

  React.useEffect(()=>{
    async function getProducts(){
      try{
        const r = await axios.get(`http://localhost:8000/products/${id}`)
        setProduct(r?.data)
      } catch (e) {
        error_msg = "ocorreu um incoveniente ao listar os produtos"
        console.error(e)
      }
    }
    getProducts();
  },[])

  let error_msg = ""
  return (
    <div style={{marginLeft:'20px',marginTop:'30px'}}>
      <NavLink className={header.linkButton+' '+header.hButton} to="/" end>Produtos</NavLink>
      <NavLink className={header.linkButton+' '+header.hButton} to="/contact">Contato</NavLink>
      <div style={{paddingTop:'10px'}}>
          {product && 
            <div style={{padding:'10px',display:'flex'}}>
              <img src={"/products/"+product.bigImage} className={classes.product}></img>
              <div style={{marginLeft:'20px',maxWidth:'300px'}}>
                <h2 style={{margin:'0 10px 0 0'}}>{product.title}</h2>
                <p className={classes.price}>R$ {product.price}</p>
                <p>{product.description}</p>
              </div>
            </div>
          }
          {
            error_msg && <p style="color:red">{error_msg}</p>
          }
      </div>
      <Footer/>
    </div>
  )
}

export default Product