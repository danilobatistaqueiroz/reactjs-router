import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import classes from './Product.module.css'
import Loading from './Loading'

function Product() {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

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
    <div style={{}}>
      <div style={{}}>
        <div style={{display:'flex'}}>
          <img src={"/products/"+product.bigImage} className={classes.productImage}></img>
          <div style={{marginLeft:'20px',maxWidth:'300px'}}>
            <h2 style={{margin:'0 10px 0 0'}}>{product.title}</h2>
            <p className={classes.price}>R$ {product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product