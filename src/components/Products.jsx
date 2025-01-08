import React from 'react'
import axios from 'axios'
import classes from './Produtos.module.css'
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = React.useState(null);
  let error_msg = ""
  const navigate = useNavigate();

  React.useEffect(()=>{
    async function getProducts(){
      try{
        const r = await axios.get('http://localhost:8000/products')
        setProducts(r?.data)
      } catch (e) {
        error_msg = "ocorreu um incoveniente ao listar os produtos"
        console.error(e)
      }
    }
    getProducts();
  },[])

  if (!products) return null;

  return (
    <div style={{marginLeft:'20px'}}>
      <button className={classes.linkButton} onClick={() => navigate(-1)}>Voltar</button>
      <button className={classes.linkButton} onClick={() => navigate("/contact")}>Contato</button>
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {
        products.map((p) => (
          <div key={p.id} className={classes.items}>
            <img style={{}} src={"/products/"+p.image} className={classes.product} onClick={()=> navigate(`/product/${p.id}`)}></img>
            <h2 style={{paddingTop:0,marginTop:0}}>{p.title}</h2>
          </div>
        ))
      }
      {
        error_msg && <p style="color:red">{error_msg}</p>
      }
      </div>
    </div>
  )
}

export default Products