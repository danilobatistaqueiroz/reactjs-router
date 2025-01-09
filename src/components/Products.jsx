import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import classes from './Products.module.css'
import Loading from './Loading'

const Products = () => {

  const [products, setProducts] = React.useState(null);
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const navigate = useNavigate();

  React.useEffect(()=>{
    async function getProducts(){
      try{
        setLoading(true)
        const r = await axios.get('http://localhost:8000/products')
        setProducts(r?.data)
      } catch (e) {
        setError("ocorreu um incoveniente ao listar os produtos")
        console.error(e)
      } finally {
          setLoading(false)
      }
    }
    getProducts();
  },[])

  if(loading) return <Loading/>
  if(error) return <p style="color:red">{error}</p>
  if(products === null) return null

  return (
    <div>
      <div className={classes.products}>
      {
        products.map((p) => (
          <div key={p.id} className={classes.product}>
            <img src={"/products/"+p.image} className={classes.productImage} onClick={()=> navigate(`/product/${p.id}`)}></img>
            <h2 className={classes.productTitle}>{p.title}</h2>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Products